const User = require("../Models/user");

const registerUser = async (req,res)=>{
    const {name, email, password} = req.body;
    console.log(data)
    if(!name||!email||!password){
        res.status(400).json({
            message:"Please fill All the details"
        })
    }

    const exsistingUser = User.findOne({
        email
    });

    if(exsistingUser){
        res.status(400).json({
            message:"Already LoggedIn"
        });
    }

    const user = new  User({
        name,
        email,
        password
    });

    await user.save();

    res.status(200).json({
        message:"Successfully Created the User"
    })
}

module.exports = {
    registerUser
};