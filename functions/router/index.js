const { Router } = require("express");
const mailRouter = require("./mailRouter");
const userRouter = require("./userRouter");

const router = Router();

router.use("/mail", mailRouter);
router.use("/user", userRouter);

module.exports = router;
