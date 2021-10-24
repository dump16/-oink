// pages/logout/logout.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  toLast(){
    wx.redirectTo({
      url: '/pages/select/select'
    });
  },
  Logout(){
    const token=wx.getStorageSync("token");
    if(!token){
      wx.removeStorageSync(token),    
      wx.redirectTo({
        url: '/pages/select/select'
      })
  }
}
})