const { validationResult } = require("express-validator");
const { ERROR_CODES } = require("./error-handler");

const validateBody = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new Error(
      JSON.stringify({
        status: ERROR_CODES.UNPROCESSABLE_ENTITY,
        message: errors.array()
      })
    );
  }
  next();
};

module.exports = {
  validateBody
};
