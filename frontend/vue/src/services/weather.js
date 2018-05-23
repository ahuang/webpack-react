import { getData } from '@/utils/http';

const prefixUrl = '/api/v1';
const WeatherService = {
    getWeatcher(city) {
        return new Promise((resolve, reject) => getData(`${prefixUrl}/weather?city=${city}`).then(response => resolve(response.data), error => reject(error)));
    },
};

export default WeatherService;
