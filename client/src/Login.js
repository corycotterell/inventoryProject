import React, { Component } from 'react';
import './App.css';
import { Card, Button, Input } from 'react-onsenui'
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <Card className="center">
                    <h1 className="login">Login</h1>
                    <Input
                        value={this.state.email}
                        onChange={(event) => { this.setState({ email: event.target.value }) }}
                        modifier='material'
                        placeholder='Email'
                        type="email"
                        required/>
                        <br/>
                        
                    <Input
                        value={this.state.password}
                        onChange={(event) => { this.setState({ password: event.target.value }) }}
                        modifier='material'
                        placeholder='Password'
                        type="password" />
                    <p></p>
                    <Button className="button-primary"onClick={this.handleClick}>Sign In</Button>
                    <Button className="button-secondary"onClick={this.handleClick}>Sign Up</Button>
                    <p className="invisible">h</p>
                </Card>
            </div>
        );
    }
}

export default Login;

