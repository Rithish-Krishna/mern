const express = require("express");
require("dotenv").config();

const user = require("./Models/user");
const connectDb = require("./config/db")
const app = express();
const userroute = require("./Routes/Userroute");
const healthRoutes = require("./Routes/healthroute");
const paraRouter = require("./Routes/pararoute");
const port = process.env.PORT;


connectDb();
app.use(express.json())



app.get("/",(req,res)=>{
    res.send("HEllO");
})

//Route parameters
// app.get("/user/:userId/books/:bookId", (req,res)=>
// {
//     res.send(`User Id ${req.params.userId} Book Id:${req.params.bookId}`);
// }
// );



app.use("/health",healthRoutes);
app.use("/health",healthRoutes);
app.use(paraRouter);
//Query parameters
app.use("/user",userroute);

// app.post("/user", async (req,res)=>{
//     const data = req.data;

//     const user = new  user(data);
//     await user.save();

//     res.send("Created successully");
// });

app.all("/*splat",(req,res)=>{
    res.send("Error 404 page not found");
})

app.listen(port,()=>{
    console.log("hello");
})

