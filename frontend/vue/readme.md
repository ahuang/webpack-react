# todo
参考vue-cli 配置
参考iview-admin 配置和路由设计
http.js中对axios的全局设置
mapstate mapaction mapGetters 命名空间



eslint缩进的配置
npm install eslint-plugin-vue // eslint识别vue模板的
配置eslint
    "extends": [
        "airbnb-base",
        'plugin:vue/essential'
    ],
    // 修改规则(缩进为4个空格)
    'vue/script-indent': ['error', 4, {'baseIndent': 1}],
    'indent': 'off',        
    //  允许在空行使用空白符
    "no-trailing-spaces": ["error", { "skipBlankLines": true }],  

安装vscode 插件
vue-beautify 可以格式化vue文件内容，缩进就是eslint配置的缩进


