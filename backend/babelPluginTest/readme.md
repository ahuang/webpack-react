# demo
test1-3 参考文章 https://juejin.im/post/5b14257ef265da6e5546b14b  
test4  self create  


# introduce
自己编写babel插件实例

# improve
1. 对ECMA规范了解  
MemberExpression、FunctionDeclaration、Identifier等都是规范里的术语，如果对规范没有一定的了解，转换代码的时候就不知道如何入手。  
2. 对Babel的API了解  
Babel相关API的文档比较少，这会对插件编写造成不小的困难，目前比较好的解决办法，就是参考现有的插件进行修改。  


# babel插件结构
典型的Babel插件结构，如下代码所示。
```
export default function({ types: babelTypes }) {
  return {
    visitor: {
      Identifier(path, state) {},
      ASTNodeTypeHere(path, state) {}
    }
  };
};
```

## 各个参数理解
* babelType：工具集. 类似lodash工具集，主要用来操作AST节点，比如创建、校验、转变等。举例：判断某个节点是不是标识符(identifier)。
* path：节点信息. AST中有很多节点，每个节点可能有不同的属性，且节点之间可能存在关联。path是个对象，它访问到节点属性，也可以访问到关联节点（比如父节点、兄弟节点等）
* state：插件信息. 可以通过state来访问插件的配置项。
* visitor：Babel采取递归的方式访问AST的每个节点，之所以叫做visitor，只是因为有个类似的设计模式叫做访问者模式，不用在意背后的细节。
* Identifier、ASTNodeTypeHere：对应不同的AST的每个节点，都有对应的节点类型，比如标识符（Identifier）、函数声明（FunctionDeclaration）等，可以在visitor上声明同名的属性，当Babel遍历到相应类型的节点，属性对应的方法就会被调用，传入的参数就是path、state。
