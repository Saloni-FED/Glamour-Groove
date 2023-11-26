import axios from 'axios';

const url = "http://localhost:3000";
// const url = process.env.REACT_APP_API_URL

export const signup = (formData) => axios.post(`${url}/users/signup`, formData);
export const signin = (formData) => axios.post(`${url}/users/signin`, formData);
// Backend hai