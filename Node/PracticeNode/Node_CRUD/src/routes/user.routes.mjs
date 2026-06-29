import express from "express";
import { 
    usersGet,
    usersPost, 
    usersPut, 
    usersDelete,
} from "../controllers/user.controller.mjs";

const router = express.Router(); 

                    //  --- CRUD Operation ----

// R - Reading - GET    
router.get("/", usersGet );


// C - For Creating - POST  
router.post("/", usersPost)


// U - For Updating - PUT 
router.put("/:id",usersPut)


// D - For Deleting - DELETE 
router.delete("/:id",usersDelete)



export default router; 