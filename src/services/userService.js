import axios from 'axios';
import authHeader from './authHeader';
import { API_URL } from '../constants';

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