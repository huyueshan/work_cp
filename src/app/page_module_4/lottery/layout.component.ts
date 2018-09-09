import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";

import userModel from "../../../status/user.model";
import { Base } from "../../../factory/base.model";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit, AfterViewInit {
  public now_lang: any = userModel.langpackage;
  public now_lang_type: any = "zh";
  loadpage = false;
  public barwidth = 180;
  public type = "ssc"; //当前的彩种
  public indata = {
    style: "credit",
    prev: "2018050738", //上一期开奖期号
    prevball: [9, 2, 5, 6, 8], // 开奖区上一期开奖号码
    next: "2018050736", //x下期开奖期号
    time: "any" //
  };
  public timedate = new Date();
  public time;
  public hostarr = [, , , , ,];
  // 铃声
  public bell = {
    isbell: true,
    data: ["默认铃声", "option1", "option1", "option1"],
    value: "默认铃声"
  };

  public routid; //路由ID
  public currentgameid = "0"; // 当前彩种id
  //   public textnumber = 1;
  public currentparent: string; //一级导航
  public currentitem: string; // 二级导航
  public currentactive: number; // 当前展开的子导航
  public isrc; // 彩种logo图片src
  public navshow = false; // 顶部下拉导航显示隐藏
  public rule_show = false; // 规则说明显示隐藏
  public ruletab = []; // 规则导航数据
  // 开奖球属性设置
  public BALL = {
    numb: 0,
    color: "",
    shengxiao: ""
  };
  public rotate = false; // 开奖结果球动画
  public resultdata = []; // 开奖结果数据
  public pcddsum; // pcdd彩种开奖结果和值
  public lhcte; // 六合彩彩种开奖结果特码
  public navdata = [
    { title: "充值", top: "-10px", link: "/usercenter/recharge" },
    { title: "提现", top: "-98px", link: "/usercenter/withdrawdeposit" },
    { title: "账变记录", top: "-186px", link: "/usercenter/acchange" },
    { title: "游戏记录", top: "-274px", link: "/usercenter/goucaiquery" },
    { title: "账户管理", top: "-362px", link: "/usercenter/myoverview" },
    { title: "个人中心", top: "-450px", link: "/usercenter/security" }
  ];
  public data = [
    {
      title: this.now_lang.lot_type.ssc,
      bg: {
        x: -122,
        y: -202
      },
      isover: false,
      isactive: false,
      credit: true,
      official: true,
      items: [
        {
          text: this.now_lang.lot_type.cq_ssc,
          type: "ssc",
          imgsrc: require("../images/caip/icon/ZQSSC.png"),
          credit: true,
          official: true,
          ido: "101",
          idc: "201",
          linko: "/lottery/officialssc/cq",
          linkc: "/lottery/creditssc/cq"
        },
        {
          text: this.now_lang.lot_type.tj_ssc,
          type: "ssc",
          imgsrc: require("../images/caip/icon/TJSSC.png"),
          credit: true,
          official: true,
          ido: "102",
          idc: "202",
          linko: "/lottery/officialssc/tj",
          linkc: "/lottery/creditssc/tj"
        },
        {
          text: this.now_lang.lot_type.xq_ssc,
          type: "ssc",
          imgsrc: require("../images/caip/icon/XJSSC.png"),
          credit: true,
          official: true,
          ido: "103",
          idc: "203",
          linko: "/lottery/officialssc/xq",
          linkc: "/lottery/creditssc/xq"
        }
      ]
    },
    {
      title: this.now_lang.lot_type.ffc,
      bg: {
        x: -122,
        y: -522
      },
      isover: false,
      isactive: false,
      credit: true,
      official: true,
      items: [
        {
          text: this.now_lang.lot_type.hs_ffc,
          type: "ssc",
          imgsrc: require("../images/caip/icon/HGKLC.png"),
          credit: true,
          official: true,
          ido: "105",
          idc: "205",
          linko: "/lottery/officialffc/hs",
          linkc: "/lottery/creditffc/hs"
        },
        // {
        //   text: this.now_lang.lot_type.bj_ffc,
        //   type: "ssc",
        //   imgsrc: require("../images/caip/icon/BJSSC.png"),
        //   credit: true,
        //   official: true,
        //   ido: "114",
        //   idc: "214",
        //   linko: "/lottery/officialffc/bj",
        //   linkc: "/lottery/creditffc/bj"
        // },
        {
          text: this.now_lang.lot_type.bj_ssc,
          type: "ssc",
          imgsrc: require("../images/caip/icon/BJSSC.png"),
          credit: true,
          official: true,
          ido: "104",
          idc: "204",
          linko: "/lottery/officialssc/bj",
          linkc: "/lottery/creditssc/bj"
        },
        {
          text: this.now_lang.lot_type.tw_ffc,
          type: "ssc",
          imgsrc: require("../images/caip/icon/TW5FC.png"),
          credit: true,
          official: true,
          ido: "106",
          idc: "206",
          linko: "/lottery/officialffc/tw",
          linkc: "/lottery/creditffc/tw"
        },
        {
          text: this.now_lang.lot_type.jnd_ffc,
          type: "ssc",
          imgsrc: require("../images/caip/icon/JNDKLC.png"),
          credit: true,
          official: true,
          ido: "107",
          idc: "207",
          linko: "/lottery/officialffc/jnd",
          linkc: "/lottery/creditffc/jnd"
        },
        {
          text: this.now_lang.lot_type.az_ffc,
          type: "ssc",
          imgsrc: require("../images/caip/icon/AZ3FC.png"),
          credit: true,
          official: true,
          ido: "108",
          idc: "208",
          linko: "/lottery/officialffc/az",
          linkc: "/lottery/creditffc/az"
        },
        {
          text: this.now_lang.lot_type.slfk_ffc,
          type: "ssc",
          imgsrc: require("../images/caip/icon/SLFK5F.png"),
          credit: true,
          official: true,
          ido: "109",
          idc: "209",
          linko: "/lottery/officialffc/slfk",
          linkc: "/lottery/creditffc/slfk"
        },
        {
          text: this.now_lang.lot_type.tx_ffc,
          type: "ssc",
          imgsrc: require("../images/caip/icon/TXFFC.png"),
          credit: true,
          official: true,
          ido: "110",
          idc: "210",
          linko: "/lottery/officialffc/tx",
          linkc: "/lottery/creditffc/tx"
        },
        {
          text: this.now_lang.lot_type.qq_ffc,
          type: "ssc",
          imgsrc: require("../images/caip/icon/QQFFC.png"),
          credit: true,
          official: true,
          ido: "111",
          idc: "211",
          linko: "/lottery/officialffc/qq",
          linkc: "/lottery/creditffc/qq"
        },
        {
          text: this.now_lang.lot_type.dj_ffc,
          type: "ssc",
          imgsrc: require("../images/caip/icon/DJ1.5FC.png"),
          credit: true,
          official: true,
          ido: "112",
          idc: "212",
          linko: "/lottery/officialffc/dj",
          linkc: "/lottery/creditffc/dj"
        },
        {
          text: this.now_lang.lot_type.js_ffc,
          type: "ssc",
          imgsrc: "",
          credit: true,
          official: true,
          ido: "113",
          idc: "213",
          linko: "/lottery/officialffc/js",
          linkc: "/lottery/creditffc/js"
        }
      ]
    },
    {
      title: this.now_lang.lot_type.pk_10,
      bg: {
        x: -10,
        y: -330
      },
      isover: false,
      isactive: false,
      credit: true,
      official: true,
      items: [
        {
          text: this.now_lang.lot_type.bj_pk10,
          type: "pk10",
          imgsrc: require("../images/caip/icon/BJPKS.png"),
          credit: true,
          official: true,
          ido: "121",
          idc: "221",
          linko: "/lottery/officialpk10/bjpk",
          linkc: "/lottery/creditpk10/bjpk"
        },
        {
          text: this.now_lang.lot_type.xyft_pk10,
          type: "pk10",
          imgsrc: require("../images/caip/icon/XYFT.png"),
          credit: true,
          official: true,
          ido: "122",
          idc: "222",
          linko: "/lottery/officialpk10/xyft",
          linkc: "/lottery/creditpk10/xyft"
        }
      ]
    },
    {
      title: this.now_lang.lot_type.Exf,
      bg: {
        x: -66,
        y: -10
      },
      isover: false,
      isactive: false,
      credit: true,
      official: true,
      items: [
        {
          text: this.now_lang.lot_type.sd_exf,
          type: "exf",
          imgsrc: require("../images/caip/icon/SD11X5.png"),
          credit: true,
          official: true,
          ido: "131",
          idc: "231",
          linko: "/lottery/officialexf/sdexf",
          linkc: "/lottery/creditexf/sdexf"
        },
        {
          text: this.now_lang.lot_type.jx_exf,
          type: "exf",
          imgsrc: require("../images/caip/icon/JX11X5.png"),
          credit: true,
          official: true,
          ido: "132",
          idc: "232",
          linko: "/lottery/officialexf/jxexf",
          linkc: "/lottery/creditexf/jxexf"
        },
        {
          text: this.now_lang.lot_type.hlj_exf,
          type: "exf",
          imgsrc: require("../images/caip/icon/HLJ11X5.png"),
          credit: true,
          official: true,
          ido: "133",
          idc: "233",
          linko: "/lottery/officialexf/hljexf",
          linkc: "/lottery/creditexf/hljexf"
        },
        {
          text: this.now_lang.lot_type.js_exf,
          type: "exf",
          imgsrc: require("../images/caip/icon/JS11X5.png"),
          credit: true,
          official: true,
          ido: "134",
          idc: "234",
          linko: "/lottery/officialexf/jsexf",
          linkc: "/lottery/creditexf/jsexf"
        },
        {
          text: this.now_lang.lot_type.shh_exf,
          type: "exf",
          imgsrc: require("../images/caip/icon/SH11X5.png"),
          credit: true,
          official: true,
          ido: "135",
          idc: "235",
          linko: "/lottery/officialexf/shexf",
          linkc: "/lottery/creditexf/shexf"
        },
        {
          text: this.now_lang.lot_type.xj_exf,
          type: "exf",
          imgsrc: require("../images/caip/icon/XJ11X5.png"),
          credit: true,
          official: true,
          ido: "136",
          idc: "236",
          linko: "/lottery/officialexf/xjexf",
          linkc: "/lottery/creditexf/xjexf"
        }
      ]
    },
    {
      title: this.now_lang.lot_type.Klc,
      bg: {
        x: -122,
        y: -74
      },
      isover: false,
      isactive: false,
      credit: true,
      official: true,
      items: [
        {
          text: this.now_lang.lot_type.bjkl8_klc,
          type: "kl8",
          imgsrc: require("../images/caip/icon/BJKL8.png"),
          credit: false,
          official: true,
          ido: "141",
          idc: "0",
          linko: "/lottery/officialklc/bjkl8",
          linkc: "/lottery/creditklc/bjkl8"
        },
        {
          text: this.now_lang.lot_type.jndkl8_klc,
          type: "kl8",
          imgsrc: require("../images/caip/icon/JNDKLC.png"),
          credit: false,
          official: true,
          ido: "142",
          idc: "0",
          linko: "/lottery/officialklc/jndkl8",
          linkc: "/lottery/creditklc/jndkl8"
        },
        {
          text: this.now_lang.lot_type.azkl8_klc,
          type: "kl8",
          imgsrc: require("../images/caip/icon/AZ3FC.png"),
          credit: false,
          official: true,
          ido: "143",
          idc: "0",
          linko: "/lottery/officialklc/azkl8",
          linkc: "/lottery/creditklc/azkl8"
        },
        {
          text: this.now_lang.lot_type.slfk_klc,
          type: "kl8",
          imgsrc: require("../images/caip/icon/SLFK5F.png"),
          credit: false,
          official: true,
          ido: "144",
          idc: "0",
          linko: "/lottery/officialklc/slfk",
          linkc: "/lottery/creditklc/slfk"
        },
        {
          text: this.now_lang.lot_type.twbg_klc,
          type: "kl8",
          imgsrc: require("../images/caip/icon/TWBG.png"),
          credit: false,
          official: true,
          ido: "145",
          idc: "0",
          linko: "/lottery/officialklc/twbg",
          linkc: "/lottery/creditklc/twbg"
        },
        {
          text: "广东快十",
          type: "gdk10",
          imgsrc: require("../images/caip/icon/GDKS.png"),
          credit: true,
          official: false,
          ido: "0",
          idc: "241",
          linko: "",
          linkc: "/lottery/creditklc/gdk10"
        },
        {
          text: "广西快十",
          type: "gxk10",
          imgsrc: require("../images/caip/icon/GXKS.png"),
          credit: true,
          official: false,
          ido: " 0",
          idc: "242",
          linko: "",
          linkc: "/lottery/creditkl/gxk10"
        },
        {
          text: "重庆快十",
          type: "gdk10",
          imgsrc: require("../images/caip/icon/ZQKS.png"),
          credit: true,
          official: false,
          ido: "0",
          idc: "243",
          linko: "",
          linkc: "/lottery/creditklc/cqk10"
        }
      ]
    },
    {
      title: this.now_lang.lot_type.Dpc,
      bg: {
        x: -10,
        y: -458
      },
      isover: false,
      isactive: false,
      credit: true,
      official: true,
      items: [
        {
          text: this.now_lang.lot_type.fc3d_dpc,
          type: "dpc",
          imgsrc: require("../images/caip/icon/FC3D.png"),
          credit: false,
          official: true,
          ido: "151",
          idc: "0",
          linko: "/lottery/officialdpc/fc3d",
          linkc: "/lottery/creditdpc/fc3d"
        },
        {
          text: this.now_lang.lot_type.pl35_dpc,
          type: "pl35",
          imgsrc: require("../images/caip/icon/PLSW.png"),
          credit: false,
          official: true,
          ido: "152",
          idc: "0",
          linko: "/lottery/officialdpc/pl35",
          linkc: "/lottery/creditdpc/pl35"
        },
        {
          text: this.now_lang.lot_type.shssl_dpc,
          type: "dpc",
          imgsrc: require("../images/caip/icon/SHSSL.png"),
          credit: false,
          official: true,
          ido: "153",
          idc: "0",
          linko: "/lottery/officialdpc/shssl",
          linkc: "/lottery/creditdpc/shssl"
        },
        {
          text: "香港⑥合彩",
          type: "lhc",
          imgsrc: require("../images/caip/icon/LHCD.png"),
          credit: true,
          official: false,
          ido: "0",
          idc: "251",
          linko: "",
          linkc: "/lottery/creditdpc/liuhec"
        }
      ]
    },
    {
      title: this.now_lang.lot_type.pc_dd,
      bg: {
        x: -66,
        y: -266
      },
      isover: false,
      isactive: false,
      credit: true,
      official: false,
      items: [
        {
          text: this.now_lang.lot_type.xy_28,
          type: "pcdd",
          imgsrc: require("../images/caip/icon/XY28.png"),
          credit: true,
          official: false,
          ido: "0",
          idc: "261",
          linko: "",
          linkc: "/lottery/creditpcdd/xy28"
        },
        {
          text: this.now_lang.lot_type.slfk_28,
          type: "pcdd",
          imgsrc: require("../images/caip/icon/SLFK28.png"),
          credit: true,
          official: false,
          ido: "0",
          idc: "262",
          linko: "",
          linkc: "/lottery/creditpcdd/snfk28"
        },
        {
          text: this.now_lang.lot_type.az_28,
          type: "pcdd",
          imgsrc: require("../images/caip/icon/AZ28.png"),
          credit: true,
          official: false,
          ido: "0",
          idc: "263",
          linko: "",
          linkc: "/lottery/creditpcdd/az28"
        },
        {
          text: this.now_lang.lot_type.jnd_28,
          type: "pcdd",
          imgsrc: require("../images/caip/icon/JND28.png"),
          credit: true,
          official: false,
          ido: "0",
          idc: "264",
          linko: "",
          linkc: "/lottery/creditpcdd/jnd28"
        },
        {
          text: this.now_lang.lot_type.hs_28,
          type: "pcdd",
          imgsrc: require("../images/caip/icon/HS28.png"),
          credit: true,
          official: false,
          ido: "0",
          idc: "265",
          linko: "",
          linkc: "/lottery/creditpcdd/hs28"
        },
        {
          text: this.now_lang.lot_type.tw_28,
          type: "pcdd",
          imgsrc: require("../images/caip/icon/TW28.png"),
          credit: true,
          official: false,
          ido: "0",
          idc: "266",
          linko: "",
          linkc: "/lottery/creditpcdd/tw28"
        },
        {
          text: this.now_lang.lot_type.dj_28,
          type: "pcdd",
          imgsrc: require("../images/caip/icon/DJ28.png"),
          credit: true,
          official: false,
          ido: "0",
          idc: "267",
          linko: "",
          linkc: "/lottery/creditpcdd/dj28"
        }
      ]
    },
    {
      title: this.now_lang.lot_type.K3,
      bg: {
        x: -10,
        y: -138
      },
      type: "k3",
      isover: false,
      isactive: false,
      credit: true,
      official: true,
      items: [
        {
          text: this.now_lang.lot_type.ahk3_ffc,
          type: "k3",
          imgsrc: require("../images/caip/icon/AHK3.png"),
          credit: true,
          official: true,
          ido: "171",
          idc: "271",
          linko: "/lottery/officialk3/ahk3",
          linkc: "/lottery/creditk3/ahk3"
        },
        {
          text: this.now_lang.lot_type.hbk3_ffc,
          type: "k3",
          imgsrc: require("../images/caip/icon/HEBEIKUAI3.png"),
          credit: true,
          official: true,
          ido: "172",
          idc: "272",
          linko: "/lottery/officialk3/hbk3",
          linkc: "/lottery/creditk3/hbk3"
        },
        {
          text: this.now_lang.lot_type.hnk3_ffc,
          type: "k3",
          imgsrc: require("../images/caip/icon/HNK3.png"),
          credit: true,
          official: true,
          ido: "173",
          idc: "273",
          linko: "/lottery/officialk3/hnk3",
          linkc: "/lottery/creditk3/hnk3"
        },
        {
          text: this.now_lang.lot_type.hubk3_ffc,
          type: "k3",
          imgsrc: require("../images/caip/icon/HUBEIKUAI3.png"),
          credit: true,
          official: true,
          ido: "174",
          idc: "274",
          linko: "/lottery/officialk3/hubk3",
          linkc: "/lottery/creditk3/hubk3"
        },
        {
          text: this.now_lang.lot_type.shks_ffc,
          type: "k3",
          imgsrc: require("../images/caip/icon/SHK3.png"),
          credit: true,
          official: true,
          ido: "175",
          idc: "275",
          linko: "/lottery/officialk3/shks",
          linkc: "/lottery/creditk3/shks"
        },
        {
          text: this.now_lang.lot_type.bjk3_ffc,
          type: "k3",
          imgsrc: require("../images/caip/icon/BJK3.png"),
          credit: true,
          official: true,
          ido: "176",
          idc: "276",
          linko: "/lottery/officialk3/bjk3",
          linkc: "/lottery/creditk3/bjk3"
        },
        {
          text: this.now_lang.lot_type.gxk3_ffc,
          type: "k3",
          imgsrc: require("../images/caip/icon/GXK3.png"),
          credit: true,
          official: true,
          ido: "177",
          idc: "277",
          linko: "/lottery/officialk3/gxk3",
          linkc: "/lottery/creditk3/gxk3"
        },
        {
          text: this.now_lang.lot_type.jsk3_ffc,
          type: "k3",
          imgsrc: require("../images/caip/icon/JSKS.png"),
          credit: true,
          official: true,
          ido: "178",
          idc: "278",
          linko: "/lottery/officialk3/jsk3",
          linkc: "/lottery/creditk3/jsk3"
        }
      ]
    },
    {
      title: this.now_lang.lot_type.Vrc,
      bg: {
        x: -66,
        y: -394
      },
      isover: false,
      isactive: false,
      credit: false,
      official: true,
      items: [
        {
          text: this.now_lang.lot_type.cpbjl_vr,
          type: "vrcbjl",
          imgsrc: require("../images/caip/icon/CPBJL.png"),
          credit: false,
          official: true,
          ido: "0",
          idc: "0",
          linko: "/lottery/vrc/bjl",
          linkc: ""
        },
        {
          text: this.now_lang.lot_type.tfencai_vr,
          type: "ssc",
          imgsrc: require("../images/caip/icon/WMFFC.png"),
          credit: false,
          official: true,
          ido: "0",
          idc: "0",
          linko: "/lottery/vrc/3fc",
          linkc: ""
        },
        {
          text: this.now_lang.lot_type.jx15_vr,
          type: "ssc",
          imgsrc: require("../images/caip/icon/JX1.5FC.png"),
          credit: false,
          official: true,
          ido: "0",
          idc: "0",
          linko: "/lottery/vrc/jx",
          linkc: ""
        },
        {
          text: this.now_lang.lot_type.kt_vr,
          type: "pk10",
          imgsrc: require("../images/caip/icon/KT.png"),
          credit: false,
          official: true,
          ido: "0",
          idc: "0",
          linko: "/lottery/vrc/kt",
          linkc: ""
        },
        {
          text: this.now_lang.lot_type.lhc_vr,
          type: "lhc",
          imgsrc: require("../images/caip/icon/WMLHC.png"),
          credit: false,
          official: true,
          ido: "0",
          idc: "0",
          linko: "/lottery/vrc/lhc",
          linkc: ""
        },
        {
          text: this.now_lang.lot_type.sc_vr,
          type: "pk10",
          imgsrc: require("../images/caip/icon/SC.png"),
          credit: false,
          official: true,
          ido: "0",
          idc: "0",
          linko: "/lottery/vrc/sc",
          linkc: ""
        }
      ]
    }
  ];

  //  临时数据
  public gamepam = {
    ssc: { min: 0, max: 9, len: 10, length: 5, blean: true },
    exf: { min: 1, max: 11, len: 11, length: 5, blean: true },
    pk10: { min: 1, max: 10, len: 10, length: 10, blean: false },
    fc3d: { min: 0, max: 9, len: 10, length: 3, blean: true },
    k3: { min: 1, max: 6, len: 6, length: 3, blean: true },
    dpc: { min: 0, max: 9, len: 10, length: 3, blean: true },
    pl35: { min: 0, max: 9, len: 10, length: 5, blean: true },
    lhc: { min: 1, max: 49, len: 49, length: 7, blean: false },
    gdk10: { min: 1, max: 20, len: 20, length: 8, blean: true },
    gxk10: { min: 1, max: 20, len: 20, length: 5, blean: true },
    kl8: { min: 1, max: 80, len: 80, length: 20, blean: false },
    pcdd: { min: 0, max: 9, len: 10, length: 3, blean: true },
    vrcbjl: { min: 0, max: 9, len: 10, length: 4, blean: true }
  };
  // 临时数据end
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.now_lang_type = userModel.now_lang_type;
    this.loadpage = userModel.platform;
    // 剩余时间定时器 和进度条事件
    this.time = setInterval(() => {
      this.timedate = new Date();
      this.barwidth = this.barwidth > 260 ? 16 : this.barwidth + 1;
    }, 1000);
    // 设置应该显示的logo图片
    this.routreg();
    // 路由地址改变后的事件
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        this.routreg();
        this.Rotates(); // 此处动画事件需要在请求到数据后异步执行
      });
    this.setresultdata();
  }

  ngAfterViewInit() {
    this.Rotates();
  }
  ngOnDestroy() {
    clearInterval(this.time);
  }
  // 开奖结果球动画控制
  Rotates() {
    let _that = this;
    // 延迟的目的是等待第一次页面样式渲染完成，不然动画出不来
    setTimeout(function() {
      _that.rotate = !_that.rotate;
    }, 100);
  }
  //判断路由地址是否有效
  routreg() {
    let rout = this.router.url;
    let d = this.data;
    for (let i = 0; i < d.length; i++) {
      let b = d[i].items;
      for (let q = 0; q < b.length; q++) {
        if (rout === b[q].linko) {
          this.currentitem = b[q].text;
          this.currentactive = i;
          this.type = b[q].type;
          this.currentgameid = b[q].ido;
          this.indata.style = "official";
          // 设置彩种logo
          if (b[q].imgsrc) {
            this.isrc = b[q].imgsrc;
          } else {
            this.isrc = require("../images/cqssc_13.png");
          }
          //此处请求官方玩法数据
        }
        if (rout === b[q].linkc) {
          this.currentitem = b[q].text;
          this.currentactive = i;
          this.type = b[q].type;
          this.currentgameid = b[q].idc;
          this.indata.style = "credit";
          // 设置彩种logo
          if (b[q].imgsrc) {
            this.isrc = b[q].imgsrc;
          } else {
            this.isrc = require("../images/cqssc_13.png");
          }
          //此处请求信用玩法数据
        }
      }
    }
    // 设置开奖球属性
    this.setresultdata();
  }

  // 导航栏目录点击事件
  itemboxclick(i) {
    if (this.currentactive === i) {
      this.currentactive = -1;
    } else {
      this.currentactive = i;
    }
  }
  // 鼠标经过目录事件
  itemboxenter(i) {
    let d = this.data[i];
    d.isover = true;
  }
  // 鼠标离开目录事件
  itemboxleave(i) {
    let d = this.data[i];
    if (this.currentactive == i) {
      return;
    }
    d.isover = false;
  }
  // 导航栏二级菜单点击事件
  itemclick(O) {
    // 跳转路由
    let str = this.indata.style === "credit" ? O.linkc : O.linko;
    this.router.navigate([str]);
  }
  linkrouter(t) {
    this.router.navigate([t]);
  }
  result() {
    Base.Store.set("HistoryID", this.currentgameid, false);
    this.router.navigate(["/result"]);
  }
  // 铃声开关设置
  bellclick() {
    this.bell.isbell = !this.bell.isbell;
  }

  // 设置开奖数据
  setresultdata() {
    let d = this.setballdata(); //  d 为开奖数据
    let data = [];
    let t = this.type;
    let sum = 0;
    for (let i = 0; i < d.length; i++) {
      let o = Object.assign({}, this.BALL);
      o.numb = d[i];
      o.color = this.color(d[i], t);
      if (t === "lhc") {
        o.shengxiao = this.getZodiac(2018, d[i]); //2018为开奖年份，需要根据开奖时间年份获取
      }
      data.push(o);
      if (t === "pcdd") {
        sum += d[i];
      }
    }
    if (t === "pcdd") {
      this.pcddsum = Object.assign({}, this.BALL);
      this.pcddsum.numb = sum;
      this.pcddsum.color = this.color(sum, t);
    }
    if (t === "lhc") {
      this.resultdata = data.slice(0, data.length - 1);
      this.lhcte = data[data.length - 1];
      return;
    }
    this.resultdata = data;
  }

  // 设置球颜色
  color(num, type) {
    let n = Number(num);
    if (type === "lhc") {
      let arr = [
        [1, 2, 7, 8, 12, 13, 18, 19, 23, 24, 29, 30, 34, 35, 40, 45, 46],
        [3, 4, 9, 10, 14, 15, 20, 25, 26, 31, 36, 37, 41, 42, 47, 48],
        [5, 6, 11, 16, 17, 21, 22, 27, 28, 32, 33, 38, 39, 43, 44, 49]
      ];
      let color = ["red", "blue", "green"];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(n) > -1) {
          return color[i];
        }
      }
    }
    if (type === "pcdd") {
      let color = n % 3 === 0 ? "red" : n % 3 === 1 ? "green" : "blue";
      if (n === 0 || n === 13 || n === 14 || n === 27) {
        color = "gray";
      }
      return color;
    }
    if (type === "gxk10") {
      return n % 3 === 1 ? "red" : n % 3 === 2 ? "blue" : "green";
    }
    return "";
  }
  // 设置生肖
  getZodiac(year, num) {
    let zodiac = [
      "鼠",
      "牛",
      "虎",
      "兔",
      "龙",
      "蛇",
      "马",
      "羊",
      "猴",
      "鸡",
      "狗",
      "猪"
    ];
    let reference = 1924; ///必须是鼠年，即reference对应zodiac[0]
    let index = (year - reference) % 12;
    let a = zodiac.slice(0, index + 1).reverse();
    let b = zodiac.slice(index + 1).reverse();
    let sortZodiac = a.concat(b);
    return sortZodiac[(num - 1) % 12];
  }

  // 规则说明关闭事件
  ruleclose() {
    this.rule_show = false;
  }
  // 规则说明显示事件
  ruleopen() {
    this.rulenav();
    this.rule_show = true;
  }
  // 规则导航数据设置
  rulenav() {
    this.ruletab=[];
    let d = this.data;
    for (let i = 0; i < d.length; i++) {
      for (let q = 0; q < d[i].items.length; q++) {
        let di = d[i].items[q];
        let o = {
            text: di.text,
            type: di.type,
            credit: di.credit,
            official: di.official,
        };
        this.ruletab.push(o);
      }
    }
  }

  // ================临时数据开始
  // 创建开奖数据  len为开奖球数，min、max为最小球号和最大球号 ，blean为是否可以重号
  setballdata() {
    let g = this.gamepam[this.type];
    let data = [];
    if (g.blean) {
      for (let i = 0; i < g.length; i++) {
        let d = Math.floor(Math.random() * (g.max - g.min + 1) + g.min);
        data.push(d);
      }
    } else {
      let s = new Set();
      for (let q = 0; q < g.length; q = s.size) {
        let a = Math.floor(Math.random() * (g.max - g.min + 1) + g.min);
        s.add(a);
      }
      data = Array.from(s);
    }
    return data;
  }
  // ================临时数据结束
}
