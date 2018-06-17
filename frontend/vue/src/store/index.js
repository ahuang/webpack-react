import Vue from 'vue';
import Vuex from 'vuex';

import app from '@/store/modules/app.js';
import task from '@/store/modules/task.js';


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: { 
        app,
        task
    }
});

export default store;
