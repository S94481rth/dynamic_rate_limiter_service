const express = require("express");
const cors = require("cors");
require('dotenv').config()


const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const rateLimiterRoutes = require('./server/routes/rateLimiterRoutes')
app.use("/rate-limit", rateLimiterRoutes)


app.listen(PORT, () => {
    console.log(`listening on port number : ${PORT}`);
})

