const express = require('express')
const { getAccount, createAccount, deleteAccount, updateAccountByUsername } = require("../controllers/account")

const router = express.Router();

router.get("/api/account/", getAccount)
router.post("/api/account", createAccount)
router.delete("/api/account/:username", deleteAccount)
router.put("/api/account/:username", updateAccountByUsername)





module.exports = router