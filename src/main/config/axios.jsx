import axios from "axios";

export const X_CSRF_TOKEN = 'X-CSRF-TOKEN';
export default function setAuthHeader(token) {
    if(token != null){
        if(!axios.defaults.headers.common.hasOwnProperty("X-CSRF-TOKEN")){
            axios.defaults.headers.common[X_CSRF_TOKEN] = token;
        }
    }
}