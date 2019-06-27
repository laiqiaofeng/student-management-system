const http = require("http");
const urlParse = require("url");
const fs = require("fs");
let globalConf;
try {
    globalConf = require("./utils/confLoader");
}catch (e) {
    throw new error(e);
}
const static_file_type = globalConf.get("static_file_type");
const loader = require("./loader");
const log = require("./utils/log");
const isStaticFile = function (pathname) {
    let flag = false;
    static_file_type.forEach( res => {
        if(pathname.indexOf(res) == pathname.length - res.length) {
            flag = true;
            return;
        }
    })
    return flag;
}

// console
const server = http.createServer(function (request, response) {
    const pathname = urlParse.parse(request.url).pathname;
    const params = urlParse.parse(request.url, true).query;
    if(isStaticFile(pathname)) {
        log("static", pathname, urlParse.parse(request.url).query);
        let fileData;
        try {
            fileData = fs.readFileSync(globalConf.get("path") + pathname);
            response.writeHead(200);
            response.write(fileData);
            response.end();
        } catch (e) {
            response.writeHead(404);
            response.write("<html><body><h1>404 NotFound</h1></body></html>");
            response.end();
        }
    } else  {//请求动态数据
        
        log("dynamic", pathname,urlParse.parse(request.url).query);
        if(loader.get(pathname)) {
            try {
                
                loader.get(pathname)(request, response);
            } catch (e) {
                response.writeHead(500);
                response.write("<html><body><h1>500 BadServer</h1></body></html>");
                response.end();
            }
        }else {
            response.writeHead(404);
            response.write("<html><body><h1>404 NotFound</h1></body></html>");
            response.end();
        }
    }
}).listen(globalConf.get("port"));