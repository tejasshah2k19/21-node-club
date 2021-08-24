var router = require("express").Router()

var userController = require("./controller/userController")


router.route("/saveuser").post(userController.saveuser)


module.exports = router 