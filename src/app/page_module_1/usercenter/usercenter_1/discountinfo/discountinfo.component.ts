import { Component, OnInit } from '@angular/core';
import { DISCOUNT, userdef } from "../../../../../factory/usercent";
import userModel from '../../../../../status/user.model';
@Component({
  selector: 'app-discountinfo',
  templateUrl: './discountinfo.component.html',
  styleUrls: ['./discountinfo.component.scss']
})
export class DiscountinfoComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  public querydata = {
    starttime: "",
    endtime: "",
  };
  public pagination = {
    totalNum:20,  //总数据条数 
    pageSize: 5, // 每页显示数量
    curPage: 1, //当前页
    segmentSize: 5, //最大显示页码标签数量
    totalPage:4,// 最大页码数。
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
    this.now_lang_type=userModel.now_lang_type;
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
  // 分页组件点击页码事件，参数i为点击页码数
  getPageData(i) {
    //  此处请求数据
}
}

