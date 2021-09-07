var router = require("express").Router()

var userController = require("./controller/userController")


router.route("/saveuser").post(userController.saveuser)
router.route("/authenticate").post(userController.authenticate)
router.route("/users/:userId").get(userController.getUserById) //@Pathvariable 
router.route("/users").get(userController.getAllUsers)
module.exports = router 