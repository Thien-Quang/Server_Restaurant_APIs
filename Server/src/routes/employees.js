const express = require('express')
const { getEmployees, createEmployee, getEmployeeByID, deleteEmployeeByID, updateEmployeeByID } = require("../controllers/employees")

const router = express.Router();

router.get("/employee", getEmployees)
router.post("/employee", createEmployee)
router.get("/employee/:id", getEmployeeByID)
router.delete("/employee/:id", deleteEmployeeByID)
router.put("/employee/:id", updateEmployeeByID)





module.exports = router