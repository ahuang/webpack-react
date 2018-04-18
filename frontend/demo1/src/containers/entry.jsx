import React from 'react';
import './entry.scss';


const Entry = () => (
    <div>
        <nav>
            <ul className="nav">
                <li> <i className="icon-home" /> <a href="/">首页</a></li>
                <li> <i className="icon-bullhorn" /> <a href="/#/news">新闻</a></li>
                <li> <i className="icon-play" /> <a href="/#/video">视频</a></li>
            </ul>
        </nav>
    </div>
);

export default Entry;
