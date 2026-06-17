const exp = require('express')
const app= exp() 
app.listen(3000)


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
    res.status(404).sendFile('./docs/index.html',{root:__dirname});
})

// { root: 'D:\\Program\\Practice_Program_2026\\Node' }
// console.log({root:__dirname})
   

