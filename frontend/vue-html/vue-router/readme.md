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

# 06.nest.route.html
嵌套路由

# 07.break.component.reuse.html
# 08.break.component.reuse.html
# 09.break.component.reuse.html
不同路由同一组件，vue-router默认会路由复用  
有些场景需要打破这种路由复用  
07的思路是利用router-view的key属性，watch路由变化时更新key，组件能重新加载，打破组件复用  
08的思路是利用动态组件，watch组件变化时更新子组件，前后都是同一组件那么就需要一个临时loading组件完成切换，从而唤起组件重新加载，打破组件复用。  
09的思路是利用父子组件，watch组件变化时通过v-if更新子组件，从而唤起组件重新加载，打破组件复用。  




# nginx
`code  /usr/local/etc/nginx/nginx.conf `  修改nginx配置  
`sudo nginx -s reload`  重载nginx配置  
`sudo nginx -s stop && ningx`  重启nginx服务