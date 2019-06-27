const connect = require("./dbutil");



function getAllTeacherName () {
    const query = "select name from teacher"
    connect.connect();
    return new Promise( (res, rej) => {
        connect.query(query, function (err, data) {
            if(err == null) {
                res(data);
            } else {
                rej(err);
            }
        })

        connect.end();
    })
   
}


function getSingleTeacherInfo (...arg) {
    const query = "select * from teacher where name = ? and jobNumber = ?";
    return new Promise( (res, rej) => {
        connect.query(query, arg, function (err, data) {
            if(err == null) {
                res(data);
            } else {
                rej(err);
            }
            
        })
        // connect.end();
    })
}

module.exports = {
    getAllTeacherName,
    getSingleTeacherInfo
}