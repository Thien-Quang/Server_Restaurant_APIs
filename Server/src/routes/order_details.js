const express = require('express')
const { getOrder_details, createOrder_detail, getOrder_detailByID, deleteOrder_detailByID, updateOrder_detailByID } = require("../controllers/order_details")

const router = express.Router();

router.get("/order_detail", getOrder_details)
router.post("/order_detail", createOrder_detail)
router.get("/order_detail/:id", getOrder_detailByID)
router.delete("/order_detail/:id", deleteOrder_detailByID)
router.put("/order_detail/:id", updateOrder_detailByID)





module.exports = router