import Mock from '@/mock/base';
const Random = Mock.Random;

const city = ['beijing', 'shanghai'];
for(let c of city){
    Mock.mock(`/api/v1/weather?city=${c}`, (options)=>{
        console.log(`~~ options ${JSON.stringify(options)} `);
        let temperature = [], humidity = [];
        let xtime = 1525698119000;
        const dotCount = 5;
        for(let i=0; i<=dotCount; i++){
            temperature.push({x: xtime, y: Random.natural(20,30)});
            humidity.push({x: xtime, y: Random.natural(60,100)});
            xtime += 1000;
        };     
        return {
            code: 200,
            message: 'SUCCESS',
           
            result: {
                'temperature':temperature,
                'humidity': humidity
            }
        }
    
    });
}

