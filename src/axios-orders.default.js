import axios from 'axios';

const instance = axios.create({
    baseURL: 'YOUR_FIREBASE_DATABASE_URL_HERE'
});

export default instance;