import {Router} from 'express'

const router = Router()

//Get All Users 
router.get("/api/users",(req,res)=>{


    res.status(200).send(users);

})

export default router;