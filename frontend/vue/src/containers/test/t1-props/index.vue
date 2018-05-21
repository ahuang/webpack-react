<template>
    <div class="m-test">
        <div class="commu">
            <TipModal
                v-model="showTipModal"

                :message="message" @updateMessage="updateMessage"

                :name="name" :updateName="updateName"

                :age="age"  @updateAge="updateAge"
            ></TipModal>
            <p>showTipModal<span style="color:blue;font-weight:bolder">{{showTipModal}}</span></p>
            <p>message <span style="color: blue; font-weight: bolder"> {{message}} </span></p>
            <p>name <span style="color: blue; font-weight: bolder"> {{name}} </span></p>
            <p>age <span style="color: blue; font-weight: bolder"> {{age}} </span></p>
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
                message: 'haha',
                name: '张三',
                age: 20,
            };
        },
        methods: {
            openTipModal() {
                this.showTipModal = true;
            },
            updateMessage(data) {
                this.message = data;
            },
            updateName(data) {
                this.name = data;
            },
            updateAge(data) {
                this.age = data;
            },
        }
    };
</script>
