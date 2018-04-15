import React from 'react';
import Immutable from 'immutable';
// 连接store和react
import { connect } from 'react-redux';
import { appActions } from '../store/app/index.js';

import './welcome.scss';
import autumnPic from '../images/autumn.jpg';


class Welcome extends React.Component {
    constructor(props){
        super(props);
        
    }
    setCurrentUser(){
        this.props.setCurrent(Immutable.fromJS({id: 2, name: '小白'}));
    }
    render() {
        return (
            <div className = "welcome-module">
                <h1> 
                    hello  {this.props.currentUser.get('name')}  
                    <button className = "user-btn" onClick={this.props.setCurrent.bind(this, Immutable.fromJS({id: 2, name: '小白'}))} >设置用户名</button>
                </h1>               
                <div>
                    <p> 天气: 多云</p>
                    <p className="weather"></p>
                </div>
                
                <div> 
                    <p> 风景图 </p>
                    <p> <img className="scene-img" src={autumnPic} alt="autumn"/> </p>
                </div>

                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.app.get('currentUser')
});
const mapDispatchToProps = dispatch => ({
    setCurrent: userInfo => dispatch(appActions.setCurrentUser(userInfo))
});
export default connect(mapStateToProps,mapDispatchToProps)(Welcome)