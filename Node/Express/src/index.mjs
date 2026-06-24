import express, { request } from "express";
import cookieParser from "cookie-parser";
import session from 'express-session';

// Passport js 
import {Strategy as LocalStrategy} from "passport-local";

// After create the validationSchema 
import { createUserValidationSchema } from "./utils/validationSchemas.mjs";
import {validationResult,checkSchema,matchedData} from "express-validator"
// UserRouter
import userRoute from "./routes/users.mjs";
import passport from "passport";

// In this line mean create the express app
const app = express();


// Middleware-2 -> Incomeing request automatically to json type 

app.use(express.json());


// UserRoute Call this place  
app.use(userRoute)

// Import the cookie Parser 
app.use(cookieParser("Hello"));


// Passport js 
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy((cus_name, password, done)=>{

    const customers= customer.find((cus)=>cus.cus_name === cus_name);

    if(!user){
        return done(null,false,{message:"Invalid Customer Name"});
    }
    if(user.password !== password){
        return done(null, false,{message: "Incorrect Password"})
    }
    return done(null,user);


}));



// Import session and user here 
app.use(
    session({
        secret: "romba secret",
        //it is value have in the page at the time stored other then not 
        saveUninitialized:false, 
        //it is not resave the data because multiple times you open and close the browser 
        resave:false,
        cookie:{
            maxAge: 60000 * 60, 
        }
    }
));

 



// It is port Number in your browser 
const PORT = 3000;


//It is Every Request going to Activated 
app.listen(PORT,()=>{ 
    console.log(`App is Running on Port ${PORT}`);
});

//Middleware -3 -> It is Global Middleware 
const getUserIndexById = (req,res, next)=>{ 

    const userId = parseInt(req.params.id);
    if(isNaN(userId)){
        return res.status(400).send({msg:"Bad Request"});   
    }
    const userIndex = users.findIndex((user)=>user.id === userId);

    if(userIndex === -1 ){
        return res.status(400).send({msg:"User Not Found"})
    }
    req.userIndex = userIndex;
    next();
} 


//Inside using callback name is request handler 

// GET
app.get("/", (req,res)=>{
    // Cookie names cannot contain spaces.
    res.cookie("user","Admin",{maxAge: 60000 *60, signed:true});
    // console.log(req.session);
    console.log(req.session.id )
    req.sessionStore.get(req.session.id,(err,sessionData)=>{
        if(err){
            console.log(err);
        }else{
            console.log(sessionData);
        }
    })
      res.send({
        name:"Prasath",
        age:22 
      })
    
})
// GET for cookies 
app.get("/cookies", (req,res)=>{
    // console.log(req.headers.cookie);
    console.log(req.signedCookies);  

    if(req.signedCookies.user && req.signedCookies.user === "Admin"){
       return res.send(data)
    }else{
        return res.send("it is not a Admin")
    }

})


// User Data 
const users=[
    {id:1,name:"Prasath"},
    {id:2,name:"Vignesh"},
    {id:3,name:"Sabari"},
    {id:4,name:"Kandhan"}
] 


//Get All Users 
// app.get("/api/users",(req,res)=>{

//     res.status(200).send(users);

// })

//Get ID to Users and Route Params 
app.get("/api/users/:id",(req,res)=>{

    const id=parseInt(req.params.id)
    
    if(isNaN(id)){
        return res.status(400).send({
            msg:"It is Bad Request and Invalid Error"
        });
    }

    // Check this logic how it's work
    const user = users.find((user)=>user.id === id);

    if(user){
        res.send(user);
    }else{
        res.status(404).send({msg: "User is not found"});
    }
    
    
})


// ---- Query Params ----  


//localhost:3000/data?filter=name&age=22

app.get("/api/data",(req,res)=>{

        // console.log(req.query);
        // [Object: null prototype] { filter: 'user_name', value: 'true' }

    //Object Destructuring
    let {query:{filter,value}}=req;

    console.log(filter,value);

    res.send(users.filter(((user)=>user[filter].toLowerCase().includes(value))));
    
})


