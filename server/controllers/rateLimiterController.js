const userModel = require('../models/user-limit')
const User = userModel.User

exports.welcome = async (req, res) => {
    console.log("yennaya avoid panrangalaan!!")
    res.json({msg : "varta maame durr!"})
}

exports.lightEndPoint = async (req,res) => {
    var userIP = req.connection.remoteAddress
    if(userIP == "::1"){
        userIP = "127.0.0.1"
    }
    console.log(userIP)
    res.json({msg : 'light end point'})
    userModel.setUser(new User(userIP, Date.now() / 1000, 5)).catch(err => {console.log("Venky, Take care of your health...", err)})
}
