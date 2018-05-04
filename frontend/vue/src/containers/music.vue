<template>
    <div>
        <h1>music...</h1>
        <ul>
            <li v-for="m in musics" :key="m.id">{{m.name}}</li>
        </ul>
    </div>
</template>

<script>
    import MusicService from '@/services/music.js';

    export default {
        name: 'Music',
        data() {
            return {
                musics: []
            };
        },
        mounted() {
            // musick只属于当前组件,因此没有必要放到store上
            MusicService.getMusics().then((data) => {
                if (!!data && !!data.result && !!data.result.length) {
                    this.musics = data.result;
                }
            }, (error) => {
                console.log('get musics error: ', error);
            });
        }
    };
</script>
