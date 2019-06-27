const loginServer = require("../server/loginServer");
const map = new Map();
const urlParser = require("url");
function isAdmin(request, response) {
    const url = request.url;
    const params = urlParser.parse(url, true).query;
    const {name, jobNumber} = params;   
    try {
        loginServer.isHasTeacher(name, jobNumber).then( res => {

            response.writeHead(200);
            
            response.write(JSON.stringify(res));
            response.end();
        })   
    } catch (e) {
        response.writeHead(500);
        response.write("500 badServer");
        response.end();
    }
    
}

map.set("/isAdmin", isAdmin);

module.exports.path = map;