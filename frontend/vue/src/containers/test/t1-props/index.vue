<template>
    <div class="m-test">
        <h3>父子组件通信</h3>
        <div class="commu">
            <TipModal
                v-model="showTipModal"

                :name="name" 
                :updateNameFun="updateName" 
                @updateNameEmit="updateName"
                :age="age"  
                @updateAge="updateAge"
                                 
                :message="message" 
                @updateMessage="updateMessage"
            ></TipModal>
            <p>showTipModal<span class="text">  {{showTipModal}}</span></p>
            <p>name <span class="text"> {{name}} </span></p>
            <p>age <span class="text"> {{age}} </span></p>
            <p>message <span class="text"> {{message}} </span></p>            
            <button @click="openTipModal">弹窗</button>
        </div>
    </div>
</template>
<script>
    import TipModal from '@/containers/test/t1-props/tip-modal.vue';
    import '@/containers/test/t1-props/index.scss';
    export default {
        name: 'test1',
        components: { TipModal },
        data() {
            return {
                showTipModal: false,
                message: {content: '消息1', isFake: false},
                name: {cn: '张三', en: 'zhangsan'},
                age: 20,
            };
        },
        methods: {
            openTipModal() {
                this.showTipModal = true;
            },
            updateName(data) {
                this.name.cn = data;
            },
            updateAge(data) {
                this.age = data;
            },
            updateMessage(data) {
                this.message.content = data;
            },            
        }
    };
</script>
