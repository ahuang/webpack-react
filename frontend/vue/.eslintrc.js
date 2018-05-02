module.exports = {
    "extends": [
        "airbnb-base",
        'plugin:vue/essential'
    ],
    "plugins": [
        "import",
    ],
    "env": {
        "browser": true,
        "node": true
    },    
    "rules": {
        // 修改规则(缩进为4个空格)
        'vue/script-indent': ['error', 4, {'baseIndent': 1}],
        'indent': 'off',        
        //  允许在空行使用空白符
        "no-trailing-spaces": ["error", { "skipBlankLines": true }],        
        // 修改规则(换行符卫unix系统一致)
        "linebreak-style": ["error","unix"],
        // 修改规则(字符串使用单引号)
        "quotes": ["error","single"],
        // 修改规则(以分号结尾)
        "semi": ["error","always"],
        // 关闭规则(无法解析@符号)        
        "import/no-unresolved": 0,
        // 关闭规则(强制要求拖尾逗号)
        "comma-dangle": "off",               
        // 关闭规则(强制要求不能以new开始)        
        "no-new": "off",
        // 关闭规则(不允许使用console语句)        
        "no-console": ["off","always"],
         // 关闭规则(对后缀的规定)
         "import/extensions": "off",
        // 关闭规则(对require的规定)                
        "global-require": "off",       
        // 关闭规则(不允许给函数参数赋值)
        "no-param-reassign": "off",          
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
    } 
};