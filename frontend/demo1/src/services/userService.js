import {getData, postData, putData} from '../utils/http.js';

const prefixUrl = '/api/v1';
const UserService = {
    getUserInfo(){
        return new Promise((resolve, reject) => {
            return getData(`${prefixUrl}/user/current`).then((response)=>{
                return resolve(response.data);
            },(error)=>{
                return reject(error)
            })
        })
    },
    setUserName(userId, userName){
        return new Promise((resolve, reject) => {
            return putData(`${prefixUrl}/user/${userId}`, userName).then((response)=>{
                return resolve(response.data);
            },(error)=>{
                return reject(error)
            })
        })
    },    
};

export default UserService;