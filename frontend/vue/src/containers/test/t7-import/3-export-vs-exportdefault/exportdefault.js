const prefix = '@exportdefault.js ';
let name = `${prefix} name=jack`;

const nick = `${prefix} nick=poppy`;

function f1(){
    console.log(`${prefix} f1()`);
}

const f2 = ()=>{
    console.log(`${prefix} f2()`);
}

// 导出: 对象,变量,常量,方法 ok
export default { name,nick,f1,f2 } // ok
// export default name; // ok
// export default nick; // ok
// export default f1; // ok
// export default f2; // ok

