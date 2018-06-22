import {
    Component,
    OnInit,
    Input,
    OnDestroy,
    OnChanges,
    SimpleChanges
} from "@angular/core";
import { Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";
import "rxjs/add/operator/filter";

@Component({
    selector: "app-credtop",
    templateUrl: "./credtop.component.html",
    styleUrls: ["./credtop.component.scss"]
})

export class CredtopComponent implements OnInit, OnDestroy, OnChanges {
    @Input() type: string; //当前的彩种
    // @Input() number: number[];  //开奖区开奖号码
    @Input() indata:{
        style:string,
        prev:string,  //上一期开奖期号
        prevball:number[], // 开奖区上一期开奖号码
        next:string, //x下期开奖期号
        time:any 
    };
    ngOnChanges(changes: SimpleChanges) {
        // this.setimg();
    }
    public timedate = new Date();
    public time;
    public routid;  //路由ID
    public shownav = false;
    public textnumber = 1;
    public currentparent:string; //一级导航
    public currentitem:string; // 二级导航
    public currentactive:number; // 当前展开的子导航
    public isrc;
    public imgsrc = {
        'ssc': require("../../images/cqssc_13.png"),
        'vrc': require("../../images/vrc.png"),
        'tx_ffc': require("../../images/tx_ffc.png"),
        'bj_ffc': require("../../images/ffc/AZ3FC.png"),
        'tw_ffc': require("../../images/ffc/BJSSC.png"),
        'qq_ffc': require("../../images/ffc/DJ1.5FC.png"),
        'slfk_ffc': require("../../images/ffc/HGKLC.png"),
        'dj_ffc': require("../../images/ffc/JNDKLC.png"),
        'js_ffc': require("../../images/ffc/QQFFC.png"),
        'hs_ffc': require("../../images/ffc/SLFK5F.png"),
        'az_ffc': require("../../images/ffc/TW5FC.png"),
        'jnd_ffc': require("../../images/ffc/TXFFC.png")
    }
    public data =[
        {
          title: "时时彩", 
          bg:{
            x:-122,
            y:-10,
          },
          isover: false,
          isactive: false,
          items: [
            {
              text: "重庆时时彩",
              officialssc:true,
              creditssc:true,
              linko: "/lottery/officialssc/cq",
              linkc: "/lottery/creditssc/cq"
            },
            {
              text: "天津时时彩",
              officialssc:true,
              creditssc:true,
              linko: "/lottery/officialssc/cq",
              linkc: "/lottery/creditssc/cq"
            },
            {
              text: "新疆时时彩",
              officialssc:true,
              creditssc:true,
              linko: "/lottery/officialssc/cq",
              linkc: "/lottery/creditssc/cq"
            },
          ]
        },
        {
          title: "分分彩", 
          bg:{
            x:-122,
            y:-54,
          },
          isover: false,
          isactive: false,
          items: [
            {
              text: "韩式1.5分彩",
              officialssc:true,
              creditssc:true,
              linko: "/lottery/officialffc/hs",
              linkc: "/lottery/creditffc/hs"
            },
            {
              text: "北京时时彩",
              officialssc:true,
              creditssc:true,
              linko: "/lottery/officialffc/bj",
              linkc: "/lottery/creditffc/bj"
            },
            {
              text: "台湾5分彩",
              officialssc:true,
              creditssc:true,
              linko: "/lottery/officialffc/tw",
              linkc: "/lottery/creditffc/tw"
            },
            {
              text: "加拿大3.5分彩",
              officialssc:true,
              creditssc:true,
              linko: "/lottery/officialffc/jnd",
              linkc: "/lottery/creditffc/jnd"
            },
            {
              text: "澳洲3分彩",
              officialssc:true,
              creditssc:true,
              linko: "/lottery/officialffc/az",
              linkc: "/lottery/creditffc/az"
            },
            {
              text: "斯洛伐克5分彩",
              officialssc:true,
              creditssc:true,
              linko: "/lottery/officialffc/slfk",
              linkc: "/lottery/creditffc/slfk"
            },
            {
              text: "腾讯分分彩",
              officialssc:true,
              creditssc:true,
              linko: "/lottery/officialffc/tx",
              linkc: "/lottery/creditffc/tx"
            },
            {
              text: "QQ分分彩",
              officialssc:true,
              creditssc:true,
              linko: "/lottery/officialffc/qq",
              linkc: "/lottery/creditffc/qq"
            },
            {
              text: "东京1.5分彩",
              officialssc:true,
              creditssc:true,
              linko: "/lottery/officialffc/dj",
              linkc: "/lottery/creditffc/dj"
            },
            {
              text: "极速分分彩",
              officialssc:true,
              creditssc:true,
              linko: "/lottery/officialffc/js",
              linkc: "/lottery/creditffc/js"
            },
          ]
        },
        {
          title: "PK10", 
          bg:{
            x:-10,
            y:-98,
          },
          isover: false,
          isactive: false,
          items: [
            {
              text: "北京PK10",
              officialssc:true,
              creditssc:true,
              linko: "/lottery/officialpk10/bjpk",
              linkc: "/lottery/creditpk10/bjpk"
            },
            {
              text: "幸运飞艇",
              officialssc:true,
              creditssc:true,
              linko: "/lottery/officialpk10/xyft",
              linkc: "/lottery/creditpk10/xyft"
            },
          ]
        },
        {
          title: "11选5", 
          bg:{
            x:-66,
            y:-98,
          },
          isover: false,
          isactive: false,
          items: [
            {
              text: "重庆时时彩3",
              officialssc:true,
              creditssc:true,
              linko: "",
              linkc: "/lottery/credit"
            },
            {
              text: "天津时时彩3",
              officialssc:true,
              creditssc:true,
              linko: "",
              linkc: "/lottery/credit"
            },
            {
              text: "新疆时时彩3",
              officialssc:true,
              creditssc:true,
              linko: "",
              linkc: "/lottery/credit"
            },
          ]
        },
        {
          title: "快乐彩", 
          bg:{
            x:-122,
            y:-98,
          },
          isover: false,
          isactive: false,
          items: [
            {
              text: "重庆时时彩4",
              officialssc:true,
              creditssc:true,
              linko: "",
              linkc: "/lottery/credit"
            },
            {
              text: "天津时时彩4",
              officialssc:true,
              creditssc:true,
              linko: "",
              linkc: "/lottery/credit"
            },
            {
              text: "新疆时时彩4",
              officialssc:true,
              creditssc:true,
              linko: "",
              linkc: "/lottery/credit"
            },
          ]
        },
        {
          title: "低频彩", 
          bg:{
            x:-10,
            y:-10,
          },
          isover: false,
          isactive: false,
          items: [
            {
              text: "重庆时时彩5",
              officialssc:true,
              creditssc:true,
              linko: "",
              linkc: "/lottery/credit"
            },
            {
              text: "天津时时彩5",
              officialssc:true,
              creditssc:true,
              linko: "",
              linkc: "/lottery/credit"
            },
            {
              text: "新疆时时彩5",
              officialssc:true,
              creditssc:true,
              linko: "",
              linkc: "/lottery/credit"
            },
          ]
        },
        {
          title: "PC蛋蛋", 
          bg:{
            x:-66,
            y:-10,
          },
          isover: false,
          isactive: false,
          items: [
            {
              text: "重庆时时彩6",
              officialssc:true,
              creditssc:true,
              linko: "",
              linkc: "/lottery/credit"
            },
            {
              text: "天津时时彩6",
              officialssc:true,
              creditssc:true,
              linko: "",
              linkc: "/lottery/credit"
            },
            {
              text: "新疆时时彩6",
              officialssc:true,
              creditssc:true,
              linko: "",
              linkc: "/lottery/credit"
            },
          ]
        },
        {
          title: "快三", 
          bg:{
            x:-10,
            y:-54,
          },
          isover: false,
          isactive: false,
          items: [
            {
              text: "重庆时时彩7",
              officialssc:true,
              creditssc:true,
              linko: "",
              linkc: "/lottery/credit"
            },
            {
              text: "天津时时彩7",
              officialssc:true,
              creditssc:true,
              linko: "",
              linkc: "/lottery/credit"
            },
            {
              text: "新疆时时彩7",
              officialssc:true,
              creditssc:true,
              linko: "",
              linkc: "/lottery/credit"
            },
          ]
        },
        {
          title: "VR彩", 
          bg:{
            x:-66,
            y:-54,
          },
          isover: false,
          isactive: false,
          items: [
            {
              text: "重庆时时彩8",
              officialssc:true,
              creditssc:true,
              linko: "/lottery/vrc",
              linkc: "/lottery/credit"
            },
            {
              text: "天津时时彩8",
              officialssc:true,
              creditssc:true,
              linko: "/lottery/vrc",
              linkc: "/lottery/credit"
            },
            {
              text: "新疆时时彩8",
              officialssc:true,
              creditssc:true,
              linko: "/lottery/vrc",
              linkc: "/lottery/vrc"
            },
          ]
        },
    ];
    constructor(private route: ActivatedRoute, private router: Router) {}
    ngOnInit() {
        // 设置应该显示的logo图片
        this.setimg();

        this.time = setInterval(() => {
            this.timedate = new Date();
        }, 1000);
    }
    ngAfterViewInit(){
        // 获取当前路由的id
        this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event:NavigationEnd) => {
        this.setimg();
    });
    }
    ngOnDestroy() {
        clearInterval(this.time);
    }
     // 设置的logo图片
    setimg(){
        let idarray = this.router.url.split("/");
       let str = idarray[idarray.length-1]+ "_" + this.type;
        if (this.imgsrc[str]) {
            this.isrc = this.imgsrc[str];
        }else{
            this.isrc = this.imgsrc["ssc"];
        }
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
    let str = this.indata.style==='credit'?O.linkc:O.linko;
    this.router.navigate([str]);
    // this.shownav = false;
  }
}