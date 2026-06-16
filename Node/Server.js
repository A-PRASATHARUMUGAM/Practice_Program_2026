/*
1.req.url - It is return the current URL 
2.req.method - It is return the which type of Method 

*/


// Request 
const http = require('http');

const server=http.createServer((req,res)=>{
    console.log("Request Made");
    console.log(req.url);
    console.log(req.method);
    
    // res.setHeader('Content-Type','text/plain');
    // res.write("Hello world ");
    res.setHeader('Content-Type','text/html');
    res.write("<h1>Hello world </h1>");
    res.end()
})


server.listen(3000,'localhost',()=>{

    console.log("Server is Listening");

});

