
import https from "node:https"
import axios from "npm:axios"

const OPENAI_API_HOST = "cn-sz-yd-plustmp2.natfrp.cloud";
// const OPENAI_API_HOST = "120.233.26.237";
const OPENAI_API_PORT = 48787

Deno.serve(async (request) => {
  const url = new URL(request.url);
  
  url.host = OPENAI_API_HOST;
  if(OPENAI_API_PORT){
    url.port = OPENAI_API_PORT
  }
  const headers = Object.fromEntries(request.headers)
  
  const data = await request.json()
  return axios({
            url: url.toString(),
            method: request.method,
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            }),
            headers: {
              "Content-Type": "application/json",
              Authorization: headers.authorization,
              "Accept-Encoding": "gzip, deflate",
              "Connection": 'keep-alive'
            },
            data,
          })
});
