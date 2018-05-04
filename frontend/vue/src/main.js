import Vue from 'vue';
import App from '@/app.vue';
import VueRouter from 'vue-router';
import Home from '@/containers/home.vue';
import News from '@/containers/news.vue';
import Music from '@/containers/music.vue';
import Login from '@/containers/login.vue';
import store from '@/store';
import '@/scss/index.scss';

Vue.use(VueRouter);

console.log(`---process.env.NODE_ENV ${process.env.NODE_ENV} ---`);
if (process.env.NODE_ENV === 'development') {
    // require('./mock/music.js');
    // require('./mock/user.js');
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
    }, {
        path: '/login',
        component: Login
    }]
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    mounted() {
        // 用户信息所有页面公用, 通过action方法发请求获取用户数据,写入state
        this.$store.dispatch('getCurrentUser');
    }
});
