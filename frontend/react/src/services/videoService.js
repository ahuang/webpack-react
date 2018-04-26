import { getData } from '@/utils/http';

const prefixUrl = '/api/v1';
const VideoService = {
    getMovies() {
        return new Promise((resolve, reject) => getData(`${prefixUrl}/movies`).then(response => resolve(response.data), error => reject(error)));
    },
};

export default VideoService;
