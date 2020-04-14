import {auth, checkToken} from './user';

export const isAuth = () => {
    return checkToken(sessionStorage.getItem('authtoken'));
};

export const login = (user, passwd) => {
    const token = auth(user, passwd);
    sessionStorage.setItem('authtoken', token);
}