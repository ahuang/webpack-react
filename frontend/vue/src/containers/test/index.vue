<template>
    <div class="m-test">
        <p class="title">测试区域～～～</p>
        <!-- 动态组件 Test1 Test2 Test3-->
        <component v-bind:is="chindName"></component>
    </div>
</template>
<script>
    import Test1 from '@/containers/test/t1-props/index.vue';
    import Test2 from '@/containers/test/t2-echarts/index.vue';
    import Test3 from '@/containers/test/t3-refs/index.vue';
    import Test4 from '@/containers/test/t4-multiRender/index.vue';
    import Test5 from '@/containers/test/t5-update/index.vue';
    import Test6 from '@/containers/test/t6-mapState/index.vue';
    import '@/containers/test/index.scss';
    

    export default {
        name: 'test',
        components:{
            Test1,
            Test2,
            Test3,
            Test4,
            Test5,
            Test6,
        },
        data(){
            return {
                chindName: 'Test6'
            }
        }
    }
</script>
