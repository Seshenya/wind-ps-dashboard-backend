const windStation = require("../models/windPSdata.model");

// Retrieve all from the database.
exports.findAll = (req, res) => {
    windStation.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving data."
        });
      else res.send(data);
    });
  };
