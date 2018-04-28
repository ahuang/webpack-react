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
        getCurrentUser({ commit }) {
            return UserService.getUserInfo().then((data) => {
                if (!!data && !!data.result) {
                    commit('setCurrentUser', data.result);
                }
            }, (error) => {
                console.log(error);
            });
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
