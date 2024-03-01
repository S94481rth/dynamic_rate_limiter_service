const crypto = require('crypto');
require("dotenv").config()

const RANGE = process.env.HASH_RANGE

exports.generateHash = (input, secretKey) => {
    if(typeof(input) !== "string"){
        input = JSON.stringify(input)
    }
    // Create an HMAC object with the desired hash function and secret key
    const hmac = crypto.createHmac('sha256', secretKey);
    
    // Update the HMAC object with the input data
    hmac.update(input);
    
    // Generate the HMAC hash
    const hash = hmac.digest('hex');
    
    // Convert the hash value to an integer (using a deterministic method)
    const integerValue = parseInt(hash, 16);
    
    const rangedInteger = hashToRange(integerValue, RANGE)
    return rangedInteger;
}

function hashToRange(hash, range) {
    // Perform modular arithmetic to map the hash value to the desired range
    return hash % range;
}