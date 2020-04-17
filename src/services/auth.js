import {auth, checkToken, register, search} from './user';

export const isAuth = () => {
    return checkToken(sessionStorage.getItem('authtoken'));
};

export const login = (user, passwd) => {
    const token = auth(user, passwd);
    sessionStorage.setItem('authtoken', token);
}

export const registerUser = (user) => {
    if(search(user)){
        return "User already exists";
    }else{
        register(user);
        return "";
    }
}