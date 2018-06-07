<template>
    <div>
        <h1>t5 update</h1>
        <p>{{course}}</p>
        <p><input type="text" v-model="course"></p>
        <p><button @click="updateCourse">update</button></p>
    </div>
</template>
<script>
    export default {
        name: 'update',
        data(){
            return {
                course: ['c1', 'c2']
            }
        },
        methods: {
            updateCourse(){
                // 可以更新view
                this.course.push('new');
                // 无法更新view
                // this.course[0] = 'xxxx'; 
                console.log(this.course);
            }
        }
    }
</script>
