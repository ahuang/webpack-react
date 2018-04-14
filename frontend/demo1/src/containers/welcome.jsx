import React from 'react';
import Immutable from 'immutable';
// 连接store和react
import { connect } from 'react-redux';
import { appActions } from '../store/app/index.js';

class Welcome extends React.Component {
    constructor(props){
        super(props);
        
    }
    setCurrentUser(){
        this.props.setCurrent(Immutable.fromJS({id: 2, name: '小白'}));
    }
    render() {
        return (
            <div>
                <h1> hello  {this.props.currentUser.get('name')} </h1>               
                <button onClick={this.props.setCurrent.bind(this, Immutable.fromJS({id: 2, name: '小白'}))} >设置用户名</button>
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