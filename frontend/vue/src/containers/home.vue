<template>
    <div class="home-module">
        <h1 style="color: orange">vue's home! welcome  {{currentUser.name}} ( {{currentUser.userName}} )</h1>        
        <div v-if="!!isEdit">
            <input type="text" v-model="newUserName">
            <button @click="updateUserName">确定</button>
        </div>
        <div v-else>
            <button @click="doEditUserName">修改用户名</button>
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
                newUserName: ''
            };
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
            }
        }
    };
</script>
