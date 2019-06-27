/**
 * 定义各种页面跳转方法
 * 
 */


 import {NavigateToPage} from "./navigateToPage";

 class GotoPage extends NavigateToPage {
     constructor () {
        super('/pages/');
     }
    //  前往verify的方法
     gotoVerify (suc, fail) {
        const url = "verify/verify";
        return this.gotoPage(url);
     }
    //  前往主页面（班级列表）的方法
     gotoHome () {
        const url = "home/home";
        return this.gotoPage(url);
     }

     //前往studentList页面的方法
     gotoStudentList (data) {
         const url = `studentList/studentList?grandNumber=${data}`;
         return this.gotoPage(url);
     }

     //前往detail页面的方法

     gotoDetail (grandNumber ,data) {
         const url = `detail/detail?grandNumber=${grandNumber}&number=${data}`;
         return this.gotoPage(url);
     }

     //前往addStudent页面的方法
     gotoAddStudent (grandNumber) {
         const url = `addStudent/addStudent?grandNumber=${grandNumber}`;
         return this.gotoPage(url);
     }

     //前往搜索页面的方法
     gotoSearch (grandNumber) {
        const url = `search/search?grandNumber=${grandNumber}`;
        return this.gotoPage(url);
     }
 } 


 export {
     GotoPage
 }