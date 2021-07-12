import axios from 'axios';

const api = axios.create({ baseURL: "https://serratec.herokuapp.com" });

export default api;