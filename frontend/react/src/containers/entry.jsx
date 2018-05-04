import React from 'react';
import '@/containers/entry.scss';


const Entry = () => (
    <div>
        <nav>
            <ul className="nav">
                <li> <i className="icon-home" /> <a href="/">Home</a></li>
                <li> <i className="icon-bullhorn" /> <a href="/#/news">News</a></li>
                <li> <i className="icon-play" /> <a href="/#/video">Vedio</a></li>
                <li>   <a href="/api/v1/user/logout"> 退出 </a></li>
                <li>   <a href="/#/login"> 登录 </a></li>
            </ul>
        </nav>
    </div>
);

export default Entry;
