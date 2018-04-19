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
done react api  请求
done mock  api
done eslint-loader
done api 处理： mock debug dev 
    方案是: 
    1. mock环境，debug环境，dev环境都用同一个配置webpack-dev
    2. 这个配置设置webpack-dev-server.proxy 同时也引入mock data
    3. 这样的配置特点是：优先使用mock data，当接口对应的mock data不存在时，才使用proxy 后端接口 
    4. mock需求: 所有接口都不需要联调。只需要将所有数据都用mock data时，此时即使有proxy 前端也不会去请求
    5. debug需求：部分接口需要联调。只需要将不需要联调的接口使用mock data即可，需要联调的接口前端会走proxy方式
    6. dev需求：所有接口需要联调。只需要将所有mock data注释即可, 这时候所有都是用proxy数据
done react-version: development production 
    方案是：使用webpack的mode参数即可
done prod 先删除dist目录然后打包功能
    方案是：webpack-cleanup-plugin
    Since it runs when the compile process is finished, it is useful when building on production to remove the assets created by previous builds.
    编译结束后执行, 可以用来删除一些之前创建的不需要的静态资源文件
    如果有些静态资源需要保留: 1.尽量不要放到发布目录 2.可以exclude参数制定需要忽略被删除的文件
back-server-api 补上
prod 将index.html也拷贝到dist目录
prod 代码压缩 抽取公共代码

打包优化
mode参数背后的工作:https://webpack.js.org/concepts/mode/
process.env.NODE_ENV 
    https://doc.webpack-china.org/guides/production/ 
    https://www.jianshu.com/p/ce8f405935b9

plugin和loader作用的区别？






