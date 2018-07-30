import UserService from '@/services/user';

export default {
    state: {
        currentUser: {}
    },
    mutations: {
        setCurrentUser(state, data) {
            state.currentUser = data;
        }
    },
    actions: {
         async getCurrentUser({ commit }) {
            // async await方式调用
            try {
                console.log('asynce');
                const currentUserRet = await UserService.getUserInfo();
                if(currentUserRet && currentUserRet.result){
                    commit('setCurrentUser', currentUserRet.result);
                }
            } catch (error) {
                console.log(error);
            }

            // promise 方式调用
            // return UserService.getUserInfo().then((data) => {
            //     if (!!data && !!data.result) {
            //         commit('setCurrentUser', data.result);
            //     }
            // }, (error) => {
            //     console.log(error);
            // });
        },
        updateCurrentUser(context, playload) {
            const userId = context.state.currentUser.id;
            return UserService.setUserName(userId, playload.newUserName).then((data) => {
                if (!!data && data.code === 200) {
                    context.dispatch('getCurrentUser');
                }
            }, (error) => {
                console.log(error);
            });
        }
    }
};
