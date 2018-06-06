import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/containers/home.vue';
import News from '@/containers/news.vue';
import Music from '@/containers/music.vue';
import Login from '@/containers/login.vue';
import Test from '@/containers/test/index.vue';

Vue.use(VueRouter)
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
        path: '/test',
        component: Test
    }, {
        path: '/login',
        component: Login
    }]
});

export default router;