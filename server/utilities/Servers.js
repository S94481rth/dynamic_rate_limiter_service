const hashFunction = require("./generateHash").generateHash
require("dotenv").config()
const KEY = process.env.HASH_KEYS.split(',')

class Servers{
    constructor(){
        if(!Servers.instance){
            this.listOfServers = []
            this.hashOfServers = []
            Servers.instance = this
        }
        return Servers.instance
    }

    hashServers(){
        let hashList = []
        for(let server of this.listOfServers){
            let hash = hashFunction(server, KEY[0])
            const data = {[server] : hash}
            hashList.push(data)
        }
        return hashList
    }

    setServers(servers){
        this.listOfServers = servers
        this.hashOfServers = this.hashServers()
        // console.log(this.hashOfServers)
    }


    getServers(){
        return this.listOfServers
    }

    getHashServers(){
        return JSON.stringify(this.hashOfServers)
    }
}


let servers = new Servers()

module.exports = servers