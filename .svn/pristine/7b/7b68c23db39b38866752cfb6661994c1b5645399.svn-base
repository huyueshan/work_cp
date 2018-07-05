import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import userModel from "../../../status/user.model";
import { HttpInterceptorService } from '../../Http.Service';

import { HttpClient,HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs';
import 'rxjs/Rx'

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
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
        src: require("../images/caip/SSCZQ.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/cq",
        linko: "lottery/officialssc/cq",
        bcolor: "#fed1d1"
      },
      {
        name: this.now_lang.lot_type.tj_ssc,
        src: require("../images/caip/SSCTJ.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/tj",
        linko: "lottery/officialssc/tj",
        bcolor: "#fed1d1"
      },
      {
        name: this.now_lang.lot_type.xq_ssc,
        src: require("../images/caip/SSCXJ.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/xj",
        linko: "lottery/officialssc/xj",
        bcolor: "#fed1d1"
      },
      {
        name: this.now_lang.lot_type.bj_ssc,
        src: require("../images/caip/SSCBJ.png"),
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
        src: require("../images/caip/FFC6HC.png"),
        credit: false,
        official: true,
        linkc: "creditffc/lhc",
        linko: "lottery/officialssc/ffc",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.az_ffc,
        src: require("../images/caip/FFCAZ3.png"),
        credit: true,
        official: true,
        linkc: "creditffc/aoz",
        linko: "lottery/officialssc/aoz",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.dj_ffc,
        src: require("../images/caip/FFCDJ1.5.png"),
        credit: true,
        official: false,
        linkc: "creditffc/bj",
        linko: "lottery/officialssc/bj",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.hs_ffc,
        src: require("../images/caip/FFCHGKLC.png"),
        credit: true,
        official: true,
        linkc: "creditffc/hg",
        linko: "lottery/officialssc/hg",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.jnd_ffc,
        src: require("../images/caip/FFCJNDKLC.png"),
        credit: false,
        official: true,
        linkc: "creditffc/jnd",
        linko: "lottery/officialssc/jnd",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.qq_ffc,
        src: require("../images/caip/FFCQQ.png"),
        credit: true,
        official: true,
        linkc: "creditffc/qq",
        linko: "lottery/officialssc/qq",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.slfk_ffc,
        src: require("../images/caip/FFCSLFK5.png"),
        credit: false,
        official: true,
        linkc: "creditffc/slf",
        linko: "lottery/officialssc/slf",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.tw_ffc,
        src: require("../images/caip/FFCTW5.png"),
        credit: true,
        official: true,
        linkc: "creditffc/tw",
        linko: "lottery/officialssc/tw",
        bcolor: "#fcc0e5"
      },
      {
        name: this.now_lang.lot_type.tx_ffc,
        src: require("../images/caip/FFCTX.png"),
        credit: true,
        official: false,
        linkc: "credit/tx",
        linko: "lottery/officialssc/tx",
        bcolor: "#fcc0e5"
      }
    ],
    pks: [
      {
        name: this.now_lang.lot_type.xyft_pk10,
        src: require("../images/caip/PKSXYFT.png"),
        credit: true,
        official: false,
        linkc: "lottery/creditssc/xyft",
        linko: "lottery/officialssc/xyft",
        bcolor: "#d2c6f6"
      },
      {
        name: this.now_lang.lot_type.bj_pk10,
        src: require("../images/caip/PKSBJ.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/bjpk",
        linko: "lottery/officialssc/xyft",
        bcolor: "#d2c6f6"
      }
    ],
    s5: [
      {
        name: this.now_lang.lot_type.hlj_exf,
        src: require("../images/caip/11X5HLJ.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/hlj5",
        linko: "lottery/officialssc/hlj5",
        bcolor: "#b5c0df"
      },
      {
        name: this.now_lang.lot_type.js_exf,
        src: require("../images/caip/11X5JS.png"),
        credit: false,
        official: true,
        linkc: "lottery/creditssc/js5",
        linko: "lottery/officialssc/js5",
        bcolor: "#b5c0df"
      },
      {
        name: this.now_lang.lot_type.jx_exf,
        src: require("../images/caip/11X5JX.png"),
        credit: true,
        official: false,
        linkc: "lottery/creditssc/jx5",
        linko: "lottery/officialssc/jx5",
        bcolor: "#b5c0df"
      },
      {
        name: this.now_lang.lot_type.sd_exf,
        src: require("../images/caip/11X5SD.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/sd5",
        linko: "lottery/officialssc/sd5",
        bcolor: "#b5c0df"
      },
      {
        name: this.now_lang.lot_type.shh_exf,
        src: require("../images/caip/11X5SH.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/sh5",
        linko: "lottery/officialssc/sh5",
        bcolor: "#b5c0df"
      },
      {
        name: this.now_lang.lot_type.xj_exf,
        src: require("../images/caip/11X5XJ.png"),
        credit: false,
        official: true,
        linkc: "lottery/creditssc/xj5",
        linko: "lottery/officialssc/xj5",
        bcolor: "#b5c0df"
      }
    ],
    klc: [
      {
        name: this.now_lang.lot_type.azkl8_klc,
        src: require("../images/caip/KLAZ.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/aoz8",
        linko: "lottery/officialssc/aoz8",
        bcolor: "#b7e1f9"
      },
      {
        name: this.now_lang.lot_type.bjkl8_klc,
        src: require("../images/caip/KLBJ.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/bj8",
        linko: "lottery/officialssc/bj8",
        bcolor: "#b7e1f9"
      },
      {
        name: this.now_lang.lot_type.gdk10_klc,
        src: require("../images/caip/KLGD.png"),
        credit: false,
        official: true,
        linkc: "lottery/creditssc/gd10",
        linko: "lottery/officialssc/gd10",
        bcolor: "#b7e1f9"
      },
      {
        name: this.now_lang.lot_type.gxk10_klc,
        src: require("../images/caip/KLGX.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/gx10",
        linko: "lottery/officialssc/gx10",
        bcolor: "#b7e1f9"
      },
      {
        name: this.now_lang.lot_type.jndkl8_klc,
        src: require("../images/caip/KLJND.png"),
        credit: false,
        official: true,
        linkc: "lottery/creditssc/jnd8",
        linko: "lottery/officialssc/jnd8",
        bcolor: "#b7e1f9"
      },
      {
        name: this.now_lang.lot_type.slfk_klc,
        src: require("../images/caip/KLSLF.png"),
        credit: true,
        official: false,
        linkc: "lottery/creditssc/slfk",
        linko: "lottery/officialssc/slfk",
        bcolor: "#b7e1f9"
      },
      {
        name: this.now_lang.lot_type.twbg_klc,
        src: require("../images/caip/KLTWBG.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/twbg",
        linko: "lottery/officialssc/twbg",
        bcolor: "#b7e1f9"
      },
      {
        name: this.now_lang.lot_type.cqk10_klc,
        src: require("../images/caip/KLZQ.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/cq10",
        linko: "lottery/officialssc/cq10",
        bcolor: "#b7e1f9"
      }
    ],
    dpc: [
      {
        name: this.now_lang.lot_type.fc3d_dpc,
        src: require("../images/caip/DFC.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/fc3d",
        linko: "lottery/officialssc/fc3d",
        bcolor: "#bff6cf"
      },
      {
        name: this.now_lang.lot_type.pl35_dpc,
        src: require("../images/caip/DPLSW.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/pl3",
        linko: "lottery/officialssc/pl3",
        bcolor: "#bff6cf"
      },
      {
        name: this.now_lang.lot_type.shssl_dpc,
        src: require("../images/caip/DSHSSL.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/shssl",
        linko: "lottery/officialssc/shssl",
        bcolor: "#bff6cf"
      }
    ],
    pcdd: [
      {
        name: this.now_lang.lot_type.az_28,
        src: require("../images/caip/PDAZ28.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/az28",
        linko: "lottery/officialssc/az28",
        bcolor: "#cde6a1"
      },
      {
        name: this.now_lang.lot_type.dj_28,
        src: require("../images/caip/PDDJ28.png"),
        credit: true,
        official: false,
        linkc: "lottery/creditssc/dj28",
        linko: "lottery/officialssc/dj28",
        bcolor: "#cde6a1"
      },
      {
        name: this.now_lang.lot_type.hs_28,
        src: require("../images/caip/PDHS28.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/hg28",
        linko: "lottery/officialssc/hg28",
        bcolor: "#cde6a1"
      },
      {
        name: this.now_lang.lot_type.jnd_28,
        src: require("../images/caip/PDJND28.png"),
        credit: false,
        official: true,
        linkc: "lottery/creditssc/jnd28",
        linko: "lottery/officialssc/jnd28",
        bcolor: "#cde6a1"
      },
      {
        name: this.now_lang.lot_type.slfk_28,
        src: require("../images/caip/PDSLFK28.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/slfk28",
        linko: "lottery/officialssc/slfk28",
        bcolor: "#cde6a1"
      },
      {
        name: this.now_lang.lot_type.tw_28,
        src: require("../images/caip/PDTW28.png"),
        credit: false,
        official: true,
        linkc: "lottery/creditssc/tw28",
        linko: "lottery/officialssc/tw28",
        bcolor: "#cde6a1"
      },
      {
        name: this.now_lang.lot_type.xy_28,
        src: require("../images/caip/PDXY28.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/xy28",
        linko: "lottery/officialssc/xy28",
        bcolor: "#cde6a1"
      }
    ],
    k3: [
      {
        name: this.now_lang.lot_type.ahk3_ffc,
        src: require("../images/caip/K3AH.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/k3",
        linko: "lottery/officialssc/k3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.bjk3_ffc,
        src: require("../images/caip/K3BJ.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/k3",
        linko: "lottery/officialssc/k3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.gxk3_ffc,
        src: require("../images/caip/K3GX.png"),
        credit: true,
        official: false,
        linkc: "lottery/creditssc/k3",
        linko: "lottery/officialssc/k3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.hbk3_ffc,
        src: require("../images/caip/K3HEBE.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/k3",
        linko: "lottery/officialssc/k3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.hnk3_ffc,
        src: require("../images/caip/K3HN.png"),
        credit: true,
        official: false,
        linkc: "lottery/creditssc/k3",
        linko: "lottery/officialssc/k3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.hubk3_ffc,
        src: require("../images/caip/K3HUBEI.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/k3",
        linko: "lottery/officialssc/k3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.jsk3_ffc,
        src: require("../images/caip/K3JS.png"),
        credit: false,
        official: true,
        linkc: "lottery/creditssc/k3",
        linko: "lottery/officialssc/k3",
        bcolor: "#eec391"
      },
      {
        name: this.now_lang.lot_type.shks_ffc,
        src: require("../images/caip/K3SH.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/k3",
        linko: "lottery/officialssc/k3",
        bcolor: "#eec391"
      }
    ],
    vrc: [
      {
        name: this.now_lang.lot_type.tfencai_vr,
        src: require("../images/caip/VR3FC.png"),
        credit: true,
        official: false,
        linkc: "lottery/creditssc/3fvr",
        linko: "lottery/officialssc/3fvr",
        bcolor: "#ffa18e"
      },
      {
        name: this.now_lang.lot_type.cpbjl_vr,
        src: require("../images/caip/VRCPBJL.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/bjlvr",
        linko: "lottery/officialssc/bjlvr",
        bcolor: "#ffa18e"
      },
      {
        name: this.now_lang.lot_type.jx15_vr,
        src: require("../images/caip/VRJX1.5FC.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/jxvr",
        linko: "lottery/officialssc/jxvr",
        bcolor: "#ffa18e"
      },
      {
        name: this.now_lang.lot_type.kt_vr,
        src: require("../images/caip/VRKT.png"),
        credit: false,
        official: true,
        linkc: "lottery/creditssc/ktvr",
        linko: "lottery/officialssc/ktvr",
        bcolor: "#ffa18e"
      },
      {
        name: this.now_lang.lot_type.lhc_vr,
        src: require("../images/caip/VRLHC.png"),
        credit: true,
        official: true,
        linkc: "lottery/creditssc/lhcvr",
        linko: "lottery/officialssc/lhcvr",
        bcolor: "#ffa18e"
      },
      {
        name: this.now_lang.lot_type.sc_vr,
        src: require("../images/caip/VRSC.png"),
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
  constructor(private router: Router, private hserve: HttpInterceptorService,private http:HttpClient) {}

  ngOnInit() {
    this.now_lang_type=userModel.now_lang_type;
    this.loadpage = userModel.platform;
    this.setdata();
    // ===============================   HTTP 测试  ===========================================================
    // let testdata2 = this.tabdata.JSON();
    // let data = JSON.stringify(this.tabdata);
    // this.hserve.post('http://127.0.0.1:3000/dologin',data,)
    // this.hserve.post('http://127.0.0.1:3000/dologin','nameOrEmail=bar&password=moe',)
    // .then(result => {  
    //   console.log("登录接口返回的信息是：" , result);//打印返回的数据  
    // });
    // // =================================================================================
    // this.hserve.get('http://127.0.0.1:3000','')
    // .then(result => {  
    //   console.log("登录接口返回的信息是：" , result);//打印返回的数据  
    //   if (result.status == 200 && result.data) {
    //      // 登录成功  在这里做判断，路由跳转  
    //     console.log('qingqiu neirong:',result.data);
    //     console.log('status:',result.status);
    //   } else { // 登录失败  
    //     alert(result.message);  
    //   }  
    // });
    // ==============================          HTTP 测试  end  ===========================================
  
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
