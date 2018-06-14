import { Component, OnInit } from "@angular/core";

import { ACCHANGE, userdef } from "../../../../../factory/usercent";

@Component({
  selector: "app-accountchange",
  templateUrl: "./accountchange.component.html",
  styleUrls: ["./accountchange.component.scss"]
})
export class AccountchangeComponent implements OnInit {
  public querydata = {
    starttime: "",
    endtime: "",
    username: "",
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
  public acchangedata: ACCHANGE[];
  public checkdatas = {
    all: false,
    income: [
      {
        title: "公司入款",
        checked: false
      },
      {
        title: "线上支付",
        checked: false
      },
      {
        title: "人工存入",
        checked: false
      },
      {
        title: "给予返水",
        checked: false
      },
      {
        title: "活动优惠",
        checked: false
      },
      {
        title: "彩票返水",
        checked: false
      },
      {
        title: "退佣/分红",
        checked: false
      },
      {
        title: "撤单返款",
        checked: false
      },
      {
        title: "系统奖励",
        checked: false
      },
      {
        title: "提款失败",
        checked: false
      },
      {
        title: "代理返点",
        checked: false
      },
      {
        title: "代理扶持",
        checked: false
      },
      {
        title: "代理工资",
        checked: false
      },
      {
        title: "其他充值",
        checked: false
      },
      {
        title: "打和返款",
        checked: false
      },
      {
        title: "VR 投注失败",
        checked: false
      },
      {
        title: "VR 追号失败",
        checked: false
      },
      {
        title: "VR 打赏失败",
        checked: false
      },
      {
        title: "中奖后停止追号",
        checked: false
      },
      {
        title: "VR 撤单(取消投注)",
        checked: false
      },
      {
        title: "VR 取消打赏",
        checked: false
      },
      {
        title: "VR 颁奖",
        checked: false
      },
      {
        title: "VR 重新颁奖",
        checked: false
      },
      {
        title: "VR 整期撤单",
        checked: false
      }
    ],
    expend: [
      {
        title: "出款扣除",
        checked: false
      },
      {
        title: "用户提款",
        checked: false
      },
      {
        title: "人工提出",
        checked: false
      },
      {
        title: "冲销返水",
        checked: false
      },
      {
        title: "彩票下注",
        checked: false
      },
      {
        title: "转账充值",
        checked: false
      },
      {
        title: "退号扣款",
        checked: false
      },
      {
        title: "优惠扣除",
        checked: false
      },
      {
        title: "其他扣除",
        checked: false
      },
      {
        title: "冲销派奖",
        checked: false
      },
      {
        title: "分红转账",
        checked: false
      },
      {
        title: "VR 投注",
        checked: false
      },
      {
        title: "VR 追号",
        checked: false
      },
      {
        title: "VR 打赏",
        checked: false
      },
      {
        title: "VR 撤单失败",
        checked: false
      },
      {
        title: "VR 取消追号失败",
        checked: false
      },
      {
        title: "VR 取消打赏失败",
        checked: false
      }
    ]
  };

  public takedata = [
    {
      user: "test02",
      time: "2018-05-22 13:00:00",
      type: "追号扣款",
      expend: 2,
      money: 98,
      rebates: "追号，期数20180522021  彩种：重庆时时彩"
    },
    {
      user: "test02",
      time: "2018-05-22 13:00:00",
      type: "彩票下注",
      expend: 2,
      money: 100,
      rebates: "期数20180522021  彩种：重庆时时彩"
    },
  ];
  constructor() {}

  ngOnInit() {
    this.inttable();
  }
  checkchange(t, i) {
    let c = this.checkdatas;
    c.all = true;
    if (c[t][i].checked) {
      for (let q = 0; q < c.income.length; q++) {
        if (!c.income[q].checked) {
          c.all = false;
          return;
        }
      }
      for (let w = 0; w < c.expend.length; w++) {
        if (!c.expend[w].checked) {
          c.all = false;
          return;
        }
      }
    } else {
      c.all = false;
    }
  }
  checksall() {
    let c = this.checkdatas;
    if (!c.all) {
      for (let i = 0; i < c.income.length; i++) {
        c.income[i].checked = true;
      }
      for (let q = 0; q < c.expend.length; q++) {
        c.expend[q].checked = true;
      }
    } else {
      for (let i = 0; i < c.income.length; i++) {
        c.income[i].checked = false;
      }
      for (let q = 0; q < c.expend.length; q++) {
        c.expend[q].checked = false;
      }
    }
  }

  // 初始表格数据
  inttable() {
    let data = [];
    for (let i = 0; i < this.takedata.length; i++) {
      let item = Object.assign({}, userdef.Acchangedef, this.takedata[i]);
      data.push(item);
    }
    this.acchangedata = data;
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
