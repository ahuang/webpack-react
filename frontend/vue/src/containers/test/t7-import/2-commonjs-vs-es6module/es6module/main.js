import {count, addOne} from './counter.js';
/**
 * ES6 的import有点像 Unix 系统的“符号连接”，
 * 原始值变了，import加载的值也会跟着变。
 */
console.log('count: ', count); // 3
addOne();
console.log('count: ', count); // 4
