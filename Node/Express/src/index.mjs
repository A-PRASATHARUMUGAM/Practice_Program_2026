import express from express;

// In this line mean create the express app
const app = express();

// It is port Number in your browser 
const PORT = 3000;

//It is Every Request going to Activated 
app.listen(PORT,()=>{
    console.log(`App is Running on Port ${PORT}`);


});
