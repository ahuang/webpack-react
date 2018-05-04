import { getData } from '@/utils/http';

const prefixUrl = '/api/v1';
const MusicService = {
    getMusics() {
        return new Promise((resolve, reject) => getData(`${prefixUrl}/musics`).then(response => resolve(response.data), error => reject(error)));
    },
};

export default MusicService;
