// pages/verify/verify.js



import {GotoPage} from "../../utils/gotoPage";
import {AJAXInteracts} from '../../utils/interacts';
const gotoPage = new GotoPage();
const ajax = new AJAXInteracts();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    jobNumber: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  oSubmit () {
    
    let name = this.data.name || "张三";
    let jobNumber = this.data.jobNumber || 1001 ;
    const url = `isAdmin`; 
    console.log(name === "", jobNumber === 0);
    if(name === "" || jobNumber === 0) {
      wx.showToast({
        title: '请输入教师名或教师工号',
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
    ajax.verifyAdmin(url, {name, jobNumber}).then( (res) => {
      console.log(res);
      if(res.data == "isNotAAdmin") {
        wx.showToast({
          title: '验证失败， 没有该教师',
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
        
        wx.setStorageSync("adminInfo", res.data);
        this.gotoHome(); 
      }
    });
  },
  gotoHome() {
    gotoPage.gotoHome();
  },
  fromSubmit (e) {
    this.setData({
      jobNumber: e.detail.value.jobNumber,
      name: e.detail.value.name
    })
  }
})