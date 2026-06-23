/*
1. get - It is get method  
2. use - It is using for 404 Response you can't found any route at time using to retun 
3. Middleware -  Browser -> Request -> Server(Middleware) -> Response -> Browser
4. 

*/ 
const exp = require('express')
const morgan = require('morgan')
const app= exp() 
app.listen(3000)
//Morgan
app.use(morgan('dev'));

//Middleware - 1 
app.use((req,res,next)=>{
    console.log('Request Recieved');
    console.log(req.host);
    console.log(req.path);
    console.log(req.method);
    next();
});

app.use((req,res,next)=>{
    console.log("Middleware 2");
    next()
});


app.get('/',(req,res)=>{
    // res.status(200).send("<h1>Hello world</h1>")
    res.status(200).sendFile("./docs/index.html",{root: __dirname});
})

// app.get("/join",(req,res)=>{

//     res.status(200).sendFile("./docs/about.html",{root:__dirname});
// })

// Redirect 
app.get("/join",(req,res)=>{
        res.redirect('/joined')

});

app.use((req,res)=>{
    res.status(404).sendFile('./docs/NotFound.html',{root:__dirname});
})


// { root: 'D:\\Program\\Practice_Program_2026\\Node' }
// console.log({root:__dirname})
   

