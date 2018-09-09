import {
  Component,
  OnInit,
} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import "rxjs/add/operator/filter";
import userModel from "../../../status/user.model";

@Component({
  selector: "app-usercenter",
  templateUrl: "./usercenter.component.html",
  styleUrls: ["./usercenter.component.scss"]
})
export class UsercenterComponent
  implements OnInit {
  loadpage = false;
  public now_lang: any = userModel.langpackage;
  public now_lang_type: any = "zh";

  public currpath = "usercenter"; //传给头部导航路径位置
  public currentparent: string; //一级导航
  public currentitem: string; // 二级导航
  public currentactive: number; // 当前展开的子导航
  public usersidedata = [
    {
      title: this.now_lang.User_center.Bet_history,
      bgy: -314,
      width: "15px",
      height: "17px",
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
      bgy: -172,
      width: "15px",
      height: "15px",
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
      bgy: -70,
      width: "14px",
      height: "14px",
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
      bgy: -37,
      width: "13px",
      height: "13px",
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
        }
      ]
    },
    {
      title: this.now_lang.User_center.Messege_board,
      bgy: -242,
      width: "14px",
      height: "16px",
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
  constructor( private router: Router) {}

  ngOnInit() {
    this.now_lang_type = userModel.now_lang_type;
    this.loadpage = userModel.platform;
    this.getrouteurl();
    // 路由地址改变后的事件
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        this.getrouteurl();
      });
  }

  changpath() {
    this.currpath = 'usercenter';
    if(this.currentitem === this.now_lang.User_center.Discount_detail){
        this.currpath = 'Activity';
    }
    if(this.currentitem === this.now_lang.User_center.Webin_board){
        this.currpath = 'Announncement';
    }
    if(this.currentitem === this.now_lang.User_center.Lot_info){
        this.currpath = 'cpinfo';
    }
  }

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
    }
    this.itemboxenter(i);
    this.changpath();
  }
  // 鼠标经过目录事件
  itemboxenter(i) {
    let d = this.usersidedata[i];
    d.isover = true;
  }
  // 鼠标离开目录事件
  itemboxleave(i) {
    let d = this.usersidedata[i];
    if (this.currentactive == i) {
      return;
    }
    d.isover = false;
  }
  // 导航栏二级菜单点击事件
  itemclick(L) {
    // 跳转路由
    this.router.navigate([L]);
  }
}
