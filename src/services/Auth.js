import AxiosService from "./Api";

const Login = (values) => {
    const url = values ? `/auth/local` : null
    return AxiosService.Post(url, values, [])
}

const Logout = () => {
    localStorage.removeItem('slido-clone_auth');
    window.location.reload();
}

const GetToken = () => {
    const item = JSON.parse(localStorage.getItem('slido-clone_auth'))
    if (item) {
        return item.jwt;
    }
    return null;
}

const AuthService = {
    Login,
    Logout,
    GetToken
}

export default AuthService