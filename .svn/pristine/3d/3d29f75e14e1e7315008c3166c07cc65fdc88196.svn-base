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
    @Input() type: string;
    public routid;  //路由ID
    public shownav = false;
    public number = [2, 9, 0, 8, 7]; //开奖区开奖号码
    public previous = 20180517022; //上一期开奖期号
    public next = 20180517023; //上一期开奖期号
    public timedate = new Date();
    public time;
    public currentparent:string; //一级导航
    public currentitem:string; // 二级导航
    public currentactive:number; // 当前展开的子导航
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
              link: "cq"
            },
            {
              text: "天津时时彩",
              officialssc:true,
              creditssc:true,
              link: "tj"
            },
            {
              text: "新疆时时彩",
              officialssc:true,
              creditssc:true,
              link: "xj"
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
              link: "cq1"
            },
            {
              text: "天津时时彩1",
              officialssc:true,
              creditssc:true,
              link: "tj1"
            },
            {
              text: "新疆时时彩1",
              officialssc:true,
              creditssc:true,
              link: "xj1"
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
              link: "cq2"
            },
            {
              text: "天津时时彩2",
              officialssc:true,
              creditssc:true,
              link: "tj2"
            },
            {
              text: "新疆时时彩2",
              officialssc:true,
              creditssc:true,
              link: "xj2"
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
              link: "cq3"
            },
            {
              text: "天津时时彩3",
              officialssc:true,
              creditssc:true,
              link: "tj3"
            },
            {
              text: "新疆时时彩3",
              officialssc:true,
              creditssc:true,
              link: "xj3"
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
              link: "cq4"
            },
            {
              text: "天津时时彩4",
              officialssc:true,
              creditssc:true,
              link: "tj4"
            },
            {
              text: "新疆时时彩4",
              officialssc:true,
              creditssc:true,
              link: "xj4"
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
              link: "cq5"
            },
            {
              text: "天津时时彩5",
              officialssc:true,
              creditssc:true,
              link: "tj5"
            },
            {
              text: "新疆时时彩5",
              officialssc:true,
              creditssc:true,
              link: "xj5"
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
              link: "cq6"
            },
            {
              text: "天津时时彩6",
              officialssc:true,
              creditssc:true,
              link: "tj6"
            },
            {
              text: "新疆时时彩6",
              officialssc:true,
              creditssc:true,
              link: "xj6"
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
              link: "cq7"
            },
            {
              text: "天津时时彩7",
              officialssc:true,
              creditssc:true,
              link: "tj7"
            },
            {
              text: "新疆时时彩7",
              officialssc:true,
              creditssc:true,
              link: "xj7"
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
              link: "cq8"
            },
            {
              text: "天津时时彩8",
              officialssc:true,
              creditssc:true,
              link: "tj8"
            },
            {
              text: "新疆时时彩8",
              officialssc:true,
              creditssc:true,
              link: "xj8"
            },
          ]
        },
    ];
  
    constructor(private route: ActivatedRoute, private router: Router) {}
    ngOnInit() {

        //获取当前路由的id
        this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        this.route.params.subscribe(data=>this.routid=data.id)
      });
        
        this.time = setInterval(() => {
            this.timedate = new Date();
        }, 1000);
    }
    ngOnDestroy() {
        clearInterval(this.time);
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
    let str ;
    if(this.type == 'creditssc'){
        str = `/creditssc/${L}`;
    }else{
        str = `/officialssc/${L}`;
    }
    this.router.navigate([str]);
    this.shownav = false;
  }
}