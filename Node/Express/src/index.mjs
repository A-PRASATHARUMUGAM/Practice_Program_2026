import express from "express";

// In this line mean create the express app
const app = express();

// It is port Number in your browser 
const PORT = 3000;

//It is Every Request going to Activated 
app.listen(PORT,()=>{
    console.log(`App is Running on Port ${PORT}`);
});



// Middleware-2 -> Incomeing request automatically to json type 

app.use(express.json());
 
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

      res.send({
        name:"Prasath",
        age:22
      })
    
})


// User Data 
const users=[
    {id:1,name:"Prasath"},
    {id:2,name:"Vignesh"},
    {id:3,name:"Sabari"},
    {id:4,name:"Kandhan"}
]


//Get All Users 
app.get("/api/users",(req,res)=>{

    res.status(200).send(users);

})

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


