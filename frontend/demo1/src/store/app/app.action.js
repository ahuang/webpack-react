
import UserService from '../../services/userService';

const setUserInfo = userInfo => ({
    type: 'SET_USER_INFO',
    userInfo,
});

export const getUserInfo = () => (dispatch) => {
    UserService.getUserInfo().then((data) => {
        if (!!data && !!data.result) {
            dispatch(setUserInfo(data.result));
            console.log('getUserInfo success!');
        }
    }, (error) => {
        console.log('action getUserInfo error', error);
    });
};

export const setUserName = (userId, userName) => (dispatch) => {
    UserService.setUserName(userId, userName).then((data) => {
        if (!!data && !!data.code && data.code === 200) {
            console.log('setUserName success!');
            dispatch(getUserInfo());
        }
    }, (error) => {
        console.log('action setUserName error', error);
    });
};
