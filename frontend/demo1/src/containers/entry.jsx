import React from 'react';
import { Link } from 'react-router-dom';


export default class Entry extends React.Component {
    constructor(props){
        super(props);
        
    }
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/news">新闻</Link></li> 
                        <li><Link to="/video">视频</Link></li> 
                    </ul>
                </nav>
            </div>
        )
    }
}

