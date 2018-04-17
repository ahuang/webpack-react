import {getData, postData} from '../utils/http.js';

const prefixUrl = '/api/v1';
const VideoService = {
    getMovies(){
        return new Promise((resolve, reject) => {
            return getData(`${prefixUrl}/movies`).then((response)=>{
                return resolve(response.data);
            },(error)=>{
                return reject(error)
            })
        })
    }
};

export default VideoService;