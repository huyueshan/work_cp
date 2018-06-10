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

  // TODO: 如果使用不同的背景图标；必须先在父组件中线require 这张图片
  public bgurlinit = require("../images/sidebg1.png");
  public bgurl = 'url("../../images/sidebg1.png")';
  public usersidedata = [
    {
      title: "投注记录", 
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
          text: "购彩查询",
          link: "/usercenter/goucaiquery"
        },
        {
          text: "追号查询",
          link: "/usercenter/Zhuihaoquery"
        }
      ]
    },
    {
      title: "报表管理",
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
          text: "充值记录",
          link: "/usercenter/moneyrecord"
        },
        {
          text: "帐变报表",
          link: "/usercenter/acchange"
        },
        {
          text: "个人报表",
          link: "/usercenter/myreport"
        },
        {
          text: "团队报表",
          link: "/usercenter/groupreport"
        },
        {
          text: "优惠活动详情",
          link: "/usercenter/discount"
        }
      ]
    },
    {
      title: "账户管理",
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
          text: "个人总览",
          link: "/usercenter/myoverview"
        },
        {
          text: "安全中心",
          link: "/usercenter/security"
        },
        {
          text: "银行卡管理",
          link: "/usercenter/bankmanage"
        },
        {
          text: "用户充值",
          link: "/usercenter/recharge"
        },
        {
          text: "用户提现",
          link: "/usercenter/withdrawdeposit"
        },
        {
          text: "用户资料",
          link: "/usercenter/userdata"
        },
        {
          text: "彩种信息",
          link: "/usercenter/proinfo"
        },
        {
          text: "彩种限额",
          link: "/usercenter/quota"
        }
      ]
    },
    {
      title: "代理管理",
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
          text: "团队总览",
          link: "/usercenter/groupview"
        },
        {
          text: "用户列表",
          link: "/usercenter/userlist"
        },
        {
          text: "注册管理",
          link: "/usercenter/regismanage"
        },
        {
          text: "推广注册",
          link: "/usercenter/regisgenera"
        },
        {
          text: "彩种统计",
          link: "/usercenter/prostatistics"
        },
      ]
    },
    {
      title: "短信公告",
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
          text: "站内短信",
          link: "/usercenter/pronote"
        },
        {
          text: "网站公告",
          link: "/usercenter/webnote"
        }
    ]
}
];
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.loadpage = userModel.platform;
  }
  ngAfterContentChecked() {}
  ngAfterViewInit() {}
}
