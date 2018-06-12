# goal
解析代码中process.env.NODE_ENV环境变量

# 原理
结合源码对应的ast语法树就比较好理解了


# step1
`npm install`

# step2
`cd 当前目录`  
命令行指定plugin方式：  `export NODE_ENV=development; babel --plugins ./plugin.js index.js > ret.js`    
配置中指定plugin方式：  `export NODE_ENV=development; babel index.js > ret.js`  
执行babel转码之后代码: `node.js ret.js`;  



# 结果1
输入
```
if ( process.env.NODE_ENV === 'development' ) {
    console.log('in development mode');
} 
```

输出：
```
if ('development' === 'development') {
    console.log('in development mode');
}
```



# 结果2
输入
```
if ( process.env.NODE_ENV === 'development' ) {
    console.log('in development mode');
} else if( process.env.NODE_ENV === 'production' ){
    console.log('in production mode');
} else {
    console.log('not set mode');
}
```

输出：
```
if ('development' === 'development') {
    console.log('in development mode');
} else if ('development' === 'production') {
    console.log('in production mode');
} else {
    console.log('not set mode');
}
```


# 输入的ast树


```
{
    "type": "Program",
    "body": [
        {
            "type": "IfStatement",
            "test": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                            "type": "Identifier",
                            "name": "process"
                        },
                        "property": {
                            "type": "Identifier",
                            "name": "env"
                        }
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "NODE_ENV"
                    }
                },
                "right": {
                    "type": "Literal",
                    "value": "development",
                    "raw": "'development'"
                }
            },
            "consequent": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "Identifier",
                                    "name": "console"
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "log"
                                }
                            },
                            "arguments": [
                                {
                                    "type": "Literal",
                                    "value": "in development mode",
                                    "raw": "'in development mode'"
                                }
                            ]
                        }
                    }
                ]
            },
            "alternate": null
        }
    ],
    "sourceType": "script"
}{
    "type": "Program",
    "body": [
        {
            "type": "IfStatement",
            "test": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                            "type": "Identifier",
                            "name": "process"
                        },
                        "property": {
                            "type": "Identifier",
                            "name": "env"
                        }
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "NODE_ENV"
                    }
                },
                "right": {
                    "type": "Literal",
                    "value": "development",
                    "raw": "'development'"
                }
            },
            "consequent": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "Identifier",
                                    "name": "console"
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "log"
                                }
                            },
                            "arguments": [
                                {
                                    "type": "Literal",
                                    "value": "in development mode",
                                    "raw": "'in development mode'"
                                }
                            ]
                        }
                    }
                ]
            },
            "alternate": null
        }
    ],
    "sourceType": "script"
}
```


