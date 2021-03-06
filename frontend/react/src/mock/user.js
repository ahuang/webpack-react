import Mock from '@/mock/base';

const user = {
    id: 1,
    name: 'react-mock-name',
    userName: 'react-mock-username',
};


const getCurrentUserUrl = '/api/v1/user/current';
Mock.mock(getCurrentUserUrl, (options) => {
    console.log(`get current user  options=${JSON.stringify(options)}, user=${JSON.stringify(user)}`);
    return {
        code: 200,
        message: 'SUCCESS',
        result: user,
    };
});

const updateUserName = '/api/v1/user/1';
Mock.mock(updateUserName, (options) => {
    console.log(`update userName options=${JSON.stringify(options)} `);
    const bodyObj = JSON.parse(options.body);
    user.userName = (!!bodyObj && bodyObj.userName) || 'unknow';
    return {
        code: 200,
        message: 'SUCCESS',
        result: null,
    };
});


const userLogout = '/api/v1/user/logout';
Mock.mock(userLogout, (options) => {
    console.log(`userLogout options=${JSON.stringify(options)} `);
    return {
        code: 200,
        message: 'SUCCESS',
        result: null,
    };
});
