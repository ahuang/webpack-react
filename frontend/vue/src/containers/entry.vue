<template>
    <div class="entry-module">
        <ul class="nav">
            <li class="menu">
                <router-link to="/"><i class="icon-home" /> Home</router-link>
            </li>
            <li class="menu">
                <router-link to="music"><i class="icon-play" /> Music</router-link>
            </li>
            <li class="menu">
                <router-link to="news"><i class="icon-bullhorn" /> News</router-link>
            </li>
            <li class="menu" style="float: right;  margin-right: 20px">
                <a href="/api/v1/user/logout"> 退出 </a>
            </li>
            <li class="menu" style="float: right;">
                <a href="#" v-if="!!currentUser.userName">{{currentUser.userName}}  </a>
                <router-link v-else to="login"> 登录 {{currentUser.userName}} </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
    import '@/containers/entry.scss';
    
    export default {
        name: 'Entry',
        computed: {
            currentUser() {
                return this.$store.state.app.currentUser;
            }
        },
    };
</script>
