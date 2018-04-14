import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/news">新闻</Link></li> 
                    <li><Link to="/video">视频</Link></li> 
                </ul>
            </nav>
        )
    }
}
