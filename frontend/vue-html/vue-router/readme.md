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

# 06.componet.reuse.html
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
=> 路由复用 响应路由参数的变化
https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96

如何实现不同路由对应同一组件实现组件reload呢？也就是打破组件复用？
1. componet :is 动态组件 比如在加个父组件，然后task组件根据路由参数来加载，其实就是把task组件变成了一个子组件


为什么切换模块，可以reload组件呢？

为什么切换模块，使用params会reload组件，但是使用query不会reload?




# nginx
`code  /usr/local/etc/nginx/nginx.conf `  修改nginx配置  
`sudo nginx -s reload`  重载nginx配置  
`sudo nginx -s stop && ningx`  重启nginx服务