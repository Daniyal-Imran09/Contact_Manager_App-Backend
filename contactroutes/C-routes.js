const express = require("express")
const router = express.Router()

const { getcontct,
    getcount,
    updatecontact,
    deleteconatct,
    createcontact } = require("../controller/controllerroutes")
const validatetoken = require("../middleware/valiadtetokenhandler")

router.use(validatetoken)
router.route("/").get(getcontct)

router.route("/").post(createcontact)

router.route("/:id").get(getcount)

router.route("/:id").put(updatecontact)

router.route("/:id").delete(deleteconatct)

module.exports =  router