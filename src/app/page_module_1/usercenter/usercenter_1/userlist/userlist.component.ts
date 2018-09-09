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
  
  // 分页组件点击页码事件，参数i为点击页码数
  getPageData(i) {
    //  此处请求数据
}
}
