<template>
    <div class="app-wrap">
        <Entry/>      
        <router-view></router-view>
    </div>
</template>

<script>
    import Entry from '@/containers/entry.vue';
    
    export default {
        name: 'app',
        components: {
            Entry
        },
    };
</script>
