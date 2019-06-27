// pages/studentList/studentList.js

import {GotoPage}  from "../../utils/gotoPage";
import {AJAXInteracts} from "../../utils/interacts";
const gotoPage = new GotoPage();
const ajax = new AJAXInteracts();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tap_card: true,
    tap_listItem: false,
    studentList: [],
    modalName: null,
    jobNumber: 0,
    grandNumber: 0,
    deleteNumber: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getStudentList(options.grandNumber);
  },  
  onTap_card () {
    if(!this.data.tap_card && this.data.tap_listItem) {
      this.setData({
        tap_card: true,
        tap_listItem: false
      })
    }
  },
  onTap_listItem () {

    if(!this.data.tap_listItem && this.data.tap_card) {
      this.setData({
        tap_listItem: true,
        tap_card: false
      })
    }
  },
  getStudentList(grandNumber) {
    this.setData({
      grandNumber
    })
    ajax.getStudentList(grandNumber).then( (res) => {
      console.log(res);
      this.setData({
        studentList: res.data
      })
    });
  },
  onUpdateNumber (e) {
    this.showModal(e);
    this.setData({
      deleteNumber: e.currentTarget.dataset.number
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  onBlur (e) {
    this.setData({
      jobNumber: e.detail.value
    })
  },
  verifyJobNumber (e) {
    this.hideModal();
    const adminInfo = wx.getStorageSync("adminInfo");
    const jobNumber = adminInfo.jobNumber;
    const inputJobNumber = parseInt(e.detail.value.jobNumber);
    console.log(inputJobNumber);
    if(jobNumber !== inputJobNumber) {
      wx.showToast({
        title: '验证失败',
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
      ajax.deleteStudent(
        this.data.grandNumber, 
        this.data.deleteNumber
        ).then(res => {
        wx.showToast({
          title: '删除成功',
          icon: 'success',
          image: '',
          duration: 1500,
          mask: false,
          success: (result)=>{
              this.getStudentList(this.data.grandNumber);
          },
          fail: ()=>{},
          complete: ()=>{}
        })
      })
    }
  },
  gotoAddStudent () {
    gotoPage.gotoAddStudent(this.data.grandNumber);
  },
  gotoSearch () {
    gotoPage.gotoSearch(this.data.grandNumber);
  },
  gotoDetail (e) {
    const number = e.currentTarget.dataset.number;
    const grandNumber = this.data.grandNumber;
    gotoPage.gotoDetail(grandNumber ,number);
  }
})