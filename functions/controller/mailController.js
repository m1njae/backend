const functions = require("firebase-functions");
const { success, fail } = require("../lib/util");
const sc = require("../constants/statusCode");
const rm = require("../constants/responseMessage");
const mailService = require("../service/mailService");

const deleteEmail = async (req, res) => {
  const { startDate, endDate } = req.query;
  const { token } = req.headers;

  try {
    await mailService.untrashMail(startDate, endDate, token);

    // if (!data) return res.status(sc.BAD_REQUEST).send(success(sc.BAD_REQUEST, rm.NO_MAIL));
    res.status(sc.OK).send(success(sc.OK, rm.DELETE_MAIL_START));
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);

    res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const getTotalEmailCount = async (req, res) => {
  const { token } = req.headers;

  try {
    const data = await mailService.getMailCount(token);
    res.status(sc.OK).send(success(sc.OK, rm.GET_MAIL_COUNT_SUCCESS, data));
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);

    res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

module.exports = { deleteEmail, getTotalEmailCount };
