# 启动-dev
1. front: `npm run dev`   前端webpack-dev-server监听9001端口，提供server服务，前端webpack-dev-server proxy转发到后端5000端口
2. back: `npm run dev`  后端启动5001服务，提供api服务
3. 浏览器打开   `http://localhost:9001`

# 启动-prod
1. front: `npm run back`    前端资源打包，然后拷贝打包之后的dist到后端发布木
2. back: `npm run prod`  后端启动5001服务，提供server和api服务
3. 浏览器打开   `http://localhost:5001`


