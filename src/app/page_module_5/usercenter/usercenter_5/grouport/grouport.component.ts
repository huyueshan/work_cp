import { Component, OnInit } from "@angular/core";

import { HttpInterceptorService } from "../../../../../factory/Http.Service";

import { Api } from "../../../../../factory/api.model";

import userModel from '../../../../../status/user.model';
@Component({
  selector: "app-grouport",
  templateUrl: "./grouport.component.html",
  styleUrls: ["./grouport.component.scss"]
})
export class GrouportComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  public toggleindex = 0;
  public querydatelistindex = 0;
  public querydata = {
    starttime: "",
    endtime: "",
    username: ""
  };
  public querydatelist = [
    {
      text: this.now_lang.User_center_c.Yestday,
      active: false
    },
    {
      text: this.now_lang.User_center_c.Today,
      active: false
    },
    {
      text: this.now_lang.User_center_c.Today,
      active: false
    },
    {
      text: this.now_lang.User_center_c.This_week,
      active: false
    },
    {
      text: this.now_lang.User_center_c.Last_moon,
      active: false
    },
    {
      text:  this.now_lang.User_center_c.This_moon,
      active: false
    }
  ];
  public checkdatas1 = {
    title: this.now_lang.User_center_c.All_choose,
    all: false,
    income: [
      {
        title: this.now_lang.User_center_c.Official_lot,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Credit_lot,
        checked: false
      },
      {
        title: this.now_lang.User_center_c.Six_lot,
        checked: false
      }
    ]
  };
  public checkdatas2 = {
    title: this.now_lang.User_center_c.All,
    all: false,
    income: [
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
  };
  public resultdata= [
    {
      name: 'test02',
      group: '代理',
      mannumb: 0,
      moneytou: 2,
      vaildtou:2,
      rebates: 0,
      rebatesage : 0, 
      rebatesadd : 0,
      bonus : 0,
      datesalary: 0,
      atmadd:  0,
      Withdrawadd: 0,
      profitorloss : 20,
      profitorlossadd : 20,
    },
    {
      name: 'test02',
      group: '代理',
      mannumb: 0,
      moneytou: 2,
      vaildtou:2,
      rebates: 0,
      rebatesage : 0, 
      rebatesadd : 0,
      bonus : 0,
      datesalary: 0,
      atmadd:  0,
      Withdrawadd: 0,
      profitorloss : 20,
      profitorlossadd : 20,
    },
    {
      name: 'test02',
      group: '代理',
      mannumb: 0,
      moneytou: 2,
      vaildtou:2,
      rebates: 0,
      rebatesage : 0, 
      rebatesadd : 0,
      bonus : 0,
      datesalary: 0,
      atmadd:  0,
      Withdrawadd: 0,
      profitorloss : 20,
      profitorlossadd : 20,
    },
    {
      name: 'test02',
      group: '代理',
      mannumb: 0,
      moneytou: 2,
      vaildtou:2,
      rebates: 0,
      rebatesage : 0, 
      rebatesadd : 0,
      bonus : 0,
      datesalary: 0,
      atmadd:  0,
      Withdrawadd: 0,
      profitorloss : 20,
      profitorlossadd : 20,
    },

  ];
  public pagination = {
    totalNum:20,  //总数据条数 
    pageSize: 5, // 每页显示数量
    curPage: 1, //当前页
    segmentSize: 5, //最大显示页码标签数量
    totalPage:4,// 最大页码数。
  };

  constructor( private http:HttpInterceptorService) {}

  ngOnInit() {
     this.now_lang_type=userModel.now_lang_type;

     this.http.get(Api.gettest,{}).then(res => {
         console.log('请求到的数据：', res);
     });
  }

  checkchange(d, i) {
    let c = this[d];
    c.all = true;
    if (c.income[i].checked) {
      for (let q = 0; q < c.income.length; q++) {
        if (!c.income[q].checked) {
          c.all = false;
          return;
        }
      }
    } else {
      c.all = false;
    }
  }
  checksall(d) {
    let c = this[d];
    if (c.all) {
      for (let i = 0; i < c.income.length; i++) {
        c.income[i].checked = true;
      }
    } else {
      for (let i = 0; i < c.income.length; i++) {
        c.income[i].checked = false;
      }
    }
  }
  add(t){
    let n = 0;
    let d = this.resultdata;
    for (let i = 0; i < d.length; i++) {
      n += Number(d[i][t]);
    }
    return n
  }
  // 分页组件点击页码事件，参数i为点击页码数
  getPageData(i) {
    //  此处请求数据
}
}
