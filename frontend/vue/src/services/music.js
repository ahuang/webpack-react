import { axiosHttp, getData } from '@/utils/http';

const MusicService = {
    getMusics() {
        return axiosHttp(getData, {url: '/musics'});
    },
};

export default MusicService;
