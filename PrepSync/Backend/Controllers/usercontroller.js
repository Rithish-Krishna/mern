const User = require("../Models/user");
const bcrypt = require("bcrypt");
const registerUser = async (req,res)=>{
    const {name, email, password} = req.body;
    console.log(name,email,password);
    if(!name||!email||!password){
        return res.status(400).json({
            message:"Please fill All the details"
        })
    }

    const exsistingUser = await User.findOne({
        email
    });

    if(exsistingUser){
        return res.status(400).json({
            message:"Already LoggedIn"
        });
    }

    const hashedpassword = await bcrypt.hash(password,10);

    const user = new  User({
        name,
        email,
        password:hashedpassword
    });

    await user.save();

    return res.status(200).json({
        message:"Successfully Created the User"
    })
}

module.exports = {
    registerUser
};