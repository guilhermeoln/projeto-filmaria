import axios from 'axios';

/* https://api.themoviedb.org/3/ --- movie/now_playing?api_key=38fc80aaee6d81bcdb7d91f2d424443e&language=pt-BR */ 

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});


export default api;

