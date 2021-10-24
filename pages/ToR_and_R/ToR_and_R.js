// pages/ToR_and_R/ToR_and_R.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onShow:function(){
      setTimeout(function(){
        wx.redirectTo({
          url: '/pages/create/create'
        }),9000 })
    
  }
    
  
})