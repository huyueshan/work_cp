import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import userModel from "../../../../status/user.model";
import "rxjs/Rx";

@Component({
  selector: "app-lottery",
  templateUrl: "./lottery.component.html",
  styleUrls: ["./lottery.component.scss"]
})
export class LotteryComponent implements OnInit {
  loadpage = false;
  public toptab = 0;
  public tab = 0;
  public tabdata = [
    {
      name: "全部",
      style: "all"
    },
    {
      name: "时时彩",
      style: "ssc"
    },
    {
      name: "分分彩",
      style: "ffc"
    },
    {
      name: "北京赛车",
      style: "pks"
    },
    {
      name: "11选5",
      style: "s5"
    },
    {
      name: "快乐彩",
      style: "klc"
    },
    {
      name: "低频彩",
      style: "dpc"
    },
    {
      name: "PC蛋蛋",
      style: "pcdd"
    },
    {
      name: "快三",
      style: "k3"
    },
    {
      name: "VR彩",
      style: "vrc"
    }
  ];
  public cpdata = {
    ssc: [
      {
        name: "重庆时时彩",
        src: require("../../images/caip/SSCZQ.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/cq",
        linko: "lottery/officialssc/cq",
        bcolor: "#fed1d1"
      },
      {
        name: "天津时时彩",
        src: require("../../images/caip/SSCTJ.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/tj",
        linko: "lottery/officialssc/tj",
        bcolor: "#fed1d1"
      },
      {
        name: "新疆时时彩",
        src: require("../../images/caip/SSCXJ.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditssc/xq",
        linko: "/lottery/officialssc/xq",
        bcolor: "#fed1d1"
      },
      {
        name: "北京时时彩",
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
        name: "六合彩分分彩",
        src: require("../../images/caip/FFC6HC.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditffc/js", // todo
        linko: "/lottery/officialffc/js", // todo
        bcolor: "#fcc0e5"
      },
      {
        name: "澳洲分分彩",
        src: require("../../images/caip/FFCAZ3.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditffc/azz",
        linko: "/lottery/officialffc/az",
        bcolor: "#fcc0e5"
      },
      {
        name: "东京分分彩",
        src: require("../../images/caip/FFCDJ1.5.png"),
        credit: true,
        official: false,
        linkc: "/lottery/creditffc/dj",
        linko: "/lottery/officialffc/dj",
        bcolor: "#fcc0e5"
      },
      {
        name: "韩国分分彩",
        src: require("../../images/caip/FFCHGKLC.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditffc/hs",
        linko: "/lottery/officialffc/hs",
        bcolor: "#fcc0e5"
      },
      {
        name: "加拿大分分彩",
        src: require("../../images/caip/FFCJNDKLC.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditffc/jnd",
        linko: "/lottery/officialffc/jnd",
        bcolor: "#fcc0e5"
      },
      {
        name: "QQ分分彩",
        src: require("../../images/caip/FFCQQ.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditffc/qq",
        linko: "/lottery/officialffc/qq",
        bcolor: "#fcc0e5"
      },
      {
        name: "斯诺伐分分彩",
        src: require("../../images/caip/FFCSLFK5.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditffc/slfk",
        linko: "/lottery/officialffc/slfk",
        bcolor: "#fcc0e5"
      },
      {
        name: "台湾分分彩",
        src: require("../../images/caip/FFCTW5.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditffc/tw",
        linko: "/lottery/officialffc/tw",
        bcolor: "#fcc0e5"
      },
      {
        name: "腾讯分分彩",
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
        name: "幸运飞艇",
        src: require("../../images/caip/PKSXYFT.png"),
        credit: true,
        official: false,
        linkc: "/lottery/creditpk10/xyft",
        linko: "/lottery/officialpk10/xyft",
        bcolor: "#d2c6f6"
      },
      {
        name: "北京PK拾",
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
        name: "黑龙江11选5",
        src: require("../../images/caip/11X5HLJ.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditexf/hljexf",
        linko: "/lottery/officialexf/hljexf",
        bcolor: "#b5c0df"
      },
      {
        name: "江苏11选5",
        src: require("../../images/caip/11X5JS.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditexf/jsexf",
        linko: "/lottery/officialexf/jsexf",
        bcolor: "#b5c0df"
      },
      {
        name: "江西11选5",
        src: require("../../images/caip/11X5JX.png"),
        credit: true,
        official: false,
        linkc: "/lottery/creditexf/jxexf",
        linko: "/lottery/officialexf/jxexf",
        bcolor: "#b5c0df"
      },
      {
        name: "山东11选5",
        src: require("../../images/caip/11X5SD.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditexf/sdexf",
        linko: "/lottery/officialexf/sdexf",
        bcolor: "#b5c0df"
      },
      {
        name: "上海11选5",
        src: require("../../images/caip/11X5SH.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditexf/shexf",
        linko: "/lottery/officialexf/shexf",
        bcolor: "#b5c0df"
      },
      {
        name: "新疆11选5",
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
        name: "澳洲快乐8",
        src: require("../../images/caip/KLAZ.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditklc/azkl8",
        linko: "/lottery/officialklc/azkl8",
        bcolor: "#b7e1f9"
      },
      {
        name: "北京快乐8",
        src: require("../../images/caip/KLBJ.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditklc/bjkl8",
        linko: "/lottery/officialklc/bjkl8",
        bcolor: "#b7e1f9"
      },
      {
        name: "广东快10",
        src: require("../../images/caip/KLGD.png"),
        credit: false,
        official: true,
        linkc: "lottery/creditssc/gd10", // todo
        linko: "lottery/officialssc/gd10", // todo
        bcolor: "#b7e1f9"
      },
      {
        name: "广西快10",
        src: require("../../images/caip/KLGX.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/gx10", // todo
        linko: "lottery/officialssc/gx10", // todo
        bcolor: "#b7e1f9"
      },
      {
        name: "加拿大快乐8",
        src: require("../../images/caip/KLJND.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditklc/jndkl8",
        linko: "/lottery/officialklc/jndkl8",
        bcolor: "#b7e1f9"
      },
      {
        name: "斯洛伐克",
        src: require("../../images/caip/KLSLF.png"),
        credit: true,
        official: false,
        linkc: "/lottery/creditklc/slfk",
        linko: "/lottery/officialklc/slfk",
        bcolor: "#b7e1f9"
      },
      {
        name: "台湾宾果",
        src: require("../../images/caip/KLTWBG.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditklc/twbg",
        linko: "/lottery/officialklc/twbg",
        bcolor: "#b7e1f9"
      },
      {
        name: "重庆快10",
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
        name: "福彩3D",
        src: require("../../images/caip/DFC.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditdpc/fc3d",
        linko: "/lottery/officialdpc/fc3d",
        bcolor: "#bff6cf"
      },
      {
        name: "排列三、五",
        src: require("../../images/caip/DPLSW.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditdpc/pl35",
        linko: "/lottery/officialdpc/pl35",
        bcolor: "#bff6cf"
      },
      {
        name: "上海时时乐",
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
        name: "澳洲28",
        src: require("../../images/caip/PDAZ28.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditpcdd/az28",
        linko: "/lottery/creditpcdd/az28",
        bcolor: "#cde6a1"
      },
      {
        name: "东京28",
        src: require("../../images/caip/PDDJ28.png"),
        credit: true,
        official: false,
        linkc: "/lottery/creditpcdd/dj28",
        linko: "/lottery/creditpcdd/dj28",
        bcolor: "#cde6a1"
      },
      {
        name: "韩国28",
        src: require("../../images/caip/PDHS28.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditpcdd/hs28",
        linko: "/lottery/creditpcdd/hs28",
        bcolor: "#cde6a1"
      },
      {
        name: "加拿大28",
        src: require("../../images/caip/PDJND28.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditpcdd/jnd28",
        linko: "/lottery/creditpcdd/jnd28",
        bcolor: "#cde6a1"
      },
      {
        name: "斯洛伐克",
        src: require("../../images/caip/PDSLFK28.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditpcdd/snfk28",
        linko: "lottery/creditpcdd/snfk28",
        bcolor: "#cde6a1"
      },
      {
        name: "台湾28",
        src: require("../../images/caip/PDTW28.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditpcdd/tw28",
        linko: "/lottery/creditpcdd/tw28",
        bcolor: "#cde6a1"
      },
      {
        name: "幸运28",
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
        name: "安徽快3",
        src: require("../../images/caip/K3AH.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditk3/ahk3",
        linko: "/lottery/officialdpc/ahk3",
        bcolor: "#eec391"
      },
      {
        name: "北京快3",
        src: require("../../images/caip/K3BJ.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditk3/bjk3",
        linko: "/lottery/officialdpc/bjk3",
        bcolor: "#eec391"
      },
      {
        name: "广西快3",
        src: require("../../images/caip/K3GX.png"),
        credit: true,
        official: false,
        linkc: "/lottery/creditk3/gxk3",
        linko: "/lottery/officialdpc/gxk3",
        bcolor: "#eec391"
      },
      {
        name: "河北快3",
        src: require("../../images/caip/K3HEBE.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditk3/hbk3",
        linko: "/lottery/officialdpc/hbk3",
        bcolor: "#eec391"
      },
      {
        name: "河南快3",
        src: require("../../images/caip/K3HN.png"),
        credit: true,
        official: false,
        linkc: "/lottery/creditk3/hnk3",
        linko: "/lottery/officialdpc/hnk3",
        bcolor: "#eec391"
      },
      {
        name: "湖北快3",
        src: require("../../images/caip/K3HUBEI.png"),
        credit: true,
        official: true,
        linkc: "/lottery/creditk3/hubk3",
        linko: "/lottery/officialdpc/hubk3",
        bcolor: "#eec391"
      },
      {
        name: "江苏快3",
        src: require("../../images/caip/K3JS.png"),
        credit: false,
        official: true,
        linkc: "/lottery/creditk3/jsk3",
        linko: "/lottery/officialdpc/jsk3",
        bcolor: "#eec391"
      },
      {
        name: "上海快3",
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
        name: "3分彩",
        src: require("../../images/caip/VR3FC.png"),
        credit: true,
        official: false,
        linko: "/lottery/vrc/3fc",
        linkc: "/lottery/vrc/3fc",
        bcolor: "#ffa18e"
      },
      {
        name: "彩票百家乐",
        src: require("../../images/caip/VRCPBJL.png"),
        credit: true,
        official: true,
        linko: "/lottery/vrc/jx",
        linkc: "/lottery/vrc/jx",
        bcolor: "#ffa18e"
      },
      {
        name: "金星1.5分彩",
        src: require("../../images/caip/VRJX1.5FC.png"),
        credit: true,
        official: true,
        linko: "/lottery/vrc/jx",
        linkc: "/lottery/vrc/jx",
        bcolor: "#ffa18e"
      },
      {
        name: "快艇",
        src: require("../../images/caip/VRKT.png"),
        credit: false,
        official: true,
        linko: "/lottery/vrc/jx",
        linkc: "/lottery/vrc/jx",
        bcolor: "#ffa18e"
      },
      {
        name: "六合彩",
        src: require("../../images/caip/VRLHC.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/lhcvr",
        linko: "lottery/officialssc/lhcvr",
        bcolor: "#ffa18e"
      },
      {
        name: "赛车",
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