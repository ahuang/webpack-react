import axios from 'axios';

export const getData = url => (
    axios.get(`${url}`)
);

export const postData = (url, param) => (
    axios.post(`${url}`, param)
);

export const putData = (url, param) => (
    axios.put(`${url}`, param)
);
