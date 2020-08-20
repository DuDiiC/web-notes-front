import axios from 'axios';
import { APP_URL } from '../constants';

class AuthService {
    login(username, password) {
        return (
            axios
                .post(APP_URL + 'login', {
                    username,
                    password
                })
                .then(response => {
                    if(response.headers['authorization']) {
                        localStorage.setItem('token', response.headers['authorization'])
                        localStorage.setItem('login', username);
                    }
                    return response.headers;
                })
        )
    }

    register(email, username, password) {
        return (
            axios
                .post(APP_URL + 'register', {
                    username,
                    email,
                    password
                })
        )
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('login');
    }

    getToken() {
        return localStorage.getItem('token');
    }
}

export default new AuthService();