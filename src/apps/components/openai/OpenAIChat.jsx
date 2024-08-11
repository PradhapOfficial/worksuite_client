import React, { Component, createRef } from "react";
import {chat, getGeminiAIIntegrationDetails} from "../../actions/openai/openai";
export class OpenAIChat extends Component {
    constructor(props){
        super(props);
        this.queryRef = createRef();
        this.state = {
            content: "",
            integrationId: null
        }
    }

    componentDidMount = () =>{
        getGeminiAIIntegrationDetails(this.setIntegrationState);
    }

    setChatState = (message) =>{
        console.log("Mesage : "+JSON.stringify(message));
        this.setState({
            content: message
        });
    }

    setIntegrationState = (integrationId) =>{
        console.log("integrationId : "+JSON.stringify(integrationId));
        this.setState({
            integrationId: integrationId
        });
    }

    openAIChat = (event) => {
        console.log(this.queryRef.current.value);
       // event.onKeyDown
        if (event && event.key === 'Enter') {
            const payload = {
                content:this.queryRef.current.value
            }
            chat(payload, this.setChatState, this.state.integrationId);
        }
    }

    render(){
        return(
            <div className="openAIChatWindowContainer">
                <textarea className="openAIChatTopCon" defaultValue={this.state.content}></textarea>
                <div className="openAIChatQueryCont">
                    <textarea className="openAIChatBtmCon" type="text" placeholder="Ask your queries" ref={this.queryRef} onKeyPress={(event) => this.openAIChat(event)}/>
                </div>
            </div>
        );
    }
}