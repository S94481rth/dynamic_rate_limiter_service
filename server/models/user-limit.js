const client = require('../middleware/connection')

const setUser = (data) => {
    const ip = data.ip
    // const name = data.name
    const time = data.time
    const tokenSize = data.tokenSize

    const key = `user:${ip}`
    return new Promise(async (resolve, reject) => {
        try{
            const lastAccessTime = await client.hGet(key, "time")
            const currTokenSize = await client.hGet(key, "tokenSize")
            // await client.hSet(key, "name", name)
            const timeGap = time - lastAccessTime
            console.log(lastAccessTime)
            if(lastAccessTime == null || currTokenSize == null){
                await client.hSet(key, "time", time)
                await client.hSet(key, "tokenSize", tokenSize)
                console.log("i am null!!")
            }
            // if the request gap is more than 60 seconds then reset the size to max limit which is the tokenSize passed in == 5
            else if(timeGap > 60){
                console.log("this hapen1")
                await client.hSet(key, "time", time)
                await client.hSet(key, "tokenSize", tokenSize)
            } 
            
            // if the currtokenSize == 0 then reject the request
            else if(currTokenSize === "0"){
                console.log("this hapen2")

                reject("Rate Limit Exceeded Paa!")
            } 
            
            // if neither just reduce the token size by 1
            else{
                console.log("this hapen3")
                await client.hSet(key, "time", time)
                await client.hSet(key, "tokenSize", currTokenSize - 1)
            }
        }catch(err){
            console.log("this is the err : ", err)
            reject(err)
        }
        resolve("success man")
    })
}


const userData = {
    ip : "196.168.25.14",
    name : "Aravind",
    time : `${Date.now() / 1000}`,
    tokenSize : 5
}

class User{
    constructor(ip, time, tokenSize){
        this.ip = ip
        // this.name = name
        this.time = time
        this.tokenSize = tokenSize
    }
}


module.exports = {
    User,
    setUser
}
// setUser(userData)
