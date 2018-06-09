import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/containers/home.vue';
import News from '@/containers/news.vue';
import Music from '@/containers/music.vue';
import Login from '@/containers/login.vue';
import Test from '@/containers/test/index.vue';

Vue.use(VueRouter)

// 下面2行代码，没有指定webpackChunkName，每个组件打包成一个js文件。
const ImportFuncDemo1 = () => import('../containers/test/index.vue');
const ImportFuncDemo2 = () => import('../containers/login.vue')

// 下面2行代码，指定了相同的webpackChunkName，会合并打包成一个js文件。
// const ImportFuncDemo1 = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '../containers/test/index')
// const ImportFuncDemo2 = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '../containers/login')

const router = new VueRouter({
    routes: [{
        path: '/',
        name: 'home',
        // 按需加载实现1: 使用vue的[异步组件]技术, 一个组件生成一个js文件
        component: resolve => require(['../containers/home.vue'], resolve),
    }, {
        path: '/news',
        name: 'news',
        // 按需加载实现2: 使用webpack的[require.ensure]技术
        // 最后一个参数是指定生成的js文件，如果没有指定，每个组件生成一个js文件
        component: resolve => require.ensure([], () => resolve(require('../containers/news.vue')), 'tiny')
        
    }, {
        path: '/music',
        name: 'music',
        component: resolve => require.ensure([], () => resolve(require('../containers/music.vue')), 'tiny')
    }, {
        path: '/test',
        name: 'test',
        // 按需加载实现3: 使用webpack的[require.ensure]技术
        component: ImportFuncDemo1
        
    }, {
        path: '/login',
        name: 'login',
        component: ImportFuncDemo2
    }]
});


export default router;