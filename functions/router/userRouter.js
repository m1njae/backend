const { Router } = require("express");
const { userController } = require("../controller");

const router = Router();

router.post("/", userController.saveUserData);
router.get("/", userController.countUser);

module.exports = router;
