const UserController = require("../controllers/userController");

const router = require("express").Router();

router.post("/signIn", UserController.SignIn);
router.post("/login", UserController.Login);
router.post("/checkUser", UserController.checkUser);


module.exports = router