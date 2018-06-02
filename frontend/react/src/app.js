import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Welcome from '@/containers/welcome.jsx';
import Entry from '@/containers/entry.jsx';
import News from '@/containers/news.jsx';
import Video from '@/containers/video.jsx';
import Login from '@/containers/login.jsx';
import createStore from '@/store';
import '@/scss/index.scss';

const store = createStore();

console.log(`---process.env.NODE_ENV ${process.env.NODE_ENV} ---`);
if (process.env.NODE_ENV === 'development') {
    require('./mock/movie.js');
    require('./mock/user.js');
}

//  箭头函数语法需要babel-preset-env转译
const example = {
    normal: function() { console.log('normal this: ', this); },
    arrow: () => { console.log('arrow this: ', this); },
    shorthand() { console.log('shorthand this: ', this); }
};
new example.normal();
new example.arrow();
new example.shorthand();


//  JSX语法需要babel-preset-react转译
ReactDOM.render(
    <Provider store={store}>
        <div>
            <Entry />
            <Router>
                <Switch>
                    <Route path="/" exact component={Welcome} />
                    <Route path="/news" component={News} />
                    <Route path="/video" component={Video} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        </div>
    </Provider>,
    document.getElementById('app'),
);
