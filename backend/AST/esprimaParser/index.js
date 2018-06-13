console.log('\r\n--- step1:  将code转换为AST ---')
var esprima = require('esprima');
var code = 'function ast(){}';
var ast = esprima.parse(code);
console.log(ast);


console.log('\r\n--- step2:   遍历并且更新AST  ---')
var estraverse = require('estraverse');
estraverse.traverse(ast, {
    enter: function (node) {
        node.name += "_awsome";
    }
});


console.log('\r\n--- step3:    将AST重新生成为源码  ---')
var escodegen = require("escodegen");
var regenerated_code = escodegen.generate(ast);
console.log(regenerated_code);


console.log('\r\n 输入code: \r\n', code);
console.log('\r\n 输出code: \r\n', regenerated_code);

