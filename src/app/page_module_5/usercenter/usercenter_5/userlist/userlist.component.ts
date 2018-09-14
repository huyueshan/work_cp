import { Component, OnInit } from "@angular/core";
import { USERLIST, userdef } from "../../../../../factory/usercent";

import { Router } from "@angular/router";

import { HttpInterceptorService } from "../../../../../factory/Http.Service";

import { Api } from "../../../../../factory/api.model";

import userModel from '../../../../../status/user.model';
@Component({
  selector: "app-userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.scss"]
})
export class UserlistComponent implements OnInit {
    public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';

  public pagestatus = 0;
  public querydatelistindex = 0;
  public querydata = {
    username: "tt",
    min: "0",
    max: "0",
    starttime: "",
    endtime: ""
  };
  public pagination = {
    totalNum:20,  //总数据条数 
    pageSize: 5, // 每页显示数量
    curPage: 1, //当前页
    segmentSize: 5, //最大显示页码标签数量
    totalPage:4,// 最大页码数。
  };
  public querydatelist = [
    {
      text: "昨天",
      active: false
    },
    {
      text: "今天",
      active: false
    },
    {
      text: "上周",
      active: false
    },
    {
      text: "本周",
      active: false
    },
    {
      text: "上月",
      active: false
    },
    {
      text: "本月                                 ",
      active: false
    }
  ];
  public userlistdata: USERLIST[];
  
  public income= [
    {
      title: this.now_lang.User_center_c.Slfk_5c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Jsexf_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Shexf_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Xjexf_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Txffc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Qqffc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Xjlk3_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Ahk3_c,
      checked: false
    },
    {
      title:  this.now_lang.User_center_c.Xjexf_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Txffc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Qqffc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Xjlk3_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Ahk3_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Hbk3_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Nmgk3_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Bjpk10_o,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Sdexf_o,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Bjkl8_o,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Cqssc_o,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Jsffc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Jslhc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Slfk28_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Jd15fc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Slfk_5c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Jsexf_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Shexf_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Xjexf_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Txffc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Qqffc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Xjlk3_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Ahk3_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Xjexf_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Txffc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Qqffc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Xjlk3_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Ahk3_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Hbk3_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Nmgk3_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Bjpk10_o,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Sdexf_o,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Bjkl8_o,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Cqssc_o,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Jsffc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Jslhc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Slfk28_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Jd15fc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Slfk_5c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Jsexf_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Shexf_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Xjexf_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Txffc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Qqffc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Xjlk3_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Ahk3_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Xjexf_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Txffc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Qqffc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Xjlk3_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Ahk3_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Hbk3_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Nmgk3_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Bjpk10_o,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Sdexf_o,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Bjkl8_o,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Cqssc_o,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Jsffc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Jslhc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Slfk28_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Jd15fc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Sdexf_o,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Bjkl8_o,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Cqssc_o,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Jsffc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Jslhc_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Slfk28_c,
      checked: false
    },
    {
      title: this.now_lang.User_center_c.Jd15fc_c,
      checked: false
    },
  ]
  
  ;

  public takedata = [
    {
      name: "test03",
      type: "代理用户",
      time: "2018-05-23  07:57:00",
      lasttime: "2018-05-23  07:57:00",
      money: "999",
      rebates: "7.1%",
      status: "启用",
      action: ["详情", "团队总览", "账变记录" ]
    },
    {
      name: "test03",
      type: "代理用户",
      time: "2018-05-23  07:57:00",
      lasttime: "2018-05-23  07:57:00",
      money: "999",
      rebates: "7.1%",
      status: "启用",
      action: ["详情", "团队总览","返点设置", "账变记录" ]
    },
    {
      name: "test03",
      type: "代理用户",
      time: "2018-05-23  07:57:00",
      lasttime: "2018-05-23  07:57:00",
      money: "999",
      rebates: "7.1%",
      status: "启用",
      action: ["详情", "团队总览","返点设置", "账变记录" ]
    },
    {
      name: "test03",
      type: "代理用户",
      time: "2018-05-23  07:57:00",
      lasttime: "2018-05-23  07:57:00",
      money: "999",
      rebates: "7.1%",
      status: "启用",
      action: ["详情", "团队总览","返点设置", "账变记录" ]
    },
    {
      name: "test03",
      type: "代理用户",
      time: "2018-05-23  07:57:00",
      lasttime: "2018-05-23  07:57:00",
      money: "999",
      rebates: "7.1%",
      status: "启用",
      action: ["详情", "团队总览","返点设置", "账变记录" ]
    },
  ];
  constructor( private http:HttpInterceptorService,private router: Router) {}

  ngOnInit() {

    this.http.get(Api.gettest,{}).then(res => {
        console.log('请求到的数据：', res);
        this.inttable();
    });
  }

  // 初始表格数据
  inttable() {
    let data = [];
    for (let i = 0; i < this.takedata.length; i++) {
      // 使用不同的数据默认值！！！
      let item = Object.assign({}, userdef.Userlistdef, this.takedata[i]);
      data.push(item);
    }
    this.userlistdata = data;
  }
  
  changestatus(i){
      this.pagestatus = i;
  }

  linkrouter(R){
    this.router.navigate([R]);
  }


  // 分页组件点击页码事件，参数i为点击页码数
  getPageData(i) {
    //  此处请求数据
}
}
