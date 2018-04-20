import Mock from './base';

const user = {
    id: 1,
    name: 'mockName',
    userName: '名字来自mockAPI',
};


const getCurrentUserUrl = '/api/v1/user/current';
Mock.mock(getCurrentUserUrl, (options) => {
    console.log(`get current user url=${getCurrentUserUrl}, options=${JSON.stringify(options)}, user=${JSON.stringify(user)}`);
    return {
        code: 200,
        message: 'SUCCESS',
        result: user,
    };
});

const updateUserName = '/api/v1/user/1';
Mock.mock(updateUserName, (options) => {
    console.log(`update userName url=${updateUserName}, options=${JSON.stringify(options)} `);
    const bodyObj = JSON.parse(options.body);
    user.userName = (!!bodyObj && bodyObj.userName) || 'unknow';
    return {
        code: 200,
        message: 'SUCCESS',
        result: null,
    };
});
