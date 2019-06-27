const connect = require("./dbutil");
// name age sex number headImg
function getStudentSomeInfo(grandNumber) {
    const query = "select name, number,age, sex, headImg from s_" + grandNumber;
    // connect.connect();
    return new Promise( (res, rej) => {
        connect.query(query, function (err, data) {
            if(err == null) {
                res(data);
            }else {
                rej(err);
            }
        })
    })
}

// all

function getSingleStudentAllInfo(grandNumber, number) {
    const query = `select * from s_${grandNumber} where number = ${number}`;
    // connect.connect();
    return new Promise( (res, rej) => {
        connect.query(query, function (err, data)  {
            if(err == null) {   
                res(data);
            } else {
                rej(err);
            }
        })
    })
}
const subject = {
    "数学": "s_math",
    "英语": "s_english",
    "物理": "s_physics",
    "化学": "s_chemistry"
}
function updateGrades (grandNumber, number, course ,score) {
    const query = `update s_${grandNumber} set ${subject[course]} = ${score} where number = ${number}`;

    return new Promise( (res, rej) => {
        connect.query(query, function (err, data) {
            if(err == null) {
                res(data);
            }else {
                rej(err);
            }
        })
    })
}

function deleteSingleStudent (grandNumber, number) {
    const query = `delete from s_${grandNumber} where number = ${number}`;
    console.log(query);
    return new Promise( (res, rej) => {
        connect.query(query, function (err, data) {
            if(err == null) {
                res(data);
            } else {
                rej(err);
            }
        })
    })
}


function addSingleStudent (grandNumber, {name, number, age, sex, isMember, isPartyMember, date, region, tel}) {
    const query = 'insert into s_'+ grandNumber + ' (`name`,`number`,`age`,`sex`, `isMember`, `isPartyMember`, `dateOfBirth`, `region`, `tel`)' + ' values("' + name + '",' + number + ',' + age + ',"' + sex + '",' + isMember + ',' + isPartyMember + ',"' + date + '","' + region + '","' + tel + '")';
    // const query = 'insert into test(`name`) values("lai")';
    // const query = "select * from test";
    console.log(query);
    return new Promise( (res, rej) => {
        connect.query(query, function (err, data) {
            if(err == null) {
                console.log(data);
                res(data);
            } else {
                rej(err);
            }
        })
    })
    
}

function searchStudent (grandNumber, data) {
    console.log(data);
    const name = data.replace(/[0-9]/g, "");
    const number = data.replace(/[^0-9]/g, "");
    let condition = "";
    console.log(name, number);
    if(name !== "" && number !== "") {
        condition = "name like '%" + name + "%' and number like '%" + number + "%'";
    } else if(name == "" && number !== ""){
        condition = "number like '%" + number + "%'";
    } else if(name !== "" && number == "") {
        condition = "name like '%"
         + name + "%'";
    }
    const query = "select  name, number,age, sex, headImg from s_" + grandNumber + " where " + condition;
    return new Promise( (res, rej) => {
        connect.query(query, function (err, data) {
            if(err == null) {
                res(data);
            } else {
                rej(err);
            }
        })
    })
}

module.exports = {
    getStudentSomeInfo,
    getSingleStudentAllInfo,
    updateGrades,
    deleteSingleStudent,
    addSingleStudent,
    searchStudent
}