// pages/select/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
 To_PandP(){
   wx.redirectTo({
     url: '/pages/PandPgames/PandPgames'
   });   
 },
 To_PandR(){
   wx.redirectTo({
     url: '/pages/PandRgames/PandRgames'
   });
 },
To_RandR(){
  const token=wx.getStorageSync("token");
  if(token){
    wx.navigateTo({
     url: '/pages/create/create'
   });
  }  
   else{
    wx.navigateTo({
      url: '/pages/login/login'
    });
   }   
},
  lookrule : function(){
    wx.showModal({
      title: '提示',
      content: '您想要查看游戏规则吗',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          console.log('用户点击确定')
          wx.redirectTo({
            url: '/pages/rules/rules',
          })
        } else {//这里是点击了取消以后
          console.log('用户点击取消')
        }
      }
    })
  }
})