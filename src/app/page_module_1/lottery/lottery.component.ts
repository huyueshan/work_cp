import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import userModel from "../../../status/user.model";
import { HttpInterceptorService } from '../Http.Service';

import { HttpClient,HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs';
import 'rxjs/Rx'

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
        src: require("../images/caip/SSCZQ.png"),
        credit: true,
        official: true,
        linkc: "creditssc/cq",
        linko: "officialssc/cq",
        bcolor: "#fed1d1"
      },
      {
        name: "天津时时彩",
        src: require("../images/caip/SSCTJ.png"),
        credit: true,
        official: true,
        linkc: "creditssc/tj",
        linko: "officialssc/tj",
        bcolor: "#fed1d1"
      },
      {
        name: "新疆时时彩",
        src: require("../images/caip/SSCXJ.png"),
        credit: true,
        official: true,
        linkc: "creditssc/xj",
        linko: "officialssc/xj",
        bcolor: "#fed1d1"
      },
      {
        name: "北京时时彩",
        src: require("../images/caip/SSCBJ.png"),
        credit: false,
        official: true,
        linkc: "creditssc/bj",
        linko: "officialssc/bj",
        bcolor: "#fed1d1"
      }
    ],
    ffc: [
      {
        name: "六合彩分分彩",
        src: require("../images/caip/FFC6HC.png"),
        credit: false,
        official: true,
        linkc: "creditssc/lhc",
        linko: "officialssc/lhc",
        bcolor: "#fcc0e5"
      },
      {
        name: "澳洲分分彩",
        src: require("../images/caip/FFCAZ3.png"),
        credit: true,
        official: true,
        linkc: "creditssc/aoz",
        linko: "officialssc/aoz",
        bcolor: "#fcc0e5"
      },
      {
        name: "东京分分彩",
        src: require("../images/caip/FFCDJ1.5.png"),
        credit: true,
        official: false,
        linkc: "creditssc/bj",
        linko: "officialssc/bj",
        bcolor: "#fcc0e5"
      },
      {
        name: "韩国分分彩",
        src: require("../images/caip/FFCHGKLC.png"),
        credit: true,
        official: true,
        linkc: "creditssc/hg",
        linko: "officialssc/hg",
        bcolor: "#fcc0e5"
      },
      {
        name: "加拿大分分彩",
        src: require("../images/caip/FFCJNDKLC.png"),
        credit: false,
        official: true,
        linkc: "creditssc/jnd",
        linko: "officialssc/jnd",
        bcolor: "#fcc0e5"
      },
      {
        name: "QQ分分彩",
        src: require("../images/caip/FFCQQ.png"),
        credit: true,
        official: true,
        linkc: "creditssc/qq",
        linko: "officialssc/qq",
        bcolor: "#fcc0e5"
      },
      {
        name: "斯诺伐分分彩",
        src: require("../images/caip/FFCSLFK5.png"),
        credit: false,
        official: true,
        linkc: "creditssc/slf",
        linko: "officialssc/slf",
        bcolor: "#fcc0e5"
      },
      {
        name: "台湾分分彩",
        src: require("../images/caip/FFCTW5.png"),
        credit: true,
        official: true,
        linkc: "creditssc/tw",
        linko: "officialssc/tw",
        bcolor: "#fcc0e5"
      },
      {
        name: "腾讯分分彩",
        src: require("../images/caip/FFCTX.png"),
        credit: true,
        official: false,
        linkc: "creditssc/tx",
        linko: "officialssc/tx",
        bcolor: "#fcc0e5"
      }
    ],
    pks: [
      {
        name: "幸运飞艇",
        src: require("../images/caip/PKSXYFT.png"),
        credit: true,
        official: false,
        linkc: "creditssc/xyft",
        linko: "officialssc/xyft",
        bcolor: "#d2c6f6"
      },
      {
        name: "北京PK拾",
        src: require("../images/caip/PKSBJ.png"),
        credit: true,
        official: true,
        linkc: "creditssc/bjpk",
        linko: "officialssc/xyft",
        bcolor: "#d2c6f6"
      }
    ],
    s5: [
      {
        name: "黑龙江11选5",
        src: require("../images/caip/11X5HLJ.png"),
        credit: true,
        official: true,
        linkc: "creditssc/hlj5",
        linko: "officialssc/hlj5",
        bcolor: "#b5c0df"
      },
      {
        name: "江苏11选5",
        src: require("../images/caip/11X5JS.png"),
        credit: false,
        official: true,
        linkc: "creditssc/js5",
        linko: "officialssc/js5",
        bcolor: "#b5c0df"
      },
      {
        name: "江西11选5",
        src: require("../images/caip/11X5JX.png"),
        credit: true,
        official: false,
        linkc: "creditssc/jx5",
        linko: "officialssc/jx5",
        bcolor: "#b5c0df"
      },
      {
        name: "山东11选5",
        src: require("../images/caip/11X5SD.png"),
        credit: true,
        official: true,
        linkc: "creditssc/sd5",
        linko: "officialssc/sd5",
        bcolor: "#b5c0df"
      },
      {
        name: "上海11选5",
        src: require("../images/caip/11X5SH.png"),
        credit: true,
        official: true,
        linkc: "creditssc/sh5",
        linko: "officialssc/sh5",
        bcolor: "#b5c0df"
      },
      {
        name: "新疆11选5",
        src: require("../images/caip/11X5XJ.png"),
        credit: false,
        official: true,
        linkc: "creditssc/xj5",
        linko: "officialssc/xj5",
        bcolor: "#b5c0df"
      }
    ],
    klc: [
      {
        name: "澳洲快乐8",
        src: require("../images/caip/KLAZ.png"),
        credit: true,
        official: true,
        linkc: "creditssc/aoz8",
        linko: "officialssc/aoz8",
        bcolor: "#b7e1f9"
      },
      {
        name: "北京快乐8",
        src: require("../images/caip/KLBJ.png"),
        credit: true,
        official: true,
        linkc: "creditssc/bj8",
        linko: "officialssc/bj8",
        bcolor: "#b7e1f9"
      },
      {
        name: "广东快10",
        src: require("../images/caip/KLGD.png"),
        credit: false,
        official: true,
        linkc: "creditssc/gd10",
        linko: "officialssc/gd10",
        bcolor: "#b7e1f9"
      },
      {
        name: "广西快10",
        src: require("../images/caip/KLGX.png"),
        credit: true,
        official: true,
        linkc: "creditssc/gx10",
        linko: "officialssc/gx10",
        bcolor: "#b7e1f9"
      },
      {
        name: "加拿大快乐8",
        src: require("../images/caip/KLJND.png"),
        credit: false,
        official: true,
        linkc: "creditssc/jnd8",
        linko: "officialssc/jnd8",
        bcolor: "#b7e1f9"
      },
      {
        name: "斯洛伐克",
        src: require("../images/caip/KLSLF.png"),
        credit: true,
        official: false,
        linkc: "creditssc/slfk",
        linko: "officialssc/slfk",
        bcolor: "#b7e1f9"
      },
      {
        name: "台湾宾果",
        src: require("../images/caip/KLTWBG.png"),
        credit: true,
        official: true,
        linkc: "creditssc/twbg",
        linko: "officialssc/twbg",
        bcolor: "#b7e1f9"
      },
      {
        name: "重庆快10",
        src: require("../images/caip/KLZQ.png"),
        credit: true,
        official: true,
        linkc: "creditssc/cq10",
        linko: "officialssc/cq10",
        bcolor: "#b7e1f9"
      }
    ],
    dpc: [
      {
        name: "福彩3D",
        src: require("../images/caip/DFC.png"),
        credit: true,
        official: true,
        linkc: "creditssc/fc3d",
        linko: "officialssc/fc3d",
        bcolor: "#bff6cf"
      },
      {
        name: "排列三、五",
        src: require("../images/caip/DPLSW.png"),
        credit: true,
        official: true,
        linkc: "creditssc/pl3",
        linko: "officialssc/pl3",
        bcolor: "#bff6cf"
      },
      {
        name: "上海时时乐",
        src: require("../images/caip/DSHSSL.png"),
        credit: true,
        official: true,
        linkc: "creditssc/shssl",
        linko: "officialssc/shssl",
        bcolor: "#bff6cf"
      }
    ],
    pcdd: [
      {
        name: "澳洲28",
        src: require("../images/caip/PDAZ28.png"),
        credit: true,
        official: true,
        linkc: "creditssc/az28",
        linko: "officialssc/az28",
        bcolor: "#cde6a1"
      },
      {
        name: "东京28",
        src: require("../images/caip/PDDJ28.png"),
        credit: true,
        official: false,
        linkc: "creditssc/dj28",
        linko: "officialssc/dj28",
        bcolor: "#cde6a1"
      },
      {
        name: "韩国28",
        src: require("../images/caip/PDHS28.png"),
        credit: true,
        official: true,
        linkc: "creditssc/hg28",
        linko: "officialssc/hg28",
        bcolor: "#cde6a1"
      },
      {
        name: "加拿大28",
        src: require("../images/caip/PDJND28.png"),
        credit: false,
        official: true,
        linkc: "creditssc/jnd28",
        linko: "officialssc/jnd28",
        bcolor: "#cde6a1"
      },
      {
        name: "斯洛伐克",
        src: require("../images/caip/PDSLFK28.png"),
        credit: true,
        official: true,
        linkc: "creditssc/slfk28",
        linko: "officialssc/slfk28",
        bcolor: "#cde6a1"
      },
      {
        name: "台湾28",
        src: require("../images/caip/PDTW28.png"),
        credit: false,
        official: true,
        linkc: "creditssc/tw28",
        linko: "officialssc/tw28",
        bcolor: "#cde6a1"
      },
      {
        name: "幸运28",
        src: require("../images/caip/PDXY28.png"),
        credit: true,
        official: true,
        linkc: "creditssc/xy28",
        linko: "officialssc/xy28",
        bcolor: "#cde6a1"
      }
    ],
    k3: [
      {
        name: "安徽快3",
        src: require("../images/caip/K3AH.png"),
        credit: true,
        official: true,
        linkc: "creditssc/k3",
        linko: "officialssc/k3",
        bcolor: "#eec391"
      },
      {
        name: "北京快3",
        src: require("../images/caip/K3BJ.png"),
        credit: true,
        official: true,
        linkc: "creditssc/k3",
        linko: "officialssc/k3",
        bcolor: "#eec391"
      },
      {
        name: "广西快3",
        src: require("../images/caip/K3GX.png"),
        credit: true,
        official: false,
        linkc: "creditssc/k3",
        linko: "officialssc/k3",
        bcolor: "#eec391"
      },
      {
        name: "河北快3",
        src: require("../images/caip/K3HEBE.png"),
        credit: true,
        official: true,
        linkc: "creditssc/k3",
        linko: "officialssc/k3",
        bcolor: "#eec391"
      },
      {
        name: "河南快3",
        src: require("../images/caip/K3HN.png"),
        credit: true,
        official: false,
        linkc: "creditssc/k3",
        linko: "officialssc/k3",
        bcolor: "#eec391"
      },
      {
        name: "湖北快3",
        src: require("../images/caip/K3HUBEI.png"),
        credit: true,
        official: true,
        linkc: "creditssc/k3",
        linko: "officialssc/k3",
        bcolor: "#eec391"
      },
      {
        name: "江苏快3",
        src: require("../images/caip/K3JS.png"),
        credit: false,
        official: true,
        linkc: "creditssc/k3",
        linko: "officialssc/k3",
        bcolor: "#eec391"
      },
      {
        name: "上海快3",
        src: require("../images/caip/K3SH.png"),
        credit: true,
        official: true,
        linkc: "creditssc/k3",
        linko: "officialssc/k3",
        bcolor: "#eec391"
      }
    ],
    vrc: [
      {
        name: "3分彩",
        src: require("../images/caip/VR3FC.png"),
        credit: true,
        official: false,
        linkc: "creditssc/3fvr",
        linko: "officialssc/3fvr",
        bcolor: "#ffa18e"
      },
      {
        name: "彩票百家乐",
        src: require("../images/caip/VRCPBJL.png"),
        credit: true,
        official: true,
        linkc: "creditssc/bjlvr",
        linko: "officialssc/bjlvr",
        bcolor: "#ffa18e"
      },
      {
        name: "金星1.5分彩",
        src: require("../images/caip/VRJX1.5FC.png"),
        credit: true,
        official: true,
        linkc: "creditssc/jxvr",
        linko: "officialssc/jxvr",
        bcolor: "#ffa18e"
      },
      {
        name: "快艇",
        src: require("../images/caip/VRKT.png"),
        credit: false,
        official: true,
        linkc: "creditssc/ktvr",
        linko: "officialssc/ktvr",
        bcolor: "#ffa18e"
      },
      {
        name: "六合彩",
        src: require("../images/caip/VRLHC.png"),
        credit: true,
        official: true,
        linkc: "creditssc/lhcvr",
        linko: "officialssc/lhcvr",
        bcolor: "#ffa18e"
      },
      {
        name: "赛车",
        src: require("../images/caip/VRSC.png"),
        credit: true,
        official: false,
        linkc: "creditssc/scvr",
        linko: "officialssc/scvr",
        bcolor: "#ffa18e"
      }
    ]
  };
  public outdata = [];
  public testdata;
  constructor(private router: Router, private hserve: HttpInterceptorService,private http:HttpClient) {}

  ngOnInit() {
    this.loadpage = userModel.platform;
    this.setdata();
    // ==========================================================================================
    // this.http.get('http://127.0.0.1:3000').subscribe(data => {
    //   this.testdata = data['msg'];
    //   console.log('打印消息:', data)
    // }, err => {
    //   console.log(err)
    //   console.log('请求失败')
    // });
    // this.hserve.con();
    // this.hserve.get('http://localhost:3000')
    this.hserve.post('http://127.0.0.1:3000/dologin','nameOrEmail=bar&password=moe',)
    .then(result => {  
      // this.testdata = result.data; 
      console.log("登录接口返回的信息是：" , result);//打印返回的数据  
    });


    // =================================================================================
    this.hserve.get('http://127.0.0.1:3000','')
    .then(result => {  
      // this.testdata = result.data; 
      console.log("登录接口返回的信息是：" , result);//打印返回的数据  
      if (result.status == 200 && result.data) {
         // 登录成功  在这里做判断，路由跳转  
        console.log('qingqiu neirong:',result.data);
        console.log('qingqiu code',result.statusText);
      } else { // 登录失败  
        alert(result.message);  
      }  
    });
    // =========================================================================
  
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
