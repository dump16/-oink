// pages/over/over.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winner:'',
    loser:''
  },
onLoad: function(option){
    if(option.id==0){
      this.setData({
        winner:"P1",
        loser:"P2"
      })
    }
    else{
      this.setData({
        winner:"P2",
        loser:"P1"
      })
    }
},
  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function () {
      setTimeout((res) => {
        wx.showModal({
          title: '提示',
          content: '您要退出登录吗',
          success: function (res) {
            if (res.confirm) {//这里是点击了确定以后
              console.log('用户点击确定')
              wx.setStorageSync('token', '');//将token置空
              wx.setStorageSync('name', '');
              wx.setStorageSync('student_id', '');
              wx.redirectTo({
                url: '/pages/logout/logout',
              })
            } else {//这里是点击了取消以后
              console.log('用户点击取消')
              wx.redirectTo({
                url: '/pages/create/create',
              })
            }
          }
        })
      }, 5000);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },



  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})