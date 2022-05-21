const { Router } = require("express");
const { mailController } = require("../controller");

const router = Router();

router.get("/", mailController.getEmails);

module.exports = router;
