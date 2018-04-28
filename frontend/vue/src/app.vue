<template>
    <div class="app-wrap">
        <h1 style="color: orange">hello fun! {{currentUser.name}} - {{currentUser.userName}}</h1>
        <Entry/>
        <div v-if="!!isEdit">
            <input type="text" v-model="newUserName">
            <button @click="updateUserName">确定</button>
        </div>
        <div v-else>
            <button @click="doEditUserName">修改用户名</button>
        </div>
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
