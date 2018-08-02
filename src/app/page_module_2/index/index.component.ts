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
  public cpdata = [
    
      {
        name: this.now_lang.lot_type.cq_ssc,
        src: require("../images/caip/SSCZQ.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditssc/cq",
        linko: "/lottery/officialssc/cq",
        bcolor: "#fed1d1"
      },
      {
        name: this.now_lang.lot_type.tj_ssc,
        src: require("../images/caip/SSCTJ.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditssc/tj",
        linko: "/lottery/officialssc/tj",
        bcolor: "#fed1d1"
      },
      {
        name: this.now_lang.lot_type.xq_ssc,
        src: require("../images/caip/SSCXJ.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditssc/xj",
        linko: "/lottery/officialssc/xj",
        bcolor: "#fed1d1"
      },
      {
        name: this.now_lang.lot_type.bj_ssc,
        src: require("../images/caip/SSCBJ.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditssc/bj",
        linko: "/lottery/officialssc/bj",
        bcolor: "#fed1d1"
      },
      {
        name: this.now_lang.lot_type.lhc_ffc,
        src: require("../images/caip/FFC6HC.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditffc/lhc",
        linko: "/lottery/officialffc/lhc",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.az_ffc,
        src: require("../images/caip/FFCAZ3.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditffc/az",
        linko: "/lottery/officialffc/az",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.dj_ffc,
        src: require("../images/caip/FFCDJ1.5.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditffc/dj",
        linko: "/lottery/officialffc/dj",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.hs_ffc,
        src: require("../images/caip/FFCHGKLC.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditffc/hs",
        linko: "/lottery/officialffc/hs",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.jnd_ffc,
        src: require("../images/caip/FFCJNDKLC.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditffc/jnd",
        linko: "/lottery/officialffc/jnd",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.qq_ffc,
        src: require("../images/caip/FFCQQ.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditffc/qq",
        linko: "/lottery/officialffc/qq",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.slfk_ffc,
        src: require("../images/caip/FFCSLFK5.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditffc/slfk",
        linko: "/lottery/officialffc/slfk",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.tw_ffc,
        src: require("../images/caip/FFCTW5.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditffc/tw",
        linko: "/lottery/officialffc/tw",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.tx_ffc,
        src: require("../images/caip/FFCTX.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditffc/tx",
        linko: "/lottery/officialffc/tx",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.xyft_pk10,
        src: require("../images/caip/PKSXYFT.png"),
        credit: true,
        official: true,
        linko: "/lottery/officialpk10/xyft",
        linkc: "/lottery/creditpk10/xyft",
        bcolor: "#d2c6f6"
      },
      {
        name: this.now_lang.lot_type.bj_pk10,
        src: require("../images/caip/PKSBJ.png"),
        credit: true,
        official: true,
        linko: "/lottery/officialpk10/bjpk",
        linkc: "/lottery/creditpk10/bjpk",
        bcolor: "#d2c6f6"
      },
      {
        name: this.now_lang.lot_type.hlj_exf,
        src: require("../images/caip/11X5HLJ.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditexf/hljexf",
        linko: "/lottery/officialexf/hljexf",
        bcolor: "#b5c0df"
      },
      {
        name: this.now_lang.lot_type.js_exf,
        src: require("../images/caip/11X5JS.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditexf/jsexf",
        linko: "/lottery/officialexf/jsexf",
        bcolor: "#b5c0df"
      },
      {
        name: this.now_lang.lot_type.jx_exf,
        src: require("../images/caip/11X5JX.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditexf/jxexf",
        linko: "/lottery/officialexf/jxexf",
        bcolor: "#b5c0df"
      },
      {
        name: this.now_lang.lot_type.sd_exf,
        src: require("../images/caip/11X5SD.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditexf/sdexf",
        linko: "/lottery/officialexf/sdexf",
        bcolor: "#b5c0df"
      },
      {
        name: this.now_lang.lot_type.shh_exf,
        src: require("../images/caip/11X5SH.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditexf/shhexf",
        linko: "/lottery/officialexf/shhexf",
        bcolor: "#b5c0df"
      },
      {
        name: this.now_lang.lot_type.xj_exf,
        src: require("../images/caip/11X5XJ.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditexf/xjexf",
        linko: "/lottery/officialexf/xjexf",
        bcolor: "#b5c0df"
      },
      {
        name: this.now_lang.lot_type.bjkl8_klc,
        src: require("../images/caip/KLBJ.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditklc/bjkl8",
        linko: "/lottery/officialklc/bjkl8",
          bcolor: "#b7e1f9"
      },
      {
          name: this.now_lang.lot_type.jndkl8_klc,
          src: require("../images/caip/KLJND.png"),
          credit: false,
        official: true,
        linkc: "/lottery/creditklc/jndkl8",
        linko: "/lottery/officialklc/jndkl8",
        bcolor: "#b7e1f9"
      },
      {
        name: this.now_lang.lot_type.azkl8_klc,
        src: require("../images/caip/KLAZ.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditklc/azkl8",
        linko: "/lottery/officialklc/azkl8",
        bcolor: "#b7e1f9"
      },
      {
        name: this.now_lang.lot_type.slfk_klc,
        src: require("../images/caip/KLSLF.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditklc/slfk",
        linko: "/lottery/officialklc/slfk",
        bcolor: "#b7e1f9"
      },
      {
        name: this.now_lang.lot_type.twbg_klc,
        src: require("../images/caip/KLTWBG.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditklc/twbg",
        linko: "/lottery/officialklc/twbg",
        bcolor: "#b7e1f9"
      },
      {
          name: this.now_lang.lot_type.gdk10_klc,
          src: require("../images/caip/KLGD.png"),
          credit: true,
          official: false,
          linkc: "/lottery/creditklc/gdk10",
          linko: "/lottery/officialklc/gdk10",
          bcolor: "#b7e1f9"
      },
      {
        name: this.now_lang.lot_type.gxk10_klc,
        src: require("../images/caip/KLGX.png"),
        credit: true,
        official: false,
        linkc: "/lottery/creditklc/gxk10",
        linko: "/lottery/officialklc/gxk10",
        bcolor: "#b7e1f9"
      },
      {
        name: this.now_lang.lot_type.cqk10_klc,
        src: require("../images/caip/KLZQ.png"),
        credit: true,
        official: false,
        linkc: "/lottery/creditklc/cqk10",
        linko: "/lottery/officialklc/cqk10",
        bcolor: "#b7e1f9"
      },
      {
        name: this.now_lang.lot_type.fc3d_dpc,
        src: require("../images/caip/DFC.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditdpc/fc3d",
        linko: "/lottery/officialdpc/fc3d",
        bcolor: "#bff6cf"
      },
      {
        name: this.now_lang.lot_type.pl35_dpc,
        src: require("../images/caip/DPLSW.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditdpc/pl35",
        linko: "/lottery/officialdpc/pl35",
        bcolor: "#bff6cf"
      },
      {
        name: this.now_lang.lot_type.shssl_dpc,
        src: require("../images/caip/DSHSSL.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditdpc/shssl",
        linko: "/lottery/officialdpc/shssl",
        bcolor: "#bff6cf"
      },
      {
        name: "香港⑥合彩",
        src: require("../images/caip/VRLHC.png"),
        credit: true,
        official: false,
        linkc: "/lottery/creditdpc/liuhec",
        linko: "",
        bcolor: "#bff6cf"
      },
      {
        name: this.now_lang.lot_type.az_28,
        src: require("../images/caip/PDAZ28.png"),
        credit: true,
        official: false,
        linko: "",
        linkc: "/lottery/creditpcdd/az28",
        bcolor: "#cde6a1"
      },
      {
        name: this.now_lang.lot_type.dj_28,
        src: require("../images/caip/PDDJ28.png"),
        credit: true,
        official: false,
        linko: "",
        linkc: "/lottery/creditpcdd/dj28",
        bcolor: "#cde6a1"
      },
      {
        name: this.now_lang.lot_type.hs_28,
        src: require("../images/caip/PDHS28.png"),
        credit: true,
        official: false,
        linko: "",
        linkc: "/lottery/creditpcdd/hs28",
        bcolor: "#cde6a1"
      },
      {
        name: this.now_lang.lot_type.jnd_28,
        src: require("../images/caip/PDJND28.png"),
        credit: true,
        official: false,
        linko: "",
        linkc: "/lottery/creditpcdd/jnd28",
        bcolor: "#cde6a1"
      },
      {
        name: this.now_lang.lot_type.slfk_28,
        src: require("../images/caip/PDSLFK28.png"),
        credit: true,
        official: false,
        linko: "",
        linkc: "/lottery/creditpcdd/xy28",
        bcolor: "#cde6a1"
      },
      {
        name: this.now_lang.lot_type.tw_28,
        src: require("../images/caip/PDTW28.png"),
        credit: true,
        official: false,
        linko: "",
        linkc: "/lottery/creditpcdd/slfk28",
        bcolor: "#cde6a1"
      },
      {
        name: this.now_lang.lot_type.xy_28,
        src: require("../images/caip/PDXY28.png"),
        credit: true,
        official: false,
        linko: "",
        linkc: "/lottery/creditpcdd/xy28",
        bcolor: "#cde6a1"
      },
      {
        name: this.now_lang.lot_type.ahk3_ffc,
        src: require("../images/caip/K3AH.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditk3/ahk3",
        linko: "/lottery/officialk3/ahk3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.bjk3_ffc,
        src: require("../images/caip/K3BJ.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditk3/bjk3",
        linko: "/lottery/officialk3/bjk3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.gxk3_ffc,
        src: require("../images/caip/K3GX.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditk3/gxk3",
        linko: "/lottery/officialk3/gxk3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.hbk3_ffc,
        src: require("../images/caip/K3HEBE.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditk3/hbk3",
        linko: "/lottery/officialk3/hbk3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.hnk3_ffc,
        src: require("../images/caip/K3HN.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditk3/hnk3",
        linko: "/lottery/officialk3/hnk3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.hubk3_ffc,
        src: require("../images/caip/K3HUBEI.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditk3/hubk3",
        linko: "/lottery/officialk3/hubk3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.jsk3_ffc,
        src: require("../images/caip/K3JS.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditk3/jsk3",
        linko: "/lottery/officialk3/jsk3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.shks_ffc,
        src: require("../images/caip/K3SH.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/shk3",
        linko: "lottery/officialssc/shk3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.tfencai_vr,
        src: require("../images/caip/VR3FC.png"),
        credit: true,
        official: true,
        linko: "/lottery/vrc/3fc",
        linkc: "/lottery/vrc/3fc",
        bcolor: "#ffa18e"
      },
      {
        name: this.now_lang.lot_type.cpbjl_vr,
        src: require("../images/caip/VRCPBJL.png"),
        credit: true,
        official: true,
        linko: "/lottery/vrc/bjl",
        linkc: "/lottery/vrc/bjl",
        bcolor: "#ffa18e"
      },
      {
        name: this.now_lang.lot_type.jx15_vr,
        src: require("../images/caip/VRJX1.5FC.png"),
        credit: true,
        official: true,
        linko: "/lottery/vrc/jx",
        linkc: "/lottery/vrc/jx",
        bcolor: "#ffa18e"
      },
      {
        name: this.now_lang.lot_type.kt_vr,
        src: require("../images/caip/VRKT.png"),
        credit: false,
        official: true,
        linko: "/lottery/vrc/kt",
        linkc: "/lottery/vrc/kt",
        bcolor: "#ffa18e"
      },
      {
        name: this.now_lang.lot_type.lhc_vr,
        src: require("../images/caip/VRLHC.png"),
        credit: true,
        official: true,
        linko: "/lottery/vrc/lhc",
        linkc: "/lottery/vrc/lhc",
        bcolor: "#ffa18e"
      },
      {
        name: this.now_lang.lot_type.sc_vr,
        src: require("../images/caip/VRSC.png"),
        credit: true,
        official: false,
        linko: "/lottery/vrc/sc",
        linkc: "/lottery/vrc/sc",
        bcolor: "#ffa18e"
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
  drop_down(){
    $('.production_li').on('mouseover',function  (argument) {
      $('.hid_top').addClass('active');
    })
    $('.hid_top').on('mouseover',function  (argument) {
      $('.hid_top').addClass('active');
    })
    $('.hid_top').on('mouseout',function  (argument) {
      $('.hid_top').removeClass('active');
    })
  }
  ngAfterViewInit(){
    this.register_banner()
    this.drop_down();
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
