const express = require('express')
const { login } = require('../controllers/Auth')

const router = express.Router();

router.post("/api/auth/login", login)

module.exports = router;