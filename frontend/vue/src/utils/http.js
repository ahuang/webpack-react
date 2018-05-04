import axios from 'axios';

axios.defaults.withCredentials = true; // 请求携带cookie信息

export const getData = url => (
    axios.get(`${url}`)
);

export const postData = (url, param) => (
    axios.post(`${url}`, param)
);

export const putData = (url, param) => (
    axios.put(`${url}`, param)
);
