<template>
    <div class="m-child1">
        <div>
            <p>子组件myStudents:<span style="color:yellowgreen">  {{myStudents}}</span></p>
            <p><input type="text" v-model="myStudents"></p>
            <p>子组件myBooks:<span style="color:yellowgreen">  {{myBooks}}</span></p>
            <p><input type="text" v-model="myBooks"></p>
        </div>        
        <button @click="updateValue">子组件updateStudent</button>
        <button @click="updateBooks">子组件updateBooks</button>
    </div>
</template>
<script>
    export default {
        name: 'child1',
        props:{
            value: Array,
            books: Array
        },
        data(){
            return {
                myStudents: [],
                myBooks: [],
            }
        },
        mounted(){
            console.log('child mounted...');
            this.init();
        },
        updated(){
            console.log('child updated...');
        },        
        watch: {
            value(newVal, oldVal){
                console.log('child watch...');
                if(JSON.stringify(newVal) !== JSON.stringify(this.myStudents)){
                    this.init();
                }
            }
        },
        methods: {
            init(){
                console.log('init...');
                this.myStudents = this.value;
                this.myBooks = this.books;
            },
            updateValue(){
                console.log('\r\nchild update myStudents', this.myStudents);
                this.myStudents.push('student_cc');
            },
            updateBooks(){
                console.log('\r\nchild update  myBooks', this.myStudents);
                this.myBooks.push('new');
            }
        }
    }
</script>
