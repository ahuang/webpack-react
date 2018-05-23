<template>
    <div>
        <!-- 动态组件 Test1 Test2 Test3-->
        <component is="Test3"></component>




    </div>
</template>
<script>
    import Test1 from '@/containers/test/t1-props/index.vue';
    import Test2 from '@/containers/test/t2-echarts/index.vue';
    import Test3 from '@/containers/test/t3-refs/index.vue';

    export default {
        name: 'test',
        components:{
            Test1,
            Test2,
            Test3
        }
    }
</script>
