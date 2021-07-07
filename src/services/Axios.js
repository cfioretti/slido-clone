import axios from 'axios';
import AuthService from "./Auth";
import {history} from "../router/Router";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

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
        console.log('interceptors response')
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

export default axios;
