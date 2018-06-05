import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-grouport",
  templateUrl: "./grouport.component.html",
  styleUrls: ["./grouport.component.scss"]
})
export class GrouportComponent implements OnInit {
  public toggleindex = 0;
  public querydatelistindex = 0;
  public querydata = {
    starttime: "",
    endtime: "",
    username: ""
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
  public checkdatas1 = {
    title: "全部选中",
    all: false,
    income: [
      {
        title: "官方彩",
        checked: false
      },
      {
        title: "信用彩",
        checked: false
      },
      {
        title: "六合彩",
        checked: false
      }
    ]
  };
  public checkdatas2 = {
    title: "全部",
    all: false,
    income: [
      {
        title: "斯洛伐克5分【信】",
        checked: false
      },
      {
        title: "江苏11选5【信】",
        checked: false
      },
      {
        title: "上海11选5【信】",
        checked: false
      },
      {
        title: "新疆11选5【信】",
        checked: false
      },
      {
        title: "腾讯分分彩【信】",
        checked: false
      },
      {
        title: "QQ分分彩【信】",
        checked: false
      },
      {
        title: "新吉林快3【信】",
        checked: false
      },
      {
        title: "安徽快3【信】",
        checked: false
      },
      {
        title: "新疆11选5【信】",
        checked: false
      },
      {
        title: "腾讯分分彩【信】",
        checked: false
      },
      {
        title: "QQ分分彩【信】",
        checked: false
      },
      {
        title: "新吉林快3【信】",
        checked: false
      },
      {
        title: "安徽快3【信】",
        checked: false
      },
      {
        title: "河北快3【信】",
        checked: false
      },
      {
        title: "内蒙古快3【信】",
        checked: false
      },
      {
        title: "北京PK拾【官】",
        checked: false
      },
      {
        title: "山东11选5【官】",
        checked: false
      },
      {
        title: "北京快乐8【官】",
        checked: false
      },
      {
        title: "重庆时时彩【官】",
        checked: false
      },
      {
        title: "极速分分彩【信】",
        checked: false
      },
      {
        title: "极速六合彩【信】",
        checked: false
      },
      {
        title: "斯洛伐克28【信】",
        checked: false
      },
      {
        title: "京东1.5分彩【信】",
        checked: false
      },
      {
        title: "斯洛伐克5分【信】",
        checked: false
      },
      {
        title: "江苏11选5【信】",
        checked: false
      },
      {
        title: "上海11选5【信】",
        checked: false
      },
      {
        title: "新疆11选5【信】",
        checked: false
      },
      {
        title: "腾讯分分彩【信】",
        checked: false
      },
      {
        title: "QQ分分彩【信】",
        checked: false
      },
      {
        title: "新吉林快3【信】",
        checked: false
      },
      {
        title: "安徽快3【信】",
        checked: false
      },
      {
        title: "新疆11选5【信】",
        checked: false
      },
      {
        title: "腾讯分分彩【信】",
        checked: false
      },
      {
        title: "QQ分分彩【信】",
        checked: false
      },
      {
        title: "新吉林快3【信】",
        checked: false
      },
      {
        title: "安徽快3【信】",
        checked: false
      },
      {
        title: "河北快3【信】",
        checked: false
      },
      {
        title: "内蒙古快3【信】",
        checked: false
      },
      {
        title: "北京PK拾【官】",
        checked: false
      },
      {
        title: "山东11选5【官】",
        checked: false
      },
      {
        title: "北京快乐8【官】",
        checked: false
      },
      {
        title: "重庆时时彩【官】",
        checked: false
      },
      {
        title: "极速分分彩【信】",
        checked: false
      },
      {
        title: "极速六合彩【信】",
        checked: false
      },
      {
        title: "斯洛伐克28【信】",
        checked: false
      },
      {
        title: "京东1.5分彩【信】",
        checked: false
      },
      {
        title: "斯洛伐克5分【信】",
        checked: false
      },
      {
        title: "江苏11选5【信】",
        checked: false
      },
      {
        title: "上海11选5【信】",
        checked: false
      },
      {
        title: "新疆11选5【信】",
        checked: false
      },
      {
        title: "腾讯分分彩【信】",
        checked: false
      },
      {
        title: "QQ分分彩【信】",
        checked: false
      },
      {
        title: "新吉林快3【信】",
        checked: false
      },
      {
        title: "安徽快3【信】",
        checked: false
      },
      {
        title: "新疆11选5【信】",
        checked: false
      },
      {
        title: "腾讯分分彩【信】",
        checked: false
      },
      {
        title: "QQ分分彩【信】",
        checked: false
      },
      {
        title: "新吉林快3【信】",
        checked: false
      },
      {
        title: "安徽快3【信】",
        checked: false
      },
      {
        title: "河北快3【信】",
        checked: false
      },
      {
        title: "内蒙古快3【信】",
        checked: false
      },
      {
        title: "北京PK拾【官】",
        checked: false
      },
      {
        title: "山东11选5【官】",
        checked: false
      },
      {
        title: "北京快乐8【官】",
        checked: false
      },
      {
        title: "重庆时时彩【官】",
        checked: false
      },
      {
        title: "极速分分彩【信】",
        checked: false
      },
      {
        title: "极速六合彩【信】",
        checked: false
      },
      {
        title: "斯洛伐克28【信】",
        checked: false
      },
      {
        title: "京东1.5分彩【信】",
        checked: false
      },
      {
        title: "山东11选5【官】",
        checked: false
      },
      {
        title: "北京快乐8【官】",
        checked: false
      },
      {
        title: "重庆时时彩【官】",
        checked: false
      },
      {
        title: "极速分分彩【信】",
        checked: false
      },
      {
        title: "极速六合彩【信】",
        checked: false
      },
      {
        title: "斯洛伐克28【信】",
        checked: false
      },
      {
        title: "京东1.5分彩【信】",
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
    firstpage: "首页",
    prevpage: "上一页",
    nextpage: "下一页",
    lastpage: "尾页",
    gopage: "跳转"
  };

  constructor() {}

  ngOnInit() {}

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
