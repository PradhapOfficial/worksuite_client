import React, { Component } from "react";
import { AddOpenAIPopUP } from "./AddOpenAIPopUP";
import "../../styles/openai/OpenAI.scss";
import { OpenAIChat } from "./OpenAIChat";
export class OpenAI extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="openAIContainer">
                <OpenAIChat />
            </div>
        );
    }
}