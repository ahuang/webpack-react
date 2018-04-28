<template>
    <div class="app-wrap">
        <h1>hello fun!</h1>
        <p>{{currentUser.name}} {{currentUser.userName}}</p>
        <Entry/>
        <router-view></router-view>
    </div>
</template>

<script>
    import Entry from '@/containers/entry.vue';
    import UserService from '@/services/user';
    
    export default {
        name: 'app',
        components: {
            Entry
        },
        data() {
            return {
                currentUser: {
                    id: null,
                    name: '',
                    userName: ''
                }
            };
        },
        mounted() {
            console.log('app mouted');
            UserService.getUserInfo().then((data) => {
                if (!!data && !!data.result) {
                    this.currentUser = data.result;
                }
            }, (error) => {
                console.log(error);
            });
        }
    };
</script>
