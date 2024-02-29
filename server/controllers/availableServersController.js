exports.printAvailableServers = (req,res) =>{
    console.log("yo man this is the data i got : " + req.body.arrayBody)
    res.end("i have made a note of the available servers dyoode")
}