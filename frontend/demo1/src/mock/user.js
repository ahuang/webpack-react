import Mock from './base';

const user = {
    id: 1,
    name: '张东',
    userName: '大东',
};


const getCurrentUserUrl = '/api/v1/user/current';
Mock.mock(getCurrentUserUrl, (options) => {
    console.log(`get current user url=${getCurrentUserUrl}, options=${JSON.stringify(options)}`);
    return {
        code: 200,
        message: 'SUCCESS',
        result: user,
    };
});

const updateUserName = '/api/v1/user/1';
Mock.mock(updateUserName, (options) => {
    console.log(`update userName url=${updateUserName}, options=${JSON.stringify(options)}`);
    user.userName = options.body;
    return {
        code: 200,
        message: 'SUCCESS',
        result: null,
    };
});
