import { Component, OnInit, OnDestroy } from "@angular/core";

import userModel from "../../../status/user.model";

@Component({
  selector: "app-credit",
  templateUrl: "./credit.component.html",
  styleUrls: ["./credit.component.scss"]
})
export class CreditComponent implements OnInit, OnDestroy {
  loadpage = false;
  public rangevalue = 0; //绑定滑动条数据
  public boxshow = false; // 选择金额框显示判断
  public type = 1;
  public points1;
  public selectbtnvalue = 0; //一般 、快捷按钮控制数据
  public resultdata = [, , , , , , ,];
  public btolast=0; //前中后选择
  public querydata = {
    qishu: "2期"
  };
  public BALL = {
    numb: 0,
    value: ""
  };
  public contenttoptitle1 = [
    "第一球",
    "第二球",
    "第三球",
    "第四球",
    "第五球",
    "总和"
  ];
  public contenttoptitle3 = [, , , , ,];
  public setallmoney = {
    value: ""
  }; //绑定快捷金额
  public boxposition = {
    x: "",
    y: ""
  };
  public curinpt;
  public betdata1 = {
    data1: [
      [
        {
          name: "大",
          value: ""
        },
        {
          name: "小",
          value: ""
        },
        {
          name: "单",
          value: ""
        },
        {
          name: "双",
          value: ""
        }
      ],
      [
        {
          name: "大",
          value: ""
        },
        {
          name: "小",
          value: ""
        },
        {
          name: "单",
          value: ""
        },
        {
          name: "双",
          value: ""
        }
      ],
      [
        {
          name: "大",
          value: ""
        },
        {
          name: "小",
          value: ""
        },
        {
          name: "单",
          value: ""
        },
        {
          name: "双",
          value: ""
        }
      ],
      [
        {
          name: "大",
          value: ""
        },
        {
          name: "小",
          value: ""
        },
        {
          name: "单",
          value: ""
        },
        {
          name: "双",
          value: ""
        }
      ],
      [
        {
          name: "大",
          value: ""
        },
        {
          name: "小",
          value: ""
        },
        {
          name: "单",
          value: ""
        },
        {
          name: "双",
          value: ""
        }
      ],
      [
        {
          name: "总大",
          value: ""
        },
        {
          name: "总小",
          value: ""
        },
        {
          name: "总单",
          value: ""
        },
        {
          name: "总双",
          value: ""
        }
      ]
    ],
    data2: [],
    data3:[
        {
            name:'豹子',
            value:'',
        },
        {
            name:'顺子',
            value:'',
        },
        {
            name:'对子',
            value:'',
        },
        {
            name:'杂六',
            value:'',
        },
        {
            name:'半顺',
            value:'',
        },
    ]
  };

