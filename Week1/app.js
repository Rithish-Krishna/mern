const express = require("express");
const app = express();

const port = 3000;
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("HEllO");
})

app.get("/health",(req,res)=>{
    res.send(true)
})

app.post("/api",(req,res)=>{
    const task = req.body;

    res.json({
        message:"task created",
        task:task
    });
})

app.listen(port,()=>{
    console.log("hello");
})

