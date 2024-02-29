const { createClient } = require('redis')
require("dotenv").config()

const client = createClient({
    url : process.env.REDIS_URL
});

console.log(process.env.REDIS_URL)
client.on('error', (err) => {console.log(`this is the error : ${err}`)})

async function connection() {
    await client.connect()
}

connection().catch(err => {console.log(`this is the error in connection : ${err}`)})

module.exports = client