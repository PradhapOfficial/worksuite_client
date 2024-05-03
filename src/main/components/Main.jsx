import React, { Component } from "react";

import '../styles/Main.scss';
import { LeftNavigation } from "./LeftNavigation";
import { TopComponent } from "./TopComponent";
import {WORKSUITE_TABS} from "../actions/Constants";
import { Users } from "../../users/components/Users";
import { Apps } from "../../apps/components/Apps"
export class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentTab: WORKSUITE_TABS.HOME
        }
    }

    updateCurrentTab = (currentTab) => {
        console.log("updateCurrentTab :: "+currentTab);
        this.setState({
            currentTab: currentTab
        });
    }

    // getCurrentTabComponents = () => {
    //     switch(this.state.currentTab){
    //         case WORKSUITE_TABS.USERS:
    //             <Listing/>
    //         case WORKSUITE_TABS.APPS:
    //             <div>Apps Page</div>
                
    //         default:
    //             <div>Home Page</div>
    //     }
    // }

    render(){
        return(
            <div className="mainContainer">
                <TopComponent />
                <div className="bottomContainer">
                    <LeftNavigation updateCurrentTab = {this.updateCurrentTab} currentTab = {this.state.currentTab}/>
                    <div className="rightContainer">
                        {
                           this.state.currentTab === WORKSUITE_TABS.HOME
                            &&
                            <div>Home Page</div>
                       }
                       {
                           this.state.currentTab === WORKSUITE_TABS.USERS
                            &&
                            <Users currentTab = {this.state.currentTab}/>
                       }
                       {
                           this.state.currentTab === WORKSUITE_TABS.APPS
                            &&
                            <Apps currentTab = {this.state.currentTab}/>
                       }
                    </div>
                </div>
            </div>
        );
    }
}