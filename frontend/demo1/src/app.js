import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Welcome from './containers/welcome.jsx';
import Entry from './containers/entry.jsx';
import News from './containers/news.jsx';
import Video from './containers/video.jsx';
import createStore from './store';
import './scss/index.scss';

const store = createStore();

console.log(`---process.env.NODE_ENV ${process.env.NODE_ENV} ---`);
if (process.env.NODE_ENV === 'development') {
    require('./mock/movie.js');
    require('./mock/user.js');
}

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Entry />
            <Router>
                <Switch>
                    <Route path="/" exact component={Welcome} />
                    <Route path="/news" component={News} />
                    <Route path="/video" component={Video} />
                </Switch>
            </Router>
        </div>
    </Provider>,
    document.getElementById('app'),
);
