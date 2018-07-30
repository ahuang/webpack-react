<template>
    <div class="home-module">
        <h1 style="color: orange">vue's home!  {{env}}  </h1>
        <p style="color: green"> {{currentUser.userName}}</p>
        <div v-if="!!isEdit">
            <input type="text" v-model="newUserName">
            <button @click="updateUserName">确定</button>
        </div>
        <div v-else>
            <button @click="doEditUserName">修改用户名</button>
            <span>push-><button  @click="goMusicDetail">go</button></span>
        </div>
        <div>
            <p> 天气:多云~~~</p>
            <p class="weather" />
        </div>
        <div>
            <p> 风景图 </p>
            <p> <img class="scene-img" src="@/images/autumn.jpg" alt="autumn" /> </p>
        </div>
    </div>
</template>

<script>
    import '@/containers/home.scss';
    
    export default {
        name: 'Home',
        data() {
            return {
                isEdit: 0,
                newUserName: '',
                env: process.env.NODE_ENV 
            };
        },
        mounted() {
            this.$store.dispatch('getCurrentUser');
        },
        computed: {
            currentUser() {
                // 读取state里的用户信息
                return this.$store.state.app.currentUser;
            }
        },
        methods: {
            updateUserName() {
                this.$store.dispatch({
                    type: 'updateCurrentUser',
                    newUserName: this.newUserName
                });
                this.isEdit = 0;
            },
            doEditUserName() {
                this.isEdit = 1;
                this.newUserName = this.currentUser.userName;
            },
            goMusicDetail(){
                /*    
                // http://localhost:9001/#/news
                this.$router.push('news');  
                // http://localhost:9001/#/music/10?by=mobile
                this.$router.push({path: 'music/10', query: {by: 'mobile'}}); 
                //  http://localhost:9001/#/music/11?by=pc
                this.$router.push({name: 'detail', params: {id: 11}, query: {by: 'pc'}}); 

                // 在浏览器记录中前进一步，等同于 history.forward()
                this.$router.go(1)
                // 后退一步记录，等同于 history.back()
                this.$router.go(-1)
                // 如果 history 记录不够用，那就默默地失
                this.$router.go(-100)
                this.$router.go(100)
                */
                this.$router.push({name: 'detail', params: {id: 11}, query: {by: 'pc'}}); 

            }
        }
    };
</script>
