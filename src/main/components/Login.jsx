import React, { Component } from "react";
import { login } from "../actions/actions";
import '../styles/Main.scss';
export class Login extends Component {
    constructor(props){
        super(props)

         this.userNameRef = React.createRef();
        
         this.passWordRef = React.createRef();
    }

    login = () => {
        let userName = this.userNameRef.current.value;
        let passWord = this.passWordRef.current.value;
        login(userName, passWord);
    }

    render(){
        return(
            <div id="loginContainer">
                <div class="userNameCon">
                    <div class="userNameLbl"></div>
                    <input type="text" ref={this.userNameRef}/>
                </div>
                <div class="passCon">
                    <div class="passLbl"></div>
                    <input type="text" ref = {this.passWordRef} />
                </div>
                
                <input type="button" value="Submit" onClick={() => this.login()}/>
            </div>
        );
    }
}