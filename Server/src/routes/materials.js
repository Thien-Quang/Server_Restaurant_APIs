const express = require('express')
const { getMaterials, createMaterial, getMaterialByID, deleteMaterialByID, updateMaterialByID } = require("../controllers/materials")

const router = express.Router();

router.get("/material", getMaterials)
router.post("/material", createMaterial)
router.get("/material/:id", getMaterialByID)
router.delete("/material/:id", deleteMaterialByID)
router.put("/material/:id", updateMaterialByID)





module.exports = router