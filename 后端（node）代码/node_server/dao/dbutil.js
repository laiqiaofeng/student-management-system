const mysql = require("mysql");
const connect = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "(Laiqf..18)",
    database: "学生管理系统数据库"
});



module.exports = connect;