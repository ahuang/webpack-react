<template>
    <div class="m-tip-modal" v-if="value">
        <div class="content">
            <h6>这是个弹窗</h6>
            <div>
                value:  <span style="color: red; font-weight: bolder">{{value}}</span>
                <button @click="$emit('input', false)">关闭弹窗</button>
            </div>
            <div>
                message:  <span style="color: red; font-weight: bolder">{{message}}</span>
                <button  @click="$emit('updateMessage', '新message')">update</button>
            </div>
            <div>
                name:  <span style="color: red; font-weight: bolder">{{name}}</span>
                <button  @click="updateName('新name')">update</button>
            </div>
            <div>
                age:  <span style="color: red; font-weight: bolder">{{myAge}}</span>
                <button  @click="myAge = 100">update</button>
            </div>
        </div>
    </div>
</template>
<script>
    import '@/containers/test/t1-props/tip-modal.scss';

    export default {
        name: 'tip-modal',
        props: {
            value: Boolean,
            message: String,
            name: String,
            updateName: Function,
            age: Number
        },
        data(){
            return {
            }
        },
        watch: {
            'value':{
                immediate: true,
                handler(newVal, oldVal){
                    if(newVal){
                        // 只有弹窗出现才调用init
                        this.init();
                    }
                }
            }
        },
        mounted(){
            // 页面加载后就调用init
            // this.init();
        },
        methods: {
            init(){
                console.log('\r\ninit');
                console.log('***this.value', JSON.stringify(this.value));                
            }
        },
        computed: {
            myAge: {
                get() {
                    return this.age;
                },
                set(val) {
                    this.$emit('updateAge', val);
                }
            }
        },
    };
</script>
