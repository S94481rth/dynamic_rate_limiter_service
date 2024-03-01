// let servers = require("../utilities/Servers")
require("dotenv").config()

const hashFunction = require("../utilities/generateHash").generateHash
const KEYS = process.env.HASH_KEYS.split(',')
const mapClientToServer = require("../utilities/mapClientToServer").mapClientToServer

exports.consistentHashing = (req, res, next) =>{
    // let hashOfServers = servers.getHashServers()
    // console.log(hashOfServers)

    let clientIP = req.socket.remoteAddress
    if(clientIP === "::1" ){
        clientIP = "127.0.0.1"
    }
    const hashClient = hashFunction(clientIP, KEYS[0])

    const backendServer = mapClientToServer(hashClient)
    // console.log(`backend server alloted : ${backendServer}`)
    // this works
    // console.log(`this is the set of servers in middleware : ${availableServers[0].ip}`)

    req.backendServerURL = backendServer
    next()
}