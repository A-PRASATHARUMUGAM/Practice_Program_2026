import express from "express";
import usersroute from "../routes/user.routes.mjs";

const app = express()
const PORT= 3000;

app.listen(PORT,()=>{

    console.log(`App is running this port ${PORT}`);
    
})

// Implement the Middleware - 1

// UsersRoutes
app.use("/users",usersroute); 


// Home Route 
app.get("/",(req,res)=>{

    res.json({msg:"Home Route"})

});


