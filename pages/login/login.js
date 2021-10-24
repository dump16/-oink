// pages/login/login.student_id:''js
Page({

  /**
   * 页面的初始数据
   */
  data(){
    student_id=" ",
    password=" "
  },
  getUserName: function(e) {
    var value = e.detail.value; //获取输入的内容
    this.setData({
      student_id:value,//改变page--data中username的值
    })
    wx.setStorageSync('student_id', value);//将获取到的username值存入本地缓存空间
  },
  getPassword:function(e) {
    var value = e.detail.value;
    this.setData({
      password: value,
    })
    wx.setStorageSync('password', value);
  },
  doLogin: function(e) {
    var that = this;
    if(that.data.student_id.length ==0 || that.data.password.length ==0){//校验非空
      wx.showToast({  //弹框提示
        icon: 'none',
        title: '用户名或密码不能为空！',
        duration: 2000,
      })
    }else {
      wx.request({  //向后台发送请求
        url: 'http://172.17.173.97:8080/api/user/login',
        method: "post",
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
          student_id: this.data.student_id, //this.data.username 代表你data中username的值
          password: this.data.password,
        },
        success: function (res) { //res为后台返回给前端的数据
          console.log(res.data);
          if(res.data.status == 200){ //如果返回的code为200，代表用户名密码验证成功
            const token=wx.getStorageSync("token");
            console.log(token);
            if(!token){/*token为空*/
              wx.setStorageSync("token",res.data.data.token);
               /*console.log(wx.getStorageSync("token"));*/
            }
            wx.setStorageSync("student_id",res.data.data.detail.student_id);
            console.log(res.data.data.detail.student_id)
            wx.setStorageSync("name",res.data.data.detail.name);
           wx.showToast({
                title: '登录成功',
                success:function(){
                  setTimeout(
              function(){wx.navigateTo({
                url: '/pages/create/create'
              }),8000}
            );
          }
         });
            return;
          }else{
            wx.showToast({
              icon: 'none',
              title: '用户名或密码错误',
            })
          }
        }
      })
    } 
},
 toLast(){
  wx.redirectTo({
    url: '/pages/select/select'
  });
 }
})