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
  public toptab = 0;
  public tab = 0;
  public tabdata = [
    {
      name: this.now_lang.Lot_lobby.All,
      style: "all"
    },
    {
      name: this.now_lang.lot_type.ssc,
      style: "ssc"
    },
    {
      name: this.now_lang.lot_type.ffc,
      style: "ffc"
    },
    {
      name: this.now_lang.lot_type.pk_10,
      style: "pks"
    },
    {
      name: this.now_lang.lot_type.Exf,
      style: "s5"
    },
    {
      name: this.now_lang.lot_type.Klc,
      style: "klc"
    },
    {
      name: this.now_lang.lot_type.Dpc,
      style: "dpc"
    },
    {
      name: this.now_lang.lot_type.pc_dd,
      style: "pcdd"
    },
    {
      name: this.now_lang.lot_type.K3,
      style: "k3"
    },
    {
      name: this.now_lang.lot_type.Vrc,
      style: "vrc"
    }
  ];
  public cpdata = {
    ssc: [
      {
        name: this.now_lang.lot_type.cq_ssc,
        src: require("../../images/caip/SSCZQ.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/cq",
        linko: "lottery/officialssc/cq",
        bcolor: "#fed1d1"
      },
      {
        name: this.now_lang.lot_type.tj_ssc,
        src: require("../../images/caip/SSCTJ.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/tj",
        linko: "lottery/officialssc/tj",
        bcolor: "#fed1d1"
      },
      {
        name: this.now_lang.lot_type.xq_ssc,
        src: require("../../images/caip/SSCXJ.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditssc/xq",
        linko: "/lottery/officialssc/xq",
        bcolor: "#fed1d1"
      },
      {
        name: this.now_lang.lot_type.bj_ssc,
        src: require("../../images/caip/SSCBJ.png"),
        credit: false,
        official: true,
        linkc: "lottery/creditssc/bj",
        linko: "lottery/officialssc/bj",
        bcolor: "#fed1d1"
      }
    ],
    ffc: [
      {
        name: this.now_lang.lot_type.lhc_ffc,
        src: require("../../images/caip/FFC6HC.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditffc/js", // todo
        linko: "/lottery/officialffc/js", // todo
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.az_ffc,
        src: require("../../images/caip/FFCAZ3.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditffc/azz",
        linko: "/lottery/officialffc/az",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.dj_ffc,
        src: require("../../images/caip/FFCDJ1.5.png"),
        credit: true,
        official: false,
        linkc: "/lottery/creditffc/dj",
        linko: "/lottery/officialffc/dj",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.hs_ffc,
        src: require("../../images/caip/FFCHGKLC.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditffc/hs",
        linko: "/lottery/officialffc/hs",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.jnd_ffc,
        src: require("../../images/caip/FFCJNDKLC.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditffc/jnd",
        linko: "/lottery/officialffc/jnd",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.qq_ffc,
        src: require("../../images/caip/FFCQQ.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditffc/qq",
        linko: "/lottery/officialffc/qq",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.slfk_ffc,
        src: require("../../images/caip/FFCSLFK5.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditffc/slfk",
        linko: "/lottery/officialffc/slfk",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.tw_ffc,
        src: require("../../images/caip/FFCTW5.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditffc/tw",
        linko: "/lottery/officialffc/tw",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.tx_ffc,
        src: require("../../images/caip/FFCTX.png"),
        credit: true,
        official: false,
        linkc: "/lottery/creditffc/tx",
        linko: "/lottery/officialffc/tx",
        bcolor: "#fcc0e5"
      }
    ],
    pks: [
      {
        name: this.now_lang.lot_type.xyft_pk10,
        src: require("../../images/caip/PKSXYFT.png"),
        credit: true,
        official: false,
        linkc: "/lottery/creditpk10/xyft",
        linko: "/lottery/officialpk10/xyft",
        bcolor: "#d2c6f6"
      },
      {
        name: this.now_lang.lot_type.bj_pk10,
        src: require("../../images/caip/PKSBJ.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditpk10/bjpk",
        linko: "/lottery/officialpk10/bjpk",
        bcolor: "#d2c6f6"
      }
    ],
    s5: [
      {
        name: this.now_lang.lot_type.hlj_exf,
        src: require("../../images/caip/11X5HLJ.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditexf/hljexf",
        linko: "/lottery/officialexf/hljexf",
        bcolor: "#b5c0df"
      },
      {
        name: this.now_lang.lot_type.js_exf,
        src: require("../../images/caip/11X5JS.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditexf/jsexf",
        linko: "/lottery/officialexf/jsexf",
        bcolor: "#b5c0df"
      },
      {
        name: this.now_lang.lot_type.jx_exf,
        src: require("../../images/caip/11X5JX.png"),
        credit: true,
        official: false,
        linkc: "/lottery/creditexf/jxexf",
        linko: "/lottery/officialexf/jxexf",
        bcolor: "#b5c0df"
      },
      {
        name: this.now_lang.lot_type.sd_exf,
        src: require("../../images/caip/11X5SD.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditexf/sdexf",
        linko: "/lottery/officialexf/sdexf",
        bcolor: "#b5c0df"
      },
      {
        name: this.now_lang.lot_type.shh_exf,
        src: require("../../images/caip/11X5SH.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditexf/shexf",
        linko: "/lottery/officialexf/shexf",
        bcolor: "#b5c0df"
      },
      {
        name: this.now_lang.lot_type.xj_exf,
        src: require("../../images/caip/11X5XJ.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditexf/xjexf",
        linko: "/lottery/officialexf/xjexf",
        bcolor: "#b5c0df"
      }
    ],
    klc: [
      {
        name: this.now_lang.lot_type.azkl8_klc,
        src: require("../../images/caip/KLAZ.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditklc/azkl8",
        linko: "/lottery/officialklc/azkl8",
        bcolor: "#b7e1f9"
      },
      {
        name: this.now_lang.lot_type.bjkl8_klc,
        src: require("../../images/caip/KLBJ.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditklc/bjkl8",
        linko: "/lottery/officialklc/bjkl8",
        bcolor: "#b7e1f9"
      },
      {
        name: this.now_lang.lot_type.gdk10_klc,
        src: require("../../images/caip/KLGD.png"),
        credit: false,
        official: true,
        linkc: "lottery/creditssc/gd10", // todo
        linko: "lottery/officialssc/gd10", // todo
        bcolor: "#b7e1f9"
      },
      {
        name: this.now_lang.lot_type.gxk10_klc,
        src: require("../../images/caip/KLGX.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/gx10", // todo
        linko: "lottery/officialssc/gx10", // todo
        bcolor: "#b7e1f9"
      },
      {
        name: this.now_lang.lot_type.jndkl8_klc,
        src: require("../../images/caip/KLJND.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditklc/jndkl8",
        linko: "/lottery/officialklc/jndkl8",
        bcolor: "#b7e1f9"
      },
      {
        name: this.now_lang.lot_type.slfk_klc,
        src: require("../../images/caip/KLSLF.png"),
        credit: true,
        official: false,
        linkc: "/lottery/creditklc/slfk",
        linko: "/lottery/officialklc/slfk",
        bcolor: "#b7e1f9"
      },
      {
        name: this.now_lang.lot_type.twbg_klc,
        src: require("../../images/caip/KLTWBG.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditklc/twbg",
        linko: "/lottery/officialklc/twbg",
        bcolor: "#b7e1f9"
      },
      {
        name: this.now_lang.lot_type.cqk10_klc,
        src: require("../../images/caip/KLZQ.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/cq10", // todo
        linko: "lottery/officialssc/cq10", // todo
        bcolor: "#b7e1f9"
      }
    ],
    dpc: [
      {
        name: this.now_lang.lot_type.fc3d_dpc,
        src: require("../../images/caip/DFC.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditdpc/fc3d",
        linko: "/lottery/officialdpc/fc3d",
        bcolor: "#bff6cf"
      },
      {
        name: this.now_lang.lot_type.pl35_dpc,
        src: require("../../images/caip/DPLSW.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditdpc/pl35",
        linko: "/lottery/officialdpc/pl35",
        bcolor: "#bff6cf"
      },
      {
        name: this.now_lang.lot_type.shssl_dpc,
        src: require("../../images/caip/DSHSSL.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditdpc/shssl",
        linko: "/lottery/officialdpc/shssl",
        bcolor: "#bff6cf"
      }
    ],
    pcdd: [
      {
        name: this.now_lang.lot_type.az_28,
        src: require("../../images/caip/PDAZ28.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditpcdd/az28",
        linko: "/lottery/creditpcdd/az28",
        bcolor: "#cde6a1"
      },
      {
        name: this.now_lang.lot_type.dj_28,
        src: require("../../images/caip/PDDJ28.png"),
        credit: true,
        official: false,
        linkc: "/lottery/creditpcdd/dj28",
        linko: "/lottery/creditpcdd/dj28",
        bcolor: "#cde6a1"
      },
      {
        name: this.now_lang.lot_type.hs_28,
        src: require("../../images/caip/PDHS28.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditpcdd/hs28",
        linko: "/lottery/creditpcdd/hs28",
        bcolor: "#cde6a1"
      },
      {
        name: this.now_lang.lot_type.jnd_28,
        src: require("../../images/caip/PDJND28.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditpcdd/jnd28",
        linko: "/lottery/creditpcdd/jnd28",
        bcolor: "#cde6a1"
      },
      {
        name: this.now_lang.lot_type.slfk_28,
        src: require("../../images/caip/PDSLFK28.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditpcdd/snfk28",
        linko: "lottery/creditpcdd/snfk28",
        bcolor: "#cde6a1"
      },
      {
        name: this.now_lang.lot_type.tw_28,
        src: require("../../images/caip/PDTW28.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditpcdd/tw28",
        linko: "/lottery/creditpcdd/tw28",
        bcolor: "#cde6a1"
      },
      {
        name: this.now_lang.lot_type.xy_28,
        src: require("../../images/caip/PDXY28.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditpcdd/xy28",
        linko: "/lottery/creditpcdd/xy28",
        bcolor: "#cde6a1"
      }
    ],
    k3: [
      {
        name: this.now_lang.lot_type.ahk3_ffc,
        src: require("../../images/caip/K3AH.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditk3/ahk3",
        linko: "/lottery/officialdpc/ahk3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.bjk3_ffc,
        src: require("../../images/caip/K3BJ.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditk3/bjk3",
        linko: "/lottery/officialdpc/bjk3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.gxk3_ffc,
        src: require("../../images/caip/K3GX.png"),
        credit: true,
        official: false,
        linkc: "/lottery/creditk3/gxk3",
        linko: "/lottery/officialdpc/gxk3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.hbk3_ffc,
        src: require("../../images/caip/K3HEBE.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditk3/hbk3",
        linko: "/lottery/officialdpc/hbk3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.hnk3_ffc,
        src: require("../../images/caip/K3HN.png"),
        credit: true,
        official: false,
        linkc: "/lottery/creditk3/hnk3",
        linko: "/lottery/officialdpc/hnk3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.hubk3_ffc,
        src: require("../../images/caip/K3HUBEI.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditk3/hubk3",
        linko: "/lottery/officialdpc/hubk3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.jsk3_ffc,
        src: require("../../images/caip/K3JS.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditk3/jsk3",
        linko: "/lottery/officialdpc/jsk3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.shks_ffc,
        src: require("../../images/caip/K3SH.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditk3/shks",
        linko: "/lottery/officialdpc/shks",
        bcolor: "#eec391"
      }
    ],
    vrc: [
      {
        name: this.now_lang.lot_type.tfencai_vr,
        src: require("../../images/caip/VR3FC.png"),
        credit: true,
        official: false,
        linko: "/lottery/vrc/3fc",
        linkc: "/lottery/vrc/3fc",
        bcolor: "#ffa18e"
      },
      {
        name: this.now_lang.lot_type.cpbjl_vr,
        src: require("../../images/caip/VRCPBJL.png"),
        credit: true,
        official: true,
        linko: "/lottery/vrc/jx",
        linkc: "/lottery/vrc/jx",
        bcolor: "#ffa18e"
      },
      {
        name: this.now_lang.lot_type.jx15_vr,
        src: require("../../images/caip/VRJX1.5FC.png"),
        credit: true,
        official: true,
        linko: "/lottery/vrc/jx",
        linkc: "/lottery/vrc/jx",
        bcolor: "#ffa18e"
      },
      {
        name: this.now_lang.lot_type.kt_vr,
        src: require("../../images/caip/VRKT.png"),
        credit: false,
        official: true,
        linko: "/lottery/vrc/jx",
        linkc: "/lottery/vrc/jx",
        bcolor: "#ffa18e"
      },
      {
        name: this.now_lang.lot_type.lhc_vr,
        src: require("../../images/caip/VRLHC.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/lhcvr",
        linko: "lottery/officialssc/lhcvr",
        bcolor: "#ffa18e"
      },
      {
        name: this.now_lang.lot_type.sc_vr,
        src: require("../../images/caip/VRSC.png"),
        credit: true,
        official: false,
        linkc: "lottery/creditssc/scvr",
        linko: "lottery/officialssc/scvr",
        bcolor: "#ffa18e"
      }
    ]
  };
  public outdata = [];
  public testdata;
  constructor(private router: Router) {}

  ngOnInit() {
    this.now_lang_type=userModel.now_lang_type;
    this.loadpage = userModel.platform;
    this.setdata();
  }
  linkrouter(i, o, c) {
    let od = this.outdata;
    let tb = this.toptab;
    if (tb !== 2) {
      if (od[i].official) {
        this.router.navigate([o]);
      } else {
        this.router.navigate([c]);
      }
    } else {
      if (od[i].credit) {
        this.router.navigate([c]);
      } else {
        this.router.navigate([o]);
      }
    }
  }

  toptabclick(i) {
    this.toptab = i;
    this.setdata();
  }
  tabclick(i) {
    this.tab = i;
    this.setdata();
  }

  // 设置需要显示的彩种数据
  setdata() {
    let d = this.cpdata;
    let td = this.tabdata;
    let tb = this.tab;
    this.outdata.length = 0;
    // 玩法选全部
    if (this.toptab == 0) {
      if (this.tab == 0) {
        for (let key in d) {
          for (let i = 0; i < d[key].length; i++) {
            this.outdata.push(d[key][i]);
          }
        }
      } else {
        for (let i = 0; i < d[td[tb].style].length; i++) {
          this.outdata.push(d[td[tb].style][i]);
        }
      }
    }
    // 玩法选官方
    if (this.toptab == 1) {
      if (this.tab == 0) {
        for (let key in d) {
          for (let i = 0; i < d[key].length; i++) {
            if (d[key][i].official) {
              this.outdata.push(d[key][i]);
            }
          }
        }
      } else {
        for (let i = 0; i < d[td[tb].style].length; i++) {
          if (d[td[tb].style][i].official) {
            this.outdata.push(d[td[tb].style][i]);
          }
        }
      }
    }
    // 玩法选信用
    if (this.toptab == 2) {
      if (this.tab == 0) {
        for (let key in d) {
          for (let i = 0; i < d[key].length; i++) {
            if (d[key][i].credit) {
              this.outdata.push(d[key][i]);
            }
          }
        }
      } else {
        for (let i = 0; i < d[td[tb].style].length; i++) {
          if (d[td[tb].style][i].credit) {
            this.outdata.push(d[td[tb].style][i]);
          }
        }
      }
    }
  }
}
