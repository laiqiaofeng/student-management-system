const fs = require("fs");
const globalConf = require("./confLoader");
const fileName = globalConf.get("log_path") + globalConf.get("server_log_name");




function log (type, pathname, params="") {
    const data = `type: ${type}\npathname: ${pathname}\nparams: ${params}\n---------------------------------------------\n`;
    fs.appendFile(fileName, data, {}, function () {});
}


module.exports = log;