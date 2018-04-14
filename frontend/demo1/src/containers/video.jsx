import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <p>视频展示</p>
                <Link to="/">back</Link>
            </div>
        )
    }
}
