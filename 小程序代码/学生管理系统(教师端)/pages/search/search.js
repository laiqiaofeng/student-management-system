// pages/search/search.js
import {GotoPage}  from "../../utils/gotoPage";
import {AJAXInteracts} from "../../utils/interacts";
const gotoPage = new GotoPage();
const ajax = new AJAXInteracts();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentList: [],
    modalName: null,
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
  onSubmit (e) {
    if(e.detail.value.searchInfo == "") {
      wx.showToast({
        title: '请输入查询信息',
        icon: 'none',
        image: '',
        duration: 1500,
        mask: false,
        success: (result)=>{
          
        },
        fail: ()=>{},
        complete: ()=>{}
      });
      return;
    }
    ajax.searchStudent(this.data.grandNumber, e.detail.value.searchInfo).then( (res) => {
      console.log(res.data);
      this.setData({
        studentList: res.data
      })
    });
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
  gotoDetail (e) {
    const number = e.currentTarget.dataset.number;
    const grandNumber = this.data.grandNumber;
    gotoPage.gotoDetail(grandNumber ,number);
  }
})