import Vue from 'vue';
import Vuex from 'vuex';

import app from '@/store/modules/app.js';
import task from '@/store/modules/task.js';
import good from '@/store/modules/good.js';


Vue.use(Vuex);

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state:{
        client: 'mobile',        
        version: '1.0.1',
    },
    modules: { 
        app,
        task,
        // goodModule 是namespace功能的name
        goodModule: good, 
    }
});

export default store;
