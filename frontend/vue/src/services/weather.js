import { axiosHttp, getData } from '@/utils/http';

const WeatherService = {
    getWeatcher(city) {
        return axiosHttp(getData, {url: `/weather?city=${city}`});
    }  
};

export default WeatherService;
