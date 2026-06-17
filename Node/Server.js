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
    // res.setHeader('Content-Type','text/plain');
    // fs.readFile("./docs/index.html",(err,data)=>{

    //     if(err){
    //         console.log(err.message);
    //         res.end
    //     }else{
    //         // Type 1 for one value 
    //         // res.end(data)

    //         // Type 2 
    //         res.write(data);
    //         res.end(data);
    //     }
        
 
    // })


    //-- Request URL To Send the page 
    res.setHeader('Content-Type', 'text/html')

    const reqdata= req.url;

    if(reqdata==="/about"){

        fs.readFile("./docs/about.html",(err,data)=>{
            if(err){
                console.log(err.message)
                res.end()
            }else{
                res.statusCode =201; 
                res.write(data);
                res.end();
                
            }

        })

    } else if(reqdata==="/service"){

        fs.readFile("./docs/service.html",(err,data)=>{
            if(err){
                console.log(err.message)
                res.end()
            }else{

                res.write(data);
                res.end();
                
            }

        });

    }else if (reqdata=="/home"){
        res.statusCode = 301
        res.setHeader('Location','/')
        res.end()
    


    }
    else{
        res.statusCode = 404;
        res.write("Page Not Found");
        res.end()
    }
    
    


})


server.listen(3000,'localhost',()=>{

    console.log("Server is Listening");

});

