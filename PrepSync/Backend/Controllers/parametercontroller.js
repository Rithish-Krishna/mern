const getpara = (req,res)=>{
    res.send(`Book Id ${req.params.bookId} UserId: ${req.params.userId}`)
}

module.exports = {getpara};
