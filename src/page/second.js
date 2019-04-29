// 父子通信，兄弟通信
import React, { Component } from "react";
import { Form, Icon, Input, Button,Checkbox } from 'antd';
class Userlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newUser: ''
        }
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerClick = this.handlerClick.bind(this);
    }
    handlerChange(e) {
        this.setState({
            newUser: e.target.value
        })
    }
    // 通过props 调用父组建的方法新增用户
    handlerClick() {
        if(this.state.newUser && this.state.newUser.length> 0) {
            this.props.onAddUser(this.state.newUser);
        }
    }
    // 通过父组建的方法设置当前选中的用户
    handlerUserClick(userId) {
        this.props.onSetCurrentUser(userId);
    }
    render() {
        return (
            <div>
                <ul className="user-list">
                    {
                        this.props.users.map( (user)=> {
                            return (
                                <li 
                                    onClick={this.handlerUserClick.bind(this, user.id)}
                                >
                                    <span>{user.name}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <input onChange={this.handlerChange} value={this.state.newUser}/>
                <button onClick={this.handlerClick}>新增</button>
            </div>
        )
    }
    
}

export default Userlist;