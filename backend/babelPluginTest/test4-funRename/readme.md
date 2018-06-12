# goal
将function名称添加前缀 'prex_'   


# step1
`npm install`

# step2
`cd 当前目录`  
命令行指定plugin方式：  `babel --plugins ./plugin.js index.js > ret.js`    
配置中指定plugin方式：  ` babel index.js > ret.js`  



# 结果1
输入
```
function fun1(){
	return 1;
}


function fun2(){
	return 2;
}

```

输出：
```
function prex_fun1() {
	return 1;
}

function prex_fun2() {
	return 2;
}

```



# 输入的ast树
```
{
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "fun1"
            },
            "params": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ReturnStatement",
                        "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        }
                    }
                ]
            },
            "generator": false,
            "expression": false,
            "async": false
        },
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "fun2"
            },
            "params": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ReturnStatement",
                        "argument": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2"
                        }
                    }
                ]
            },
            "generator": false,
            "expression": false,
            "async": false
        }
    ],
    "sourceType": "script"
}
```