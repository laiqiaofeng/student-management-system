const fs = require("fs");
const globalConf = new Map();
function confLoader () {
    const fileContent = fs.readFileSync("server.conf");
    const confArr = fileContent.toString().split("\r\n") || [];
    confArr.forEach( res => {
        
        const temp = res.split("=");
        if(temp.length == 2) {
            globalConf.set(temp[0], temp[1]);
        }
    })
}

confLoader();

if(globalConf["path_position"] == "absolute") {
    globalConf.basePath = globalConf.path;
}else if(globalConf["path_position"] == "relative") {
    globalConf.basePath = __dirname + globalConf.path;
}

if(globalConf.get("static_file_type")) {
    globalConf.set("static_file_type", globalConf.get("static_file_type").split("|"));
} else {
    throw new error("缺少配置文件static_file_type");
}

module.exports = globalConf;