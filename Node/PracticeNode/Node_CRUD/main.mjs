import express from "express";

const app = express()
const PORT= 3000;

app.listen(PORT,()=>{

    console.log(`App is running this port ${PORT}`);
    
})

// CRUD Operation 

// R - Reading - GET 

app.get("/user",(req,res)=>{

     res.json("Reading GET");

});

// C - For Creating - POST 

app.post("/user",(req,res)=>{

    res.json(" Creating POST");
     
});


// U - For Updating - PUT 

app.put("/user/:id ",(req,res)=>{

    res.json(" Update PUT ")

});


// D - For Deleting - DELETE 

app.delete("/user/:id",(req,res)=>{

    res.json(" Deleting DELETE")
});