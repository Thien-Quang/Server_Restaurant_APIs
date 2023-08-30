const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()


const customerRouter = require('./src/routes/customers.js')
const employeeRouter = require('./src/routes/employees.js')


const port = process.env.PORT
const hostname = process.env.HOST_NAME

// parse application/json
app.use(bodyParser.json())

app.use(cors())

app.use("/", customerRouter)
app.use("/", employeeRouter)

app.get("/", (req, res) => res.send("Hello...."))
app.all("*", (req, res) => res.send("That router doesn't exit"))


app.listen(port, hostname, () => {
    console.log(`Server up and running on port ${port}`)
})