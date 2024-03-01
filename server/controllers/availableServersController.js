let servers = require("../utilities/Servers")
let parseInput = require("../utilities/parseStringServers").parseInput

exports.printAvailableServers = (req,res) =>{
    arrayServersString = req.body.arrayBody
    let arrayOfURLS = parseInput(arrayServersString)
    // un comment later important
    console.log(typeof(arrayOfURLS))
    console.log(arrayOfURLS)    
    servers.setServers(arrayOfURLS)
    res.end("i have made a note of the available servers ")
}