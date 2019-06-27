const studentDao = require('../dao/studentDao');

function getStudentSomeInfo (grand) {
    return studentDao.getStudentSomeInfo(grand).then( res => {
        return res;
    }, err => {
        console.log(err);
    })
}

function getSingleStudentAllInfo(grand, number) {
    return studentDao.getSingleStudentAllInfo(grand, number).then( res => {
        const score = [];
        const data = {};
        const subject = {
            "s_math": "数学",
            "s_english": "英语",
            "s_physics": "物理",
            "s_chemistry": "化学"
        }
        for (let prop in res[0]) {
            if(prop.startsWith("s_")) {
                score.push({
                    "course": subject[prop],
                    "score": res[0][prop]
                })
            }else if(prop == "dateOfBirth"){
                data[prop] = res[0][prop];
            } else if(prop == "isMember") {
                data["politicsStatus"] = res[0][prop] ? "团员" : "群众";
            } else if(prop == "isPartyMember") {
                if(data["politicsStatus"] == "团员") {
                    data["politicsStatus"] = res[0][prop] ? "党员" : "团员";
                }
            } else if(prop == "ccie") {
                data["ccie"] = res[0][prop] ? res[0][prop].split("|") : "无";
            } else if(prop == "award") {

                data["award"] = res[0][prop] ? res[0][prop].split("|") : "无";
            } else {
                data[prop] = res[0][prop];
            }
        }
        data.score = score;
        return data;
    }, err => {
        console.log(err);
    })
}

function modifiedGrades (grandNumber, number, course ,score) {
    return studentDao.updateGrades(grandNumber, number, course ,score).then( res => {
        return res;
    })
}

function deleteSingleStudent (grandNumber, number) {
    return studentDao.deleteSingleStudent(grandNumber, number).then( res => {
        return res;
    }, err => {
        console.log(err);
    })
}

function addSingleStudent (grandNumber, data) {
    return studentDao.addSingleStudent(grandNumber, JSON.parse(data)).then( res => {
        return res;
    }, err => {
        console.log(err);
    })
}


function searchStudent (grandNumber, data) {
    return studentDao.searchStudent(grandNumber, data).then( res => {
        return res;
    }, err => {
        console.log(err);
    })
}
module.exports = {
    getStudentSomeInfo,
    getSingleStudentAllInfo,
    modifiedGrades,
    deleteSingleStudent,
    addSingleStudent,
    searchStudent
}