// pages/PandRgames/PandRgames.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshow:true,
    lookcard:false,
    image_url0:'https://i.loli.net/2021/10/23/d5toN2OHnrhIZyP.jpg',
    image_url:'https://i.loli.net/2021/10/24/rwhbsH4WqPcOY5U.png',
    card:" ",                         //   指定卡牌
    group_card:["S1","H1","C1","D1",
                "S2","H2","C2","D2",
                "S3","H3","C3","D3",
                "S4","H4","C4","D4",
                "S5","H5","C5","D5",
                "S6","H6","C6","D6",
                "S7","H7","C7","D7",
                "S8","H8","C8","D8",
                "S9","H9","C9","D9",
                "S10","H10","C10","D10",
                "SJ","HJ","CJ","DJ",
                "SQ","HQ","CQ","DQ",
                "SK","HK","CK","DK"], //   卡组扑克牌(包括花色和牌数)
      group_num:51,                   //   卡组牌数
      placement_card:[],              //   放置区
      placement_num:0,                //   放置区牌数
      top:" ",                        //   放置区顶部
      turn:"0",                       //   回合：0为1P，1为2P
      finished:false,                 //   完成情况
      winner:0,                       //   胜利者：0为1P，1为2P*/
      player:[{hand:[],num:[],total:0},
              {hand:[],num:[],total:0}],
  },
  iflook: function(){
    if(this.data.lookcard){
      this.setData({
        lookcard:false
      })
    }
    else{
      this.setData({
        lookcard:true
      })
    }
  },
  changeview : function(){
      if(this.data.isshow){
        this.setData({
          isshow:false
        })
        if(this.data.turn=="1"){
          this.robot(1);
        }
      }
      else{
        this.setData({
          isshow:true
        })
      }
  },
  imageUrl : function(e){
    if(e=="S1"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/4VAmMfcYGF8ROSX.png'
      })
    }
    else if(e=="H1"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/tzbVJqdoBymODXv.png'
      })
    }
    else if(e=="C1"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/dGwpofDyigIuvmn.png'
      })
    }
    else if(e=="D1"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/RkrFydlMWVz3acK.png'
      })
    }
    else if(e=="S2"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/ZWXgmjhHFQG5V6b.png'
      })
    }
    else if(e=="H2"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/uWjGekCdR9UZ14i.png'
      })
    }
    else if(e=="C2"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/FC25hISDQ3WK6iN.png'
      })
    }
    else if(e=="D2"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/vGZl8yxodWnD1NL.png'
      })
    }
    else if(e=="S3"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/bhJ26EakxmG9VBT.png'
      })
    }
    else if(e=="H3"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/b7BH9hyc2JnXMvS.png'
      })
    }
    else if(e=="C3"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/2HG7a9NVqTYehzR.png'
      })
    }
    else if(e=="D3"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/lHNmr8L7ocD2zvY.png'
      })
    }
    else if(e=="S4"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/3nbuH2sEmWQ9ryD.png'
      })
    }
    else if(e=="H4"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/16QuZgTfXmWl8MF.png'
      })
    }
    else if(e=="C4"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/b6UFTXAdSGBamDH.png'
      })
    }
    else if(e=="D4"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/gKNUEHkAqDcyhF5.png'
      })
    }
    else if(e=="S5"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/24/tsFLo1Gg3ZHIWmV.png'
      })
    }
    else if(e=="H5"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/HdLzicnM2e8X1Cq.png'
      })
    }
    else if(e=="C5"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/24/rzoH6cfZUBQeyqO.png'
      })
    }
    else if(e=="D5"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/wnPNq2MdbyU78eD.png'
      })
    }
    else if(e=="S6"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/uWzyOs2iRhX1UVw.png'
      })
    }
    else if(e=="H6"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/24/WfjXkdclQvAULVp.png'
      })
    }
    else if(e=="C6"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/24/E81SV92JyMOXpjL.png'
      })
    }
    else if(e=="D6"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/24/aYWAhNy6iQftT1R.png'
      })
    }
    else if(e=="S7"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/pLYaWAZ4vtsoMbI.png'
      })
    }
    else if(e=="H7"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/24/zPsulK8ynh6mbGE.png'
      })
    }
    else if(e=="C7"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/24/9oDcyhfZLKHd7aV.png'
      })
    }
    else if(e=="D7"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/24/UkjfyVvgtCD6PLW.png'
      })
    }
    else if(e=="S8"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/24/w7XixmYDaQRGv2H.png'
      })
    }
    else if(e=="H8"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/24/wxhLFZfAjBOzkg3.png'
      })
    }
    else if(e=="C8"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/24/HGfp2oDk6rQ4yuA.png'
      })
    }
    else if(e=="D8"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/24/APbO6slRoNeEfCW.png'
      })
    }
    else if(e=="S9"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/24/kDGg4o1qVxspObP.png'
      })
    }
    else if(e=="H9"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/24/wRj3KnaI5pOfL6H.png'
      })
    }
    else if(e=="C9"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/24/e7AdbxctmzvqwsN.png'
      })
    }
    else if(e=="D9"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/24/3OvQutPqnLjsRT7.png'
      })
    }
    else if(e=="S10"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/24/eJZDQ2y6nN9pzKk.png'
      })
    }
    else if(e=="H10"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/24/ob7s2AV6RwvtDZO.png'
      })
    }
    else if(e=="C10"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/24/R5qZcpMDL9IYsOE.png'
      })
    }
    else if(e=="D10"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/24/JnekmUdyS6NTo4M.png'
      })
    }
    else if(e=="SJ"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/8yF1rV4S3RjJnKY.png'
      })
    }
    else if(e=="HJ"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/96BztVUyRmqL4ZO.png'
      })
    }
    else if(e=="CJ"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/hF4YbkrOtxDLVpI.png'
      })
    }
    else if(e=="DJ"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/pxoRVv58zgeUbnK.png'
      })
    }
    else if(e=="SQ"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/StVmExOafFl3Bhp.png'
      })
    }
    else if(e=="HQ"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/9ZJxO1MfaDA2Eyr.png'
      })
    }
    else if(e=="CQ"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/XRE2JCif5T1HS8q.png'
      })
    }
    else if(e=="DQ"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/coTW75Q36eXuP9M.png'
      })
    }
    else if(e=="SK"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/e8YhO2Ut1XlyqBS.png'
      })
    }
    else if(e=="HK"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/s18Mw5uvRcTBoAJ.png'
      })
    }
    else if(e=="CK"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/JpESdnD3CLMuI1F.png'
      })
    }
    else if(e=="DK"){
      this.setData({
        image_url:'https://i.loli.net/2021/10/23/PcXGpQniFhZ9Dlo.png'
      })
    }
    else{
      this.setData({
        image_url:'https://i.loli.net/2021/10/24/rwhbsH4WqPcOY5U.png'
      })
    }
  },
  clickscard1:function(e){
    console.log("0");
    if(this.data.isshow == true && this.data.turn=="1"&& this.data.finished == false){  //  2P回合时响应-S
      this.data.card = "Sx";
      this.SelectHand();
      this.setData({turn:"0"})  
      console.log("P2->S");
      this.robot(0);
    }
  },
  clickhcard1:function(e){
    if(this.data.isshow == true && this.data.turn=="1"&& this.data.finished == false){  //  2P回合时响应-H
      this.data.card = "Hx";
      this.SelectHand();
      this.setData({turn:"0"})
      console.log("P2->H");
      this.robot(0);
    }
  },
  clickccard1:function(e){
    if(this.data.isshow == true && this.data.turn=="1"&& this.data.finished == false){  //  2P回合时响应-C
      this.data.card = "Cx";
      this.SelectHand();
      this.setData({turn:"0"})
      console.log("P2->C");
      this.robot(0);
    }
  },
  clickdcard1:function(e){
    if(this.data.isshow == true && this.data.turn=="1"&& this.data.finished == false){  //  2P回合时响应-D
      this.data.card = "Dx";
      this.SelectHand();
      this.setData({turn:"0"})
      console.log("P2->D");
      this.robot(0);
    }
  },
  clickgcard:function(e){
    if(this.data.turn == "0"){
      return;
    }else if(this.data.turn == "1"&&this.data.isshow == false){
      return;
    }
    if(this.data.finished == false){
      this.SelectGroup();
      this.setData({turn:"0"})
      console.log(this.data.turn+"->G");
      this.robot(0);
    }
  },
  Shuffle: function(){                     //  洗牌
    var that = this;
    var times = 5;                         //  默认洗牌5次
    for(var i = 0; i < times; i++){
      for(var j = 0; j < 52; j++) {
        var rvalue = Math.round(Math.random()*50+1);  //  随机生成[1,52)的一个整数
        var tempcard = that.data.group_card[j];
        that.data.group_card[j] = that.data.group_card[rvalue];
        that.data.group_card[rvalue] = tempcard;
      }
    }
  },
  SelectGroup: function(e){                //  卡组抽牌
    var that = this;
    that.data.placement_card[that.data.placement_num++] = that.data.group_card[that.data.group_num--];
    if(this.IsEat() == true){
      this.EatHand();
    }
    this.Update();
    if(that.data.group_num == -1){         //  卡组为空，结束对局
      that.data.finished = true;
      this.IsWinner();
    }
  },
  OpHand: function(e){                     //  处理手牌
    var that = this;
    var suit = that.data.card.substring(0, 1);
    var i = parseInt(that.data.turn);
    that.data.player[i].total++;
    switch (suit) {                         //  对应花色
      case "S":                             //  黑桃S
        that.data.player[i].hand[0][that.data.player[i].num[0]] =  that.data.card;
        that.data.player[i].num[0]++;
        break;
      case "H":                             //  红桃H 
        that.data.player[i].hand[1][that.data.player[i].num[1]] =  that.data.card;
        that.data.player[i].num[1]++;
        break;
      case "C":                             //  梅花C
        that.data.player[i].hand[2][that.data.player[i].num[2]] =  that.data.card;
        that.data.player[i].num[2]++;
        break;
      case "D":                             //  方块D
        that.data.player[i].hand[3][that.data.player[i].num[3]] =  that.data.card;
        that.data.player[i].num[3]++;
        break;
    }
  },  
  SelectHand: function(e){                  //  手牌出牌
    var that = this;
    var suit = that.data.card.substring(0, 1);
    var i = parseInt(that.data.turn);
    if(that.data.player[i].total != 0){
      switch(suit) {                      //  对应花色
        case "S": //黑桃S
          if(that.data.player[i].num[0] == 0){
            break;
          }
          that.data.player[i].total--;
          that.data.placement_card[that.data.placement_num++] = that.data.player[i].hand[0][--that.data.player[i].num[0]];
          break;
        case "H": //红桃H
          if(that.data.player[i].num[1] == 0){
            break;
          }
          that.data.player[i].total--;
          that.data.placement_card[that.data.placement_num++] = that.data.player[i].hand[1][--that.data.player[i].num[1]];
          break;
        case "C": //梅花C
          if(that.data.player[i].num[2] == 0){
            break;
          }
          that.data.player[i].total--;
          that.data.placement_card[that.data.placement_num++] = that.data.player[i].hand[2][--that.data.player[i].num[2]];
          break;
        case "D": //方块D
          if(that.data.player[i].num[3] == 0){
            break;
          }
          that.data.player[i].total--;
          that.data.placement_card[that.data.placement_num++] = that.data.player[i].hand[3][--that.data.player[i].num[3]];
          break;
      }
      if(this.IsEat() == true){
        this.EatHand();
      }
    }
    this.Update();
  },
  IsEat: function(e){//  吃牌判断
    var that = this;
    if(that.data.placement_num <= 1){
      return false;
    }
    var str1 = that.data.placement_card[that.data.placement_num-1].substring(0, 1);
    var str2 = that.data.placement_card[that.data.placement_num-2].substring(0, 1);
    if(str1 == str2){  //  花色相同
      return true;
    }else{
      return false;
    }
  },
  EatHand: function(e){//  手牌吃牌
    var that = this;
    for(var i = 0; i < that.data.placement_num; i++){
      that.data.card = that.data.placement_card[i];
      this.OpHand();
    }
    that.data.placement_num = 0;
  },
  IsWinner: function(e){//  胜利者判断
    var that = this;
    if(that.data.player[0].total < that.data.player[1].total){
      that.data.winner = 0;
    }else{
      that.data.winner = 1;
    }
    this.setData({
      image_url0:'https://i.loli.net/2021/10/24/hFNM9dbDB1wCnak.png'
    })
    wx.navigateTo({
      url: '/pages/over/over?id=that.data.winner'
    });
  },
  Update:function (e) {           //  更新界面数据
    var that = this;
    if(that.data.finished == false){        //  完成对局前允许更新
      if(that.data.placement_num >= 1){
        that.data.top=that.data.placement_card[that.data.placement_num-1];
      }else{
        that.data.top=" ";
      }
      this.imageUrl(that.data.top);
      this.setData({
        group_num:that.data.group_num,
        placement_num:that.data.placement_num,
        scard_num:that.data.player[0].num[0],
        hcard_num:that.data.player[0].num[1],
        ccard_num:that.data.player[0].num[2],
        dcard_num:that.data.player[0].num[3],
        scard_num1:that.data.player[1].num[0],
        hcard_num1:that.data.player[1].num[1],
        ccard_num1:that.data.player[1].num[2],
        dcard_num1:that.data.player[1].num[3],
        card_num:that.data.player[0].total,
        card_num1:that.data.player[1].total,
      })
    }
  },
  robot:function(t){
    var that = this;
    if(that.data.finished == false){    //  对局未完成
      if(that.data.player[t].total==0){ //  手牌为空
        this.SelectGroup();
      }else{
        var max = 0;
        for(var i = 1; i < 4; i++){
          if(that.data.player[t].num[i]>that.data.player[t].num[max]){
            max = i;
          }
        }
        if(that.data.top == " " || that.data.player[t].hand[max][0].substring(0,1)!=that.data.top.substring(0,1)){  //  出数量最多的手牌
          that.data.card=that.data.player[t].hand[max][that.data.player[t].num[max]-1];
          this.SelectHand();
        }else if(that.data.player[t].total-that.data.player[t].num[max]==0){  //  没有不吃牌的手牌，卡组抽牌
          this.SelectGroup();
        }else{  //  数量最多的手牌吃牌，出数量次多的手牌
          var sec = 0;
          if(sec==max){
            sec=1;
          }
          for(var i = 0; i < 4; i++){
            if(i==max){
              continue;
            }
            if(that.data.player[t].num[i]>that.data.player[t].num[sec]){
              sec = i;
            }
          }
          that.data.card=that.data.player[t].hand[sec][that.data.player[t].num[sec]-1];
          this.SelectHand();
         }
      }
      if(this.data.turn == "0"){
        this.data.turn = "1";
        if(this.data.isshow == false){
          this.robot(1);
        }
      }else if(this.data.turn == "1"){
        this.data.turn = "0";      
        this.robot(0);
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //  初始化设置
    this.Shuffle();  //  洗牌
    for(var i = 0; i < 2; i++){
      that.data.player[i].total = 0;
      for(var j = 0; j < 4; j++){
        that.data.player[i].hand[j] = [];
        that.data.player[i].num[j] = 0;
      }
    }
    this.Update();  //  加载时显示初始数据

    this.SelectGroup();  // 机器人先手
    this.setData({turn:"1"})
  },
  toLast(){
    wx.showModal({
      title: '提示',
      content: '您确定要离开游戏吗',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          console.log('用户点击确定')
          wx.redirectTo({
            url: '/pages/select/select',//跳去起始页
          })
        } else {//这里是点击了取消以后
          console.log('用户点击取消')
        }
      }
    })
   }
})