import React, { Component } from "react";

import {WORKSUITE_TABS} from "../../main/actions/Constants"
import "../styles/Users.scss";
import { UserListing } from "./UserListing";
export class Users extends Component {
    constructor(props){
        super(props);
    }

    render(){
        if(!(this.props.currentTab == WORKSUITE_TABS.USERS)){
            return null;
        }
        return(
            <div className="usersContainer">
                <UserListing />
            </div>
        );
    }
}