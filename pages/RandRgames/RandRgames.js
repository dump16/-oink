// pages/RandRgames/RandRgames.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshow:true,
    lookcard:false,
    image_url0:'https://i.loli.net/2021/10/23/d5toN2OHnrhIZyP.jpg',
    image_url:'https://i.loli.net/2021/10/24/rwhbsH4WqPcOY5U.png',
    last_code:" ",                  //   上步操作信息
    last_msg:"对局刚开始",
    type:0,                         //   操作，0为卡组抽牌，1为手牌出牌
    card:" ",                       //   指定卡牌
    temp:" ",                       //   临时卡牌
    group_card:[],                  //   卡组
    group_num:51,                   //   卡组牌数
    placement_card:[],              //   放置区
    placement_num:0,                //   放置区牌数
    top:" ",                        //   放置区顶部
    your_turn:false,                //   是否是己方回合
    finished:false,                 //   完成情况
    winner:0,                       //   胜利者：0为1P，1为2P*/
    host_hand:[],
    client_hand:[],
    player:[{hand:[],num:[],total:0},
            {hand:[],num:[],total:0}],
    listen:0,
    turn1:1
  },
  changeview : function(){
    if(this.data.isshow){
      this.setData({
        isshow:false
      })
      if(this.data.turn1==1){
        this.robot();
      }
    } else{
      this.setData({
        isshow:true
      })
    }
  },
  iflook :function(){
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
    var that=this
    if(that.data.isshow == true && that.data.turn1==1&& that.data.finished == false){  //  2P回合时响应-S
      that.data.card = "Sx";
      this.SelectHand();
    }
  },
  clickhcard1:function(e){
    var that=this
    if(that.data.isshow == true && that.data.turn1==1&& that.data.finished == false){  //  2P回合时响应-H
      that.data.card = "Hx";
      this.SelectHand();
    }
  },
  clickccard1:function(e){
    var that=this
    if(that.data.isshow == true && that.data.turn1==1&& that.data.finished == false){  //  2P回合时响应-C
      that.data.card = "Cx";
      this.SelectHand();
    }
  },
  clickdcard1:function(e){
    var that=this
    if(that.data.isshow == true && that.data.turn1==1&& that.data.finished == false){  //  2P回合时响应-D
      that.data.card = "Dx";
      this.SelectHand();
    }
  },
  clickgcard:function(e){
    var that=this
    if(that.data.turn1==0){
      return;
    }else if(that.data.turn1==1 &&that.data.isshow == false){
      return;
    }
    if(that.data.finished == false){
      this.SelectGroup();
    }
  },
  SelectGroup: function(e){                // 玩家-卡组抽牌
    console.log("玩家-卡组抽牌")
    var that = this
    that.data.type=0
    //  执行操作
    let uuid=wx.getStorageSync("uuid")
    const token=wx.getStorageSync("token")
    wx.request({
      url: 'http://172.17.173.97:9000/api/game/'+uuid,
      data: {"type":0},
      header: {'content-type':'application/json',
      'Authorization':token},
      method: 'PUT',
      success: (res) => {
        that.data.card=res.data.data.last_code.substring(4)
        that.data.placement_card[that.data.placement_num++] = that.data.card
        that.data.group_num--
        if(this.IsEat() == true){
          this.EatHand()
        }
        this.Update()
        if(that.data.group_num == -1){         //  卡组为空，结束对局
          that.data.finished = true
          this.IsWinner()
        }
        that.data.turn1=0
      },
      fail: () => {
        console.log("请求失败")
      },
      complete: () => {}
    })
  },
  SelectGroup1: function(e){               // 对方-卡组抽牌
    console.log("对方-卡组抽牌")
    var that = this;
    that.data.placement_card[that.data.placement_num++] = that.data.card;
    that.data.group_num--
    if(this.IsEat() == true){
      this.EatHand();
    }
    this.Update();
    if(that.data.group_num == -1){         //  卡组为空，结束对局
      that.data.finished = true;
      this.IsWinner();
    }
  },
  OpHand: function(e){                     // 处理手牌
    var that = this;
    var suit = that.data.temp.substring(0, 1);
    var i = 0;
    if(that.data.turn1==1){
      i=1;
    }
    that.data.player[i].total++;
    switch (suit) {                         //  对应花色
      case "S":                             //  黑桃S
        that.data.player[i].hand[0][that.data.player[i].num[0]++] =  that.data.temp;
        break;
      case "H":                             //  红桃H 
        that.data.player[i].hand[1][that.data.player[i].num[1]++] =  that.data.temp;
        break;
      case "C":                             //  梅花C
        that.data.player[i].hand[2][that.data.player[i].num[2]++] =  that.data.temp;
        break;
      case "D":                             //  方块D
        that.data.player[i].hand[3][that.data.player[i].num[3]++] =  that.data.temp;
        break;
    }
  },  
  SelectHand: function(e){                 // 玩家-手牌出牌
    console.log("玩家-手牌出牌")
    var that = this;
    that.data.type=1;
    var suit = that.data.card.substring(0, 1);
    if(that.data.player[1].total != 0){ //  手牌不为空
      console.log("P1:hand:")
      console.log(that.data.player[1].hand)
      console.log("num:")
      console.log(that.data.player[1].num)
      switch(suit) {                      //  对应花色
        case "S": //黑桃S
          if(that.data.player[1].num[0] == 0){
            break;
          }
          that.data.player[1].total--;
          that.data.placement_card[that.data.placement_num++] = that.data.player[1].hand[0][--that.data.player[1].num[0]];
          break;
        case "H": //红桃H
          if(that.data.player[1].num[1] == 0){
            break;
          }
          that.data.player[1].total--;
          that.data.placement_card[that.data.placement_num++] = that.data.player[1].hand[1][--that.data.player[1].num[1]];
          break;
        case "C": //梅花C
          if(that.data.player[1].num[2] == 0){
            break;
          }
          that.data.player[1].total--;
          that.data.placement_card[that.data.placement_num++] = that.data.player[1].hand[2][--that.data.player[1].num[2]];
          break;
        case "D": //方块D
          if(that.data.player[1].num[3] == 0){
            break;
          }
          that.data.player[1].total--;
          that.data.placement_card[that.data.placement_num++] = that.data.player[1].hand[3][--that.data.player[1].num[3]];
          break;
      }
      that.data.card=that.data.placement_card[that.data.placement_num-1];
      console.log(that.data.card)
      //  执行玩家操作-手牌出牌
      let uuid=wx.getStorageSync("uuid");
      const token=wx.getStorageSync("token");
      wx.request({
        url: 'http://172.17.173.97:9000/api/game/'+uuid,
        data: {"type":1,"card":that.data.card},
        header: {'content-type':'application/json',
        'Authorization':token},
        method: 'PUT',
        success: (res) => {
          //console.log("出手牌");
          console.log(res.data.data)
          if(this.IsEat() == true){
            this.EatHand();
          }
          this.Update();
          that.data.turn1=0
        },
        fail: () => {
          console.log("请求失败")
        },
        complete: () => {}
      });
    } 
  }, 
  SelectHand1: function(e){                // 对方-手牌出牌
    console.log("对方-手牌出牌")
    var that = this;
    var suit = that.data.card.substring(0, 1);
    that.data.player[0].total--;
    that.data.placement_card[that.data.placement_num++] = that.data.card;
    var suit_int=-1;
    switch(suit) {                         // 对应花色
      case "S":                            // 黑桃S
        suit_int=0;
        break;
      case "H": //红桃H
        suit_int=1;
        break;
      case "C": //梅花C
        suit_int=2;
        break;
      case "D": //方块D
        suit_int=3;
        break;
    }
    //  移除该手牌
    var flag = -1;
    for(var i = 0; i < that.data.player[0].num[suit_int]; i++){
      if(flag!=-1){
        if(i==that.data.player[0].num[suit_int]-1){
          break;
        }else{  //卡牌前移
          that.data.player[0].hand[suit_int][i]=that.data.player[0].hand[suit_int][i+1];
        }
      }else if(that.data.player[0].hand[suit_int][i] == that.data.card){
        flag = i;
      }
    }
    that.data.player[0].num[suit_int]--;
    if(this.IsEat() == true){
      this.EatHand();
    }
    this.Update();
  },
  IsEat: function(e){                      //  吃牌判断
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
  EatHand: function(e){                    //  手牌吃牌
    var that = this;
    for(var i = 0; i < that.data.placement_num; i++){
      that.data.temp = that.data.placement_card[i];
      this.OpHand();
    }
    that.data.placement_num = 0;
  },
  IsWinner: function(e){                   //  胜利者判断
    console.log("输出胜利者信息")
    var that = this;
    if(that.data.player[0].total < that.data.player[1].total){
      that.data.winner = 0;
    }else{
      that.data.winner = 1;
    }
    this.setData({
      image_url0:'https://i.loli.net/2021/10/24/hFNM9dbDB1wCnak.png'
    })
    //  获取对局信息
    let uuid=wx.getStorageSync("uuid");
    const token=wx.getStorageSync("token");
    wx.request({
      url: 'http://172.17.173.97:9000/api/game/'+uuid,
      header: {'content-type':'application/json',
      'Authorization':token},
      method: 'GET',
      success: (res) => {
        //  核验信息是否一致
        console.log("host:"+res.data.data.host_hand)
        console.log("client:"+res.data.data.client_hand)
        console.log("winner:"+res.data.data.winner)
        console.log("YOU--->"+that.data.player[0].hand)
        console.log("ME---->"+that.data.player[1].hand)
        console.log("Win--->"+that.data.winner)
        if(res.data.data.winner ==0){
           wx.navigateTo({
            url: '/pages/over/over?id=0&mode=2'
          });
        }else{
             wx.navigateTo({
              url: '/pages/over/over?id=1&mode=2'
            });
        }
        clearInterval(this.data.listen);
        },
        fail: () => {
          console.log("请求失败")
        },
        complete: () => {}
      });
  },
  Update:function (e){                     //  更新界面数据
    console.log("更新界面数据")
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
  robot:function(){
    console.log("AI作战")
    var that = this;
    if(that.data.finished == false){    //  对局未完成
      if(that.data.player[1].total==0){ //  手牌为空
        console.log("手牌为空->出卡组")
        this.SelectGroup();
      }else{
        var max = 0;
        for(var i = 1; i < 4; i++){
          if(that.data.player[1].num[i]>that.data.player[1].num[max]){
            max = i;
          }
        }
        if(that.data.top == " " || that.data.player[1].hand[max][0].substring(0,1)!=that.data.top.substring(0,1)){  //  出数量最多的手牌
          console.log("出数量最多的手牌")
          that.data.card=that.data.player[1].hand[max][that.data.player[1].num[max]-1];
          this.SelectHand();
        }else if(that.data.player[1].total-that.data.player[1].num[max]==0){  //  没有不吃牌的手牌，卡组抽牌
          console.log("没有不吃牌的手牌，卡组抽牌")
          this.SelectGroup();
        }else{  //  数量最多的手牌吃牌，出数量次多的手牌
          console.log("数量最多的手牌吃牌，出数量次多的手牌")
          var sec = 0;
          if(sec==max){
            sec=1;
          }
          for(var i = 0; i < 4; i++){
            if(i==max){
              continue;
            }
            if(that.data.player[1].num[i]>that.data.player[1].num[sec]){
              sec = i;
            }
          }
          that.data.card=that.data.player[1].hand[sec][that.data.player[1].num[sec]-1];
          this.SelectHand();
         }
      }
    }
  },
  Opplay0:function(){
    var that=this
    if(that.data.finished==false){       //  对局未完成，执行对方操作
      //  执行上步操作
      that.data.type=that.data.last_code.substring(2, 3);
      that.data.card=that.data.last_code.substring(4);
      console.log(that.data.card)
      if(that.data.type==0){
        this.SelectGroup1();
      }else if(that.data.type==1){
        this.SelectHand1();
      }
      that.data.turn1=1
      console.log("执行对方操作完成")
      if(that.data.isshow==false){
        this.robot();
      }
    }
  },
  listen:function(){
    var that = this;
    let uuid=wx.getStorageSync("uuid");
    const token=wx.getStorageSync("token");
    wx.request({
      url: 'http://172.17.173.97:9000/api/game/'+uuid+'/last',
      header: {'content-type':'application/json',
      'Authorization':token},
      method: 'GET',
      success: (res) => {
        console.log("监听")
        console.log(res.data)
        if(res.data.code==200){
          if(res.data.data.last_msg=="对局刚开始" && res.data.data.your_turn==false){ //  后手出牌
            console.log("后手出牌")
            that.data.turn1=0
          }else if(that.data.last_msg!=res.data.data.last_msg){ //  获取新信息
            console.log("获取新信息")
            that.data.last_msg=res.data.data.last_msg
            console.log(res.data.data)
            console.log(res.data.data.last_msg)
            that.data.last_code=res.data.data.last_code;
            that.data.your_turn=res.data.data.your_turn;
            console.log(that.data.your_turn)
            console.log(that.data.turn1)
            if(that.data.your_turn==true&&that.data.turn1==1){  //  执行己方操作
              console.log("等待玩家触发点击事件")
              //  等待玩家触发点击事件
            }else if(that.data.your_turn==true&&that.data.turn1==0){ // 执行对方操作
              console.log("执行对方操作")
              this.Opplay0();
            }
          }
        }else if(res.data.code!=200&&res.data.code!=403&&res.data.code!=404){ //  被动结束对局
          console.log("被动结束对局")
          console.log(res.data)
          this.IsWinner();
        }
      },
      fail: () => {
        console.log("请求失败")
      },
      complete: () => {}
    });
  },
  onLoad: function (options) {             //  生命周期函数--监听页面加载
    var that = this;
    //  初始化设置
    for(var i = 0; i < 2; i++){
      that.data.player[i].total = 0;
      for(var j = 0; j < 4; j++){
        that.data.player[i].hand[j] = [];
        that.data.player[i].num[j] = 0;
      }
    }
    this.Update();  //  加载时显示初始数据
    var listen =setInterval(this.listen,2000);
    this.setData({
      listen:listen,
    })
  },
  onUnload(){
    clearInterval(this.data.listen);
  },
  toLast(){
    const uuid=wx.getStorageSync("uuid");  
    wx.showModal({
      title: '提示',
      content: '您确定要离开游戏吗',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          console.log('用户点击确定')
          wx.setStorageSync('uuid', '');
          wx.redirectTo({
            url: '/pages/create/create',//跳去起始页
          })
        } else {//这里是点击了取消以后
          console.log('用户点击取消')
        }
      }
    })
   }
})