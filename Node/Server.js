/*
1.req.url - It is return the current URL 
2.req.method - It is return the which type of Method 
3.res.end - It is mention the response is end 
4.
*/


// Request 
const http = require('http');
const fs=require('fs')

const server=http.createServer((req,res)=>{

      
    // console.log("Request Made");
    // console.log(req.url);
    // console.log(req.method);

    // -- Sending the Response 
    // res.setHeader('Content-Type','text/plain');
    // res.write("Hello world ");
    // res.setHeader('Content-Type','text/html');
    // res.write("<h1>Hello world </h1>");
    //   res.end(data)



    //-- Reading the HTML file and Retrun Response HTML file
    res.setHeader('Content-Type','text/plain');
    fs.readFile("./docs/index.html",(err,data)=>{

        if(err){
            console.log(err.message);
            res.end
        }else{
            res.end(data)
        }
        
 
    })

})


server.listen(3000,'localhost',()=>{

    console.log("Server is Listening");

});

