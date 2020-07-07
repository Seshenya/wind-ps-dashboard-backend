module.exports = app => {
    const windPowerStation = require("../controllers/windPSdata.controller");
  
    app.get("/windPSdata", windPowerStation.findAll);
  
  };