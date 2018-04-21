import Mock from '@/mock/base';

Mock.mock('/api/v1/movies', {
    code: 200,
    message: 'SUCCESS',
    result: [
        { name: '黑客帝国', score: 9 },
        { name: '美丽心灵', score: 8 },
    ],
});
