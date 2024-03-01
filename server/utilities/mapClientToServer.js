const servers = require("../utilities/Servers")
const parseInput = require("../utilities/parseStringURL_hashvaluepair").parseInput
require("dotenv").config()
const RANGE = process.env.HASH_RANGE

function smallest(arr){
    let mini = RANGE+1
    let min_index = -1
    for(let index=0;index<arr.length;index++){
        if(arr[index] < mini){
            mini = arr[index]
            min_index = index
        }
    }
    return {min_index, mini}
}

function largest(arr){
    let maxi = -1
    let maxi_index = -1
    for(let index=0;index<arr.length;index++){
        if(arr[index] > maxi){
            maxi = arr[index]
            maxi_index = index
        }
    }
    return {maxi_index, maxi}
}

exports.mapClientToServer = (hashClient) => {
    let URL_hashvalue_map = servers.getHashServers()
    // console.log("type of url hash value map : "+typeof(URL_hashvalue_map))
    // console.log("url hash value map : "+ URL_hashvalue_map)
    // console.log("printing the something !:", parseInput(URL_hashvalue_map))
    let {urlArray, hashValueArray} = parseInput(URL_hashvalue_map)
    // console.log(`inside map ctos ${urlArray}`)
    // console.log(`inside map ctos ${hashValueArray}`)
    
    const {min_index, mini} = smallest(hashValueArray)
    const {maxi_index, maxi} = largest(hashValueArray)

    // console.log(`min ${min_index} -> ${mini} and maxi ${maxi_index} -> ${maxi}`)

    if(hashClient > maxi || hashClient <= mini){
        // return the srever with the smallest hash value
        return urlArray[min_index]
    }
    let server_index = 0
    let prev_diff = RANGE + 1
    for(let i=0;i<hashValueArray.length; i++ ){
        if(hashValueArray[i] - hashClient === 0){
            server_index = i
            break
        }
        if(hashValueArray[i] - hashClient < 0){
            continue
        }
        if(hashValueArray[i] - hashClient < prev_diff){
            server_index = i
        }
    }
    return urlArray[server_index]
}