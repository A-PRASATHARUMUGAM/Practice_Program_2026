

1. Follow the MVC Patten 

2. Important Requirements 


    Data Base
        - connectDB()
        - .env and .env.example     

        

    Middlewares 

        - Middleware 1 - Connect the Route 
                - app.use("/users",usersroute);

        - Middleware 2 - Json Data Understanding 
                - app.use(express.json());
                - app.use(express.urlencoded({extended:true}));



Model 

    - Validate your data 
    - using async and await
    - Exception Handling (try and Catch)
    - Implement the Proper Status code (200,201,404,400,500)
    - Return Error Response also (400) 

