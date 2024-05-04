import axios from 'axios';
export const CHAT_URL = "/worksuite/api/v1/8796290/openai/95591121/7845457649/64520202432";

// export function getChat(payload){
//     axios.post(OPENAI_CHAT_URL, JSON.stringify(payload)).then((resp)=>{
//         console.log(resp);
//     }).catch((error)=>{
//         console.log(error);
//     });
// }

export default function chat(payload, callback){
    axios.post(CHAT_URL, JSON.stringify(payload),
    {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((resp)=>{
        console.log(resp.data);
        if(callback && (callback instanceof Function)){
            let choices = resp.data.choices;
            let message = "";
            choices.map((choice)=>{
                message = " " + choice.message.content;
            })
            console.log("mesage from axios : "+JSON.stringify(message));
            callback(message);
        }
    }).catch((error)=>{
        console.log(console.error());
    })
}