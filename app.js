//basic http server using node.js 

const http=require ('http');

function rqListener(req,resres){
    console.log(req);

}
const server=http.createServer(rqListener);
server.listen(3000);

/*
function using arrow fuction
rqListener=(req,res)=>{
    console.log(req);

server.listen(3000)
*/