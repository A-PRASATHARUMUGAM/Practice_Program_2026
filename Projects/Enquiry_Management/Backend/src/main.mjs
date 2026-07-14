import express from 'express';
import userroute from "./routes/user.routes.mjs";

const app = express();
const port = 3000;

// Middleware 
app.use("/users", users); 

app.get('/',(req,res)=>{

    res.send("Hello  World 2")

}); 

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})

   