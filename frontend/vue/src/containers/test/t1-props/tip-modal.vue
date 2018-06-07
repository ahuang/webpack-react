<template>
    <div class="m-tip-modal" v-if="value">
        <div class="content">
            <h3>这是个弹窗</h3>
            <div class="line">
                value:  <span style="color: red; font-weight: bolder">{{value}}</span>
                <button @click="$emit('input', false)">关闭弹窗</button>
            </div>
            <div class="line">
                <div>name.cn:  <span style="color: red; font-weight: bolder">{{name.cn}}</span>
                    <button  @click="$emit('updateNameEmit', 'emitName')">update1</button>
                    <button  @click="updateNameFun('funName')">update2</button> 
                </div>
                <div>name.en:  <span style="color: red; font-weight: bolder">{{myName.en}}</span>
                    <button  @click="()=>{this.myName.en = 'modifyName'}">update3</button>
                </div>
                <div>age:  <span style="color: red; font-weight: bolder">{{myAge}}</span>
                    <button  @click="myAge = 100">update</button>
                </div>                    
            </div>            
            <div class="line">
                message:  <span style="color: red; font-weight: bolder">{{myMessage.content}}</span>
                <button  @click="()=>{ const newMsg = '消息2';this.myMessage.content = newMsg; this.$emit('updateMessage', newMsg);
                    }">update</button>
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
            message: Object,
            name: Object,
            updateNameFun: Function,
            age: Number
        },
        data(){
            return {
                myMessage: {},
                myName: {}
            }
        },
        watch: {
            'value':{
                immediate: true,
                handler(newVal, oldVal){
                    if(newVal){
                        this.init();// 只有弹窗出现才调用init
                    }
                }
            }
        },
        methods: {
            init(){
                this.myName = this.name; // 数据共享
                this.myMessage = JSON.parse(JSON.stringify(this.message)); // 深拷贝，数据独立
            },
        },
        computed: {
            myAge: {
                get() {return this.age;},
                set(val) {this.$emit('updateAge', val);}
            }
        },
    };
</script>
