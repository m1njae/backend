const { Router } = require("express");
const { mailController } = require("../controller");

const router = Router();

router.get("/", mailController.deleteEmail);

module.exports = router;
