const express = require('express')
const { getCustomers, createCustomers, getCustomerByID, deleteCustomerByID, updateCustomerByID } = require("../controllers/customers")

const router = express.Router();

router.get("/api/customer/", getCustomers)
router.post("/api/customer", createCustomers)
router.get("/api/customer/:id", getCustomerByID)
router.delete("/api/customer/:id", deleteCustomerByID)
router.put("/api/customer/:id", updateCustomerByID)





module.exports = router