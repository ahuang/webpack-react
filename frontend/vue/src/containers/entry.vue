<template>
    <div class="entry-module">
        <ul class="nav">
            <li class="menu">
                <router-link to="/"><i class="icon-home" /> Home</router-link>
            </li>
            <li class="menu">
                <router-link to="news"><i class="icon-bullhorn" /> News</router-link>
            </li>
            <li class="menu">
                <router-link to="music"><i class="icon-play" /> Music</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import '@/containers/entry.scss';
    
    export default {
        name: 'Entry'
    };
</script>
