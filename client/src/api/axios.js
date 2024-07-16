import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://to-do-list-server-flame.vercel.app/api',
    withCredentials: true
});

export default instance;