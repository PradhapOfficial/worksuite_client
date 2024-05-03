import React, { Component } from "react";
import { WORKSUITE_TABS_LIST } from "../actions/Constants";
import "../styles/Main.scss";
export class LeftNavigation extends Component {
    constructor(props){
        super(props)
    }
   
    updateCurrentTab = (tab) => {
        this.props.updateCurrentTab(tab);
    }

    render(){
        return(
            <div className="leftContainer">
                <ul className="worksuiteTabs">
                    {
                        WORKSUITE_TABS_LIST.map((tab, i)=>{
                            return(
                                <li className={"worksuiteTab " + (this.props.currentTab === tab ? "currentTabColor": "")} key={i} onClick={() => this.updateCurrentTab(tab)}>{tab}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}