# 启动
* local  `npm run local`  
* debug `npm run debug`  
* dev `npm run dev`   
* prod 
    1. 前端打包 `npm run prod`   
    2. 然后将dist目录拷贝到后端   
    3. 最后重启后端服务


# webpack包和配置
+ webpack-dev-server `sudo npm install webpack-dev-server -g  `  
+ webpack related `npm install webpack webpack-merge babel-loader babel-core babel-preset-es2015 babel-preset-react  --save-dev  `  


# done
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
`done` 打包优化
    1. 减少文件体积
        `done` 分离react    @config externals 效果不明显
        `done` 打包公共代码     @config
        `done` style.css文件太大 将字体分离出来 @plugin 
        `done` tree shaking uglify-js purify-css @plugin 
        `known` 懒加载 require.ensure 
        `done` 长缓存优化 将hash替换为chunkhash，这样当chunk不变时，缓存依然有效 @config
        `done` webpack 开启 gzip 压缩  @plugin 
    2. 提高构建速度
        `done` 使用yarn代替npm打包 
        `done` HappyPack  @plugin 
        `done` Webpack.DDLPlugin
`done` back server 一键部署  使用命令 `npm run back`

# todo 
参考create-react-app配置
pre-commit


组件库webpack构建速度优化经验总结
https://juejin.im/post/5a922e776fb9a06337575031

