import axios from 'axios';

export const getData = (url) => {
    return (
        axios.get(`${url}`)
    )
}

export const postData = (url, param) => {
    return (
        axios.post(`${url}`, param)
    )
}

export const putData = (url, param) => {
    return (
        axios.put(`${url}`, param)
    )
}