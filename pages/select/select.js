// pages/select/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
 To_PandP(){
   wx.redirectTo({
     url: '/pages/ToP_and_P/ToP_and_P'
   });   
 },
 To_PandR(){
   wx.redirectTo({
     url: '/pages/ToP_and_R/ToP_and_R'
   });
 },
To_RandR(){
   wx.navigateTo({
     url: '/pages/ToR_and_R/ToR_and_R'
   });
     
}
})