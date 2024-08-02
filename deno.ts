const OPENAI_API_HOST = "cn-sz-yd-plustmp2.natfrp.cloud";
const OPENAI_API_PORT = "48787"

Deno.serve(async (request) => {
  const url = new URL(request.url);
  
  url.host = OPENAI_API_HOST;
  if(OPENAI_API_PORT){
    url.port = OPENAI_API_PORT
  }
  const newRequest = new Request(url.toString(), {
    headers: request.headers,
    method: request.method,
    body: request.body,
    redirect: "follow",
  });
  return await fetch(newRequest);
});
