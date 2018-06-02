// @flow
function square(n) {
  return n * n; 
}

// console.log(square("2")); // flow检查不通过语法 因为参数是字符串类型
console.log(square(2)); // flow检查可以通过的语法 因为参数是数字类型

// flow 语法
function foo(one: any, two: number, three: string): string {
  console.log(`one: ${one}`);
  console.log(`two: ${two}`);
  console.log(`three: ${three}`);  
  return 'foo result';
}

// foo([1,2,3], 100);  // flow检查不通过语法 因为缺少第3个参数
foo([1,2,3], 100, 'hi');  // flow检查可以通过的语法 因为缺少第3个参数



