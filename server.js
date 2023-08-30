const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()


const customerRouter = require('./src/routes/customers.js')
const employeeRouter = require('./src/routes/employees.js')
const dishesRouter = require('./src/routes/dishes.js')
const materialRouter = require('./src/routes/materials.js')
const menuRouter = require('./src/routes/menu.js')
const orderRouter = require('./src/routes/orders.js')
const order_DetailRouter = require('./src/routes/order_details.js')
const transactionRouter = require('./src/routes/transaction.js')




const port = process.env.PORT
const hostname = process.env.HOST_NAME

// parse application/json
app.use(bodyParser.json())

app.use(cors())

app.use("/", customerRouter)
app.use("/", employeeRouter)
app.use("/", dishesRouter)
app.use("/", materialRouter)
app.use("/", menuRouter)
app.use("/", orderRouter)
app.use("/", order_DetailRouter)
app.use("/", transactionRouter)



app.get("/", (req, res) => res.send("Hello...."))
app.all("*", (req, res) => res.send("That router doesn't exit"))


app.listen(port, hostname, () => {
    console.log(`Server up and running on port ${port}`)
})