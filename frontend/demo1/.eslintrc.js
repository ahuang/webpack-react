module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "env": {
        "browser": true,
        "node": true
    },    
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        // 关闭规则(不允许变量或方法使用下划线开始)
        "no-underscore-dangle": "off",
        // 关闭规则(不允许给函数参数赋值)
        "no-param-reassign": "off",
        // 关闭规则(不允许使用console语句)        
        "no-console": "off",
        // 关闭规则(强制要求propTypes)                
        "react/prop-types": "off",
        // 关闭规则(jsx语法的锁进,和indent冲突)                
        "react/jsx-indent": "off",
        // 关闭规则(对require的规定)                
        "global-require": "off",
        // 关闭规则(对js/jsx后缀的规定)                        
        "import/extensions": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }    
};
