const path = require('path');
const views = require('koa-views');
const Koa = require('koa');
const app = module.exports = new Koa();
const staticServer = require('koa-static');

// setup views, appending .ejs
// when no extname is given to render()
app.use(views(path.join(__dirname, '/dist'), { extension: 'html' }));

app.use(staticServer(__dirname + '/dist'))


// render
app.use(async function(ctx) {
  console.log(ctx.path);
  await ctx.render('index');
});

let port = process.argv[2] || 3000;
if (!module.parent) app.listen(port, ()=>{
  console.log(`server at http://localhost:${port}/`);
});
