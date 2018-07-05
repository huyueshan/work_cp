import { Component, OnInit } from "@angular/core";
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

  constructor() {}

  ngOnInit() {
     this.now_lang_type=userModel.now_lang_type;
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
  onPageChanged(e) {
    console.log(e.data.page);
  }
}
