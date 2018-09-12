import { Component, OnInit } from "@angular/core";

import { GOUC, userdef } from "../../../../../factory/usercent";

import { HttpInterceptorService } from "../../../../../factory/Http.Service";

import { Api } from "../../../../../factory/api.model";

import userModel from '../../../../../status/user.model';
@Component({
  selector: "app-goucaiquery",
  templateUrl: "./goucaiquery.component.html",
  styleUrls: ["./goucaiquery.component.scss"]
})
export class GoucaiqueryComponent implements OnInit {
    // 头部左边导航数据
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  public querydata = {
    starttime: "",
    endtime: "",
    caizhong: this.now_lang.User_center_c.All,
    playtype: this.now_lang.User_center_c.All,
    status: this.now_lang.User_center_c.All,
    iswrap: true
  };
  public pagination = {
    totalNum:3,  //总数据条数 
    pageSize: 10, // 每页显示数量
    curPage: 1, //当前页
    segmentSize: 5, //最大显示页码标签数量
    totalPage:1,// 最大页码数。
  };
  public goucaidata: GOUC[];
  public takedata = [
    {
      id: "80305211802572873668",
      time: "2018-08-08 13:00:00",
      user: "test02",
      style: "重庆时时彩[官]",
      playtype: "五星直选复式",
      content: "1|5|6|5|7",
      issue: "20180522022期",
      money: 2,
      rebates: 0,
      bonus: 0,
      currentnumber: "0,6,1,6,6",
      state: false
    },
    {
      id: "80305211802572873668",
      time: "2018-08-08 13:00:00",
      user: "test02",
      style: "重庆时时彩[官]",
      playtype: "五星直选复式",
      content: "1|5|6|5|7",
      issue: "20180522022期",
      money: 2,
      rebates: 0,
      bonus: 0,
      currentnumber: "0,6,1,6,6",
      state: false
    },
    {
      id: "80305211802572873668",
      time: "2018-08-08 13:00:00",
      user: "test02",
      style: "重庆时时彩[官]",
      playtype: "五星直选复式",
      content: "1|5|6|5|7",
      issue: "20180522022期",
      money: 2,
      rebates: 0,
      bonus: 0,
      currentnumber: "0,6,1,6,6",
      state: false
    }
  ];
  constructor( private http:HttpInterceptorService) {}

  ngOnInit() {
    this.now_lang_type=userModel.now_lang_type;

    this.http.get(Api.gettest,{}).then(res => {
        console.log('请求到的数据：', res);
        this.inttable();
    });
  }
  // 初始表格数据
  inttable() {
    let data = [];
    for (let i = 0; i < this.takedata.length; i++) {
      let item = Object.assign({}, userdef.Goucdef, this.takedata[i]);
      data.push(item);
    }
    if (data.length < 10) {
      let n = 10 - data.length;
      for (let q = 0; q < n; q++) {
        let item = this.setemptydata();
        data.push(item);
      }
    }
    this.goucaidata = data;
  }
  // 设置空数据表格单元行
  setemptydata() {
    let data = {};
    for (let item in userdef.Goucdef) {
      data[item] = "";
    }
    return data;
  }
   // 分页组件点击页码事件，参数i为点击页码数
   getPageData(i) {
    //  此处请求数据
}
}
