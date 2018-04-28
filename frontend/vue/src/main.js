import Vue from 'vue';
import App from '@/app.vue';
import VueRouter from 'vue-router';
import Home from '@/containers/home.vue';
import News from '@/containers/news.vue';
import Music from '@/containers/music.vue';

Vue.use(VueRouter);


console.log(`---process.env.NODE_ENV ${process.env.NODE_ENV} ---`);
if (process.env.NODE_ENV === 'development') {
    require('./mock/music.js');
    require('./mock/user.js');
}

const router = new VueRouter({
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/news',
        component: News
    }, {
        path: '/music',
        component: Music
    }]
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
