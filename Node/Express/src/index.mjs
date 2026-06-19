import express from "express";

// In this line mean create the express app
const app = express();

// It is port Number in your browser 
const PORT = 3000;

//It is Every Request going to Activated 
app.listen(PORT,()=>{
    console.log(`App is Running on Port ${PORT}`);
});

 
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