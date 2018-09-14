import {
  Component,
  OnInit,
} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import userModel from '../../../status/user.model';

@Component({
  selector: "app-usercenter",
  templateUrl: "./usercenter.component.html",
  styleUrls: ["./usercenter.component.scss"]
})
export class UsercenterComponent
  implements OnInit {
    loadpage=false;
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  // TODO: 如果使用不同的背景图标；必须先在父组件中线require 这张图片
  public bgurlinit = require("../images/sidebg1.png");
  public bgurl = 'url("../../images/sidebg1.png")';
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
}
