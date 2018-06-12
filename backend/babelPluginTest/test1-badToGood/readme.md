# goal
将代码中的bad转换称good  

# step1
`npm install`

# step2
`cd 当前目录`  
命令行指定plugin方式：  `babel --plugins ./plugin.js index.js`    
配置中指定plugin方式：  `babel index.js`

# result
输入 
```
let bad = true;
```

输出 
```
let good = true;
```



# 输入的ast树


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
                        "name": "bad"
                    },
                    "init": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true"
                    }
                }
            ],
            "kind": "let"
        }
    ],
    "sourceType": "script"
}
```


