const userModel = require('../models/user-limit')
const User = userModel.User
const axios = require('axios')
require('dotenv').config()


exports.welcome = async (req, res) => {
    console.log(req.backendServerURL)
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
    const msg = await axios.get(process.env.BACKEND_SERVER_URL)
    console.log(msg.data)
}
