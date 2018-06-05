import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Entry from '@/containers/entry.jsx';
import Welcome from '@/containers/welcome.jsx';
import News from '@/containers/news.jsx';
import Video from '@/containers/video.jsx';
import Login from '@/containers/login.jsx';
import createStore from '@/store';



const appRouter = () => (
    <Provider store={createStore()}>
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
    </Provider>
);

export default appRouter;


