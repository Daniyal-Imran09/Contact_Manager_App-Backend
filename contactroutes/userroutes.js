const express = require("express")
const { registeruser, loginuser, currentuser } = require("../controller/usercontroller")
const router = express.Router()
const validtoken = require("../middleware/valiadtetokenhandler")
router.post('/register',registeruser)

router.post('/login',loginuser)

router.get('/current',validtoken,currentuser)

module.exports = router