import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import entry from './containers/entry.jsx';
import news from './containers/news.jsx';
import video from './containers/video.jsx';

ReactDOM.render(
    <div>
        <h1> hello demo111 </h1>
        <Router>
            <Switch> 
                <Route path="/" exact component={entry} />
                <Route path="/news" component={news} />
                <Route path="/video" component={video} />
            </Switch> 
        </Router>
    </div>,
    document.getElementById('app')
);