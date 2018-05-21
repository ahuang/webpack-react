<template>
    <div>
        <Test1></Test1>
        <!-- <Test2></Test2> -->

    </div>
</template>
<script>
    import Test1 from '@/containers/test/t1-props/index.vue';
    // import Test2 from '@/containers/test/t2-echarts/test1.vue';

    export default {
        name: 'test',
        components:{
            Test1
        }
    }
</script>
