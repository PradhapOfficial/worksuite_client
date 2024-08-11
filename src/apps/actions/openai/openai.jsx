import axios from 'axios';
import { Apps } from '../Constants';

export const CHAT_URL = `${window.isDevelopment ? "/worksuite" : ""}/api/v1/${window.orgId}/geminiai`;
export const GET_GEMINIAI_INTEGRATION_URL = `${window.isDevelopment ? "/worksuite" : ""}/api/v1/${window.orgId}/integration/${window.userId}/${Apps.GEMINI_AI_APP_ID}`;

export function chat(payload, callback, integrationId){
    axios.post(`${CHAT_URL}/${integrationId}`, JSON.stringify(payload),
    {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((resp)=>{
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
        console.log(error);
    })
}

export function getGeminiAIIntegrationDetails(setIntegrationIdCallback){
  axios.get(GET_GEMINIAI_INTEGRATION_URL).then((resp)=>{
    if(setIntegrationIdCallback && setIntegrationIdCallback instanceof Function){
      setIntegrationIdCallback(resp.data.integrationDetails.integrationId);
    }
  }).catch((error)=>{
    console.log(error);
  });
}
