const moment = require('moment');

module.exports = () => {
    return async (ctx, next) => {
        console.log(`\r\n \r\n \r\n### ${ctx.method} ${ctx.path} ${moment(new Date()).format()} session:user=${ctx.session.user}`);
        if(!ctx.session.user){
            const currentPath = ctx.path;
            if(currentPath.indexOf('api') > -1 && currentPath.indexOf('login') < 0  && currentPath.indexOf('logout') < 0){
                console.log('LogMark: case1 need login but not yet...');
                return ctx.body = {
                    code: 301,
                    message: 'Pemission',
                    result: null,
                  };
            }
            console.log('LogMark: case2 not need login ...');
        }else{
            console.log('LogMark: case3 already login...');
        }
        return await next();
    }
}