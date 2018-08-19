import {
  Component,
  OnInit,
  AfterViewInit,
  AfterContentChecked
} from "@angular/core";
import { SharkModule } from "@ntesmail/shark-angular2";
import { Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import { GOUC, userdef } from "../../../factory/usercent";
import userModel from '../../../status/user.model';

@Component({
  selector: "app-usercenter",
  templateUrl: "./usercenter.component.html",
  styleUrls: ["./usercenter.component.scss"]
})
export class UsercenterComponent
  implements OnInit, AfterViewInit, AfterContentChecked {
    loadpage=false;
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  // TODO: 如果使用不同的背景图标；必须先在父组件中线require 这张图片
  public bgurlinit = require("../images/sidebg1.png");
  public bgurl = 'url("../../images/sidebg1.png")';
  public currentparent:string; //一级导航
  public currentitem:string; // 二级导航
  public currentactive:number; // 当前展开的子导航
  public usersidedata = [
    {
      title: this.now_lang.User_center.Bet_history, 
      icon_x: -10,
      bg:{
        url:'url("../../images/sidebg1.png")',
        x:-332,
        y:-10,
        defx:-332,
        defy:-10,
        hovx:-102,
        hovy:-10,
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.User_center.Lot_search,
          link: "/usercenter/goucaiquery"
        },
        {
          text: this.now_lang.User_center.Chase_search,
          link: "/usercenter/Zhuihaoquery"
        }
      ]
    },
    {
      title: this.now_lang.User_center.Report_manage,
      icon_x: -56,
      bg:{
        url:'url("../../images/sidebg1.png")',
        x:-378,
        y:-10,
        defx:-378,
        defy:-10,
        hovx:-148,
        hovy:-10,
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.User_center.Inmoney_history,
          link: "/usercenter/moneyrecord"
        },
        {
          text: this.now_lang.User_center.Account,
          link: "/usercenter/acchange"
        },
        {
          text: this.now_lang.User_center.User_report,
          link: "/usercenter/myreport"
        },
        {
          text: this.now_lang.User_center.Company_report,
          link: "/usercenter/groupreport"
        },
        {
          text: this.now_lang.User_center.Discount_detail,
          link: "/usercenter/discount"
        }
      ]
    },
    {
      title: this.now_lang.User_center.Account_manage,
      icon_x: -102,
      bg:{
        url:'url("../../images/sidebg1.png")',
        x:-424,
        y:-6,
        defx:-424,
        defy:-6,
        hovx:-194,
        hovy:-6,
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.User_center.User_pandect,
          link: "/usercenter/myoverview"
        },
        {
          text: this.now_lang.User_center.Safe_center,
          link: "/usercenter/security"
        },
        {
          text: this.now_lang.User_center.Bankcard_manage,
          link: "/usercenter/bankmanage"
        },
        {
          text: this.now_lang.User_center.User_inmoney,
          link: "/usercenter/recharge"
        },
        {
          text: this.now_lang.User_center.User_outmoney,
          link: "/usercenter/withdrawdeposit"
        },
        {
          text: this.now_lang.User_center.User_info,
          link: "/usercenter/userdata"
        },
        {
          text: this.now_lang.User_center.Lot_info,
          link: "/usercenter/proinfo"
        },
        {
          text: this.now_lang.User_center.Lot_limit,
          link: "/usercenter/quota"
        }
      ]
    },
    {
      title: this.now_lang.User_center.Agent_manage,
      icon_x: -148,
      bg:{
        url:'url("../../images/sidebg1.png")',
        x:-10,
        y:-10,
        defx:-10,
        defy:-10,
        hovx:-240,
        hovy:-10,
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.User_center.company_pandect,
          link: "/usercenter/groupview"
        },
        {
          text: this.now_lang.User_center.User_list,
          link: "/usercenter/userlist"
        },
        {
          text: this.now_lang.User_center.Regist_manage,
          link: "/usercenter/regismanage"
        },
        {
          text: this.now_lang.User_center.Regist_promotion,
          link: "/usercenter/regisgenera"
        },
        {
          text: this.now_lang.User_center.Lot_count,
          link: "/usercenter/prostatistics"
        },
      ]
    },
    {
      title: this.now_lang.User_center.Messege_board,
      icon_x: -194,
      bg:{
        url:'url("../../images/sidebg1.png")',
        x:-56,
        y:-10,
        defx:-56,
        defy:-10,
        hovx:-286,
        hovy:-10,
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.User_center.Webin_messege,
          link: "/usercenter/pronote"
        },
        {
          text: this.now_lang.User_center.Webin_board,
          link: "/usercenter/webnote"
        }
    ]
}
];
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.now_lang_type=userModel.now_lang_type;
    this.loadpage = userModel.platform;
  }
  ngAfterContentChecked() {}
  ngAfterViewInit() {}

  

  // 导航栏一级菜单点击事件
  itemboxclick(i) {
    this.itemiconinit(i);
    if (this.currentactive == i) {
      this.currentactive = -1;
    } else {
      this.currentactive = i;
    }
  }
  getrouteurl() {
    let t = this.router.url;
    let d = this.usersidedata;
    for (let i = 0; i < d.length; i++) {
      for (let q = 0; q < d[i].items.length; q++) {
        if (t == d[i].items[q].link) {
          this.currentparent = d[i].title;
          this.currentitem = d[i].items[q].text;
          this.currentactive = i;
        }
      }
    }
    this.itemiconinit(this.currentactive);
  }
  // 初始当前有效导航目录样式
  itemiconinit(i) {
    //    清除其他导航点击样式
    for (let q = 0; q < this.usersidedata.length; q++) {
      let d = this.usersidedata[q];
      d.isover = false;
      d.bg.x = d.bg.defx;
      d.bg.y = d.bg.defy;
    }
    this.itemboxenter(i);
  }
  // 鼠标经过目录事件
  itemboxenter(i) {
    let d = this.usersidedata[i];
    d.isover = true;
    d.bg.x = d.bg.hovx;
    d.bg.y = d.bg.hovy;
  }
  // 鼠标离开目录事件
  itemboxleave(i) {
    let d = this.usersidedata[i];
    if (this.currentactive == i) {
      d.bg.x = d.bg.hovx;
      d.bg.y = d.bg.hovy;
      return;
    }
    d.isover = false;
    d.bg.x = d.bg.defx;
    d.bg.y = d.bg.defy;
  }
  // 导航栏二级菜单点击事件
  itemclick(L) {
    // 跳转路由
    this.router.navigate([L]);
  }
}
