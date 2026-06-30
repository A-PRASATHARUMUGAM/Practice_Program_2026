import User from "../Models/users.model.js";

// GET Controller
export const usersGet = async (req, res) => {

    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {

        return res.status(400).json({ message: error.message });

    }

}

//GET by ID 

export const userGetById = async (req, res) => {

    try {
        const userId = req.params.id;

        if (userId == null) {

            return res.status(400).json({ message: "User not found" });


        } else {
            const users = await User.findById(userId);
            return res.status(200).send(users);
        }


    } catch (err) {
        return res.status(400).json({ message: err.message });

    }


}


// POST Controller
export const usersPost = async (req, res) => {

    //  Validate your data 
    const newUser = new User({
        name: req.body.name,
        age: req.body.age
    });

    // Exception Handling 
    try {

        //  Save to DB
        const user = await newUser.save();
        return res.status(201).json(user);

    } catch (err) {

        return res.status(400).json({ message: err.message });

    }


    return res.json(req.body);

};


// PUT Controller
export const usersPut = async (req, res) => {

    try {
        const updatedUser = await User.findByIdAndUpdate(

            req.params.id,
            req.body,
            {
                new: true,          // Return updated document
                runValidators: true // Apply schema validation
            }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(updatedUser);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }



};


// DELETE Controller
export const usersDelete = async (req, res) => {


    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);


        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User deleted successfully",
            data: deletedUser
        });


    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }

};