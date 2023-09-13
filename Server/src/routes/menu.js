const express = require('express')
const { getMenus, createMenu, getMenuByID, deleteMenuByID, updateMenuByID } = require("../controllers/menu")

const router = express.Router();

router.get("/menu", getMenus)
router.post("/menu", createMenu)
router.get("/menu/:id", getMenuByID)
router.delete("/menu/:id", deleteMenuByID)
router.put("/menu/:id", updateMenuByID)





module.exports = router