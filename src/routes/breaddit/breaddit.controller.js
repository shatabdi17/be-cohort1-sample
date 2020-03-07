const fs = require("fs");
const { promisify } = require("util");

const breadditdata = require("../../../db/breaddit.data.json");

const writeFile = promisify(fs.writeFile);

const breadditController = (req, res) => {
  return res.json({
    data: breadditdata
  });
};

const postBreaddit = async (req, res) => {
  const id = breadditdata.length + 1;

  const postBreadditData = {
    id,
    ...req.body
  };
  await writeFile(
    "db/breaddit.data.json",
    JSON.stringify([...breadditdata, postBreadditData])
  );
  res.status(201);
  return res.json({
    id,
    ...req.body
  });
};

module.exports = {
  breadditController,
  postBreaddit
};
