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
        // 修改规则(锁进为4个空格)
        "indent": ["error",4],
        // 修改规则(换行符卫unix系统一致)
        "linebreak-style": ["error","unix"],
        // 修改规则(字符串使用单引号)
        "quotes": ["error","single"],
        // 修改规则(以分号结尾)
        "semi": ["error","always"],
        // 关闭规则(无法解析@符号)        
        "import/no-unresolved": 0        
    } 
};