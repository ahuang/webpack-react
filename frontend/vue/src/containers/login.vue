<template>
    <div class="m-login">
        <form @submit="doLogin" class="wrap">
            <div class="row">
                <label for="username" class="inf">用户名：</label>
                <input type="text" v-model="username" class="ipt">
            </div>
            <div class="row">
                <label for="password" class="inf"> 密码：</label>
                <input type="password" v-model="password" class="ipt">
            </div>
            <div class="row sub">
                <input type="submit" value="登 录"  class="btn">
            </div>
            
        </form>
    </div>
</template>

<script>
    import '@/containers/login.scss';
    import UserService from '@/services/user.js';

    export default {
        name: 'News',
        data() {
            return {
                username: '',
                password: ''
            };
        },
        methods: {
            doLogin() {
                // const cb = 'http://localhost:9001/';
                UserService.doLogin(this.username, this.password).then((data) => {
                    if (data.code === 200) {
                        if (data.message === 'SUCCESS') {
                            window.location.href = '/';
                        } else {
                            console.log(data.result);
                        }
                    }
                }, (error) => {
                    console.log(error);
                });
            }
        }
    };
</script>

