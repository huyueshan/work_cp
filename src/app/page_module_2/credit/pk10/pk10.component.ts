import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import {
  Router,
  Route,
  ActivatedRoute,
  Params,
  NavigationEnd
} from "@angular/router";
import userModel from "../../../../status/user.model";
import { Base } from "../../../../factory/base.model";
import "rxjs/add/operator/filter";

@Component({
  selector: "app-pk10",
  templateUrl: "./pk10.component.html",
  styleUrls: ["./pk10.component.scss"]
})
export class Pk10Component implements OnInit, OnDestroy, AfterViewInit {
  loadpage = false;
  public cpnav = {
    style: "credit",
    prev: "20180517022",
    prevball: [2, 5, 9, 0, 8],
    next: "20180517023",
    time: ""
  };
  public odds = 7.8; // 赔率
  public rangevalue = 7.8; //绑定滑动条数据
  public delay = true; // 选择金额框判断
  public boxshow = false; // 选择金额框显示判断
  public boxvalid = true; // 选择金额框禁用判断
  public type = 1; // 控制 玩法
  public curinpt; //当前操作的金额输入框
  public selectbtnvalue = 0; //控制 一般 、快捷按钮数据
  public inputshow = true;
  public btolast = 0; //控制 前中后选择
  public selmoeny = [100, 200, 500, 1000, 5000]; // 活动选择金额框数据
  public routeid ;
  public BALL = { numb: 0, value: "", };
  public BALL2 = { name: "", value: "", };
  public typedata = [
    { id: 1, name: "整合", },
    { id: 2, name: "第1-10名", },
    { id: 3, name: "冠亚和值", },
    { id: 4, name: "冠亚组合", },
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
  public pkdata1_1 = [
    { name: "冠亚大", value: "", },
    { name: "冠亚小", value: "", },
    { name: "冠亚单", value: "", },
    { name: "冠亚双", value: "", }
  ];

  public betdatam = [
    { title: "冠军", data1: this.setbigorsmall(), },
    { title: "亚军", data1: this.setbigorsmall(), },
    { title: "第三名", data1: this.setbigorsmall(), },
    { title: "第四名", data1: this.setbigorsmall(), },
    { title: "第五名", data1: this.setbigorsmall(), },
    { title: "第六名", data1: this.setbigorsmall(), },
    { title: "第七名", data1: this.setbigorsmall(), },
    { title: "第八名", data1: this.setbigorsmall(), },
    { title: "第九名", data1: this.setbigorsmall(), },
    { title: "第十名", data1: this.setbigorsmall(), },
  ];
  public pkdata1_3 = [
    { name: "1v10龙:", value: "", },
    { name: "2v9龙:", value: "", },
    { name: "3v8龙:", value: "", },
    { name: "4v7龙:", value: "", },
    { name: "5v6龙:", value: "", },
    { name: "1v10虎:", value: "", },
    { name: "2v9虎:", value: "", },
    { name: "3v8虎:", value: "", },
    { name: "4v7虎:", value: "", },
    { name: "5v6虎:", value: "", },
  ];
  public betdata2_1 = [
    { title: "冠军", data: this.setball(), },
    { title: "亚军", data: this.setball(), },
    { title: "第三名", data: this.setball(), },
    { title: "第四名", data: this.setball(), },
    { title: "第五名", data: this.setball(), },
    { title: "第六名", data: this.setball(), },
    { title: "第七名", data: this.setball(), },
    { title: "第八名", data: this.setball(), },
    { title: "第九名", data: this.setball(), },
    { title: "第十名", data: this.setball(), },
  ];
  public betdata3_1 = [
    [
      { numb: 3, value: "" },
      { numb: 4, value: "" },
      { numb: 5, value: "" },
      { numb: 6, value: "" }
    ],
    [
      { numb: 7, value: "" },
      { numb: 8, value: "" },
      { numb: 9, value: "" },
      { numb: 10, value: "" }
    ],
    [
      { numb: 11, value: "" },
      { numb: 12, value: "" },
      { numb: 13, value: "" },
      { numb: 14, value: "" }
    ],
    [
      { numb: 15, value: "" },
      { numb: 16, value: "" },
      { numb: 17, value: "" },
      { numb: 18, value: "" }
    ],
    [{ numb: 19, value: "" }]
  ];
  public betdata3_2 = [
    { name: "大", value: "" },
    { name: "小", value: "" },
    { name: "单", value: "" },
    { name: "双", value: "" }
  ];
  public betdata4_1 = this.setvs();

  // 遮罩层
  public shade = {
    w: 0,
    h: 0
  };
  // =弹窗对话框数据

  public popup = {
    shade: {
      show: false,
      w: 0,
      h: 0
    },
    setnumb: {
      show: false,
      value: "",
      data: []
    },
    sub: {
      show: false,
      top: "10px",
      data: []
    }
  };
  public subdata = [];
  public submoney = 0;
  public subob = {
    channel: "pk10",
    type: "-",
    id: "20180808",
    ball: "-",
    number: "-",
    point: "-",
    money: "-"
  };
  constructor(
    private el: ElementRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadpage = userModel.platform;

    if (!Base.Store.get("selmoeny")) {
      Base.Store.set("selmoeny", this.selmoeny, true);
    } else {
      let arr = JSON.parse(JSON.stringify(Base.Store.get("selmoeny")));
      this.selmoeny = arr;
    }

    this.popup.shade.w = screen.width;
    this.popup.shade.h = screen.height;

    this.route.params.subscribe(data => {
      this.routeid = data.id;
      this.subob.channel = "PK10 - " + this.routeid;
    });
  }
  ngAfterViewInit() {}
  ngOnDestroy() {}

  // 禁用快选活动框事件
  setboxvalid(){
      this.boxvalid = !this.boxvalid;
  }
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
  // 切换一般 /快捷 事件
  tabclick(i) {
    if (i === 0) {
      this.selectbtnvalue = 0;
      this.inputshow = true;
  }
  if (i === 1) {
      this.selectbtnvalue = 1;
    this.inputshow = false;
  }
  if (i === 2) {
    let p = this.popup;
    let d = this.popup.setnumb.data;
    for (let i = 0; i < this.selmoeny.length; i++) {
      d[i] = {
        value: this.selmoeny[i]
      };
    }
    p.setnumb.show = true;

    p.shade.show = true;
  }
}

  //====快选金额事件开始=============
  savenum() {
    let d = [];
    let p = this.popup.setnumb.data;
    for (let i = 0; i < p.length; i++) {
      d.push(Number(p[i].value));
    }
    Base.Store.set("selmoeny", d, true);
    this.selmoeny = d;
    this.close();
  }
  numbdel() {
    this.popup.setnumb.value = "";
  }
  setnumbdel(i) {
    let p = this.popup;
    p.setnumb.data.splice(i, 1);
  }
  addnumb() {
    let p = this.popup;
    let n = Number(p.setnumb.value);
    if (n > 0) {
      let l = p.setnumb.data.length;
      p.setnumb.data[l] = {
        value: n
      };
    }
    p.setnumb.value = "";
  }
  changeregset(i) {
    let p = this.popup;
    if (i === -1) {
      p.setnumb.value = p.setnumb.value.replace(/\D/g, "");
    } else {
      p.setnumb.data[i].value = p.setnumb.data[i].value.replace(/\D/g, "");
    }
  }
  close() {
    let p = this.popup;
    p.setnumb.show = false;
    p.shade.show = false;
    p.sub.show = false;
  }
  //====快选金额事件end=============

  // 全五中一 和底部快捷选项输入框 获得焦点事件
  // curinpt为当前操作输入框 变量
  // i 数组当前index
  inmoneyfocus(e, i) {
    if (i == "all") {
      this.curinpt = this.setallmoney;
    } else {
      //   this.curinpt = this.betdata3[i];
    }
    this.setposition(e);
  }
  // 整合 金额框获得焦点事件 /curinpt为当前操作输入框 变量
  // t、i 、q 为对应数据的key值或者index
  inmoney1focus(e, i, t, q) {
    if (q !== null) {
      this.curinpt = this.betdatam[i][t][q];
    } else if (t === "vs") {
      this.curinpt = this.pkdata1_3[i];
    } else {
      this.curinpt = this.pkdata1_1[i];
    }
    this.setposition(e);
  }
  // 龙虎斗 金额框获得焦点事件 /curinpt为当前操作输入框 变量
  // t、i 、q 为对应数据的key值或者index
  inmoney2focus(e, i, t) {
    this.curinpt = this.betdata2_1[i].data[t];
    this.setposition(e);
  }

  inmoney3focus(e, i, q) {
    if (q !== null) {
      this.curinpt = this.betdata3_1[i][q];
    } else {
      this.curinpt = this.betdata3_2[i];
    }
    this.setposition(e);
  }
  inmoney4focus(e, i) {
    this.curinpt = this.betdata4_1[i];
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
    if (this.curinpt === this.setallmoney) {
      this.amend(i);
    }
    this.curinpt.value = i;
    this.boxshow = false;
  }
  // 重置当前页面所有的输入框
  reset() {
    this.amend("");
    this.setallmoney.value = "";
  }
  // 快捷选项下的输入框值改变后的方法，
  allchange() {
    let v = this.setallmoney.value;
    this.amend(v);
  }

  amend(v){
    if (this.type === 4) {
      let d = this.betdata4_1;
      this.setvalue(d, v);
    }
    if (this.type == 3) {
      let d = this.betdata3_1;
      let b = this.betdata3_2;
      this.setvalue(d, v);
      this.setvalue(b, v);
    }
    if (this.type == 2) {
      let d = this.betdata2_1;
      for (let q = 0; q < d.length; q++) {
        this.setvalue(d[q].data, v);
      }
    }
    if (this.type == 1) {
      let d = this.betdatam;
      for (let w = 0; w < d.length; w++) {
        this.setvalue(d[w].data1, v);
      }
      this.setvalue(this.pkdata1_1, v);
      this.setvalue(this.pkdata1_3, v);
    }

  };

  // 设置单元数据金额
  setvalue(d, v) {
    if (d) {
      for (let q = 0; q < d.length; q++) {
        if (d[q] instanceof Array) {
          for (let w = 0; w < d[q].length; w++) {
            if (d[q][w].numb !== null && d[q][w].name !== null) {
              d[q][w].value = v;
            }
          }
        } else {
          if (d[q].numb !== null && d[q].name !== null) {
              d[q].value = v;
          }
        }
      }
    }
  }

  // 限制输入框只能输入数字
  changereg() {
    let v = this.curinpt;
    v.value = v.value.replace(/\D/g, "");
    if(Number(v.value)===0 && v.value !== ""){
      v.value = 0;
    }
    if(Number(v.value)>0){
      v.value = Number(v.value);
    }
  }

  // 确认提交按钮事件
  sub() {
    let data = [];
    if (this.type == 4) {
        this.popup.sub.top = "10px";
        let point = (2.099 + (0.191 / 7.8) * this.rangevalue).toFixed(3);
        let d = this.betdata4_1;
        let title =this.typedata[this.type - 1 ].name;
        this.setsubdata(d, data, title, point);
      }
    if (this.type == 3) {
      this.popup.sub.top = "10px";
      let point1 = (13.6+(1.342/7.8)* this.rangevalue).toFixed(3);
      let point2 = (21.3+(1.78/7.8) * this.rangevalue).toFixed(3);
      let d = this.betdata3_1;
      let d2 = this.betdata3_2;
      let title =this.typedata[this.type - 1 ].name;
      for (let i = 0; i < d.length; i++) {
        this.setsubdata(d[i], data, title, point1);
      }
      this.setsubdata(d2, data, title, point2);
    }
    if (this.type == 2) {
      this.popup.sub.top = "500px";
      let point = (9 + (0.78 / 7.8) * this.rangevalue).toFixed(2);
      let d = this.betdata2_1;
      for (let i = 0; i < d.length; i++) {
        
        let title =this.typedata[this.type - 1 ].name + " - " + d[i].title;
        this.setsubdata(d[i].data,data, title, point);
      }
    }
    if (this.type == 1) {
      this.popup.sub.top = "220px";
      let point1 = (11.633 + (1.3 / 7.8) * this.rangevalue).toFixed(3);
      let point2 = (1.8 + (0.156 / 7.8) * this.rangevalue).toFixed(2);
      let point3 = (2.06 + (0.156 / 7.8) * this.rangevalue).toFixed(3);
      let p = this.pkdata1_1;
      let d = this.betdatam;
      let k = this.pkdata1_3;
      let title =this.typedata[this.type - 1 ].name + " - 冠、亚军和";
      this.setsubdata(p,data, title,point1);
      for (let i = 0; i < d.length; i++) {
        let d1 = d[i].data1;
        let title =this.typedata[this.type - 1 ].name + " - " + d[i].title;
        this.setsubdata(d1, data, title, point2);
      }
      title =this.typedata[this.type - 1 ].name;
      this.setsubdata(k, data, title, point3);
    }


    this.submoney = 0;
    for (let i = 0; i < data.length; i++) {
      this.submoney += Number(data[i].money);
    }

    this.subdata = data;
    this.popup.sub.show = true;
    this.popup.shade.show = true;
    // this.reset();
    // this.setallmoney.value = '';
    return false;
  }
  
  //设置单元数据提交
  setsubdata(d, data, str, point) {
    for (let q = 0; q < d.length; q++) {
      if (d[q].numb !== null && d[q].name !== null) {
        if (Number(d[q].value) > 0) {
          let l = data.length;
          data[l] = Object.assign({}, this.subob);
          if (d[q].numb !== undefined) {
            data[l].number = d[q].numb.toString();
          }
          if (d[q].name !== undefined) {
            data[l].ball = d[q].name;
          }
          data[l].type = str;
          data[l].point = point;
          data[l].money = d[q].value;
        }
      }
    }
  }

  linkrouter(t) {
    this.router.navigate([t]);
  }
  routlink() {
    let str;
    this.route.params.subscribe(data => (str = data.id));
    this.router.navigate(["/lottery/officialpk10", str]);
  }

  // 设置整合 球的数据
  setball() {
    let data = [];
    for (let q = 1; q <= 10; q++) {
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
  setvs() {
    let data = [];
    for (let q = 1; q <= 10; q++) {
      for (let w = q + 1; w <= 10; w++) {
        let o = Object.assign({}, this.BALL2);
        o.name = q + "-" + w;
        data.push(o);
      }
    }
    return data;
  }
}
