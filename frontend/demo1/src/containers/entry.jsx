import React from 'react';
import { Link } from 'react-router-dom';
import './entry.scss';

export default class Entry extends React.Component {
    constructor(props){
        super(props);
        
    }
    render() {
        return (
            <div>
                <nav>
                    <ul className="nav">
                        <li><a href="/">首页</a></li> 
                        <li><a href="/#/news">新闻</a></li> 
                        <li><a href="/#/video">视频</a></li> 
                    </ul>
                </nav>
            </div>
        )
    }
}

