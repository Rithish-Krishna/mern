const express = require("express");
const app = express();
const healthRoutes = require("./Routes/healthroute");
const paraRouter = require("./Routes/pararoute");

const port = 3000;
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("HEllO");
})

app.use(healthRoutes);

app.post("/api",(req,res)=>{
    const task = req.body;

    res.json({
        message:"task created",
        task:task
    });
})

//Route parameters
// app.get("/user/:userId/books/:bookId", (req,res)=>
// {
//     res.send(`User Id ${req.params.userId} Book Id:${req.params.bookId}`);
// }
// );
app.use(paraRouter);
//Query parameters



app.all("/*splat",(req,res)=>{
    res.send("Error 404 page not found");
})

app.listen(port,()=>{
    console.log("hello");
})

