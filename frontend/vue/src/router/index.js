import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/containers/home.vue';
import News from '@/containers/news.vue';
import Music from '@/containers/music.vue';
import Login from '@/containers/login.vue';
import Test from '@/containers/test/index.vue';

Vue.use(VueRouter)
// const router = new VueRouter({
//     routes: [{
//         path: '/',
//         component: Home
//     }, {
//         path: '/news',
//         component: News
//     }, {
//         path: '/music',
//         component: Music
//     }, {
//         path: '/test',
//         component: Test
//     }, {
//         path: '/login',
//         component: Login
//     }]
// });


// const router = new VueRouter({
//     routes: [{
//         path: '/',
//         component: () => import('@/containers/home.vue')
//     }, {
//         path: '/news',
//         component: () => import('@/containers/news.vue')
//     }, {
//         path: '/music',
//         component: () => import('@/containers/music.vue')
//     }, {
//         path: '/test',
//         component: () => import('@/containers/test/index.vue')
//     }, {
//         path: '/login',
//         component: () => import('@/containers/login.vue')
//     }]
// });

const router = new VueRouter({
    routes: [{
        path: '/',
        component: resolve => require.ensure([], () => resolve(require('@/containers/home.vue')), 'home')
    }, {
        path: '/news',
        component: resolve => require.ensure([], () => resolve(require('@/containers/news.vue')), 'news')
        
    }, {
        path: '/music',
        component: resolve => require.ensure([], () => resolve(require('@/containers/music.vue')), 'music')
        
    }, {
        path: '/test',
        component: resolve => require.ensure([], () => resolve(require('@/containers/test/index.vue')), 'test')
        
    }, {
        path: '/login',
        component: resolve => require.ensure([], () => resolve(require('@/containers/login.vue')), 'login')        
    }]
});


export default router;