const product =[
    {id:1, product_name: "Iphone 16"},
    {id:1, product_name: "Iphone 17"},
    {id:1, product_name: "Iphone 18"},
    {id:1, product_name: "Iphone 19"}
]


app.get("/api/products",(req,res)=>{
        res.status(200).send(product); 

})


// Post Requets - Json convert middleware is required 

//1. Thunder Client instead using Postman it is VS Code Extension 


app.post("/api/users",(req,res)=>{
 
    // console.log(req.body);
    // users.push(req.body)
    // res.status(201).send(users); 

      const {body}= req
      const newUser={id:users[users.length-1].id+1, ...body};
      users.push(newUser);
       res.status(200).send(users);
       
});



//Put Request - It is update the value 

app.put("/api/users/:id",(req,res)=>{

        const userId=parseInt(req.params.id);

        if(isNaN(userId)){
            res.status(400).send("Bad Request")
        }

        const userIndex=users.findIndex((user)=>user.id === userId);

        if(userIndex === -1){
            return res.status(404).send({msg:"User is not Found"})
        }

        const {body} =req;
        users[userIndex]= {id:userId,...body};
        
        return res.status(200).send({msg:"User Updated"})
 
});



// Patch Request - You can update specifce one 

app.patch("/api/users/:id",(req,res)=> {

      const userId=parseInt(req.params.id);

        if(isNaN(userId)){
            res.status(400).send("Bad Request")
        }

        const userIndex=users.findIndex((user)=>user.id === userId);

        if(userIndex === -1){
            return res.status(404).send({msg:"User is not Found"})
        }

        const {body} =req;
        users[userIndex]={ ...users[userIndex],...body}

        return res.sendStatus(200)
          
})



// Delete Request 
app.delete("/api/users/:id", getUserIndexById, (req,res)=>{
    // Middleware - 3 
    const userIndex = req.userIndex

    console.log(userIndex);
    
    // const userId=parseInt(req.params.id);

    // if(isNaN(userId)){

    //     res.status(400).send("Bad Request")

    // }
    // const userIndex=users.findIndex((user)=>user.id === userId);

    //  if(userIndex === -1){
    //         return res.status(404).send({msg:"User is not Found"})
    //     }

    users.splice(userIndex,1);
    res.sendStatus(200)

})



const data = [  
    {id:1 ,user_name: "prasath ", age:22, gender:"Male"},
    {id:2, user_name: "vignesh ", age:39, gender:"Male"},
    {id:3, user_name: "sabari ", age:35, gender:"Male"},
    {id:4, user_name: "Arun ", age:32, gender:"Male"}
]

// New Post for Validation and schema 

app.get("/api/user",(req,res)=>{
     req.session.visited = true; 

     console.log(req.session.id);
      res.status(200).send(data);
})

app.post("/api/user",
    checkSchema(createUserValidationSchema),

    (req,res)=>{

        const result = validationResult(req);


        console.log(result);

        if(!result.isEmpty()){
            return res.status(400).send({error:result.array()});

        }
    // console.log(req['express-validator#contexts']);
     
    data.push(matchedData(req))
    res.status(201).send(data); 


    //   const newUser={id:data[data.length-1].id+1, ...body};
    //   users.push(newUser);
    //   res.status(201).send(data);
       

})



// Passport js Implemented 

const customer=[

    {id:1, cus_name:"Prasath", age:"22",password:"123"},
    {id:2, cus_name:"Vignesh", age:"39",password:"1234"},
    {id:3, cus_name:"Sabari", age:"35",password:"12345"},
    {id:4, cus_name:"Kandhan", age:"21",password:"123456"}
]


//  Get for Passport 

app.post("/api/login",(req,res,next)=>{



})