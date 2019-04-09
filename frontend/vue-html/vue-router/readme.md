# start
https://router.vuejs.org/installation.html


# download
https://unpkg.com/vue-router@3.0.1/dist/vue-router.js

# 01.base.html
基本使用

# 02.match.html
匹配规则

# 03.query.params.html    
区分query和params
区分name和path

# 04.hash.array.html      
hash上添加数组信息

# 05.exact.html  
exact属性含义

# 06.query.params.2.html 
原本以为的区别
```
params和query的另一个区别是
使用params属于路由name部分,query只是一个参数
因此比如 获取指定模块下(有id)的所有tasks，
如果使用params，则路由是#/tasks/module/1 ，切换路由时，比如#/tasks/module/1->#/tasks/module/2，tasks组件会reload(先destroy在create)
如果使用query，则路由是#/tasks?module=1，切换路由时，比如#/tasks?module=1->#/tasks?module=2，tasks组件不会reload
有些场景需要reload，比如清空table的filters，reload之后，会直接清空filters，不需要人工清理。
```
实际例子中有2个疑问
1. 为什么切换task时，并没有调用beforeDestroy，也就是说组件没有reload
2. 为什么不同方式跳转时，url上显示不同？





# nginx
`code  /usr/local/etc/nginx/nginx.conf `  修改nginx配置  
`sudo nginx -s reload`  重载nginx配置  
`sudo nginx -s stop && ningx`  重启nginx服务