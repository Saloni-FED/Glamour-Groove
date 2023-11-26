import axios from 'axios';

const url = "https://glamour-groove-server.onrender.com"

export const signup = (formData) => axios.post(`${url}/users/signup`, formData);
export const signin = (formData) => axios.post(`${url}/users/signin`, formData);
// Backend hai