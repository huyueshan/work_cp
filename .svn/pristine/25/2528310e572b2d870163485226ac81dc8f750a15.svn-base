import { Component, OnInit } from "@angular/core";

import { ACCHANGE, userdef } from "../../../../../factory/usercent";
import userModel from '../../../../../status/user.model';
@Component({
  selector: "app-accountchange",
  templateUrl: "./accountchange.component.html",
  styleUrls: ["./accountchange.component.scss"]
})
export class AccountchangeComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
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
    firstpage: this.now_lang.User_center_c.Index,
    prevpage: this.now_lang.User_center_c.Prepage,
    nextpage: this.now_lang.User_center_c.Nextpage,
    lastpage: this.now_lang.User_center_c.Tail_page,
    gopage: this.now_lang.User_center_c.Jump
  };
  public acchangedata: ACCHANGE[];
  public checkdatas = {
    all: false,
    income: [
      {
        title: this.now_lang.User_center_c.Company_inmoney,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Online_pay,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Artifical_in,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Gave_back,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Discount_enc,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Lot_back,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Back_bonus,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Refuse_back,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.System_bonus,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Outmoney_fail,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Agent_back,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Agent_help,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Agent_wages,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Other_inmoney,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.tie_back,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.VR_bet_fail,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.VR_chase_fail,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.VR_bonus_fail,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Win_stop,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.VR_retreat_bet,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.VR_retreat_Reward,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.VR_award,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.VR_reaward,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.VR_whole_retreat,
        checked: false
      }
    ],
    expend: [
      {
        title: this.now_lang.User_center_c.Out_money_deduction,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.User_outmoney,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Artifical_outmoney,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.write_off_back,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Lot_bet,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Transform_inmoney,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Cancellation_Withdrawing,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Discount_Withdrawing,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Other_Withdrawing,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Cancellation_bonus,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Dividends_transfer,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.VR_bet,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.VR_chasing,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.VR_reward,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.VR_retreat_fail,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.VR_retreatchase_fail,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.VR_retreatreward_fail,
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
    this.now_lang_type=userModel.now_lang_type;
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
