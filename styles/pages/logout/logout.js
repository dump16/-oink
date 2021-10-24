// pages/logout/logout.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      id:'',
      name:''
  },
  onLoad(){
    this.setData({
      id:wx.getStorageSync("student_id"),
      name:wx.getStorageSync("name")
    })
  },
  toLast(){
    wx.redirectTo({
      url: '/pages/select/select'
    });
  },
  Logout(){
    const token=wx.getStorageSync("token");
      wx.showModal({
        title: '提示',
        content: '您确定要退出登录吗',
        success: function (res) {
          if (res.confirm) {//这里是点击了确定以后
            console.log('用户点击确定')
            wx.setStorageSync('token', '');//将token置空
            wx.setStorageSync('name', '');
            wx.setStorageSync('student_id', '');
            wx.redirectTo({
              url: '/pages/index/index',//跳去起始页
            })
          } else {//这里是点击了取消以后
            console.log('用户点击取消')
          }
        }
      })
}
})