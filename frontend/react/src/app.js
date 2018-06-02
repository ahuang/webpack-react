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

import '@/test/babelTest.js';
import '@/test/babelFlowTest.js';

const store = createStore();

console.log(`---process.env.NODE_ENV ${process.env.NODE_ENV} ---`);
if (process.env.NODE_ENV === 'development') {
    require('./mock/movie.js');
    require('./mock/user.js');
}


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
