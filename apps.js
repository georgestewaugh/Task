const http=require('http');

const server=http.createServer((req,res) =>{
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title> my code</title>My My Name is stewaugh</head>');
    res.write('<body><h1>Hello from my Node.js server</h1></body>');
     res.write('</html>');
    res.end();

         
});
server.listen(3000);

/*
function using method
const server=http.createServer((req,res) =>{
    console.log(req.method);
});
server.listen(8000);
*/ 