  public betdata2 = [
    {
      numb: 0,
      title: "万千  第一球VS第二球",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      },
      value3: {
        value: ""
      }
    },
    {
      numb: 1,
      title: "万百  第一球VS第三球",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      },
      value3: {
        value: ""
      }
    },
    {
      numb: 2,
      title: "万十  第一球VS第四球",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      },
      value3: {
        value: ""
      }
    },
    {
      numb: 3,
      title: "万个  第一球VS第五球",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      },
      value3: {
        value: ""
      }
    },
    {
      numb: 4,
      title: "千百  第二球VS第三球",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      },
      value3: {
        value: ""
      }
    },
    {
      numb: 5,
      title: "千十  第二球VS第四球",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      },
      value3: {
        value: ""
      }
    },
    {
      numb: 6,
      title: "千个  第二球VS第五球",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      },
      value3: {
        value: ""
      }
    },
    {
      numb: 7,
      title: "百十  第三球VS第四球",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      },
      value3: {
        value: ""
      }
    },
    {
      numb: 8,
      title: "百个  第三球VS第五球",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      },
      value3: {
        value: ""
      }
    },
    {
      numb: 9,
      title: "十个  第四球VS第五球",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      },
      value3: {
        value: ""
      }
    }
  ];
  public betdata3 = [
    {
      numb: 0,
      value: "",
      order: 0
    },
    {
      numb: 1,
      value: "",
      order: 5
    },
    {
      numb: 2,
      value: "",
      order: 1
    },
    {
      numb: 3,
      value: "",
      order: 6
    },
    {
      numb: 4,
      value: "",
      order: 2
    },
    {
      numb: 5,
      value: "",
      order: 7
    },
    {
      numb: 6,
      value: "",
      order: 3
    },
    {
      numb: 7,
      value: "",
      order: 8
    },
    {
      numb: 8,
      value: "",
      order: 4
    },
    {
      numb: 9,
      value: "",
      order: 9
    }
  ];

  constructor() {}

  ngOnInit() {
    this.loadpage = userModel.platform;
    this.betdata1.data2 = this.setballdata();
  }
  ngOnDestroy() {}

  inmoneyfocus(e, i) {
    this.setposition(e);
    if (i == "all") {
      this.curinpt = this.setallmoney;
    } else {
      this.curinpt = this.betdata3[i];
    }
  }
  inmoney1focus(e, t, i, q) {
    this.setposition(e);
    if (i == "all") {
      this.curinpt = this.setallmoney;
    } else {
      this.curinpt = this.betdata1[t][i][q];
    }
  }
  inmoney2focus(e, i, t) {
    this.setposition(e);
    if (i == "all") {
      this.curinpt = this.setallmoney;
    } else {
      this.curinpt = this.betdata2[i][t];
    }
  }
  setposition(e) {
    this.boxshow = true;
    let box = this.boxposition;
    box.x = e.target.offsetLeft - 4 + "px";
    box.y = e.target.offsetTop + 24 + "px";
  }
  inmoneyblur() {
    setTimeout(() => {
      this.boxshow = false;
    }, 200);
  }
  optinclick(i) {
    if (this.curinpt == this.setallmoney) {
      if (this.type == 3) {
        let d = this.betdata3;
        for (let q = 0; q < d.length; q++) {
          d[q].value = i;
        }
      }
      if (this.type == 2) {
        let d = this.betdata2;
        for (let q = 0; q < d.length; q++) {
          d[q].value1.value = i;
          d[q].value2.value = i;
          d[q].value3.value = i;
        }
      }
      //   if (this.type == 1) {
      //     let d = this.betdata1;
      //     for (let q = 0; q < d.length; q++) {
      //       d[q].value1.value = i;
      //       d[q].value2.value = i;
      //       d[q].value3.value = i;
      //     }
      //   }
    }
    this.curinpt.value = i;
    this.boxshow = false;
  }
  reset() {
    if (this.type == 3) {
      let d = this.betdata3;
      for (let i = 0; i < d.length; i++) {
        d[i].value = "";
      }
      this.setallmoney.value = "";
    }
    if (this.type == 2) {
      let d = this.betdata2;
      for (let i = 0; i < d.length; i++) {
        d[i].value1.value = "";
        d[i].value2.value = "";
        d[i].value3.value = "";
      }
      this.setallmoney.value = "";
    }
  }

  allchange() {
    if (this.type == 3) {
      let d = this.betdata3;
      for (let q = 0; q < d.length; q++) {
        d[q].value = this.setallmoney.value;
      }
    }
    if (this.type == 2) {
      let d = this.betdata2;
      for (let q = 0; q < d.length; q++) {
        d[q].value1.value = this.setallmoney.value;
        d[q].value2.value = this.setallmoney.value;
        d[q].value3.value = this.setallmoney.value;
      }
    }
  }
  sub() {
    if (this.type == 3) {
      let point = (2.29 + (this.rangevalue / 0.078) * 0.00191).toFixed(3);
      let str = "赔率=" + point;
      let d = this.betdata3;
      for (let i = 0; i < d.length; i++) {
        if (d[i].value) {
          str += "&" + d[i].numb + "=" + d[i].value;
        }
      }
      alert(str);
    }
    return false;
  }

  setballdata() {
    let data = [];
    for (let i = 0; i < 5; i++) {
        data[i]=[];
      for (let q = 0; q < 10; q++) {
        let o = Object.assign({}, this.BALL);
        o.numb = q;
        data[i].push(o);
      }
    }
    return data
  }
}
