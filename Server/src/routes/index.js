const express = require('express');
const router = express.Router();


const customerRouter = require('./customers.js');
const employeeRouter = require('./employees.js');
const dishesRouter = require('./dishes.js');
const materialRouter = require('./materials.js');
const menuRouter = require('./menu.js');
const orderRouter = require('./orders.js');
const order_DetailRouter = require('./order_details.js');
const transactionRouter = require('./transaction.js');

const index = (app) => {

    app.use("/", customerRouter);
    app.use("/", employeeRouter);
    app.use("/", dishesRouter);
    app.use("/", materialRouter);
    app.use("/", menuRouter);
    app.use("/", orderRouter);
    app.use("/", order_DetailRouter);
    app.use("/", transactionRouter);

}

module.exports = index