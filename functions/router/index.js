const { Router } = require("express");
const mailRouter = require("./mailRouter");

const router = Router();

router.use("/mail", mailRouter);

module.exports = router;
