var router = require("express").Router()
var registrationController = require("./app/controller/registrationController")


router.route("/signup").post(registrationController.signup)
router.route("/login").post(registrationController.login)

module.exports = router


