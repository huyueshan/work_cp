import { Component, OnInit } from '@angular/core';
import { MONEYCO, userdef } from "../../../../../factory/usercent";
import userModel from '../../../../../status/user.model';
@Component({
  selector: 'app-moneyrecord',
  templateUrl: './moneyrecord.component.html',
  styleUrls: ['./moneyrecord.component.scss']
})
export class MoneyrecordComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  public querydata = {
    starttime: "",
    endtime: "",
    numb: "",
    status:this.now_lang.User_center_c.All,
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
    firstpage: this.now_lang.User_center_c.Index,
    prevpage: this.now_lang.User_center_c.Prepage,
    nextpage: this.now_lang.User_center_c.Nextpage,
    lastpage: this.now_lang.User_center_c.Tail_page,
    gopage: this.now_lang.User_center_c.Jump
  };
  public moneycodefdata: MONEYCO[];

  public takedata = [
    {
      numb: '80305211802572873668',
      user: 'test01',
      time: '2018-05-22 13:00:00',
      money: '1000',
      type: '支付宝',
      expense: '0',
      discounts: '0',
      status: '充值失败',
      lastmoney: '1000',
    },
    {
      numb: '80305211802572873668',
      user: 'test01',
      time: '2018-05-22 13:00:00',
      money: '500',
      type: '支付宝',
      expense: '0',
      discounts: '0',
      status: '充值成功',
      lastmoney: '500',
    },
    {
      numb: '80305211802572873668',
      user: 'test01',
      time: '2018-05-22 13:00:00',
      money: '100',
      type: '支付宝',
      expense: '0',
      discounts: '0',
      status: '充值成功',
      lastmoney: '100',
    },
    {
      numb: '80305211802572873668',
      user: 'test01',
      time: '2018-05-22 13:00:00',
      money: '600',
      type: '支付宝',
      expense: '0',
      discounts: '0',
      status: '等待支付',
      lastmoney: '1000',
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
      let item = Object.assign({}, userdef.Moneycodef, this.takedata[i]);
      data.push(item);
    }
    this.moneycodefdata = data;
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

