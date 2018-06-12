// plugin.js
module.exports = function({ types: babelTypes }) {
    return {
      name: "node-env-replacer",
      visitor: {
        // MemberExpression 成员表达式 
        // MemberExpression 定义 -> https://github.com/babel/babel/blob/master/packages/babel-types/src/definitions/core.js#L506        
        // MemberExpression 主要是由 object、property、computed、optional 组成的。
        MemberExpression(path, state) {
          // path对应了节点的属性，以及节点的关联关系。
          // 对于本例子来说，object 是 process.env 对应的节点，property 为 NODE_ENV 对应的节点。 
          // 因此path.get("object") 获取到的就是 object（process.env）对应的 path实例。
          const obj = path.get("object");
          
          // 如果 object 对应的节点匹配了模式 "process.env"          
        //   检查 object 是否符合 "process.env" 这种模式。比如 成员表达式 process.env.NODE_ENV 为true，而成员表达式 process.hello.NODE_ENV 返回false。
          const objMatchRet = obj.matchesPattern("process.env");
          if (objMatchRet) {
            // 这里返回结果为字符串字面量类型的节点
            const key = path.toComputedKey();
            const isKeyLiteral = babelTypes.isStringLiteral(key);
            if ( isKeyLiteral ) {
              // path.replaceWith( newNode ) 用来替换当前节点
              // babelTypes.valueToNode( value ) 用来创建节点，如果value是字符串，则返回字符串字面量类型的节点
              const valueRet = key.value;
              const processRet = process.env[valueRet];
              const babelTypesRet = babelTypes.valueToNode(processRet)
              path.replaceWith(babelTypesRet);
            }
          }
        }
      }
    };
  };
  
  