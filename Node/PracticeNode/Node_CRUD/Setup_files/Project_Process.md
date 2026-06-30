

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

