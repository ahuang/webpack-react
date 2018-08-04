
const prefix = '@export.js ';

export let name = `${prefix} name=jack`;

export const nick = `${prefix} nick=poppy`;

export function f1(){
    console.log(`${prefix} f1()`);
}

export const f2 = ()=>{
    console.log(`${prefix} f2()`);
}

export const obj = { name,nick,f1,f2 } // ok

const name2 = `${name} new`
export { name2 as nameNew} // 相当于export nameNew = name2;

