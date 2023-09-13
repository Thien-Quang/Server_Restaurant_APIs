const express = require('express')
const { getCustomers, createCustomers, getCustomerByID, deleteCustomerByID, updateCustomerByID } = require("../controllers/customers")

const router = express.Router();

router.get("/customer", getCustomers)
router.post("/customer", createCustomers)
router.get("/customer/:id", getCustomerByID)
router.delete("/customer/:id", deleteCustomerByID)
router.put("/customer/:id", updateCustomerByID)





module.exports = router