import { Component, OnInit } from '@angular/core';
import { DISCOUNT, userdef } from "../../../../factory/usercent";

@Component({
  selector: 'app-discountinfo',
  templateUrl: './discountinfo.component.html',
  styleUrls: ['./discountinfo.component.scss']
})
export class DiscountinfoComponent implements OnInit {
  public querydata = {
    starttime: "",
    endtime: "",
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
  public discountdata: DISCOUNT[];

  public takedata = [
    {
      name: '天天签到送彩金',
      wastevalid: '0',
      wasteneed: '0',
      status: '审核拒绝',
      rebates: '当日没有充值',
      time: '2018-05-28  12：45：30',
      action: '详情',
    },
    {
      name: '天天签到送彩金',
      wastevalid: '0',
      wasteneed: '0',
      status: '审核拒绝',
      rebates: '当日没有充值',
      time: '2018-05-28  12：45：30',
      action: '详情',
    },
    {
      name: '天天签到送彩金',
      wastevalid: '0',
      wasteneed: '0',
      status: '审核拒绝',
      rebates: '当日没有充值',
      time: '2018-05-28  12：45：30',
      action: '详情',
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
      let item = Object.assign({}, userdef.Discountdef, this.takedata[i]);
      data.push(item);
    }
    this.discountdata = data;
  }
  // 设置数据量小于10条时的空表格数据
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

