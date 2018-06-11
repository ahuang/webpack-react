import Vue from 'vue';
import VueRouter from 'vue-router';
// 导致按需加载失败的罪魁祸首!!!
// import Home from '@/containers/home.vue';
// import News from '@/containers/news.vue';
// import Music from '@/containers/music.vue';
// import Login from '@/containers/login.vue';
// import Test from '@/containers/test/index.vue';
Vue.use(VueRouter)

// 多种按需加载方法
// const router = new VueRouter({
//     routes: [{
//         path: '/',
//         name: 'home',
//         // 按需加载实现1: 使用vue的[异步组件]技术, 一个组件生成一个js文件
//         component: resolve => require(['../containers/home.vue'], resolve),
//     }, {
//         path: '/news',
//         name: 'news',
//         // 按需加载实现2: 使用webpack的[require.ensure]技术
//         // 最后一个参数是指定生成的js文件，如果没有指定，每个组件生成一个js文件
//         component: resolve => require.ensure([], () => resolve(require('../containers/news.vue')), 'group1')
        
//     }, {
//         path: '/music',
//         name: 'music',
//         component: resolve => require.ensure([], () => resolve(require('../containers/music.vue')), 'group1')
//     }, {
//         path: '/test',
//         name: 'test',
//         // 按需加载实现3: es提案的import() 推荐使用这种方式(需要webpack > 2.4)
//         component: () => import('../containers/test/index.vue')
//         // 指定打包名称, babel配置需要设置comment:true
//         // component: () => import(/* webpackChunkName: 'group2' */ '../containers/test/index.vue')
        
//     }, {
//         path: '/login',
//         name: 'login',
//         component: () => import('../containers/login.vue')
//         // component: () => import(/* webpackChunkName: 'group2' */ '../containers/login.vue')
//     }]
// });


// 统一用es6 import
const router = new VueRouter({
    routes: [{
        path: '/',
        name: 'home',
        component: () => import('@/containers/home.vue')        
    }, {
        path: '/news',
        name: 'news',
        component: () => import('@/containers/news.vue')
    }, {
        path: '/music',
        name: 'music',
        component: () => import('@/containers/music.vue')
    }, {
        path: '/test',
        name: 'test',
        component: () => import('@/containers/test/index.vue')
    }, {
        path: '/login',
        name: 'login',
        component: () => import( '@/containers/login.vue')
    }]
});


export default router;