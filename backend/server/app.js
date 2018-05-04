const path = require('path');
const views = require('koa-views');
const Koa = require('koa');
const koaBody = require('koa-body')
const app = module.exports = new Koa();
const staticServer = require('koa-static');
const staticCache = require('koa-static-cache');
const BackHost = process.env.HOST;
const BackPort = process.env.PORT;
const moment = require('moment');
const session = require('koa-session');

app.keys = ['some secret hurr'];
app.use(session(app));

app.use(koaBody());
// setup views, appending .ejs
// when no extname is given to render()
app.use(views(path.join(__dirname, 'dist'), {
  extension: 'html'
}));

app.use(staticCache(path.join(__dirname, 'dist'), {
  maxAge: 365 * 24 * 60 * 60
}))

app.use(staticServer(__dirname + '/dist'))


const user = {
  id: 1,
  name: 'back',
  userName: 'backName',
};



// render
app.use(async function (ctx) {
  console.log(`\r\n \r\n \r\n ### ${ctx.method} ${ctx.path} ${moment(new Date()).format()} ${ctx.session.user}`);

  

  if (ctx.path === '/') {
    await ctx.render('index');
  } else if (ctx.path === '/api/v1/movies') {
    return ctx.body = {
      code: 200,
      message: 'SUCCESS',
      result: [{
          name: 'back-电影1',
          score: 9
        },
        {
          name: 'bakc-电影2',
          score: 8
        },
      ],
    }
  } else if (ctx.path === '/api/v1/musics') {
    ctx.body = {
      code: 200,
      message: 'SUCCESS',
      result: [{
          name: 'yellow',
          score: 9
        },
        {
          name: '甜蜜蜜',
          score: 8
        },
      ],
    };
  } else if (ctx.path === '/api/v1/user/current') {
    ctx.body = {
      code: 200,
      message: 'SUCCESS',
      result: user,
    };
  } else if (ctx.path === '/api/v1/user/1') {
    console.log(ctx.request.body);
    user.userName = ctx.request.body.userName || 'default';
    ctx.body = {
      code: 200,
      message: 'SUCCESS',
      result: null,
    };
  } else if (ctx.path === '/api/v1/user/login') {
    const username = ctx.request.body.username;
    const password = ctx.request.body.password;
    // todo 简单校验
    if (!!username && !!password) {
      user.userName = username;
      ctx.session.user = username;
      ctx.body = {
        code: 200,
        message: 'SUCCESS',
        result: 'login ok !',
      };
    } else {
      ctx.body = {
        code: 200,
        message: 'FAIL',
        result: '用户名错误',
      };
    }
  } else if ( ctx.path === '/api/v1/user/logout' ){
    ctx.session.user = null;
    user.userName = null;
    ctx.redirect('/');
  }

});


// let port = process.argv[2] || 3000;
if (!module.parent) app.listen(BackPort, BackHost, () => {
  console.log(`server at http://${BackHost}:${BackPort}/`);
});