import axios from 'axios';

const APP_URL = 'https://web-notes-server.herokuapp.com/';
// const APP_URL = 'http://localhost:8080/';

class AuthService {
    login(username, password) {
        console.log(APP_URL + 'login');
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
}

export default new AuthService();