import axios from 'axios';
import setAuthHeader from '../../../main/config/axios';

// export const CHAT_URL = "/worksuite/api/v1/8796290/openai/95591121/7845457649/64520202432";
export const CHAT_URL = `${window.isDevelopment ? "/worksuite" : ""}/api/v1/8796290/geminiai/95591121/7845457650/87253520140`;

export default function chat(payload, callback){
    axios.post(CHAT_URL, JSON.stringify(payload),
    {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((resp)=>{
        console.log(resp.headers);
        
        if(callback && (callback instanceof Function)){
            // let choices = resp.data.choices;
            // let message = "";
            // choices.map((choice)=>{
            //     message = " " + choice.message.content;
            // })

            let message = resp.data.candidates[0].content.parts[0].text;
            callback(message);
        }
    }).catch((error)=>{
        console.log(console.error());
    })
}