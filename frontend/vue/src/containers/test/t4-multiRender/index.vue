<template>
    <div class="m-t4">
        <h1>子组件重复watch问题</h1>
        <p>
            父组件students: <span style="color:blue">  {{students}}</span><br>
            父组件books: <span style="color:blue">  {{books}}</span><br>
            
        </p>
        <button @click="addStudent">父组件addStudent</button>
        <button @click="addBook">父组件addBook</button>
        <hr>
        <child1 
            v-model="students" @updateStudent="updateStudent"
            :books="books" 
        ></child1>
    </div>
</template>
<script>

    import child1 from '@/containers/test/t4-multiRender/child1.vue';
    export default {
        name: 'multiRender',
        components:{ child1 },
        data(){
            return {
                students:['student1', 'student2'],
                books: ['book1','book2']
            }
        },
        methods: {
            updateStudent(newData){
                this.students = JSON.parse(JSON.stringify(newData));
            },
            addStudent(){
                console.log('\r\nparent addStudent', this.students);
                this.students.push('student_pp');
            },
            addBook(){
                console.log('\r\nparent addBook', this.books);
                this.books.push('book_pp');
            }
        }



    }
</script>
