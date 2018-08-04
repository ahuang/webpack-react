<template>
    <div class="m-t3">
        <h3>refs</h3>

        <div id="content">contet id</div>
        <div ref="content">contet refs</div>    

        <Child1 ref="child1"/>
         
        <ul>
            <li ref="menu">111</li>
            <li ref="menu">222</li>
        </ul>   
        <ul>
            <li v-for="n in 10 " ref="numbers" :key="n"> {{n}} </li>            
        </ul>
    </div>
</template>
<script>
    import Child1 from '@/containers/test/t3-refs/child1.vue';

    export default {
        name: 't3-refs',
        components:{
            Child1
        },
        mounted(){
            // id和refs都可以指向元素，都返回一个dom元素
            console.log('\r\n id和refs都指向元素');
            console.log(document.getElementById("content"));
            console.log(this.$refs.content);

            // refs可以获取组件 && 使用组件data && 调用组件method
            console.log('\r\n refs指向组件');
            console.log(this.$refs.child1);
            console.log(this.$refs.child1.message);
            console.log(this.$refs.child1.messageToUpper());

            // ref相同名称会被覆盖
            console.log('\r\n 相同refs名称 会被后面覆盖');         
            console.log(this.$refs.menu.innerHTML);

            // ref和v-for组合产生ref的值为数组类型
            console.log('\r\n ref和v-for组合');         
            console.log(this.$refs.numbers);

            // key是refs名称 value是dom元素或者vue组件
            console.log('\r\n 查看所有refs');
            console.log(this.$refs);
            console.log('\r\n');
            
        }        
    }
</script>
