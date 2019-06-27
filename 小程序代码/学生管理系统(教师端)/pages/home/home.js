// pages/home/home.js

import {GotoPage} from "../../utils/gotoPage";
const gotoPage = new GotoPage();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grandList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getGrandList();
  },

  getGrandList() {
    const adminInfo = wx.getStorageSync("adminInfo");
    const grand = adminInfo.grand;
    let grandList = grand.split("|");
    this.setData({
      grandList
    })
  },
  gotoStudentList (e) {
    const grandNumber = e.currentTarget.dataset.grandnumber;
    gotoPage.gotoStudentList(grandNumber);
  }
})