import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://YOUR_FIREBASE_DATABASE_HERE.firebaseio.com/'
});

export default instance;