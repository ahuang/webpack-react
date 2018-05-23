<template>
    <div>
        <!-- 动态组件 Test1 Test2 -->
        <component is="Test2"></component>
    </div>
</template>
<script>
    import Test1 from '@/containers/test/t1-props/index.vue';
    import Test2 from '@/containers/test/t2-echarts/index.vue';

    export default {
        name: 'test',
        components:{
            Test1,
            Test2
        }
    }
</script>
