const User = require("../Models/user");

const postuser = async (req,res)=>{
    const data = req.data;

    const user = new  User(data);
    await user.save();

    res.send("Created successully");
}

module.exports = postuser;