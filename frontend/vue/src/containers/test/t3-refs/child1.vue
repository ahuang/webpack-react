<template>
    <div class="m-child1">
          {{message}}
    </div>
</template>
<script>
    export default {
        name: 'child1',
        data(){
            return {
                message: 'hello'
            }
        },
        methods: {
            messageToUpper(){
                return this.message.toUpperCase();
            }
        }
    }
</script>
