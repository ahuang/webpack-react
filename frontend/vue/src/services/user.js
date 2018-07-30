import { axiosHttp, getData, putData } from '@/utils/http';

const UserService = {
    getUserInfo() {
        return axiosHttp(getData, {url: '/user/current'});
    },
    setUserName(userId, userName) {
        return axiosHttp(putData, {url: `/user/${userId}`, data: { userName }});
    },
    doLogin(username, password) {
        return axiosHttp(putData, {url: '/user/login', data: { username, password }});
    }    
};

export default UserService;
