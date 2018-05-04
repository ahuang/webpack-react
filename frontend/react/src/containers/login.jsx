import React from 'react';
import UserService from '@/services/userService.js';
import '@/containers/login.scss';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeUserName(event) {
        this.setState({ username: event.target.value });
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit() {
        UserService.doLogin(this.state.username, this.state.password).then((data) => {
            if (data.code === 200) {
                if (data.message === 'SUCCESS') {
                    window.location.href = '/';
                } else {
                    console.log(data.result);
                }
            }
        }, (error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="m-login">
                <form className="wrap" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <label htmlFor="username" className="inf">
                            用户名：<input id="username" type="text" className="ipt" value={this.state.username} onChange={this.handleChangeUserName} />
                        </label>
                    </div>
                    <div className="row">
                        <label htmlFor="password" className="inf">
                            密&nbsp;&nbsp;&nbsp;码：<input id="password" type="password" className="ipt" value={this.state.password} onChange={this.handleChangePassword} />
                        </label>
                    </div>
                    <div className="row sub">
                        <input type="submit" value="登 录" className="btn" />
                    </div>
                </form>
            </div>
        );
    }
}
