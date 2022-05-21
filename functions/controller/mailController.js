const functions = require("firebase-functions");
const { success, fail } = require("../lib/util");
const sc = require("../constants/statusCode");
const rm = require("../constants/responseMessage");
const mailService = require("../service/mailService");

const getEmails = async (req, res) => {
  try {
    const data = await mailService.test();
    console.log(data);

    res.status(sc.OK).send(success(sc.OK, rm.UPDATE_ONE_USER_SUCCESS, data));
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);

    res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

module.exports = { getEmails };
