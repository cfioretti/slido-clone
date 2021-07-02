import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthService from "./services/Auth";
import {history} from "./router/Router";

axios.interceptors.request.use(request => {
    const token = AuthService.GetToken()
    if(token){
        request.headers['Authorization'] = `Bearer ${token}`
    }
    return request
})

axios.interceptors.response.use(
    response => response,
    error => {

        const {status} = error.response
        switch (status){
            case 404:
                history.push('/NotFound')
                break
            case 500:
                console.error('Server error - ', error)
                break
            default:
                console.error('Error - ', error)
        }
    })

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
