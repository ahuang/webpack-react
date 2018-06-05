import React from 'react';
import ReactDOM from 'react-dom';
import '@/scss/index.scss';
import AppRouter from '@/router/index.jsx';

// 测试flow文件
// import '@/test/babelTest.js';
// import '@/test/babelFlowTest.js';

// data mock文件
// console.log(`---process.env.NODE_ENV ${process.env.NODE_ENV} ---`);
if (process.env.NODE_ENV === 'development') {
    require('./mock/movie.js');
    require('./mock/user.js');
}

//  JSX语法需要babel-preset-react转译
ReactDOM.render(
    <AppRouter/>,
    document.getElementById('app'),
);


