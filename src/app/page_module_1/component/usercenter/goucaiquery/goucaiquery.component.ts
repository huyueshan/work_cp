import { Component, OnInit } from "@angular/core";

import { GOUC, userdef } from "../../../../../factory/usercent";

@Component({
  selector: "app-goucaiquery",
  templateUrl: "./goucaiquery.component.html",
  styleUrls: ["./goucaiquery.component.scss"]
})
export class GoucaiqueryComponent implements OnInit {
  public querydata = {
    starttime: "",
    endtime: "",
    caizhong: "全部",
    playtype: "全部",
    status: "全部",
    iswrap: true
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
  constructor() {}

  ngOnInit() {
    this.inttable();
  }
  // 初始表格数据
  inttable() {
    let data = [];
    for (let i = 0; i < this.takedata.length; i++) {
      let item = Object.assign({}, userdef.Goucdef, this.takedata[i]);
      data.push(item);
    }
    if (data.length < 20) {
      let n = 20 - data.length;
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
  // 分页组建事件，e.data.page为需要跳转的页数
  onPageChanged(e) {
    console.log(e.data.page);
  }
}
