import axios from "axios";

export const X_CSRF_TOKEN = 'X-CSRF-TOKEN';
export default function setAuthHeader(resp) {
    console.log(`Response :: ${JSON.stringify(resp)}, resp.headers.get(X_CSRF_TOKEN) :: ${resp.headers.get(X_CSRF_TOKEN)}`);
    let token = resp.headers.get(X_CSRF_TOKEN);
    if(token != null){
        axios.defaults.headers.common[X_CSRF_TOKEN] = token;
    }
}