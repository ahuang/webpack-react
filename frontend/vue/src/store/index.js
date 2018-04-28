import Vue from 'vue';
import Vuex from 'vuex';

import app from '@/store/modules/app.js';


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: { app }
});

export default store;
