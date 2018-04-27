import Vue from 'vue';
import App from '@/app.vue';
import VueRouter from 'vue-router';
import Home from '@/containers/home.vue';
import News from '@/containers/news.vue';
import Publish from '@/containers/publish.vue';

Vue.use(VueRouter);


const router = new VueRouter({
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/news',
        component: News
    }, {
        path: '/publish',
        component: Publish
    }]
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
