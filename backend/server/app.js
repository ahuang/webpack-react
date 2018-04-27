const path = require('path');
const views = require('koa-views');
const Koa = require('koa');
const koaBody = require('koa-body')
const app = module.exports = new Koa();
const staticServer = require('koa-static');
const staticCache = require('koa-static-cache');

app.use(koaBody());
// setup views, appending .ejs
// when no extname is given to render()
app.use(views(path.join(__dirname, 'dist'), { extension: 'html' }));

app.use(staticCache(path.join(__dirname, 'dist'), {
  maxAge: 365 * 24 * 60 * 60
}))

app.use(staticServer(__dirname + '/dist'))


const user = {
  id: 1,
  name: 'backName',
  userName: '名字来自back-API',
};



// render
app.use(async function(ctx) {
  console.log(ctx.path); 
  console.log(ctx.path === '/api/v1/movies'); 
  if(ctx.path === '/'){
    await ctx.render('index');
  }else if(ctx.path === '/api/v1/movies'){
    return ctx.body =  {
        code: 200,
        message: 'SUCCESS',
        result: [
            { name: 'back-电影1', score: 9 },
            { name: 'bakc-电影2', score: 8 },
        ],
    }
  }else if(ctx.path === '/api/v1/user/current'){
    ctx.body = {
      code: 200,
      message: 'SUCCESS',
      result: user,
    };
  }else if(ctx.path === '/api/v1/user/1'){
    console.log(ctx.request.body);
    user.userName = ctx.request.body.userName || 'default';
    ctx.body = {
        code: 200,
        message: 'SUCCESS',
        result: null,
    };
  }

});




let port = process.argv[2] || 3000;
if (!module.parent) app.listen(port, ()=>{
  console.log(`server at http://localhost:${port}/`);
});
