import React, { Component } from "react";

import {WORKSUITE_TABS} from "../../main/actions/Constants"
import "../styles/Apps.scss";
export class Apps extends Component {
    constructor(props){
        super(props);
    }

    render(){
        if(!(this.props.currentTab == WORKSUITE_TABS.APPS)){
            return null;
        }
        return(
            <div className="appsContainer">Apps Container</div>
        );
    }
}