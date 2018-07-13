import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import userModel from '../../../status/user.model';
  
@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  public tabactive = 0; // 头部导航是否鼠标经过
  public tableactive = 0; // 底部大图标链接位置是否鼠标经过
  // 头部左边导航数据
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  public now_board :any={
      index:0,
      content:'暂无公告',
  };
  

  public navdatal = [
    {
      text: '',
      bgpositiony: -10,
      isover: false,
      link: ""
    },
    {
      text: this.now_lang.index.Lot_lobby,
      bgpositiony: -114,
      isover: false,
      link: "/lottery"
    },
    {
      text: this.now_lang.index.User_center,
      bgpositiony: -218,
      isover: false,
      link: "/usercenter"
    },
    {
      text: this.now_lang.index.Discount,
      bgpositiony: -322,
      isover: false,
      link: ""
    }
  ];
  // 头部右边导航数据
  public navdatar = [
    {
      text: this.now_lang.index.Notice,
      bgpositiony: -10,
      isover: false,
      link: ""
    },
    {
      text: this.now_lang.index.Lot_info,
      bgpositiony: -114,
      isover: false,
      link: ""
    },
    {
      text: this.now_lang.index.Pho_bet,
      bgpositiony: -218,
      isover: false,
      link: ""
    },
    {
      text:  this.now_lang.index.Client_service,
      bgpositiony: -322,
      isover: false,
      link: ""
    }
  ];
  // 中间内容取tab数据
  public mdtabdata = [
    {
      text: this.now_lang.index.Hot_game,
      link: ""
    },
    {
      text: this.now_lang.index.App_down,
      link: ""
    },
    {
      text: this.now_lang.index.Discount,
      link: ""
    }
  ];
  // 热门游戏彩种球数据
  public ball_list = [
    {
      x: -10,
      y: -10,
      left: "-240",
      link: "/lottery/officialexf/sdexf",
      name: this.now_lang.lot_type.gd_exf,
      imgsrc: require('../images/head_top/gdexf.jpg'),
      bgsrc: require('../images/head_top/gdexfbg.png'),
      icosrc: require('../images/head_top/gdexfico.png'),
    },
    {
      x: -10,
      y: -258,
      left: "0",
      link: "/lottery/officialexf/jxexf",
      name: this.now_lang.lot_type.jx_exf,
      imgsrc:require('../images/head_top/jxexf.jpg'),
      bgsrc:require('../images/head_top/jxexfbg.png'),
      icosrc:require('../images/head_top/jxexfico.png')
    },
    {
      x: -346,
      y: -134,
      left: "120",
      link: "/lottery/creditpcdd/xy28",
      name: this.now_lang.lot_type.xy_28,
      imgsrc:require('../images/head_top/xy28.jpg'),
      bgsrc:require('../images/head_top/xy28bg.png'),
      icosrc:require('../images/head_top/xy28ico.png')
    },
    {
      x: -10,
      y: -258,
      left: "240",
      link: "/lottery/officialssc/cq",
      name: this.now_lang.lot_type.cq_ssc,
      imgsrc:require('../images/head_top/gdexf1.jpg'),
      bgsrc:require('../images/head_top/gdexf1bg.png'),
      icosrc:require('../images/head_top/gdexf1ico.png')
    },
    {
      x: -10,
      y: -258,
      left: "360",
      link: "/lottery/officialklc/bjkl8",
      name: this.now_lang.lot_type.bjkl8_klc,
      imgsrc:require('../images/head_top/bjklb_bg.jpg'),
      bgsrc:require('../images/head_top/bjklbbg.png'),
      icosrc:require('../images/head_top/bjklbico.png')
    },
    {
      x: -10,
      y: -258,
      left: "480",
      link: "/lottery/officialssc/tj",
      name: this.now_lang.lot_type.tj_ssc,
      imgsrc:require('../images/head_top/tjssc.jpg'),
      bgsrc:require('../images/head_top/tjsscbg.png'),
      icosrc:require('../images/head_top/tjsscico.png')
    },
    {
      x: -10,
      y: -10,
      left: "600",
      link: "/lottery/officialpk10/bjpk"
    },
    {
      x: -122,
      y: -134,
      left: "720",
      link: "/lottery/officialpk10/bjpk"
    },
    {
      x: -346,
      y: -134,
      left: "840",
      link: "/lottery/officialssc"
    },
    {
      x: -10,
      y: -258,
      left: "960",
      link: "/lottery/officialssc"
    },
    {
      x: -10,
      y: -10,
      left: "1080",
      link: "/lottery/officialssc"
    },
    {
      x: -122,
      y: -134,
      left: "1200",
      link: "/lottery/officialssc"
    },
    {
      x: -346,
      y: -134,
      left: "1320",
      link: "/lottery/officialssc"
    },
  ];
  public board = [
      { 
        index:0,
        content:'黑龙江11选S更正开奖结果公舌#:尊敬的会员您好：由于黑龙江11选S言网开奖错误导致平台开奖号码有误，平台已把开奖有栗更正（2018061369期，2018061371期，2018061372期，2018061373期^2018061374期，201806137S期，2018061376期）开奖结果进行重新结算，给您芾来不便十5^6^',
      },
      { 
        index:1,
        content:'黑龙江11选S言网开奖错误导致平台开奖号码有误，平台已把开奖有栗更正（2018061369期，2018061371期，2018061372期，2018061373期^2018061374期，201806137S期，2018061376期）开奖结果进行重新结算，给您芾来不便十5^6^',
      },
      { 
        index:2,
        content:'黑龙江11选S更正开奖平台已018061373期^2018061374期，201806137S期，2018061376期）开奖结果进行重新结算，给您芾来不便十5^6^',
      },
  ]
  // 热门游戏内容区数据
  public hotcard_list = [
    {
      src: require("../images/shishicai.jpg"),
      title: this.now_lang.index.ssc,
      link: "/lottery/officialssc"
    },
    {
      src: require("../images/shifencai.jpg"),
      title: this.now_lang.index.fsc,
      link: "/lottery/officialffc"
    },
    {
      src: require("../images/VR_cai.jpg"),
      title: this.now_lang.index.vrc,
    //   link: "/lottery/creditpk10"
      link: "/lottery/vrc"
    }
  ];
  // 投注排行和中奖排行数据
  public touzhu_list = [, , , , , ];
  // 登陆表单数据
  public logindata = {
    name: {
      value: "",
      err: false,
      errtext:'手机号格式不正确！',
    },
    password: {
      value: "",
      err: false,
      errtext:'请输入您的密码！',
    },
    security: {
      value: "",
      err: false,
      errtext:'验证码不正确！',
    }
  };
  // 登陆表单错误提示信息
  public errinfo = {
    show: false,
    content: "",
  };
