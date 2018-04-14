import React from 'react';
import { Link } from 'react-router-dom';
import Immutale from 'immutable';

export default class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titles: Immutale.fromJS(['放假通知', '天气预报', '交通状况'])
        }
    }

    showTitle(){
        let titleList = [];
        for(let i=0; i<this.state.titles.size; i++){
            titleList.push(<li key={i}>{this.state.titles.get(i)}</li>);
        }
        return (
            <ul>{titleList}</ul>
        )
    }

    render() {
        return (
            <div>
                <p>新闻报道</p>
                {this.showTitle()}
                <Link to="/">back</Link>
            </div>
        )
    }
}
