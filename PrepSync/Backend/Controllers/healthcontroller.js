const getHealth = (req,res)=>{
    res.send(true);
}

const postHealth = (req,res)=>{
    const task = req.body;
    res.json({
        "Message":"Updated",
        "task":task
    });
}


module.exports = {
    getHealth,
    postHealth
};