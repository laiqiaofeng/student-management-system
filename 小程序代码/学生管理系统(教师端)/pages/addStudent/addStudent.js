// pages/addStudent/addStudent.js

import {GotoPage}  from "../../utils/gotoPage";
import {AJAXInteracts} from "../../utils/interacts";
const gotoPage = new GotoPage();
const ajax = new AJAXInteracts();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['江西省', '抚州市', '临川区'],
    date: '2019-6-23',
    grandNumber: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        grandNumber: options.grandNumber
      })
  },
  RegionChange: function(e) {
    this.setData({
      region: e.detail.value
    })
  },

  onSubmit (e) {
    const data = e.detail.value;
    let errMsg = "";
    const result = {};
    for(let prop in data) {
      if(prop == "name") {
          if(data[prop] == "") {
            errMsg = "姓名不能为空";
          } else {
            result.name = data[prop];
          }
      } else if(prop == "tel") {
        if(data[prop] == "") {
          errMsg = "电话号码不能为空";
          
        } else{
          result[prop] = data[prop];
        }
      } else if(prop == "age") {
        if(data[prop] == "") {
          errMsg = "年龄不能为空";
          
        } else {
          result[prop] = data[prop];
        }
      }else if(prop == "number") {
        if(data[prop] == "") {
          errMsg = "学号不能为空";
          
        } else {
          result[prop] = data[prop];
        }
      }else if(prop == "sex") {
        result["sex"] = data[prop] ? "男" : "女";
      }else if(prop == "isDY") {
        result["isMember"] = data[prop] ? 1 : 0;
      }else if(prop == "isTY") {
        result["isPartyMember"] = data[prop] ? 1 : 0;
      } else if(prop == "region") {
        result["region"] = data[prop][0] + data[prop][1] + data[prop][2]
      }else {
        result[prop] = data[prop];
      }
    }

    if (errMsg != "") {
      wx.showToast({
        title: errMsg,
        icon: 'none',
        image: '',
        duration: 1500,
        mask: false,
        success: (result)=>{
          
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    } else {
      console.log(result);
      ajax.addStudent({
        grandNumber: this.data.grandNumber,
        studentInfo: result
      }).then(res => {
        console.log(res);
        gotoPage.gotoStudentList(this.data.grandNumber);
      })
    }
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },

})