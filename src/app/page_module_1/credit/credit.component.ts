import { Component, OnInit, OnDestroy,ElementRef } from "@angular/core";

import userModel from "../../../status/user.model";

@Component({
  selector: "app-credit",
  templateUrl: "./credit.component.html",
  styleUrls: ["./credit.component.scss"]
})
export class CreditComponent implements OnInit, OnDestroy {
  //   loadpage = false;
  public delay = true; // 选择金额框判断
  public rangevalue = 0; //绑定滑动条数据
  public boxshow = false; // 选择金额框显示判断
  public type = 1; // 玩法
  public queresult = 0; // 开奖结果列表区
  public listresult = 0; // 排行列表区
  public selectbtnvalue = 0; //一般 、快捷按钮控制数据
  public resultdata = [, , , , , , ,];
  public btolast = 0; //前中后选择
  public querydata = {
    qishu: "2期"
  };
  public typeoption = "龙虎斗"; //底部问路选择框数据
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
    data3: [
      {
        name: "豹子",
        value: ""
      },
      {
        name: "顺子",
        value: ""
      },
      {
        name: "对子",
        value: ""
      },
      {
        name: "杂六",
        value: ""
      },
      {
        name: "半顺",
        value: ""
      }
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
  public bottabactive = 0;
  public bottomtabdata = [
    {
      name: "1vs2"
    },
    {
      name: "1vs3"
    },
    {
      name: "1vs4"
    },
    {
      name: "1vs5"
    },
    {
      name: "2vs3"
    },
    {
      name: "2vs4"
    },
    {
      name: "2vs5"
    },
    {
      name: "3vs4"
    },
    {
      name: "3vs5 "
    },
    {
      name: "4vs5"
    }
  ];
  public tablebox1 = {
    name:'大路',
    width: '780px',
    evleft: 0,
    drag:false,
    left: "0px",
    data:[],
  };
  public tablebox2 = {
    name:'盘珠路',
    width: '170px',
    evleft: 0,
    drag:false,
    left: "0px",
    data:[],
  };
  public tablebox3 = {
    name:'大眼路',
    width: '170px',
    evleft: 0,
    drag:false,
    left: "0px",
    data:[],
  };
  public tablebox4 = {
    name:'小路',
    width: '170px',
    evleft: 0,
    drag:false,
    left: "0px",
    data:[],
  };
  public tablebox5 = {
    name:'曱甴路',
    width: '170px',
    evleft: 0,
    drag:false,
    left: "0px",
    data:[],
  };

  constructor(private el:ElementRef) {}

  ngOnInit() {
    // this.loadpage = userModel.platform;
    this.betdata1.data2 = this.setballdata(); // 初始数据，
    this.tablebox1.data = this.setwenludata(); //临时测试数据
    this.tablebox2.data = this.setwenludata(); //临时测试数据
    this.tablebox3.data = this.setwenludata(); //临时测试数据
    this.tablebox4.data = this.setwenludata(); //临时测试数据
    this.tablebox5.data = this.setwenludata(); //临时测试数据
  }
  ngOnDestroy() {}

  rangevaluelessen() {
    if (this.rangevalue > -7.8) {
      this.rangevalue -= 0.078;
    }
  }
  rangevalueadd() {
    if (this.rangevalue < 0) {
      this.rangevalue += 0.078;
    }
  }
  togtype(i) {
    this.type = i;
    this.setallmoney.value = "";
  }
  inmoneyfocus(e, i) {
    if (i == "all") {
      this.curinpt = this.setallmoney;
    } else {
      this.curinpt = this.betdata3[i];
    }
    this.setposition(e);
  }
  inmoney1focus(e, t, i, q) {
    if (q !== null) {
      if (i == "all") {
        this.curinpt = this.setallmoney;
      } else {
        this.curinpt = this.betdata1[t][i][q];
      }
    } else {
      this.curinpt = this.betdata1[t][i];
    }
    this.setposition(e);
  }
  inmoney2focus(e, i, t) {
    if (i == "all") {
      this.curinpt = this.setallmoney;
    } else {
      this.curinpt = this.betdata2[i][t];
    }
    this.setposition(e);
  }
  setposition(e) {
    this.delay = true;
    let box = this.boxposition;
    box.x = e.target.offsetLeft - 4 + "px";
    if (this.curinpt == this.setallmoney) {
      box.y = e.target.offsetTop + 30 + "px";
    } else {
      box.y = e.target.offsetTop + 22 + "px";
    }
    // 延迟是避免切换输入框后 显示的选择框被延迟的离开焦点事件影响又隐藏
    setTimeout(() => {
      this.boxshow = true;
      this.delay = false;
    }, 200);
  }
  inmoneyblur() {
    // 必须延迟，不然点击不到选择框
    setTimeout(() => {
      if (!this.delay) {
        this.boxshow = false;
      }
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
      if (this.type == 1) {
        let d = this.betdata1;
        for (let w = 0; w < d.data1.length; w++) {
          for (let q = 0; q < d.data1[w].length; q++) d.data1[w][q].value = i;
        }
        for (let w = 0; w < d.data2.length; w++) {
          for (let q = 0; q < d.data2[w].length; q++) d.data2[w][q].value = i;
        }
        for (let w = 0; w < d.data3.length; w++) {
          d.data3[w].value = i;
        }
      }
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
    if (this.type == 1) {
      let d = this.betdata1;
      for (let i = 0; i < d.data1.length; i++) {
        for (let q = 0; q < d.data1[i].length; q++) d.data1[i][q].value = "";
      }
      for (let i = 0; i < d.data2.length; i++) {
        for (let q = 0; q < d.data2[i].length; q++) d.data2[i][q].value = "";
      }
      for (let i = 0; i < d.data3.length; i++) {
        d.data3[i].value = "";
      }
    }
  }

  allchange() {
    let v = this.setallmoney.value;
    if (this.type == 3) {
      let d = this.betdata3;
      for (let q = 0; q < d.length; q++) {
        d[q].value = v;
      }
    }
    if (this.type == 2) {
      let d = this.betdata2;
      for (let q = 0; q < d.length; q++) {
        d[q].value1.value = v;
        d[q].value2.value = v;
        d[q].value3.value = v;
      }
    }
    if (this.type == 1) {
      let d = this.betdata1;
      for (let i = 0; i < d.data1.length; i++) {
        for (let q = 0; q < d.data1[i].length; q++) d.data1[i][q].value = v;
      }
      for (let i = 0; i < d.data2.length; i++) {
        for (let q = 0; q < d.data2[i].length; q++) d.data2[i][q].value = v;
      }
      for (let i = 0; i < d.data3.length; i++) {
        d.data3[i].value = v;
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
    if (this.type == 2) {
      let str1 =
        "赔率1 = " + (2.168 + (this.rangevalue / 0.078) * 0.00224).toFixed(3);
      let str2 =
        "赔率2 = " + (9.76 + (this.rangevalue / 0.078) * 0.0078).toFixed(2);
      let str3 =
        "赔率3 = " + (2.168 + (this.rangevalue / 0.078) * 0.00224).toFixed(3);

      console.log(str1, str2, str3, this.betdata2);
    }
    if (this.type == 1) {
      let str1 =
        "赔率1 = " + (1.956 + (this.rangevalue / 0.078) * 0.00156).toFixed(3);
      let str2 =
        "赔率2 = " + (9.78 + (this.rangevalue / 0.078) * 0.0078).toFixed(2);
      let str3 =
        "赔率3 = " + (12.933 + (this.rangevalue / 0.078) * 0.0013).toFixed(3);
      console.log(str1, str2, str3, this.betdata1);
    }
    return false;
  }

  // 底部问路拖拽事件
  // ev 事件对象 ， t 当前表格数据对象
  dragdown(ev,t) {
    let _that = this;
    let d = _that[t];
    let e = ev || event;
    let str = '#'+t;
    let ele = this.el.nativeElement.querySelector(str)
    d.evleft =e.clientX - ele.offsetLeft;
    d.drag = true;
  }
  // ev 事件对象 ， t 当前表格数据对象
  dragmove(ev,t){
      let _that = this;
      let d = _that[t];
      
      if(d.drag){
          let e = ev || event;
          let str = '#'+t;
          let ele = this.el.nativeElement.querySelector(str);
          let n = e.clientX - d.evleft;
          let w = d.data[0].length*16; //table的宽度，16为表格td的宽度
          let p = parseInt(d.width); // 包裹table元素的宽度；
          if( n > 0 ){
            d.left = '0px';
          }else if( n < (p-w)){
              d.left = (p-w)+'px';
            }else{
            d.left = n+'px';
          }
      }
  }
// 设置整合中间5个球的数据
  setballdata() {
    let data = [];
    for (let i = 0; i < 5; i++) {
      data[i] = [];
      for (let q = 0; q < 10; q++) {
        let o = Object.assign({}, this.BALL);
        o.numb = q;
        data[i].push(o);
      }
    }
    return data;
  }

  //临时测试数据方法
  setwenludata() {
    let data = [];
    for (let i = 0; i < 6; i++) {
      data[i] = [];
      for (let q = 0; q < 60; q++) {
        data[i][q] = "";
      }
    }
    return data;
  }
}
