import express from "express";
import usersroute from "./routes/user.routes.mjs";
import connectDB from "./config/db.mjs";

const app = express()
const PORT= 3000;

//Connect DB 
connectDB();

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


