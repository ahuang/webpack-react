<template>
    <div class="app-wrap">
        <h1>hello fun!</h1>
        <Entry/>
        <router-view></router-view>
    </div>
</template>

<script>
    import Entry from '@/containers/entry.vue';
    import axios from 'axios';
    
    export default {
        name: 'app',
        components: {
            Entry
        },
        mounted() {
            console.log('app mouted');
            axios.get('/api/v1/musics').then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        }
    };
</script>
