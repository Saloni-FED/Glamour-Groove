import axios from 'axios';

// const url = "http://localhost:3000";
const url = "https://glamour-groove-server.onrender.com"

export const signup = (formData) => axios.post(`${url}/users/signup`, formData);
export const signin = (formData) => axios.post(`${url}/users/signin`, formData);
// Backend hai