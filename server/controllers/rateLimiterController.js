const userModel = require('../models/user-limit')
const User = userModel.User
const axios = require('axios')
require('dotenv').config()


exports.welcome = async (req, res) => {
    console.log(req.backendServerURL)
    // console.log("yennaya avoid panrangalaan!!")
    res.json({msg : "welcome controller"})
}

exports.lightEndPoint = async (req,res) => {
    console.log(req.backendServerURL)
    var userIP = req.connection.remoteAddress
    if(userIP == "::1"){
        userIP = "127.0.0.1"
    }
    console.log(userIP)
    res.json({msg : 'light end point'})
    userModel.setUser(new User(userIP, Date.now() / 1000, 5)).catch(err => {console.log("The rate limit has been exceeded", err)})
    const msg = await axios.get(`${req.backendServerURL}/requestHandler`)
    console.log(msg.data)
}
