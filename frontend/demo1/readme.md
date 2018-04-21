# 启动
* local  `npm run local`  
* debug `npm run debug`  
* dev `npm run dev`   
* prod 
    1. 前端打包 `npm run prod`   
    2. 然后将dist目录拷贝到后端   
    3. 最后重启后端服务




# 技术栈
+ react@16.3.1  `npm install  react react-dom --save`  
+ react-router-dom@4.2.2 `npm install react-router-dom --save`  
+ immutable@3.8.2 `npm install immutable --save`  
+ react-redux@5.0.7 redux@3.7.2   `npm install redux react-redux --save`  
+ css `npm install node-sass sass-loader  css-loader style-loader extract-text-webpack-plugin --save-dev`  
+ url-loader@1.0.1 file-loader@1.1.11 `npm install   file-loader  url-loader --save-dev`  
+ copy-webpack-plugin@4.5.1 `npm install --save-dev copy-webpack-plugin`  
+ axios@0.18.0  `npm install axios`  
+ mockjs@1.0.1-beta3    `npm install mockjs`  



# webpack包和配置
+ webpack-dev-server `sudo npm install webpack-dev-server -g  `  
+ webpack related `npm install webpack webpack-merge babel-loader babel-core babel-preset-es2015 babel-preset-react  --save-dev  `  



# todo
`done` react api  请求
`done` mock  api
`done` eslint-loader
`done` api 处理： mock debug dev 
    方案是: 
    1. mock环境，debug环境，dev环境都用同一个配置webpack-dev
    2. 这个配置设置webpack-dev-server.proxy 同时也引入mock data
    3. 这样的配置特点是：优先使用mock data，当接口对应的mock data不存在时，才使用proxy 后端接口 
    4. mock需求: 所有接口都不需要联调。只需要将所有数据都用mock data时，此时即使有proxy 前端也不会去请求
    5. debug需求：部分接口需要联调。只需要将不需要联调的接口使用mock data即可，需要联调的接口前端会走proxy方式
    6. dev需求：所有接口需要联调。只需要将所有mock data注释即可, 这时候所有都是用proxy数据
`done` react-version: development production 
    方案是：使用webpack的mode参数即可
`done` prod 先删除dist目录然后打包功能    方案是：webpack-cleanup-plugin
`done` back-server-api 补上
`done` prod 将index.html也拷贝到dist目录 copy-webpack-plugin
`done` env-config 使用json配置文件，可以直接读取
`done` 拷贝的字体文件能否注入hash? 字体文件如何解决比较好？用loader还是plugin. 为了hash注入，使用loader引入字体文件
`done` prod js css hash注入  html-webpack-plugin 如何控制plugin的执行顺序，需要先注入hash然后拷贝index.html. 目前的顺序反了
    方案1: 使用webpack-shell-plugin来控制顺序，build结束之后，用shell命令，比如cp来做copy功能，不需要使用copy-webpack-plugin
    方案2: 使用filemanager-webpack-plugin来做copy功能，支持build之后copy文件
    改问题的讨论 https://github.com/webpack-contrib/copy-webpack-plugin/issues/15
`done` prod 代码压缩  

`done` mode参数背后的工作:https://webpack.js.org/concepts/mode/

打包优化 
    抽取公共代码
    node_module排除
    使用yarn代替npm打包
    vendors.js https://stackoverflow.com/questions/35725384/webpackhtmlplugin-control-the-order-of-injected-files



path的区别？
    __dirname?
     `${__dirname}/../src/icomoon` 
     path.resolve(__dirname, '../src/icomoon') 
     path.join(__dirname, 'xxx')

