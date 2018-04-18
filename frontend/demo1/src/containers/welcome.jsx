

import React from 'react';
// 连接store和react
import { connect } from 'react-redux';
import { appActions } from '../store/app/index';

import './welcome.scss';
import autumnPic from '../images/autumn.jpg';


class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userNameInput: '',
        };
        this.setUserName = this.setUserName.bind(this);
        this.userNameChange = this.userNameChange.bind(this);
    }

    componentWillMount() {
        // 异步请求初始化store.state.user信息
        this.props.getUserInfo();
    }

    setUserName() {
        const userId = this.props.currentUser.get('id');
        const newUserName = this.state.userNameInput;
        // 异步请求修改userName并设置store.state.user信息
        this.props.setUserName(userId, newUserName);
    }

    userNameChange(event) {
        this.setState({ userNameInput: event.target.value });
    }

    showUserInfo() {
        let userInfoContent = null;
        if (!!this.props.currentUser && this.props.currentUser.get('name')) {
            userInfoContent = (<strong>{this.props.currentUser.get('name')}(昵称: {this.props.currentUser.get('userName')})</strong>);
        }
        return userInfoContent;
    }

    render() {
        return (
            <div className="welcome-module">
                <h1>
                    hello {this.showUserInfo()}
                </h1>
                <p>
                    <input type="text" placeholder="请输入昵称" value={this.state.userNameInput} onChange={this.userNameChange} style={{ height: '30px' }} />
                    <button className="user-btn" onClick={this.setUserName} >设置用户名</button>
                </p>
                <div>
                    <p> 天气: 多云</p>
                    <p className="weather" />
                </div>
                <div>
                    <p> 风景图 </p>
                    <p> <img className="scene-img" src={autumnPic} alt="autumn" /> </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.app.get('currentUser'),
});
const mapDispatchToProps = dispatch => ({
    getUserInfo: () => dispatch(appActions.getUserInfo()),
    setUserName: (userId, userName) => dispatch(appActions.setUserName(userId, userName)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
