import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  SimpleChanges
} from "@angular/core";
import { Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";
import "rxjs/add/operator/filter";
import userModel from '../../../../status/user.model';
import { Base } from "../../../../factory/base.model";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
@Component({
  selector: "app-credtop",
  templateUrl: "./credtop.component.html",
  styleUrls: ["./credtop.component.scss"]
})
export class CredtopComponent implements OnInit, OnDestroy {
  @Input() type: string; //当前的彩种
  // @Input() number: number[];  //开奖区开奖号码
  @Input()
  indata: {
    style: string;
    prev: string; //上一期开奖期号
    prevball: number[]; // 开奖区上一期开奖号码
    next: string; //x下期开奖期号
    time: any;
  };
  public timedate = new Date();
  public time;
  // public routid;  //路由ID
  public shownav = false;
  public textnumber = 1;
  public currentparent: string; //一级导航
  public currentitem: string; // 二级导航
  public currentactive: number; // 当前展开的子导航
  public isrc;
  // 语言
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  
  public data = [
    {
      title: this.now_lang.lot_type.ssc,
      bg: {
        x: -122,
        y: -10
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.lot_type.cq_ssc,
          imgsrc: require("../../images/cqssc_13.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialssc/cq",
          linkc: "/lottery/creditssc/cq",
        },
        {
          text: this.now_lang.lot_type.tj_ssc,
          imgsrc: require("../../images/cqssc_13.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialssc/tj",
          linkc: "/lottery/creditssc/tj",
        },
        {
          text: this.now_lang.lot_type.xq_ssc,
          imgsrc: require("../../images/cqssc_13.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialssc/xq",
          linkc: "/lottery/creditssc/xq",
        },
        {
          text: this.now_lang.lot_type.bj_ssc,
          imgsrc: require("../../images/cqssc_13.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialssc/bj",
          linkc: "/lottery/creditssc/bj",
        }
      ]
    },
    {
      title: this.now_lang.lot_type.ffc,
      bg: {
        x: -122,
        y: -54
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.lot_type.hs_ffc,
          imgsrc: require("../../images/ffc/SLFK5F.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialffc/hs",
          linkc: "/lottery/creditffc/hs"
        },
        {
          text: this.now_lang.lot_type.bj_ffc,
          imgsrc: require("../../images/ffc/AZ3FC.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialffc/bj",
          linkc: "/lottery/creditffc/bj"

        },
        {
          text: this.now_lang.lot_type.tw_ffc,
          imgsrc: require("../../images/ffc/BJSSC.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialffc/tw",
          linkc: "/lottery/creditffc/tw",
        },
        {
          text: this.now_lang.lot_type.jnd_ffc,
          imgsrc: require("../../images/ffc/TXFFC.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialffc/jnd",
          linkc: "/lottery/creditffc/jnd"
        },
        {
          text: this.now_lang.lot_type.az_ffc,
          imgsrc: require("../../images/ffc/TW5FC.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialffc/az",
          linkc: "/lottery/creditffc/az"
        },
        {
          text: this.now_lang.lot_type.jnd_ffc,
          imgsrc: require("../../images/ffc/HGKLC.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialffc/slfk",
          linkc: "/lottery/creditffc/slfk",
        },
        {
          text: this.now_lang.lot_type.tx_ffc,
          imgsrc: require("../../images/tx_ffc.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialffc/tx",
          linkc: "/lottery/creditffc/tx",
        },
        {
          text: this.now_lang.lot_type.qq_ffc,
          imgsrc: require("../../images/ffc/DJ1.5FC.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialffc/qq",
          linkc: "/lottery/creditffc/qq",
        },
        {
          text: this.now_lang.lot_type.dj_ffc,
          imgsrc: require("../../images/ffc/JNDKLC.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialffc/dj",
          linkc: "/lottery/creditffc/dj",
        },
        {
          text: this.now_lang.lot_type.js_ffc,
          imgsrc: require("../../images/ffc/QQFFC.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialffc/js",
          linkc: "/lottery/creditffc/js",
        }
      ]
    },
    {
      title: this.now_lang.lot_type.pk_10,
      bg: {
        x: -10,
        y: -98
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.lot_type.bj_pk10,
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialpk10/bjpk",
          linkc: "/lottery/creditpk10/bjpk",
        },
        {
          text: this.now_lang.lot_type.xyft_pk10,
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialpk10/xyft",
          linkc: "/lottery/creditpk10/xyft",
        }
      ]
    },
    {
      title: this.now_lang.lot_type.Exf,
      bg: {
        x: -66,
        y: -98
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.lot_type.sd_exf,
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialexf/sdexf",
          linkc: "/lottery/creditexf/sdexf",
        },
        {
          text:  this.now_lang.lot_type.jx_exf,
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialexf/jxexf",
          linkc: "/lottery/creditexf/jxexf",
        },
        {
          text: this.now_lang.lot_type.hlj_exf,
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialexf/hljexf",
          linkc: "/lottery/creditexf/hljexf",
        },
        {
          text: this.now_lang.lot_type.js_exf,
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialexf/jsexf",
          linkc: "/lottery/creditexf/jsexf",
        },
        {
          text: this.now_lang.lot_type.shh_exf,
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialexf/shexf",
          linkc: "/lottery/creditexf/shexf",
        },
        {
          text: this.now_lang.lot_type.xj_exf,
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialexf/xjexf",
          linkc: "/lottery/creditexf/xjexf",
        },
      ]
    },
    {
      title: this.now_lang.lot_type.Klc,
      bg: {
        x: -122,
        y: -98
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.lot_type.bjkl8_klc,
          imgsrc: "",
          credit: false,
        official: true,
          linko: "/lottery/officialklc/bjkl8",
          linkc: "/lottery/creditklc/bjkl8",
        },
        {
          text: this.now_lang.lot_type.jndkl8_klc,
          imgsrc: "",
          credit: false,
        official: true,
          linko: "/lottery/officialklc/jndkl8",
          linkc: "/lottery/creditklc/jndkl8",
        },
        {
        text: this.now_lang.lot_type.azkl8_klc,
        imgsrc: "",
        credit: false,
        official: true,
        linko: "/lottery/officialklc/azkl8",
        linkc: "/lottery/creditklc/azkl8",
        },
        {
          text: this.now_lang.lot_type.slfk_klc,
          imgsrc: "",
          credit: false,
        official: true,
          linko: "/lottery/officialklc/slfk",
          linkc: "/lottery/creditklc/slfk",
        },
        {
          text: this.now_lang.lot_type.twbg_klc,
          imgsrc: "",
          credit: false,
        official: true,
          linko: "/lottery/officialklc/twbg",
          linkc: "/lottery/creditklc/twbg",
        },
        {
          text: "广东快十",
          imgsrc: "",
          credit: true,
        official: false,
          linko: "",
          linkc: "/lottery/creditklc/gdk10",
        },
        {
          text: "广西快十",
          imgsrc: "",
          credit: true,
        official: false,
          linko: "",
          linkc: "/lottery/creditklc/gxk10",
        },
        {
          text: "重庆快十",
          imgsrc: "",
          credit: true,
        official: false,
          linko: "",
          linkc: "/lottery/creditklc/cqk10",
        },
      ]
    },
    {
      title: this.now_lang.lot_type.Dpc,
      bg: {
        x: -10,
        y: -10
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.lot_type.fc3d_dpc,
          imgsrc: "",
          credit: false,
        official: true,
          linko: "/lottery/officialdpc/fc3d",
          linkc: "/lottery/creditdpc/fc3d",
        },
        {
          text: this.now_lang.lot_type.pl35_dpc,
          imgsrc: "",
          credit: false,
        official: true,
          linko: "/lottery/officialdpc/pl35",
          linkc: "/lottery/creditdpc/pl35",
        },
        {
          text:  this.now_lang.lot_type.shssl_dpc,
          imgsrc: "",
          credit: false,
        official: true,
          linko: "/lottery/officialdpc/shssl",
          linkc: "/lottery/creditdpc/shssl",
        },
        {
          text: "香港⑥合彩",
          imgsrc: "",
          credit: true,
        official: false,
          linko: "",
          linkc: "/lottery/creditdpc/liuhec",
        },
      ]
    },
    {
      title: this.now_lang.lot_type.pc_dd,
      bg: {
        x: -66,
        y: -10
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.lot_type.xy_28,
          imgsrc: "",
          credit: true,
        official: false,
          linko: "",
          linkc: "/lottery/creditpcdd/xy28",
        },
        {
          text: this.now_lang.lot_type.slfk_28,
          imgsrc: "",
          credit: true,
        official: false,
          linko: "",
          linkc: "/lottery/creditpcdd/snfk28",
        },
        {
          text: this.now_lang.lot_type.az_28,
          imgsrc: "",
          credit: true,
        official: false,
          linko: "/",
          linkc: "/lottery/creditpcdd/az28",
        },
        {
          text: this.now_lang.lot_type.jnd_28,
          imgsrc: "",
          credit: true,
        official: false,
          linko: "/",
          linkc: "/lottery/creditpcdd/jnd28",
        },
        {
          text: this.now_lang.lot_type.hs_28,
          imgsrc: "",
          credit: true,
        official: false,
          linko: "/",
          linkc: "/lottery/creditpcdd/hs28",
        },
        {
          text: this.now_lang.lot_type.tw_28,
          imgsrc: "",
          credit: true,
        official: false,
          linko: "",
          linkc: "/lottery/creditpcdd/tw28",
        },
        {
          text: this.now_lang.lot_type.dj_28,
          imgsrc: "",
          credit: true,
        official: false,
          linko: "",
          linkc: "/lottery/creditpcdd/dj28",
        },
      ]
    },
    {
      title: this.now_lang.lot_type.K3,
      bg: {
        x: -10,
        y: -54
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.lot_type.jsk3_ffc,
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialk3/jsk3",
          linkc: "/lottery/creditk3/jsk3",
        },
        {
          text: this.now_lang.lot_type.ahk3_ffc,
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialk3/ahk3",
          linkc: "/lottery/creditk3/ahk3",
        },
        {
          text: this.now_lang.lot_type.hbk3_ffc,
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialk3/hbk3",
          linkc: "/lottery/creditk3/hbk3",
        },
        {
          text: this.now_lang.lot_type.hnk3_ffc,
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialk3/hnk3",
          linkc: "/lottery/creditk3/hnk3",
        },
        {
          text: this.now_lang.lot_type.hubk3_ffc,
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialk3/hubk3",
          linkc: "/lottery/creditk3/hubk3",
        },
        {
          text: this.now_lang.lot_type.shks_ffc,
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialk3/shks",
          linkc: "/lottery/creditk3/shks",
        },
        {
          text: this.now_lang.lot_type.bjk3_ffc,
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialk3/bjk3",
          linkc: "/lottery/creditk3/bjk3",
        },
        {
          text: this.now_lang.lot_type.gxk3_ffc,
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialk3/gxk3",
          linkc: "/lottery/creditk3/gxk3",
        },
        
      ]
    },
    {
      title: this.now_lang.lot_type.Vrc,
      bg: {
        x: -66,
        y: -54
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.lot_type.cpbjl_vr,
          imgsrc: require("../../images/vrc.png"),
          credit: true,
        official: true,
          linko: "/lottery/vrc/bjl",
          linkc: "/lottery/vrc/bjl",
        },
        {
          text:  this.now_lang.lot_type.tfencai_vr,
          imgsrc: require("../../images/vrc.png"),
          credit: true,
        official: true,
          linko: "/lottery/vrc/3fc",
          linkc: "/lottery/vrc/3fc",
        },
        {
          text: this.now_lang.lot_type.jx15_vr,
          imgsrc: require("../../images/vrc.png"),
          credit: true,
        official: true,
          linko: "/lottery/vrc/jx",
          linkc: "/lottery/vrc/jx",
        },
        {
          text: this.now_lang.lot_type.kt_vr,
          imgsrc: require("../../images/vrc.png"),
          credit: true,
        official: true,
          linko: "/lottery/vrc/kt",
          linkc: "/lottery/vrc/kt",
        },
        {
          text: this.now_lang.lot_type.lhc_vr,
          imgsrc: require("../../images/vrc.png"),
          credit: true,
        official: true,
          linko: "/lottery/vrc/lhc",
          linkc: "/lottery/vrc/lhc",
        },
        {
          text:  this.now_lang.lot_type.sc_vr,
          imgsrc: require("../../images/vrc.png"),
          credit: true,
        official: true,
          linko: "/lottery/vrc/sc",
          linkc: "/lottery/vrc/sc",
        },
      ]
    }
  ];
  
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.now_lang_type=userModel.now_lang_type;
    // 设置应该显示的logo图片
    this.route.params.subscribe(data => {
      this.routreg(data.id);
    });
    this.time = setInterval(() => {
      this.timedate = new Date();
    }, 1000);
  }
  ngAfterViewInit() {}
  ngOnDestroy() {
    clearInterval(this.time);
  }
  //判断路由地址是否有效
  routreg(id) {
    let rout = this.router.url;
    let d = this.data;
    for (let i = 0; i < d.length; i++) {
      let b = d[i].items;
      for (let q = 0; q < b.length; q++) {
        if (rout === b[q].linko) {
            this.currentitem = b[q].text;
            this.currentactive = i;
          // 设置彩种logo
          if (b[q].imgsrc) {
            this.isrc = b[q].imgsrc;
          } else {
            this.isrc = require("../../images/cqssc_13.png");
          }
          //此处请求官方玩法数据
          return;
        }
        if (rout === b[q].linkc) {
            this.currentitem = b[q].text;
            this.currentactive = i;
          // 设置彩种logo
          if (b[q].imgsrc) {
            this.isrc = b[q].imgsrc;
          } else {
            this.isrc = require("../../images/cqssc_13.png");
          }
          //此处请求信用玩法数据
          return;
        }
      }
    }
    this.router.navigate(["/index"]); // 最终跳转到404页面
  }

  // 导航栏目录点击事件
  itemboxclick(i) {
    if (this.currentactive == i) {
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
    // this.shownav = false;
  }
  result(){
      let str = this.indata.style === "official"?`${this.currentitem}[官]`:`${this.currentitem}[信]`
      Base.Store.set('HistoryAddress',str,false);
      this.router.navigate(["/result"]);
  }
}
