const fs = require("fs");
const globalConf = require("./utils/confLoader");
const web_path = globalConf.get("web_path");
let files;
try{
    files = fs.readdirSync(web_path);
}catch(e){
    throw new error(e);
}
// 每个文件的map集合
const controllerArr = [];
// 所有路径的映射
const pathMap = new Map();

files.forEach( res => {
    let temp = require("./" + web_path + res);
    if(temp.path) {
        for( let [key, value] of temp.path) {
            if(pathMap.get(key) == null) {
                pathMap.set(key, value);
            } else {
                throw new Error("url 异常， url:", key);
            }
        } 
        controllerArr.push(temp);
    }
})
module.exports = pathMap;