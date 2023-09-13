const express = require('express')
const { getOrders, createOrder, getOrderByID, deleteOrderByID, updateOrderByID } = require("../controllers/orders")

const router = express.Router();

router.get("/order", getOrders)
router.post("/order", createOrder)
router.get("/order/:id", getOrderByID)
router.delete("/order/:id", deleteOrderByID)
router.put("/order/:id", updateOrderByID)





module.exports = router