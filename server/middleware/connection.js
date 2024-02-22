const { createClient } = require('redis')

const client = createClient();

client.on('error', (err) => {console.log(`this is the error : ${err}`)})

async function connection() {
    await client.connect()
}

connection().catch(err => {console.log(`this is the error in connection : ${err}`)})

module.exports = client