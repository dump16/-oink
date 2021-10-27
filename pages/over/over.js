// pages/over/over.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winner:'',
    loser:'',
    mode:' '
  },
onLoad: function(option){
    if(option.id==0){
      this.setData({
        winner:"1P",
        loser:"2P"
      })
    }
    else{
      this.setData({
        winner:"2P",
        loser:"1P"
      })
    }
    this.setData({
      mode:option.mode
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function () {
      setTimeout((res) => {
       this.redict();
      }, 5000);
  },
 redict: function(){
  if(this.data.mode==2){

  } if(this.data.mode==2){
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
  }
  else{
    wx.showModal({
      title: '提示',
      content: '您要返回首页吗',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          console.log('用户点击确定')
          wx.redirectTo({
            url: '/pages/index/index',
          })
        } else {//这里是点击了取消以后
          console.log('用户点击取消')
          wx.redirectTo({
            url: '/pages/select/select',
          })
        }
      }
    })
  }
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