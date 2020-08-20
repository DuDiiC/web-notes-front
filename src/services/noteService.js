import axios from 'axios';
import authHeader from './authHeader';
import { API_URL } from '../constants';

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

    getUserNotes = async (id, noteStatus) => {
        let config = {
            headers: {
                Authorization: authHeader()['Authorization'],
            },
            params: {
                noteStatus: noteStatus,
            },
        }
        return (
            await axios
                .get(API_URL + 'users/' + id + '/notes', config)
        )
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

    updateNoteStatus(id, noteStatus) {
        let config = {
            headers: {
                Authorization: authHeader()['Authorization'],
            },
        }
        return (
            axios
                .put(API_URL + "notes/" + id + "/status",
                    { noteStatus },
                    config )
        )
    }

    deleteNote(id) {
        let config = {
            headers: {
                Authorization: authHeader()['Authorization'],
            },
        }
        return (
            axios
                .delete(API_URL + 'notes/' + id,
                        config )
        )
    }
}

export default new NoteService();