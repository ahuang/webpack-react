console.log('\r\n*** babelTest start ***');

//  箭头函数语法需要babel-preset-env转译
const example = {
    normal: function () { console.log('normal this: ', this); },
    arrow: () => { console.log('arrow this: ', this); },
    shorthand() { console.log('shorthand this: ', this); }
};
new example.normal();
new example.arrow();
new example.shorthand();


// Array.from, Promise语法，据说是需要babel-polyfill的语法
console.log('Array.from: ', Array.from(new Set([1, 1, 3, 3, 4])));

new Promise((resolve) => {
    console.log('Promise: Initial');
    resolve();
})
    .then(() => {
        throw new Error('Promise: Something failed');
    })
    .catch(() => {
        console.log('Promise: Do that');
    })
    .then(() => {
        console.log('Promise: Do this whatever happened before');
    });
console.log('*** babelTest end ***');
console.log('');
