import axios from 'axios';

axios.defaults.withCredentials = true; // 请求携带cookie信息

// request interceptor 拦截器: 发送数据之前
axios.interceptors.request.use(config => config, error => Promise.reject(error));

// response interceptor 拦截器: 接收数据之前
axios.interceptors.response.use((response) => {
    if (!!response && !!response.data && response.data.code === 301) {
        window.location.href = '/#/login';
    }
    return response;
}, error => Promise.reject(error));

export const getData = url => (
    axios.get(`${url}`)
);

export const postData = (url, param) => (
    axios.post(`${url}`, param)
);

export const putData = (url, param) => (
    axios.put(`${url}`, param)
);
