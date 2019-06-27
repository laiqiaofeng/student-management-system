// pages/detail/detail.js

import {AJAXInteracts} from "../../utils/interacts";
const ajax = new AJAXInteracts();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentInfo: {},
    drawerShow: false,
    modalName: "",
    ScoreInput: null,
    addCourse: "选择科目",
    addScore: "输入分数",
    alterScore: 0,
    alterCourse: "",
    scoreType: "ADD",
    grandNumber: 0,
    number: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getStudentInfo(options.grandNumber ,options.number);
    this.setData({
      addCourse: "选择科目",
      addScore: "输入成绩"
    })
  },
  getStudentInfo (grandNumber ,number) {
    this.setData({
      grandNumber,
      number
    })
    ajax.getStudentInfo(grandNumber, number).then( (res) => {
      console.log(res.data);
      res.data.dateOfBirth = res.data.dateOfBirth && res.data.dateOfBirth.slice(0, 10);
      this.setData({
        studentInfo: res.data
      })
    }, (err) => {
      throw new Error(err);
    })
  },
  onModifiedGrades (e) {
    this.hideModal(e);
    const alterScore = this.data.alterScore;
    const alterCourse = this.data.alterCourse;
    ajax.modifiedGrades(
      this.data.grandNumber,
      this.data.number,
      alterCourse,
      alterScore
      ).then( res => {
        const studentInfo = this.data.studentInfo;
        if(Object.prototype.toString.call(studentInfo.score) == "[object Array]") {
          studentInfo.score.forEach( item => {
            if(item.course == alterCourse) {         
              item.score = alterScore;
              this.setData({
                studentInfo: studentInfo
              })
              return;
            }
          })
        }
      })
  },
  onUpdateCourse (e) {
    this.showModal(e);
    this.setData({
      alterCourse: e.currentTarget.dataset.course
    })
    
  },
  onShowDrawer () {
    this.setData({
      drawerShow: true
    })
  },
  stopShowDrawer () {
    this.setData({
      drawerShow: false
    })
  },
  showModal(e) {
    if(e.currentTarget.dataset.target === "AlterScore") {
      this.setData({
        scoreType: "ALTER"
      })
    }else if(e.currentTarget.dataset.target === "AddScore") {
      this.setData({
        scoreType: "ADD"
      })
    }
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null,
      ScoreInput: null
    })
  },
  onChange (e) {
    console.log(e.detail)
    this.setData({
      addCourse: e.detail.value
    })
  },
  onBlur (e) {
    if(this.data.scoreType == "ADD") {
      this.setData({
        addScore: e.detail.value
      })
    } else {
      this.setData({
        alterScore: e.detail.value
      })
    }
  },

})