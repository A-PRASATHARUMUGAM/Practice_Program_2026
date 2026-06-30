import { model, Schema } from "mongoose";

// Write the Schema 
const schema = new Schema({


    // Option 1
    // name:String,
    // age:Number,

    //Option 2 Prefered 
    name:{
        type:String,
        required:true,
        unique:true
    }, 
    age:{
        type:Number,
        required:true,

    }
     
})

//Create your Model

// 1. mongoose.model or model 


// model - > Data Base Name 
const User= model("User", schema)


export default User;