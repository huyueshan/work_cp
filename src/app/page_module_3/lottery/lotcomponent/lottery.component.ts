import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import userModel from "../../../../status/user.model";
import "rxjs";

@Component({
  selector: "app-lottery",
  templateUrl: "./lottery.component.html",
  styleUrls: ["./lottery.component.scss"]
})
export class LotteryComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  loadpage = false;
  
  public cpdata = [
    {
      title: this.now_lang.lot_type.ssc,
      isover: false,
      isactive: false,
      credit: true,
      official: true,
      gxtog: 0,
      postop:0,
      items: [
        {
          text: this.now_lang.lot_type.cq_ssc,
          topy: '-10px',
          type: "ssc",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_cqssc.png"),
          credit: true,
          official: true,
          ido: '101',
          idc: '201',
          linko: "/lottery/officialssc/cq",
          linkc: "/lottery/creditssc/cq"
        },
        {
          text: this.now_lang.lot_type.tj_ssc,
          type: "ssc",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_cqssc.png"),
          credit: true,
          official: true,
          ido:'102',
          idc: '202',
          linko: "/lottery/officialssc/tj",
          linkc: "/lottery/creditssc/tj"
        },
        {
          text: this.now_lang.lot_type.xq_ssc,
          type: "ssc",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_xjssc.png"),
          credit: true,
          official: true,
          ido: '103',
          idc: '203',
          linko: "/lottery/officialssc/xq",
          linkc: "/lottery/creditssc/xq"
        },
        {
          text: this.now_lang.lot_type.bj_ssc,
          type: "ssc",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_sscbj.png"),
          credit: true,
          official: true,
          ido: '104',
          idc: '204',
          linko: "/lottery/officialssc/bj",
          linkc: "/lottery/creditssc/bj"
        }
      ]
    },
    {
      title: this.now_lang.lot_type.ffc,
      topy: '-74px',
      isover: false,
      isactive: false,
      credit: true,
      official: true,
      gxtog: 0,
      postop:0,
      items: [
        {
          text: this.now_lang.lot_type.hs_ffc,
          type: "ssc",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_sh15.png"),
          credit: true,
          official: true,
          ido: '105',
          idc: '205',
          linko: "/lottery/officialffc/hs",
          linkc: "/lottery/creditffc/hs"
        },
        {
          text: this.now_lang.lot_type.bj_ffc,
          type: "ssc",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_sscbj.png"),
          credit: true,
          official: true,
          ido: '114',
          idc: '214',
          linko: "/lottery/officialffc/bj",
          linkc: "/lottery/creditffc/bj"
        },
        {
          text: this.now_lang.lot_type.tw_ffc,
          type: "ssc",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_tw5f.png"),
          credit: true,
          official: true,
          ido: '106',
          idc: '206',
          linko: "/lottery/officialffc/tw",
          linkc: "/lottery/creditffc/tw"
        },
        {
          text: this.now_lang.lot_type.jnd_ffc,
          type: "ssc",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_jnd35.png"),
          credit: true,
          official: true,
          ido: '107',
          idc: '207',
          linko: "/lottery/officialffc/jnd",
          linkc: "/lottery/creditffc/jnd"
        },
        {
          text: this.now_lang.lot_type.az_ffc,
          type: "ssc",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_azk8.png"),
          credit: true,
          official: true,
          ido: '108',
          idc: '208',
          linko: "/lottery/officialffc/az",
          linkc: "/lottery/creditffc/az"
        },
        {
          text: this.now_lang.lot_type.slfk_ffc,
          type: "ssc",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_slfk.png"),
          credit: true,
          official: true,
          ido: '109',
          idc: '209',
          linko: "/lottery/officialffc/slfk",
          linkc: "/lottery/creditffc/slfk"
        },
        {
          text: this.now_lang.lot_type.tx_ffc,
          type: "ssc",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_sscbj.png"),
          credit: true,
          official: true,
          ido: '110',
          idc: '210',
          linko: "/lottery/officialffc/tx",
          linkc: "/lottery/creditffc/tx"
        },
        {
          text: this.now_lang.lot_type.qq_ffc,
          type: "ssc",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_sscbj.png"),
          credit: true,
          official: true,
          ido: '111',
          idc: '211',
          linko: "/lottery/officialffc/qq",
          linkc: "/lottery/creditffc/qq"
        },
        {
          text: this.now_lang.lot_type.dj_ffc,
          type: "ssc",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_sscbj.png"),
          credit: true,
          official: true,
          ido: '112',
          idc: '212',
          linko: "/lottery/officialffc/dj",
          linkc: "/lottery/creditffc/dj"
        },
        {
          text: this.now_lang.lot_type.js_ffc,
          type: "ssc",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_sscbj.png"),
          credit: true,
          official: true,
          ido: '113',
          idc: '213',
          linko: "/lottery/officialffc/js",
          linkc: "/lottery/creditffc/js"
        }
      ]
    },
    {
      title: this.now_lang.lot_type.pk_10,
      topy: '-138px',
      isover: false,
      isactive: false,
      credit: true,
      official: true,
      gxtog: 0,
      postop:0,
      items: [
        {
          text: this.now_lang.lot_type.bj_pk10,
          type: "pk10",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_bjpk10.png"),
          credit: true,
          official: true,
          ido: '121',
          idc: '221',
          linko: "/lottery/officialpk10/bjpk",
          linkc: "/lottery/creditpk10/bjpk"
        },
        {
          text: this.now_lang.lot_type.xyft_pk10,
          type: "pk10",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_xyft.png"),
          credit: true,
          official: true,
          ido: '122',
          idc: '222',
          linko: "/lottery/officialpk10/xyft",
          linkc: "/lottery/creditpk10/xyft"
        }
      ]
    },
    {
      title: this.now_lang.lot_type.Exf,
      topy: '-202px',
      isover: false,
      isactive: false,
      credit: true,
      official: true,
      gxtog: 0,
      postop:0,
      items: [
        {
          text: this.now_lang.lot_type.sd_exf,
          type: "exf",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_sh15.png"),
          credit: true,
          official: true,
          ido: '131',
          idc: '231',
          linko: "/lottery/officialexf/sdexf",
          linkc: "/lottery/creditexf/sdexf"
        },
        {
          text: this.now_lang.lot_type.jx_exf,
          type: "exf",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_shexf.png"),
          credit: true,
          official: true,
          ido: '132',
          idc: '232',
          linko: "/lottery/officialexf/jxexf",
          linkc: "/lottery/creditexf/jxexf"
        },
        {
          text: this.now_lang.lot_type.hlj_exf,
          type: "exf",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_shexf.png"),
          credit: true,
          official: true,
          ido: '133',
          idc: '233',
          linko: "/lottery/officialexf/hljexf",
          linkc: "/lottery/creditexf/hljexf"
        },
        {
          text: this.now_lang.lot_type.js_exf,
          type: "exf",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_jsexf.png"),
          credit: true,
          official: true,
          ido: '134',
          idc: '234',
          linko: "/lottery/officialexf/jsexf",
          linkc: "/lottery/creditexf/jsexf"
        },
        {
          text: this.now_lang.lot_type.shh_exf,
          type: "exf",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_shexf.png"),
          credit: true,
          official: true,
          ido: '135',
          idc: '235',
          linko: "/lottery/officialexf/shexf",
          linkc: "/lottery/creditexf/shexf"
        },
        {
          text: this.now_lang.lot_type.xj_exf,
          type: "exf",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_shexf.png"),
          credit: true,
          official: true,
          ido: '136',
          idc: '236',
          linko: "/lottery/officialexf/xjexf",
          linkc: "/lottery/creditexf/xjexf"
        }
      ]
    },
    {
      title: this.now_lang.lot_type.Klc,
      topy: '-266px',
      isover: false,
      isactive: false,
      credit: true,
      official: true,
      gxtog: 0,
      postop:0,
      items: [
        {
          text: this.now_lang.lot_type.bjkl8_klc,
          type: "kl8",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_bjk8.png"),
          credit: false,
          official: true,
          ido: '141',
          idc: '0',
          linko: "/lottery/officialklc/bjkl8",
          linkc: "/lottery/creditklc/bjkl8"
        },
        {
          text: this.now_lang.lot_type.jndkl8_klc,
          type: "kl8",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_jnd28.png"),
          credit: false,
          official: true,
          ido: '142',
          idc: '0',
          linko: "/lottery/officialklc/jndkl8",
          linkc: "/lottery/creditklc/jndkl8"
        },
        {
          text: this.now_lang.lot_type.azkl8_klc,
          type: "kl8",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_azk8.png"),
          credit: false,
          official: true,
          ido: '143',
          idc: '0',
          linko: "/lottery/officialklc/azkl8",
          linkc: "/lottery/creditklc/azkl8"
        },
        {
          text: this.now_lang.lot_type.slfk_klc,
          type: "kl8",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_slfk.png"),
          credit: false,
          official: true,
          ido:'144',
          idc: '0',
          linko: "/lottery/officialklc/slfk",
          linkc: "/lottery/creditklc/slfk"
        },
        {
          text: this.now_lang.lot_type.twbg_klc,
          type: "kl8",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_twbg.png"),
          credit: false,
          official: true,
          ido: '145',
          idc: '0',
          linko: "/lottery/officialklc/twbg",
          linkc: "/lottery/creditklc/twbg"
        },
        {
          text: "广东快十",
          type: "gdk10",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_bjpk10.png"),
          credit: true,
          official: false,
          ido: '0',
          idc: '241',
          linko: "",
          linkc: "/lottery/creditklc/gdk10"
        },
        {
          text: "广西快十",
          type: "gxk10",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_bjpk10.png"),
          credit: true,
          official: false,
          ido:' 0',
          idc: '242',
          linko: "",
          linkc: "/lottery/creditkl/gxk10"
        },
        {
          text: "重庆快十",
          type: "gdk10",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_bjpk10.png"),
          credit: true,
          official: false,
          ido: '0',
          idc: '243',
          linko: "",
          linkc: "/lottery/creditklc/cqk10"
        }
      ]
    },
    {
      title: this.now_lang.lot_type.Dpc,
      topy: '330px',
      isover: false,
      isactive: false,
      credit: true,
      official: true,
      gxtog: 0,
      postop:0,
      items: [
        {
          text: this.now_lang.lot_type.fc3d_dpc,
          type: "dpc",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_fc3d.png"),
          credit: false,
          official: true,
          ido: '151',
          idc: '0',
          linko: "/lottery/officialdpc/fc3d",
          linkc: "/lottery/creditdpc/fc3d"
        },
        {
          text: this.now_lang.lot_type.pl35_dpc,
          type: "pl35",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_fc3d.png"),
          credit: false,
          official: true,
          ido: '152',
          idc: '0',
          linko: "/lottery/officialdpc/pl35",
          linkc: "/lottery/creditdpc/pl35"
        },
        {
          text: this.now_lang.lot_type.shssl_dpc,
          type: "dpc",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_shssl.png"),
          credit: false,
          official: true,
          ido: '153',
          idc: '0',
          linko: "/lottery/officialdpc/shssl",
          linkc: "/lottery/creditdpc/shssl"
        },
        {
          text: "香港⑥合彩",
          type: "lhc",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_vrlhc.png"),
          credit: true,
          official: false,
          ido: '0',
          idc: '251',
          linko: "",
          linkc: "/lottery/creditdpc/liuhec"
        }
      ]
    },
    {
      title: this.now_lang.lot_type.pc_dd,
      topy: '-394px',
      isover: false,
      isactive: false,
      credit: true,
      official: false,
      gxtog: 1,
      postop:0,
      items: [
        {
          text: this.now_lang.lot_type.xy_28,
          type: "pcdd",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_xyft.png"),
          credit: true,
          official: false,
          ido: '0',
          idc: '261',
          linko: "",
          linkc: "/lottery/creditpcdd/xy28"
        },
        {
          text: this.now_lang.lot_type.slfk_28,
          type: "pcdd",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_slfk28.png"),
          credit: true,
          official: false,
          ido: '0',
          idc: '262',
          linko: "",
          linkc: "/lottery/creditpcdd/snfk28"
        },
        {
          text: this.now_lang.lot_type.az_28,
          type: "pcdd",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_az28.png"),
          credit: true,
          official: false,
          ido: '0',
          idc: '263',
          linko: "",
          linkc: "/lottery/creditpcdd/az28"
        },
        {
          text: this.now_lang.lot_type.jnd_28,
          type: "pcdd",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_jnd28.png"),
          credit: true,
          official: false,
          ido: '0',
          idc: '264',
          linko: "",
          linkc: "/lottery/creditpcdd/jnd28"
        },
        {
          text: this.now_lang.lot_type.hs_28,
          type: "pcdd",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_dj28.png"),
          credit: true,
          official: false,
          ido: '0',
          idc: '265',
          linko: "",
          linkc: "/lottery/creditpcdd/hs28"
        },
        {
          text: this.now_lang.lot_type.tw_28,
          type: "pcdd",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_tw28.png"),
          credit: true,
          official: false,
          ido: '0',
          idc: '266',
          linko: "",
          linkc: "/lottery/creditpcdd/tw28"
        },
        {
          text: this.now_lang.lot_type.dj_28,
          type: "pcdd",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_dj28.png"),
          credit: true,
          official: false,
          ido: '0',
          idc: '267',
          linko: "",
          linkc: "/lottery/creditpcdd/dj28"
        }
      ]
    },
    {
      title: this.now_lang.lot_type.K3,
      topy: '-458px',
      type: "k3",
      isover: false,
      isactive: false,
      credit: true,
      official: true,
      gxtog: 0,
      postop:0,
      items: [
        {
          text: this.now_lang.lot_type.ahk3_ffc,
          type: "k3",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_ahk3.png"),
          credit: true,
          official: true,
          ido: '171',
          idc: '271',
          linko: "/lottery/officialk3/ahk3",
          linkc: "/lottery/creditk3/ahk3"
        },
        {
          text: this.now_lang.lot_type.hbk3_ffc,
          type: "k3",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_hbk3.png"),
          credit: true,
          official: true,
          ido: '172',
          idc: '272',
          linko: "/lottery/officialk3/hbk3",
          linkc: "/lottery/creditk3/hbk3"
        },
        {
          text: this.now_lang.lot_type.hnk3_ffc,
          type: "k3",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_hbk3.png"),
          credit: true,
          official: true,
          ido: '173',
          idc: '273',
          linko: "/lottery/officialk3/hnk3",
          linkc: "/lottery/creditk3/hnk3"
        },
        {
          text: this.now_lang.lot_type.hubk3_ffc,
          type: "k3",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_hub.png"),
          credit: true,
          official: true,
          ido: '174',
          idc: '274',
          linko: "/lottery/officialk3/hubk3",
          linkc: "/lottery/creditk3/hubk3"
        },
        {
          text: this.now_lang.lot_type.shks_ffc,
          type: "k3",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_hnk3.png"),
          credit: true,
          official: true,
          ido: '175',
          idc: '275',
          linko: "/lottery/officialk3/shks",
          linkc: "/lottery/creditk3/shks"
        },
        {
          text: this.now_lang.lot_type.bjk3_ffc,
          type: "k3",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_ahk3.png"),
          credit: true,
          official: true,
          ido: '176',
          idc: '276',
          linko: "/lottery/officialk3/bjk3",
          linkc: "/lottery/creditk3/bjk3"
        },
        {
          text: this.now_lang.lot_type.gxk3_ffc,
          type: "k3",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_ahk3.png"),
          credit: true,
          official: true,
          ido: '177',
          idc: '277',
          linko: "/lottery/officialk3/gxk3",
          linkc: "/lottery/creditk3/gxk3"
        },
        {
          text: this.now_lang.lot_type.jsk3_ffc,
          type: "k3",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_jsk3.png"),
          credit: true,
          official: true,
          ido: '178',
          idc: '278',
          linko: "/lottery/officialk3/jsk3",
          linkc: "/lottery/creditk3/jsk3"
        },
      ]
    },
    {
      title: this.now_lang.lot_type.Vrc,
      topy: '-522px',
      isover: false,
      isactive: false,
      credit: false,
      official: true,
      gxtog: 0,
      postop:0,
      items: [
        {
          text: this.now_lang.lot_type.cpbjl_vr,
          type: "vrcbjl",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_vrbjl.png"),
          credit: false,
          official: true,
          ido: '0',
          idc: '0',
          linko: "/lottery/vrc/bjl",
          linkc: ""
        },
        {
          text: this.now_lang.lot_type.tfencai_vr,
          type: "ssc",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_shssl.png"),
          credit: false,
          official: true,
          ido: '0',
          idc: '0',
          linko: "/lottery/vrc/3fc",
          linkc: ""
        },
        {
          text: this.now_lang.lot_type.jx15_vr,
          type: "ssc",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_jx15.png"),
          credit: false,
          official: true,
          ido: '0',
          idc: '0',
          linko: "/lottery/vrc/jx",
          linkc: ""
        },
        {
          text: this.now_lang.lot_type.kt_vr,
          type: "pk10",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_xyft.png"),
          credit: false,
          official: true,
          ido: '0',
          idc: '0',
          linko: "/lottery/vrc/kt",
          linkc: ""
        },
        {
          text: this.now_lang.lot_type.lhc_vr,
          type: "lhc",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_vrlhc.png"),
          credit: false,
          official: true,
          ido: '0',
          idc: '0',
          linko: "/lottery/vrc/lhc",
          linkc: ""
        },
        {
          text: this.now_lang.lot_type.sc_vr,
          type: "pk10",
          imgsrc: require("../../images/mod3/cpicon_m3/m3_sscbj.png"),
          credit: false,
          official: true,
          ido: '0',
          idc: '0',
          linko: "/lottery/vrc/sc",
          linkc: ""
        }
      ]
    }
  ];

  
  public outdata = [];
  public testdata;
  constructor(private router: Router) {}

  ngOnInit() {
    this.now_lang_type=userModel.now_lang_type;
    this.loadpage = userModel.platform;
  }

  // 显示彩票栏底部更多按钮方法
  butshow(item){
      let n = 0 ;
      if (!item.gxtog) {
          for (let i = 0; i < item.items.length; i++) {
            item.items[i].official && n++;
          }
      }else{
        for (let i = 0; i < item.items.length; i++) {
          item.items[i].credit && n++;
        }
      }

      return n>6 ? true : false
  }

  
  linkrout(item, i) {
      console.log(item);
    // 跳转路由
    let str = item.gxtog ? item.items[i].linkc : item.items[i].linko;
    this.router.navigate([str]);
  }

  more(item){
    item.postop = item.postop===0 ? -240 : 0;
  }

}
