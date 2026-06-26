

// GET Controller
export const usersGet = (req,res) =>{

    res.send("It is Get Method");

}

// POST Controller
export const usersPost = (req,res)=>{

    res.send(" Creating POST");
     
};


// PUT Controller
export const usersPut = (req,res)=>{

    res.send(" Update PUT ")

};


// DELETE Controller
export const usersDelete = (req,res)=>{

    res.send(" Deleting DELETE")
};