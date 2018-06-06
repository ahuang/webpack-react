import React from 'react';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Entry from '@/containers/entry.jsx';
import createStore from '@/store';
// // 没有动态加载方案
// import Welcome from '@/containers/welcome.jsx';
// import News from '@/containers/news.jsx';
// import Video from '@/containers/video.jsx';
// import Login from '@/containers/login.jsx';


// 动态加载方案
// 高阶组件，统一处理loading和error
const MyLoadingComponent = ({ isLoading, error }) => {    
    if (isLoading) { // Handle the loading state
        return <div>Loading...</div>;
    }else if (error) { // Handle the error state
        console.log(error);
        return <div>Sorry, there was a problem loading the page.</div>;
    }else {
        return null;
    }
};

// // 按路由拆分代码
const Login = Loadable({
    loader: () => import('@/containers/login.jsx'),
    loading: MyLoadingComponent
});
const Welcome = Loadable({
    loader: () => import('@/containers/welcome.jsx'),
    loading: MyLoadingComponent
});

const News = Loadable({
    loader: () => import('@/containers/news.jsx'),
    loading: MyLoadingComponent
});

const Video = Loadable({
    loader: () => import('@/containers/video.jsx'),
    loading: MyLoadingComponent
});




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


