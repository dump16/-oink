// pages/create/create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      dataList:[],
      num:1,
      total:0,
      uuid:'',
      ifprivate:false,
      listen:0
  },  
  Set_time(utc_datetime) {
    // 转为正常的时间格式 年-月-日 时:分:秒
    var T_pos = utc_datetime.indexOf('T');
    var Z_pos = utc_datetime.indexOf('Z');
    var year_month_day = utc_datetime.substr(0,T_pos);
    var hour_minute_second = utc_datetime.substr(T_pos+1,Z_pos-T_pos-1);
    var new_datetime = year_month_day+" "+hour_minute_second; // 2017-03-31 08:02:06

    // 处理成为时间戳
    timestamp = new Date(Date.parse(new_datetime));
    timestamp = timestamp.getTime();
    timestamp = timestamp/1000;

    // 增加8个小时，北京时间比utc时间多八个时区
    var timestamp = timestamp+8*60*60;

    // 时间戳转为时间
    var beijing_datetime = new Date(parseInt(timestamp) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
    return beijing_datetime; // 2017-03-31 16:02:06
} ,
  nextPage:function(){
    if(this.data.total>=this.data.num){
      this.data.num++;
      this.getList(this.data.num);
    }
    else{
      wx.showToast({
        title: '已经到底了'})
    } 
  },
  getList: function(p=1){
    const token=wx.getStorageSync("token");
    wx.request({
      url: 'http://172.17.173.97:9000/api/game/index',
      data: {
        page_size:10,/*分页大小*/
        page_num:p,/*页码*/},
      header: {'content-type':'application/json',
        'Authorization':token,
          },
      method: 'GET',
      success: (res) => {
        console.log(res.data)
        res.data.data.games.forEach(element => {
          element.created_at=this.Set_time(element.created_at)
        });
        this.setData({
          dataList:[...this.data.dataList,...res.data.data.games],
          total:res.data.data.total_page_num
        })
      }
    });
  },
  onLoad : function(options){
    this.getList();    
  },/**
  * 页面相关事件处理函数--监听用户下拉动作
  */
 getLast : function(e){
  const token=wx.getStorageSync("token");
  wx.request({
    url: 'http://172.17.173.97:9000/api/game/'+e+'/last',
    data: {},
    header: {'content-type':'application/json',
    'Authorization':token},
    method: 'GET',
    success: (res) => {
     console.log(res.data)
     if(res.data.code==200){
       console.log(res.data.data.last_msg)
       wx.redirectTo({
         url: '/pages/RandRgames/RandRgames'
       });    
     }
    },
    fail: () => {},
    complete: () => {}
  });
 },
 reach_bottom: function () {
     this.nextPage();
 },
 /*创建新的对局*/
 create_new: function() {
   /*是否创建私人房间*/
   var that=this;
  wx.showModal({
    title: '提示',
    content: '您想要创建私人房间吗',
    success: function (res) {
      if (res.confirm) {//这里是点击了确定以后
        console.log('用户点击确定')
        that.setData({
          ifprivate:true
        })
      } else {//这里是点击了取消以后
        console.log('用户点击取消')
      }
      const token=wx.getStorageSync("token");
      wx.request({
        url: 'http://172.17.173.97:9000/api/game',
        data: {"private":that.data.ifprivate},
        header: {'content-type':'application/json',
        'Authorization':token},
        method: 'POST',
        success: (res) => {
          console.log(res.data)
          wx.setStorageSync("uuid",res.data.data.uuid);
          /*wx.showModal({
            title: '提示',
            content: '对局码为{{uuid}}',
            showCancel: false,
            confirmText: '确定'
          });*/
          const uuid=wx.getStorageSync("uuid");
          that.listen(uuid);
          wx.showToast({
            title: '等待对局 游戏匹配中 等待对局创建……',
            icon:'none',
            duration:10000,
            mask: false,
          }); 
        }
      });
    },
    fail: () => {},
    complete: () => {}
  });
    
 },
 /*监听上一步返回的信息*/
 listen:function(e){
    var that=this;
    var times=0;
    this.data.listen=setInterval(function(){
      times++;
       if(times<60)that.getLast(e);
       else clearInterval(this.data.listen);
    },1000)   
 },
 /*加入新的对局*/
 join_new: function(event) {
  const token=wx.getStorageSync("token");
  /*得到该数组的uuid*/
  wx.setStorageSync("uuid",event.currentTarget.dataset.uuid);
  const uuid=wx.getStorageSync("uuid");
  wx.request({
    url: 'http://172.17.173.97:9000/api/game/'+uuid,
    /*data: {private:false},*/
    header: {'content-type':'application/json',
    'Authorization':token},
    method: 'POST',
    success: (res) => {
      console.log(res.data)
      if(res.data.code==200)this.getLast(uuid);
    },
    fail: () => {},
    complete: () => {}
  });
 },
 getUuid: function(e) {
  var value = e.detail.value; //获取输入的内容
  this.setData({
      uuid:value,
  });
  wx.setStorageSync('uuid', value);//将获取到的username值存入本地缓存空间
},
/*通过对局码加入对局*/
uuid_tojoin : function(e) {
  const token=wx.getStorageSync("token");
  wx.request({
      url: 'http://172.17.173.97:9000/api/game/'+this.data.uuid,
      /*data: {private:true},*/
      header: {'content-type':'application/json',
      'Authorization':token},
      method: 'POST',
      success: (res) => {
        console.log(res.data)
        if(res.data.code==200){
          this.listen(this.data.uuid);
          this.setData({
            uuid:''
          });}
      },
      fail: () => {},
      complete: () => {}
    });
  },
  onUnload(){
    clearInterval(this.data.listen);
  },
})