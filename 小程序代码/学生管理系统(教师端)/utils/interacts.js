/**
 * 定义各种与后端交互的函数
 * 
 */

import {Request} from "./request";
const baseUrl = "http://192.168.56.1:9998/";
class AJAXInteracts extends Request{
    constructor () {
        super(baseUrl);
    }
    verifyAdmin (url, data) {
        return this.request("GET", url, data);
    }

    getStudentList (grandNumber) {
        const url = `getStudentSomeInfo?grandNumber=${grandNumber}`;
        return this.request("GET", url);
    }

    getStudentInfo(grandNumber, number) {
        const url = `getSingleStudentAllInfo?grandNumber=${grandNumber}&number=${number}`;
        return this.request("GET", url);
    }

    modifiedGrades(grandNumber, number, course ,score) {
        const url = "modifiedGrades";
        return this.request("GET", url, {grandNumber, number, course ,score});
    }

    deleteStudent (grandNumber, number) {
        const url = `deleteStudent?grandNumber=${grandNumber}&number=${number}`;
        return this.request("GET", url);
    }

    addStudent (data) {
        const url = "addStudent";
        return this.request("GET", url, data);
    }

    searchStudent (grandNumber, data) {
        const url = "searchStudent";
        return this.request("GET", url, {grandNumber, data});
    }
}


export {
    AJAXInteracts
}