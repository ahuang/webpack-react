import Mock from '@/mock/base';

Mock.mock('/api/v1/musics', {
    code: 200,
    message: 'SUCCESS',
    result: [
        { name: 'yellow', score: 9 },
        { name: '甜蜜蜜', score: 8 },
    ],
});