// 登陆表单验证正则
  private formtype = {
    name: /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$|17[0-9]{9}/,
    password: /^[\d]{1,15}$/,
    security: /^(\d){4}$/
  };
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.now_lang_type = userModel.now_lang_type;
    this.now_board = this.board[0];
  }
  ngAfterViewInit(){
    this.register_banner()
  }
  // 中间内容区tab切换事件
  mdtabclick(i) {
    this.tabactive = i;
  }
  // 头部左右导航鼠标经过事件
  navmouseenter(i, t) {
    if (t == "left") {
      this.navdatal[i].isover = true;
    } else {
      this.navdatar[i].isover = true;
    }
  }
  navmouseleave(i, t) {
    if (t == "left") {
      this.navdatal[i].isover = false;
    } else {
      this.navdatar[i].isover = false;
    }
  }
  // todo:热门游戏小球移动效果
  ballclick(t) {
    let data = this.ball_list;
    if (t == "left") {
      if (Number(data[0].left) < -600) {
        return;
      } else {
        for (let i = 0; i < data.length; i++) {
          data[i].left = "" + (Number(data[i].left) - 120);
        }
      }
    } else {
      if (Number(data[data.length - 1].left) > 1320) {
        return;
      } else {
        for (let i = 0; i < data.length; i++) {
          data[i].left = "" + (Number(data[i].left) + 120);
        }
      }
    }
  }
  linkrouter(t) {
      console.log(t);
    this.router.navigate([t]);
  }
  // 登陆表单输入框获取焦点事件
  focus(t) {
    this.logindata[t].err = false;
    this.errinfo.show = false;
  }
  // 错误提示框显示
  errboxshow() {
    this.errinfo.show = true;
    setTimeout(() => {
      this.errinfo.show = false;
    }, 2000);
  }
  // 登陆表单提交
  onsubmit() {
    let data = this.logindata;
    let err = this.errinfo;
    let reg = this.formtype;
    for (let item in this.logindata){
        if (!reg[item].test(data[item].value)) {
          err.content = data[item].errtext;
          data[item].err = true;
          this.errboxshow();
          return false;
        } else {
          data[item].err = false;
        }
    }
    let str = `name=${data.name.value}&password=${
        data.password.value}&security=${data.security.value}`;
      alert(str);
    this.router.navigate(["/creditssc/cq"]);
    return false;
  }
  register_banner(){

    function lunBo(){
      console.log('???????????????????????????')

        var oDiv = document.getElementById('LunBo');

        var oOther = document.getElementById('Other');

        var oUl = oDiv.getElementsByTagName('ul')[0];

        var oLi = oUl.getElementsByTagName('li');

        var oPoint :any= oDiv.getElementsByTagName('span');

        var time = 0;

        var speed = -oLi[0].offsetWidth;  //这是每次移动的距离为li的宽度，也就是图片的宽度

        oUl.style.width = 100+"%";//设置Ul的宽度

        var index = 1;
        var dot_index = 1;
        /*基础实现部分*/

        function move() {
          if (index == 0) {
            $(oLi).removeClass('active');
            $(oLi[0]).addClass('active')
            for (var i = 0; i <oPoint.length; i++) {
                oPoint[i].className= '';
            }
            oPoint[0].className ='red'
          }else if($(oLi).parent().find('.active').next().length > 0){
            console.log(index)
            $(oLi).parent().find('.active').removeClass('active').next().addClass('active');
            for (var i = 0; i <oPoint.length; i++) {
                oPoint[i].className= '';
            }
            oPoint[index-1].className ='red';
          }else{
            $(oLi).removeClass('active');
            $(oLi[0]).addClass('active');
            for (var i = 0; i <oPoint.length; i++) {
                oPoint[i].className= '';
            }
            oPoint[0].className ='red';
            index = 0;
          }
          index = index + 1;
        }

        /*setInterval(move,1000)：这个是循环定时器，它会每隔1000ms调用move函数*/

        time = setInterval(move,3000);



        //鼠标移入移出事件：很简单，我要让当鼠标移入时轮播图暂停，就先清除定时器，移出时重新打开即可

        oDiv.onmouseover = function(){clearInterval(time);oOther.style.display = 'block';};

        oDiv.onmouseout = function(){time = setInterval(move,3000);oOther.style.display = 'none'};



        /*小圆点跟随变动*/

        function point(){

            var flag=-oUl.offsetLeft/oLi[0].offsetWidth;

            for (var i = 0; i <oPoint.length; i++) {

                oPoint[i].className ='';

            }

            oPoint[flag].className ='red';//选中的小圆点加红色背景

        }


        /*单击小圆点切换对应图片*/

        for (var i = 0; i <oPoint.length; i++) {
            oPoint[i].index = i;
            oPoint[i].onclick =function () {
                for (var i = 0; i <oPoint.length; i++) {
                    oPoint[i].className= '';
                }
                console.log(this.index);
                $(oLi).removeClass('active');
                $(oLi[this.index]).addClass('active');
                index =  this.index + 1;
                this.className = 'red';
            }

        }

    }
    lunBo();

  }
  next_board(){
      console.log(this.board.length)
      console.log(this.now_board.index)
    if (this.now_board.index<this.board.length-1) {
      console.log(this.board.length)
      console.log(this.now_board.index+1)
      this.now_board = this.board[this.now_board.index+1];
    }
  }
  pre_board(){
    if (this.now_board.index>0) {
      this.now_board = this.board[this.now_board.index-1];
    }
  }
}
