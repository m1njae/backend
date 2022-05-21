const functions = require("firebase-functions");
const { success, fail } = require("../lib/util");
const sc = require("../constants/statusCode");
const rm = require("../constants/responseMessage");
const userService = require("../service/userService");

const saveUserData = async (req, res) => {
  const { token, email } = req.body;
  try {
    await userService.saveUser(token, email);

    res.status(sc.OK).send(success(sc.OK, rm.SAVE_USER_SUCCESS));
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);

    res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

module.exports = { saveUserData };
