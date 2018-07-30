<template>
    <div>
        <h1>body...</h1>
        <p>$route.params: {{$route.params}}</p>
        <ul>
            <li>name: {{info.name}}</li>
            <li>singer: {{info.singer}}</li>
            <li>time: {{info.time}}</li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'Music',
        data() {
            return {
                info: {
                    name: 'it is life',
                    singer: 'bob',
                    time: '2003'
                }
            };
        },
        mounted(){
            // console.log(this.$route);
        },

    };
</script>
