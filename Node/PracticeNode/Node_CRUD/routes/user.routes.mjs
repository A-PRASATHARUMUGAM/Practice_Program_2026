import express from "express";

const router = express.Router(); 

                    //  --- CRUD Operation ----

// R - Reading - GET 

router.get("/user",(req,res)=>{

     res.send("Reading GET");
     console.log("Hello World ")

});

// C - For Creating - POST  

router.post("/user",(req,res)=>{

    res.send(" Creating POST");
     
});


// U - For Updating - PUT 

router.put("/user/:id ",(req,res)=>{

    res.send(" Update PUT ")

});


// D - For Deleting - DELETE 

router.delete("/user/:id",(req,res)=>{

    res.json(" Deleting DELETE")
});



export default router; 