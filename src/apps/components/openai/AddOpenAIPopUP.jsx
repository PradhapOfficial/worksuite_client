import React, { Component } from "react";
export class AddOpenAIPopUP extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="addOpenAIContainer">
                <div className="openAIPaddingCont">
                    <div className="apiKeyCont">
                        <div className="apiKeyLbl">Api Key</div>
                        <input className="apiKeyInpt" type="text" />
                    </div>
                    <div className="buttonContainer">
                        <div className="cancelBtn">Cancel</div>
                        <div className="saveBtn">Save</div>
                    </div>
                </div>
            </div>
        );
    }
}