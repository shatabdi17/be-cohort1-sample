const logger = require("../utils/logger");

const ERROR_CODES = {
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500
};

const errorHandler = (err, req, res, next) => {
  const error = JSON.parse(err.message);
  logger.error(error.status);
  if (!error.status) error.status = ERROR_CODES.INTERNAL_SERVER_ERROR;
  res.status(ERROR_CODES[error.status]).json(error.message);
};

module.exports = {
  errorHandler,
  ERROR_CODES
};
