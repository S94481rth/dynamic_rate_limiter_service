const crypto = require('crypto');
require("dotenv").config()

const RANGE = process.env.HASH_RANGE

function generateHash(input, secretKey) {
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

// Example usage:
const inputValue = {
    ip : "data1",
    port : "data2"
}
const secretKey1 = 'secret1';
const secretKey2 = 'secret2';

// Generate hashes for different secret keys
const hash1 = generateHash(inputValue, secretKey1);
const hash2 = generateHash(inputValue, secretKey2);

// Map the hash values to the desired range


console.log('Output for secret key 1:', hash1);
console.log('Output for secret key 2:', hash2);


// const a = 10
// const b = 20

// const c = {[a] : b}
// console.log(c)