import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './containers/welcome.jsx';
import Entry from './containers/entry.jsx';
import News from './containers/news.jsx';
import Video from './containers/video.jsx';
import { Provider } from 'react-redux';
import createStore from './store';
const store = createStore();
import './scss/index.scss';

ReactDOM.render(
    <Provider  store={store}>  
        <div>
            <Entry></Entry>
            <Router>
                <Switch> 
                    <Route path="/" exact component={Welcome} />
                    <Route path="/news" component={News} />
                    <Route path="/video" component={Video} />
                </Switch> 
            </Router>
        </div>
    </Provider>,
    document.getElementById('app')
);