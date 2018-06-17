<template>
    <div class="m-t6-mapstate">
        <p>任务级别: {{levelCn}}</p>
        <p>任务状态: {{$store.state.task.status}}</p>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        name: 't6-mapState',
        data(){
            return {
                level: 2
            }
        },
        computed: {
            // 组件自己的computed
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
            // 没有命名空间的使用
            // ...mapState({
            //     status: ({ task }) => task.status,
            // })
            // 数组方式？
            ...mapState([
                'task.status'
            ])             

            // 有命名空间的使用            
            // ...mapState('task',[
            //     'status'
            // ])            
            

        }
    
    }
</script>

