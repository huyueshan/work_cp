import {
    Component,
    OnInit,
    Input,
    OnDestroy
} from "@angular/core";
import { Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";
import "rxjs/add/operator/filter";

import {
    Base
} from "./../../../../factory/base.model";
@Component({
    selector: "app-credtop",
    templateUrl: "./credtop.component.html",
    styleUrls: ["./credtop.component.scss"]
})
export class CredtopComponent implements OnInit, OnDestroy {
    @Input() type: string; //当前的彩种
    // @Input() number: number[];  //开奖区开奖号码
    @Input() indata:{
        prev:string,  //上一期开奖期号
        prevball:number[], // 开奖区上一期开奖号码
        next:string, //x下期开奖期号
        time:any 
    };
    public timedate = new Date();
    public time;

    public routid;  //路由ID
    public shownav = false;
    // public number = [2, 9, 0, 8, 7]; //开奖区开奖号码
    // public previous = 20180517022; //上一期开奖期号
    // public next = 20180517023; //上一期开奖期号
    public currentparent:string; //一级导航
    public currentitem:string; // 二级导航
    public currentactive:number; // 当前展开的子导航
    public isrc;
    public imgsrc = {
        'ssc': require("../../images/cqssc_13.png"),
        'vrc': require("../../images/vrc.png"),
        'ffc': require("../../images/cqssc_13.png")
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
              link: "/officialssc/cq"
            },
            {
              text: "天津时时彩",
              officialssc:true,
              creditssc:true,
              link: "/officialssc/cq"
            },
            {
              text: "新疆时时彩",
              officialssc:true,
              creditssc:true,
              link: "/officialssc/cq"
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
              text: "重庆时时彩1",
              officialssc:true,
              creditssc:true,
              link: "/creditffc/cq"
            },
            {
              text: "腾讯分分彩",
              officialssc:true,
              creditssc:true,
              link: "/officialffc/tx"
            },
            {
              text: "天津时时彩1",
              officialssc:true,
              creditssc:true,
              link: "/creditffc/cq"
            },
            {
              text: "新疆时时彩1",
              officialssc:true,
              creditssc:true,
              link: "/creditffc/cq"
            },
          ]
        },
        {
          title: "北京赛车", 
          bg:{
            x:-10,
            y:-98,
          },
          isover: false,
          isactive: false,
          items: [
            {
              text: "重庆时时彩2",
              officialssc:true,
              creditssc:true,
              link: ""
            },
            {
              text: "天津时时彩2",
              officialssc:true,
              creditssc:true,
              link: ""
            },
            {
              text: "新疆时时彩2",
              officialssc:true,
              creditssc:true,
              link: ""
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
              link: ""
            },
            {
              text: "天津时时彩3",
              officialssc:true,
              creditssc:true,
              link: ""
            },
            {
              text: "新疆时时彩3",
              officialssc:true,
              creditssc:true,
              link: ""
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
              link: ""
            },
            {
              text: "天津时时彩4",
              officialssc:true,
              creditssc:true,
              link: ""
            },
            {
              text: "新疆时时彩4",
              officialssc:true,
              creditssc:true,
              link: ""
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
              link: ""
            },
            {
              text: "天津时时彩5",
              officialssc:true,
              creditssc:true,
              link: ""
            },
            {
              text: "新疆时时彩5",
              officialssc:true,
              creditssc:true,
              link: ""
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
              link: ""
            },
            {
              text: "天津时时彩6",
              officialssc:true,
              creditssc:true,
              link: ""
            },
            {
              text: "新疆时时彩6",
              officialssc:true,
              creditssc:true,
              link: ""
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
              link: ""
            },
            {
              text: "天津时时彩7",
              officialssc:true,
              creditssc:true,
              link: ""
            },
            {
              text: "新疆时时彩7",
              officialssc:true,
              creditssc:true,
              link: ""
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
              link: "/vrc"
            },
            {
              text: "天津时时彩8",
              officialssc:true,
              creditssc:true,
              link: "/vrc"
            },
            {
              text: "新疆时时彩8",
              officialssc:true,
              creditssc:true,
              link: "/vrc"
            },
          ]
        },
    ];
  
    constructor(private route: ActivatedRoute, private router: Router) {}
    ngOnInit() {
        // 设置应该显示的logo图片
        this.setimg();
        //获取当前路由的id
        
        this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        this.route.params.subscribe(
          data =>{
            this.routid=data.id
            console.log(this.routid)
          }
          
        )
      });
        console.log(this.routid)
        this.time = setInterval(() => {
            this.timedate = new Date();
        }, 1000);

    }
    ngOnDestroy() {
        clearInterval(this.time);
    }
     // 设置的logo图片
    setimg(){
            this.isrc = this.imgsrc[this.type];
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
  itemclick(L) {
    // 跳转路由
//     let str ;
//     if(this.type == 'creditssc'){
//         str = `/creditssc/${L}`;
//     }else{
//         str = `/officialssc/${L}`;
//     }
    this.router.navigate([L]);
//     this.shownav = false;
  }
}