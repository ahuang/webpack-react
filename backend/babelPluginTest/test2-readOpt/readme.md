# goal
读取babel配置中plugin的配置, 根据配置进行替换  

# 原理
通过state读取插件配置  

# step1
`npm install`

# step2
`cd 当前目录`  
命令行指定plugin方式：  `babel --plugins ./plugin.js index.js`    
配置中指定plugin方式：  `babel index.js`

# 结果
输入
```
let good = 1;
let bad = 2;
let dead = 3;
let alive = 4;
let color = 5;
let shape = 'circle';
```

输出：
```
let good = 1;
let good = 2;
let alive = 3;
let alive = 4;
let color = 5;
let shape = 'circle';
```


# 输入的ast语法树
```
{
    "type": "Program",
    "body": [
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "good"
                    },
                    "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                    }
                }
            ],
            "kind": "let"
        },
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "bad"
                    },
                    "init": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
                    }
                }
            ],
            "kind": "let"
        },
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "dead"
                    },
                    "init": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3"
                    }
                }
            ],
            "kind": "let"
        },
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "alive"
                    },
                    "init": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4"
                    }
                }
            ],
            "kind": "let"
        },
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "color"
                    },
                    "init": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5"
                    }
                }
            ],
            "kind": "let"
        },
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "shape"
                    },
                    "init": {
                        "type": "Literal",
                        "value": "circle",
                        "raw": "'circle'"
                    }
                }
            ],
            "kind": "let"
        }
    ],
    "sourceType": "script"
}
```

