const mongoose = require("mongoose");
const User = require("./Models/user");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI )
.then(async () => {
    const users = await User.find();
   
    console.log(users);
    mongoose.disconnect();
})
.catch(console.error);