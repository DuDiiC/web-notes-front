import axios from 'axios';
import authHeader from './authHeader';

const API_URL = 'https://web-notes-server.herokuapp.com/api/';
// const API_URL = 'http://localhost:8080/api/';

class NoteService {

    getUserNotes = async (id) => {
        let config = {
            headers: {
                Authorization: authHeader()['Authorization'],
            },
        }
        return (
            await axios
                .get(API_URL + 'users/' + id + '/notes', config)
        );
    }

    getNote = async (id) => {
        let config = {
            headers: {
                Authorization: authHeader()['Authorization'],
            },
        }
        return (
            await axios
                .get(API_URL + 'notes/' + id, config)
        );
    }

    saveNote(note) {
        let config = {
            headers: {
                Authorization: authHeader()['Authorization'],
            },
        }
        return (
            axios
                .post(API_URL + "notes", note, config)
        );
    }

    updateNote(id, note) {
        let config = {
            headers: {
                Authorization: authHeader()['Authorization'],
            },
        }
        return (
            axios
                .put(API_URL + "notes/" + id, note, config)
        );
    }
}

export default new NoteService();