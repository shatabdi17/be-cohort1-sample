const breadditdata = require("../../../db/breaddit.data.json");

const breadditController = (req, res) => {
  return res.json({
    data: breadditdata
  });
};

module.exports = {
  breadditController
};
