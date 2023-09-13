const express = require('express')
const { getDishes, createDishes, getDishesByID, deleteDidshesByID, updateDishesByID } = require("../controllers/dishes")

const router = express.Router();

router.get("/dishes", getDishes)
router.post("/dishes", createDishes)
router.get("/dishes/:id", getDishesByID)
router.delete("/dishes/:id", deleteDidshesByID)
router.put("/dishes/:id", updateDishesByID)





module.exports = router