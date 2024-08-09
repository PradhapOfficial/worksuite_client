import axios from "axios";
import setAuthHeader from "../config/axios";

export const LOGIN_URL = '/worksuite/api/v1/login';

export function login(userName, passWord){
    axios.get(LOGIN_URL + `?userName=${userName}&passWord=${passWord}`).then((resp)=>{
        if(resp.status === 200){
            setAuthHeader(resp);
            homePage();
        }
    }).catch((error)=>{
        console.log(JSON.stringify(error));
    });
}

export function homePage(){
    axios.get("/worksuite/").then((resp)=>{
    }).catch((error)=>{
        console.log(JSON.stringify(error));
    });
}