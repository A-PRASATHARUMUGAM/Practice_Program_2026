export  const createUserValidationSchema = { 

    id:{

    },
    user_name:{
        // User name can't be empty 
        notEmpty:{
            errorMessage: "User Name must not be empty" 
        },
        // Length Validation 
        isLength:{
            options:{min:2, max:12},
            errorMessage:"user name Length requirements not met "    
        },
        isString:{

            errorMessage:"user name must be a string "
        }
        
    },   
    age:{ 
        // Age name can't be empty 
        notEmpty:{
            errorMessage: "Age must not be empty" 
        }
    },
    gender:{

    },
    
   
} 