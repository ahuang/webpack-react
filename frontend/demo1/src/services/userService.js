import { getData, putData } from '../utils/http';

const prefixUrl = '/api/v1';
const UserService = {
    getUserInfo() {
        return new Promise((resolve, reject) => getData(`${prefixUrl}/user/current`).then(response => resolve(response.data), error => reject(error)));
    },
    setUserName(userId, userName) {
        return new Promise((resolve, reject) => putData(`${prefixUrl}/user/${userId}`, { userName }).then(response => resolve(response.data), error => reject(error)));
    },
};

export default UserService;
