const sql = require("./db.js");

// constructor
const windStation = function(windPowerStation) {
  this.device = windPowerStation.device;
  this.time = windPowerStation.time;
  this.systemTime = windPowerStation.systemTime;
  this.WS = windPowerStation.WS;
  this.WD = windPowerStation.WD;
  this.RF = windPowerStation.RF;
  this.WIFI = windPowerStation.WIFI;
};

windStation.getAll = result => {
  sql.query("SELECT time, DATE_FORMAT(FROM_UNIXTIME(time),'%i:%s') formatedTime , WS, WD, RF FROM table_sagtws ORDER BY systemTime ASC LIMIT 10000;", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

module.exports = windStation;


