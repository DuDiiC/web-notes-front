import axios from 'axios';
import authHeader from './authHeader';

const API_URL = 'https://web-notes-server.herokuapp.com/api/';
// const API_URL = 'http://localhost:8080/api/';

class UserService {

    getCurrentUser = async () => {
        let config = {
            headers: {
                Authorization: authHeader()['Authorization'],
            },
            params: { 
                username: localStorage.getItem('login'),
            },
        }
        return (
            await axios
                .get(API_URL + 'users/name', config)
        );
    }
}

export default new UserService();