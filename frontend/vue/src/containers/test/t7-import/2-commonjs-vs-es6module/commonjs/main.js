const counter = require('./counter.js')
/* 
    CommonJS 模块输出的是值的拷贝，
    也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
    除非写成一个函数，才能得到内部变动后的值。
*/
console.log('count: ', counter.count); // 3
counter.addOne();
console.log('count: ', counter.count); // 3

