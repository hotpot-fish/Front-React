import React from 'react';
import {Link} from "react-router-dom";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            username:"",
            password:""
        }
    }

    handle_input_username=(event)=>{
        this.setState({
            username:event.target.value
        });
    }

    handle_input_pwd=(event)=>{
        this.setState({
            password:event.target.value
        });
    }

    login_info=()=>{
        const {username,password}=this.state;
        console.log(username);
        console.log(password);
    }


    render(){
        return(
                <div id="login-box" >
                    <form className="box" id="login">
                        <h1>Login</h1>
                        <div className="form">
                            <div className="item">
                                <input
                                    value={this.state.username}
                                    onChange={this.handle_input_username}
                                    className="input is-danger is-inverted" type="" placeholder="请输入用户名" />
                            </div>
                            <div className="item">
                                <input
                                    value={this.state.password}
                                    onChange={this.handle_input_pwd}
                                    className="input is-danger is-inverted" type="password" placeholder="请输入密码" />
                            </div>
                        </div>
                        <div className="buttons">
                            <button className="button is-danger is-inverted" onClick={this.login_info}>登录</button>
                            <Link to={"/register"}>
                                <button className="button is-danger is-inverted" >注册</button>
                            </Link>
                        </div>
                    </form>
                </div>
        );
    }
}