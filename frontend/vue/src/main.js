import Vue from 'vue';
import App from '@/app.vue';
import store from '@/store';
import router from '@/router/index.js';
import '@/scss/index.scss';




// 数据mock
// console.log(`---process.env.NODE_ENV ${process.env.NODE_ENV} ---`);
if (process.env.NODE_ENV === 'development') {    
    require('./mock/weather.js');
    require('./mock/music.js');
    require('./mock/user.js');
}

// // 测试babel
// import '@/containers/test/babel/babelTest.js';
// import '@/containers/test/babel/babelFlowTest.js';

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
