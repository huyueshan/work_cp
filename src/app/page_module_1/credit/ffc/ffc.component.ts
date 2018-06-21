import { Component, OnInit, OnDestroy, ElementRef } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import userModel from "../../../../status/user.model";

@Component({
  selector: "app-credit",
  templateUrl: "./ffc.component.html",
  styleUrls: ["./ffc.component.scss"]
})
export class FfccreditComponent implements OnInit, OnDestroy {
    loadpage = false;
    public cpnav = {
      prev: "20180517022",
      prevball: [2, 5, 9, 0, 8],
      next: "20180517023",
      time: ""
    };
    public odds = 7.8; // 赔率
    public rangevalue = 7.8; //绑定滑动条数据
    public delay = true; // 选择金额框判断
    public boxshow = false; // 选择金额框显示判断
    public type = 1; // 控制 玩法
    public curinpt; //当前操作的金额输入框
    public selectbtnvalue = 0; //控制 一般 、快捷按钮数据
    public btolast = 0; //控制 前中后选择
    public selmoeny = [100, 200, 500, 1000, 5000]; // 活动选择金额框数据
    public BALL = {
      numb: 0,
      value: ""
    };
    public typedata = [
      {
        id: 1,
        name: "整合"
      },
      {
        id: 2,
        name: "龙虎斗"
      },
      {
        id: 3,
        name: "全5中1"
      }
    ];
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
    // 活动选择框的位置
    public boxposition = {
      x: "",
      y: ""
    };
    public betdatam = [
      {
        title: "第一球",
        data1: this.setbigorsmall(),
        data2: this.setball()
      },
      {
        title: "第二球",
        data1: this.setbigorsmall(),
        data2: this.setball()
      },
      {
        title: "第三球",
        data1: this.setbigorsmall(),
        data2: this.setball()
      },
      {
        title: "第四球",
        data1: this.setbigorsmall(),
        data2: this.setball()
      },
      {
        title: "第五球",
        data1: this.setbigorsmall(),
        data2: this.setball()
      },
      {
        title: "总和",
        data1: [
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
        ],
        data2: []
      }
    ];
    public betdatab = [
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
    ];
  
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
  
    constructor(private el: ElementRef, private router: Router) {}
  
    ngOnInit() {
      this.loadpage = userModel.platform;
    }
    ngOnDestroy() {}
    // 滑块左侧递减事件
    rangevaluelessen() {
      if (this.rangevalue > 0) {
        this.rangevalue -= 0.1;
      }
    }
    // 滑块左侧递加事件
    rangevalueadd() {
      if (this.rangevalue < 7.8) {
        this.rangevalue += 0.1;
      }
    }
    // 切换玩法事件 /整合/龙虎斗/全五中一
    togtype(i) {
      this.type = i;
      this.setallmoney.value = "";
    }
    // 全五中一 和底部快捷选项输入框 获得焦点事件
    // curinpt为当前操作输入框 变量
    // i 数组当前index
    inmoneyfocus(e, i) {
      if (i == "all") {
        this.curinpt = this.setallmoney;
      } else {
        this.curinpt = this.betdata3[i];
      }
      this.setposition(e);
    }
    // 整合 金额框获得焦点事件 /curinpt为当前操作输入框 变量
    // t、i 、q 为对应数据的key值或者index
    inmoney1focus(e, i, t, q) {
      if (q !== null) {
        this.curinpt = this.betdatam[i][t][q];
      } else {
        this.curinpt = this.betdatab[i];
      }
      this.setposition(e);
    }
    // 龙虎斗 金额框获得焦点事件 /curinpt为当前操作输入框 变量
    // t、i 、q 为对应数据的key值或者index
    inmoney2focus(e, i, t) {
      this.curinpt = this.betdata2[i][t];
      this.setposition(e);
    }
    //页面输入框焦点离开后隐藏金额选择框方法
    inmoneyblur() {
      // 必须延迟，不然点击不到选择框
      setTimeout(() => {
        if (!this.delay) {
          this.boxshow = false;
        }
      }, 200);
    }
    // 获取选择框显示位置方法
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
    // 选择框点击选项方法，赋值给当前操作的输入框
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
          let d = this.betdatam;
          for (let w = 0; w < d.length; w++) {
            for (let q = 0; q < d[w].data1.length; q++) {
              d[w].data1[q].value = i;
            }
            for (let t = 0; t < d[w].data2.length; t++) {
              d[w].data2[t].value = i;
            }
          }
          for (let w = 0; w < this.betdatab.length; w++) {
            this.betdatab[w].value = i;
          }
        }
      }
      this.curinpt.value = i;
      this.boxshow = false;
    }
    // 重置当前页面所有的输入框
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
        let d = this.betdatam;
        for (let w = 0; w < d.length; w++) {
          for (let q = 0; q < d[w].data1.length; q++) {
            d[w].data1[q].value = "";
          }
          for (let t = 0; t < d[w].data2.length; t++) {
            d[w].data2[t].value = "";
          }
        }
        for (let w = 0; w < this.betdatab.length; w++) {
          this.betdatab[w].value = "";
        }
      }
    }
    // 快捷选项下的输入框值改变后的方法，
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
        let d = this.betdatam;
        for (let w = 0; w < d.length; w++) {
          for (let q = 0; q < d[w].data1.length; q++) {
            d[w].data1[q].value = v;
          }
          for (let t = 0; t < d[w].data2.length; t++) {
            d[w].data2[t].value = v;
          }
        }
        for (let w = 0; w < this.betdatab.length; w++) {
          this.betdatab[w].value = v;
        }
      }
    }
    // 限制输入框只能输入数字
    changereg() {
      this.curinpt.value = this.curinpt.value.replace(/\D/g, "");
    }
  
    // 确认提交按钮事件
    sub() {
      if (this.type == 3) {
        let point = (2.099 + (0.191 / 7.8) * this.rangevalue).toFixed(3);
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
          "赔率1 = " + (1.944 + (0.224 / 7.8) * this.rangevalue).toFixed(3);
        let str2 =
          "赔率2 = " + (8.98 + (0.78 / 7.8) * this.rangevalue).toFixed(2);
        let str3 =
          "赔率3 = " + (1.944 + (0.224 / 7.8) * this.rangevalue).toFixed(3);
  
        console.log(str1, str2, str3, this.betdata2);
      }
      if (this.type == 1) {
        let str1 =
          "赔率1 = " + (1.8 + (0.156 / 7.8) * this.rangevalue).toFixed(3);
        let str2 = "赔率2 = " + (9 + (0.78 / 7.8) * this.rangevalue).toFixed(2);
        let str3 =
          "赔率3 = " + (11.633 + (1.3 / 7.8) * this.rangevalue).toFixed(3);
        console.log(str1, str2, str3, this.betdatam, this.betdatab);
      }
      return false;
    }
  
    linkrouter(t) {
      this.router.navigate([t]);
    }
  
    // 设置整合 球的数据
    setball() {
      let data = [];
      for (let q = 0; q < 10; q++) {
        let o = Object.assign({}, this.BALL);
        o.numb = q;
        data.push(o);
      }
      return data;
    }
    setbigorsmall() {
      let data = [];
      let d = ["大", "小", "单", "双"];
      for (let i = 0; i < d.length; i++) {
        data[i] = {
          name: d[i],
          value: ""
        };
      }
      return data;
    }
  }
  