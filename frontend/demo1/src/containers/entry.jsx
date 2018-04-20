import React from 'react';
import './entry.scss';


const Entry = () => (
    <div>
        <nav>
            <ul className="nav">
                <li> <i className="icon-home" /> <a href="/">home</a></li>
                <li> <i className="icon-bullhorn" /> <a href="/#/news">news</a></li>
                <li> <i className="icon-play" /> <a href="/#/video">vedio</a></li>
                <li> <i className="icon-play" /> <a href="/#/">todo</a></li>
            </ul>
        </nav>
    </div>
);

export default Entry;
