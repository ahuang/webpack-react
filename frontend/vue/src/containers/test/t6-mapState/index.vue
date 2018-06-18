<template>
    <div class="m-t6-mapstate">
        <h6>＃ 组件自己的computed</h6>        
        <p>levelCn: {{levelCn}}</p>
        <hr>
        <h6>＃ 无命名空间state</h6>
        <p>client: {{client}} | {{this.$store.state.client}}</p>        
        <p>clientUpper: {{clientUpper}} | {{this.$store.state.client.toUpperCase()}}</p>        
        <p>version: {{version}} | {{this.$store.state['version']}}</p>
        <p>currentId: {{currentId}} | {{this.$store.state.task.currentId}}</p>
        <!-- <p>task.statu: {{task.status}} | {{this.$store.state['task.status']}} </p> -->
        <hr>
        <h6>＃ 有命名空间state</h6>
        <p>name: {{name}} |  {{this.$store.state.goodModule.name}}</p>
        <p>type: {{type}} |  {{this.$store.state.goodModule.type}}</p>
        <hr>
        <h6># 测试computed+mapstate的响应式</h6>
        <p>minPrice: {{minPrice}} |  {{this.$store.state.goodModule.minPrice}}</p>
        <input type="text" v-model="minPriceVar">
        <button @click="changeMinPrice">修改minPrice</button>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        name: 't6-mapState',
        data(){
            return {
                level: 2,
                minPriceVar: 0
            }
        },
        methods: {
            changeMinPrice(){
                this.$store.commit('goodModule/setMinPrice', this.minPriceVar);
            }
        },
        computed: {
            // 1. 组件自己的computed
            levelCn(){
                let ret;
                switch(this.level){
                    case 1:
                        ret = '简单';
                        break;
                    case 2:
                        ret = '复杂';
                        break;
                    case 3:
                        ret = '难度大';
                        break;
                    default:
                        ret = '-';
                        break;
                };
                return ret;
            },
            // 2. 没有命名空间的使用
            // 全局state-对象方式 相当于 this.$store.state.client
            ...mapState({
                'client': state => state.client, 
                'clientUpper': state => state.client.toUpperCase(),
            }),
            // 全局state-数组方式 相当于 this.$store.state['version']
            ...mapState([
                'version',  
            ]),
            // 模块state-对象方式 相当于 this.$store.state.task.currentId
            ...mapState({
                'currentId': ({ task }) => task.currentId, 
            }),               
            // 模块state-数组方式 [not working!] 相当于 this.$store.state['task.status']
            ...mapState([
                'task.status',
            ]),
            // 3. 有命名空间的使用    命名空间的name来自于模块注入store时的key
            // 模块state-对象方式 相当于 this.$store.state.good.name
            ...mapState('goodModule',{
                'name': state => state.name
            }),
            // 模块state-数组方式 相当于 this.$store.state.good.type
            ...mapState('goodModule',[
                'type'
            ]),  
            // 4. 测试computed+mapstate的响应式
            ...mapState('goodModule',{
                'minPrice': state => state.minPrice,
            }),         

            

        }
    
    }
</script>

