import React, { Component } from "react";
import {WORKSUITE_TABS} from "../../main/actions/Constants"
import { USER_LIST_HEADERS } from "../actions/Constants";
export class UserListing extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="userListingContainer inheritHAndW">
                <div className="usrListHeaders">
                    {
                        USER_LIST_HEADERS.map((header, i)=>{
                            return(<div className="usrListHeader" key = {i}>{header}</div>
                        )})
                    }
                </div>
                <div className="usrListRecords">
                    <div className="unameCont">
                        <div className="dispNameCont">Pradhap</div>
                        <div className="emailIdCont">pradhap@mail.com</div>
                    </div>

                    <div className="uroleCont">Super Admin</div>

                    <div className="ustatusCont">Active</div>

                    <div className="actionsCont">
                        <div className="editCont">edit</div>
                        <div className="deleteCont">delete</div>
                    </div>
                </div>
            </div>
        );
    }
}