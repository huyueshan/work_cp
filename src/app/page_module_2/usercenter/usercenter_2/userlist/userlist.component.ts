import { Component, OnInit } from "@angular/core";
import { USERLIST, userdef } from "../../../../../factory/usercent";
import userModel from '../../../../../status/user.model';
@Component({
  selector: "app-userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.scss"]
})
export class UserlistComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  public querydatelistindex = 0;
  public querydata = {
    username: "tt",
    min: "0",
    max: "0",
    starttime: "",
    endtime: ""
  };
  public pagination = {
    pagenumber: 10, // 每页显示数量
    page: 1, //当前页
    totalPage: 5, //最大页数
    gopage: false, //是否可以选页跳转
    segmentSize: 3, //最大显示页码标签数量
    startFrom: 1 //开始页从1计算
  };
  public hl = {
    firstpage: "首页",
    prevpage: "上一页",
    nextpage: "下一页",
    lastpage: "尾页",
    gopage: "跳转"
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
      lasttime: "在线+",
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
  constructor() {}

  ngOnInit() {
    this.inttable();
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
  // 设置数据量小于10条时的空表格数据
  // setemptydata() {
  //   let data = {};
  //   for (let item in userdef.Goucdef) {
  //     data[item] = "";
  //   }
  //   return data;
  // }
  // 分页组建事件，e.data.page为需要跳转的页数
  onPageChanged(e) {
    console.log(e.data.page);
  }
}
