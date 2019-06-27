const loginDao = require("../dao/loginDao");
function isHasTeacher(name, jobNumber) {
    return loginDao.getSingleTeacherInfo(name, jobNumber).then( data => {
        if(data.length !== 0) {
           return data[0]  
        }else {
           return "isNotAAdmin";
        }
    }, err => {
        rej(err);
    })
    
}

module.exports = {
    isHasTeacher
}