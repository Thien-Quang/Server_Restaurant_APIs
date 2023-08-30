const express = require('express')
const { getTransactions, createTransaction, getTransactionByID, deleteTransactionByID, updateTransactionByID } = require("../controllers/transaction")

const router = express.Router();

router.get("/transaction", getTransactions)
router.post("/transaction", createTransaction)
router.get("/transaction/:id", getTransactionByID)
router.delete("/transaction/:id", deleteTransactionByID)
router.put("/transaction/:id", updateTransactionByID)





module.exports = router