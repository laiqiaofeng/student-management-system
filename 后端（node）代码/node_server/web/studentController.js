const studentServer = require("../server/studentServer");
const map = new Map();
const urlParser = require("url");

//
function getStudentSomeInfo(request, response) {
    const url = request.url;
    const {grandNumber} = urlParser.parse(url, true).query;
    studentServer.getStudentSomeInfo(grandNumber).then(res => {
        response.writeHead(200);
        response.write(JSON.stringify(res));
        response.end();
    })
} 
map.set("/getStudentSomeInfo", getStudentSomeInfo);


function getSingleStudentAllInfo (request, response) {
    const url = request.url;
    const {grandNumber, number} = urlParser.parse(url, true).query;
    studentServer.getSingleStudentAllInfo(grandNumber, number).then( res => {
        response.writeHead(200);
        response.write(JSON.stringify(res));
        response.end();
    })
}
map.set("/getSingleStudentAllInfo", getSingleStudentAllInfo);

function modifiedGrades(request, response) {
    const url = request.url;
    const {grandNumber, number, course ,score} = urlParser.parse(url, true).query;
    studentServer.modifiedGrades(grandNumber, number, course ,score).then(res => {
        response.writeHead(200);
        response.write(JSON.stringify(res));
        response.end();
    }, err => {
        console.log(err);
    })
}   
map.set("/modifiedGrades", modifiedGrades);
function deleteStudent(request, response) {
    const url = request.url;
    const {grandNumber, number} = urlParser.parse(url, true).query;
    studentServer.deleteSingleStudent(grandNumber, number).then( res => {
        response.writeHead(200);
        response.write(JSON.stringify(res));
        response.end();
    }, err => {
        console.log(err);
    })
}

map.set("/deleteStudent", deleteStudent);

function addStudent (request, response) {
    const url = request.url;
    const {grandNumber, studentInfo} = urlParser.parse(url, true).query;
    studentServer.addSingleStudent(grandNumber, studentInfo).then( res => {
        response.writeHead(200);
        response.write(JSON.stringify(res));
        response.end();
    }, err => {
        console.log(err);
    })
}

map.set("/addStudent", addStudent);


function searchStudent (request, response) {
    const url = request.url;
    console.log(url);
    const {grandNumber, data} = urlParser.parse(url, true).query;
    studentServer.searchStudent(grandNumber, data).then( res => {
        response.writeHead(200);
        response.write(JSON.stringify(res));
        response.end();
    }, err => {
        console.log(err);
    })
}
map.set("/searchStudent", searchStudent);
module.exports.path = map;