
export default {
    state: {
        status: '1',
        isStart: false,
        currentTask: {},
        createdBy: '',
        createdAt: '',
    },
    mutations: {
        setStatus(state, data) {
            state.status = data;
        },
        setIsStart(state, data){
            state.isStart = data;
        }
    },
    
};
