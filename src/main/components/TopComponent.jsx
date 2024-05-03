import React, { Component } from "react";
export class TopComponent extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="topContainer">{ Date() }</div>
        );
    }
}