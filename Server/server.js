const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const routes = require("./src/routes")



const port = process.env.PORT
const hostname = process.env.HOST_NAME

// parse application/json
app.use(bodyParser.json())

app.use(cors())


routes(app)


app.get("/", (req, res) => res.send("Hello...."))
app.all("*", (req, res) => res.send("That router doesn't exit"))


app.listen(port, hostname, () => {
    console.log(`Server up and running on port ${port}`)
})