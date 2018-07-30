import axios from 'axios';
const prefixUrl = '/api/v1';

// instance配置
const instance = axios.create({
    baseURL: prefixUrl
});

// 拦截器
axios.interceptors.request.use(config => config, error => Promise.reject(error));
axios.interceptors.response.use((response) => {
    if (!!response && !!response.data && response.data.code === 301) {
        window.location.href = '/#/login';
    }
    return response;
}, error => Promise.reject(error));

// get请求
export const getData = (params) => {
    if (params.params) {
        return instance.get(params.url, {params: params.params});
    } else {
        return instance.get(params.url);
    }    
};

// post请求
export const postData =  (params) => {
    return instance.post(params.url, params.data);
}

// put请求
export const putData =  (params) => {
    return instance.post(params.url, params.data);
}

// axios的promise封装
export const axiosHttp =  (fun, params) => {
    return new Promise(function (resolve, reject) {
        fun(params).then((data) => {
            if (data.status === 200) {
                resolve(data.data);
            } else {
                reject(data.message || data.msg);
            }
        }).catch((error) => {
            reject(error);
        })
    });
}

