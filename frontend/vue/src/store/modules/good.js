export default   {
    // namespaced可以解决不同模块命名冲突的问题
    namespaced: true,
    state: {
        name: 'fish',
        type: 'food',
        source: 'hainan',
        minPrice: '50',
        maxPrice: '100'
    },
    mutations: {
        setMinPrice(state, data){
            state.minPrice = data;
        }
    }
};
