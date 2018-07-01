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
  selector: "app-dpc",
  templateUrl: "./dpc.component.html",
  styleUrls: ["./dpc.component.scss"]
})
export class DpcComponent implements OnInit, OnDestroy, AfterViewInit {
  loadpage = false;
  public cpnav = {
    style: "credit",
    prev: "20180517022",
    prevball: [2, 5, 9, 0, 8],
    next: "20180517023",
    time: ""
  };
  public routeid;
  public odds = 7.8; // 赔率
  public rangevalue = 7.8; //绑定滑动条数据
  public delay = true; // 选择金额框判断
  public boxshow = false; // 选择金额框显示判断
  public boxvalid = true; // 选择金额框禁用判断
  public type = 10; // 控制 玩法
  public curinpt; //当前操作的金额输入框
  public selectbtnvalue = 0; //控制 一般 、快捷按钮数据
  public inputshow = true;
  public allinput = false;
  public btolast = 0; //控制 前中后选择
  public selmoeny = [100, 200, 500, 1000, 5000]; // 活动选择金额框数据
  public BALL = {
    numb: 0,
    red: false,
    green: false,
    blue: false,
    gray: false,
    checked: false,
    value: ""
  };
  public BALL2 = {
    name: "",
    checked: false,
    value: ""
  };
  public typedata = [
    { id: 1, name: "特码" },
    { id: 2, name: "色波" },
    { id: 3, name: "特肖" },
    { id: 4, name: "正码" },
    { id: 5, name: "正特" },
    { id: 6, name: "正码1-6" },
    { id: 7, name: "连码" },
    { id: 8, name: "一肖" },
    { id: 9, name: "尾数" },
    { id: 10, name: "合肖" },
    { id: 11, name: "自选不中" },
    { id: 12, name: "连肖" },
    { id: 13, name: "龙虎斗" }
  ];
  public contenttoptitle = [, , , , ,];
  public setallmoney = {
    value: ""
  }; //绑定快捷金额
  // 活动选择框的位置
  public boxposition = {
    x: "",
    y: ""
  };
  public optionsdata = {
    zhengte: [ "正码特一", "正码特二", "正码特三", "正码特四", "正码特五", "正码特六" ],
    zhengteactive: 0,
    lianma: ["单选/复式", "胆拖", "生肖对碰", "属性对碰", "混合对碰"],
    lianmaactive: 0,
    lianmastyle: ["三中二", "三全中", "二全中", "二中特", "特串"],
    lianmastactive: 0,
    zixuanno:["五不中","六不中","七不中","八不中","九不中","十不中","十一不中","十二不中",],
    zixuactive:0,
    hexiao: ["前肖","后肖","天肖","地肖","野兽","家禽","单","双",],
    hexiaoactive:0,
  };
  public zhengma = ["单","双","大","小","合单","合双","红波","蓝波","绿波"];
  public dpcdata1 = {
    title: "特码",
    data1: this.setball(),
    data2: [
      [
        { name: "特大", value: "" },
        { name: "特小", value: "" },
        { name: "家禽", value: "" },
        { name: "野兽", value: "" },
        { name: "大单", value: "" },
        { name: "奇", value: "" },
        { name: "上", value: "" }
      ],
      [
        { name: "特单", value: "" },
        { name: "特双", value: "" },
        { name: "总大", value: "" },
        { name: "总小", value: "" },
        { name: "大双", value: "" },
        { name: "奇偶和", value: "" },
        { name: "上下和", value: "" }
      ],
      [
        { name: "合大", value: "" },
        { name: "合小", value: "" },
        { name: "总单", value: "" },
        { name: "总双", value: "" },
        { name: "小单", value: "" },
        { name: "偶", value: "" },
        { name: "下", value: "" }
      ],
      [
        { name: "合单", value: "" },
        { name: "合双", value: "" },
        { name: "合尾大", value: "" },
        { name: "合尾小", value: "" },
        { name: "小双", value: "" },
        { name: null, value: "" },
        { name: null, value: "" }
      ],
      [
        { name: "尾大", value: "" },
        { name: "尾小", value: "" },
        { name: "红波", value: "" },
        { name: "蓝波", value: "" },
        { name: "绿波", value: "" },
        { name: null, value: "" },
        { name: null, value: "" }
      ]
    ]
  };
  public dpcdata2 = {
    title: "色波",
    data1: [
      { name: "红单", value: "", data: this.setball2("red", 1) },
      { name: "红双", value: "", data: this.setball2("red", 0) },
      { name: "红大", value: "", data: this.setball2("red", 25) },
      { name: "红小", value: "", data: this.setball2("red", 24) },
      { name: "蓝单", value: "", data: this.setball2("blue", 1) },
      { name: "蓝双", value: "", data: this.setball2("blue", 0) },
      { name: "蓝大", value: "", data: this.setball2("blue", 25) },
      { name: "蓝小", value: "", data: this.setball2("blue", 24) },
      { name: "绿单", value: "", data: this.setball2("green", 1) },
      { name: "绿双", value: "", data: this.setball2("green", 0) },
      { name: "绿大", value: "", data: this.setball2("green", 25) },
      { name: "绿小", value: "", data: this.setball2("green", 24) }
    ]
  };
  public dpcdata3 = {
    title: "特肖",
    data1: [
      { name: "鼠", value: "", data: this.setball3(0) },
      { name: "牛", value: "", data: this.setball3(1) },
      { name: "虎", value: "", data: this.setball3(2) },
      { name: "兔", value: "", data: this.setball3(3) },
      { name: "龙", value: "", data: this.setball3(4) },
      { name: "蛇", value: "", data: this.setball3(5) },
      { name: "马", value: "", data: this.setball3(6) },
      { name: "羊", value: "", data: this.setball3(7) },
      { name: "猴", value: "", data: this.setball3(8) },
      { name: "鸡", value: "", data: this.setball3(9) },
      { name: "狗", value: "", data: this.setball3(10) },
      { name: "猪", value: "", data: this.setball3(11) }
    ]
  };
  public dpcdata4 = {
    title: "正码",
    data1: this.setball()
  };
  public dpcdata5 = {
    title: "正特 - 正码特一",
    data1: this.setball()
  };
  public dpcdata6 = [
    { title: "正码一", data1: this.setzhengma() },
    { title: "正码二", data1: this.setzhengma() },
    { title: "正码三", data1: this.setzhengma() },
    { title: "正码四", data1: this.setzhengma() },
    { title: "正码五", data1: this.setzhengma() },
    { title: "正码六", data1: this.setzhengma() }
  ];

  public dpcdata7 = {
    title: "连码 - 单选/复式 - 三中二",
    data1: this.setball()
  };
  public dpcdata8 = {
    title: "一肖",
    data1: [
      { name: "鼠", value: "", data: this.setball3(0) },
      { name: "牛", value: "", data: this.setball3(1) },
      { name: "虎", value: "", data: this.setball3(2) },
      { name: "兔", value: "", data: this.setball3(3) },
      { name: "龙", value: "", data: this.setball3(4) },
      { name: "蛇", value: "", data: this.setball3(5) },
      { name: "马", value: "", data: this.setball3(6) },
      { name: "羊", value: "", data: this.setball3(7) },
      { name: "猴", value: "", data: this.setball3(8) },
      { name: "鸡", value: "", data: this.setball3(9) },
      { name: "狗", value: "", data: this.setball3(10) },
      { name: "猪", value: "", data: this.setball3(11) }
    ]
  };
  public dpcdata9 = {
    title: "尾数",
    data1: [
      { name: "1尾", value: "", data: this.setweiball(1) },
      { name: "2尾", value: "", data: this.setweiball(2) },
      { name: "3尾", value: "", data: this.setweiball(3) },
      { name: "4尾", value: "", data: this.setweiball(4) },
      { name: "5尾", value: "", data: this.setweiball(5) },
      { name: "6尾", value: "", data: this.setweiball(6) },
      { name: "7尾", value: "", data: this.setweiball(7) },
      { name: "8尾", value: "", data: this.setweiball(8) },
      { name: "9尾", value: "", data: this.setweiball(9) },
      { name: "0尾", value: "", data: this.setweiball(0) },
    ]
  };
  public dpcdata10 = {
    title: "合肖",
    data1: [
      { name: "鼠", value: "", data: this.sethexiaoball(0) },
      { name: "牛", value: "", data: this.sethexiaoball(1) },
      { name: "虎", value: "", data: this.sethexiaoball(2) },
      { name: "兔", value: "", data: this.sethexiaoball(3) },
      { name: "龙", value: "", data: this.sethexiaoball(4) },
      { name: "蛇", value: "", data: this.sethexiaoball(5) },
      { name: "马", value: "", data: this.sethexiaoball(6) },
      { name: "羊", value: "", data: this.sethexiaoball(7) },
      { name: "猴", value: "", data: this.sethexiaoball(8) },
      { name: "鸡", value: "", data: this.sethexiaoball(9) },
      { name: "狗", value: "", data: this.sethexiaoball(10) },
      { name: "猪", value: "", data: this.sethexiaoball(11) }
    ]
  };
  public data10_1 = [
    { title: "合肖一肖", value1:"合肖一肖 - 中", value2:"合肖一肖 - 不中", },
    { title: "合肖二肖", value1:"合肖二肖 - 中", value2:"合肖二肖 - 不中", },
    { title: "合肖三肖", value1:"合肖三肖 - 中", value2:"合肖三肖 - 不中", },
    { title: "合肖四肖", value1:"合肖四肖 - 中", value2:"合肖四肖 - 不中", },
    { title: "合肖五肖", value1:"合肖五肖 - 中", value2:"合肖五肖 - 不中", },
    { title: "合肖六肖", value1:"合肖六肖 - 中", value2:"合肖六肖 - 不中", },
    { title: "合肖七肖", value1:"合肖七肖 - 中", value2:"合肖七肖 - 不中", },
    { title: "合肖八肖", value1:"合肖八肖 - 中", value2:"合肖八肖 - 不中", },
    { title: "合肖九肖", value1:"合肖九肖 - 中", value2:"合肖九肖 - 不中", },
    { title: "合肖十肖", value1:"合肖十肖 - 中", value2:"合肖十肖 - 不中", },
    { title: "合肖十一肖", value1:"合肖十一肖 - 中", value2:"合肖十一肖 - 不中", },
  ]
  public radvalue;
  
  public dpcdata11 = {
    title: "自选不中 - 单选/复式 - 三中二",
    data1: this.setball()
  };

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
    // 跳转官方路由设置
    // this.setlink();
    this.route.params.subscribe(data => {
      this.routeid = data.id;
      this.subob.channel = "低频彩 - " + this.routeid;
    });

    console.log(this.sethexiaoball(2));
  }
  ngAfterViewInit() {}
  ngOnDestroy() {}

  // 禁用快选活动框事件
  setboxvalid() {
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
    this.allinput = false;
    if (i === 7 ||i === 10 ||i === 11) {
      this.allinput = true;
    }
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

  // curinpt为当前操作输入框 变量
  // i 数组当前index
  inmoneyfocus(e, i) {
    if (i == "all") {
      this.curinpt = this.setallmoney;
    } else {
      //   this.curinpt = this.selballdata;
    }
    this.setposition(e);
  }
  // 整合 金额框获得焦点事件 /curinpt为当前操作输入框 变量
  // t、i 、q 为对应数据的key值或者index
  inmoney1focus(e, n, t, i, z) {
    let _that = this;
    let str = "dpcdata" + n;
    // ===============
    if (_that[str] instanceof Array) {
      this.curinpt = _that[str][i][t][z];
    } else if (z === null) {
      this.curinpt = _that[str][t][i];
    } else {
      this.curinpt = _that[str][t][i][z];
    }
    this.setposition(e);
  }
  // 龙虎斗 金额框获得焦点事件 /curinpt为当前操作输入框 变量
  // t、i 、q 为对应数据的key值或者index
  //   inmoney2focus(e, i, q) {
  //     // this.curinpt = this.pcdata2[i][q];
  //     this.setposition(e);
  //   }

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
    if (this.curinpt === this.setallmoney) {
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
  // 正特选项点击事件
  zhengteclick(i) {
    let o = this.optionsdata;
    o.zhengteactive = i;
    this.dpcdata5.title = "正特 - " + o.zhengte[o.zhengteactive];
  }
  lianmaclick(i, n) {
    let o = this.optionsdata;
    if (n) {
      o.lianmaactive = i;
    } else {
      o.lianmastactive = i;
    }
    this.dpcdata7.title =
      "连码 - " +
      o.lianma[o.lianmaactive] +
      " - " +
      o.lianmastyle[o.lianmastactive];
  }
  hexiaoclick(i,n){
    let o = this.optionsdata;
    o.hexiaoactive = i;
  }
  zixuanclick(i){
    this.optionsdata.zixuactive = i;
    this.dpcdata11.title = "自选不中 - "+ this.optionsdata.zixuanno[i];
  }
  // 多选框选择事件
  chechange(i) {
    let str = "dpcdata" + this.type;
    let _that = this;
    let d = _that[str].data1;
    if (d[i].checked) {
      d[i].value = this.setallmoney.value;
    } else {
      d[i].value = "";
    }
  }
  // 单选框选择事件
  radchange(i,n) {
     this.dpcdata10.title = this.radvalue;
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
    let t = this.type;
    // 如果是有多选框的页面
    if (t === 7 ||t === 10 ||t === 11) {
      let str = "dpcdata" + t;
      let _that = this;
      let d = _that[str].data1;
      for (let i = 0; i < d.length; i++) {
        d[i].value = "";
        d[i].checked = false;
      }
    }
    this.setallmoney.value = "";
  }
  // 快捷选项下的输入框值改变后的方法，
  allchange() {
    let v = this.setallmoney.value;
    this.amend(v);
  }
  amend(v) {
    let str = "dpcdata" + this.type;
    let _that = this;
    if (_that[str] instanceof Array) {
      for (let q = 0; q < _that[str].length; q++) {
        let d1 = _that[str][q].data1;
        let d2 = _that[str][q].data2;
        this.setvalue(d1, v);
        this.setvalue(d2, v);
      }
    } else {
      let d1 = _that[str].data1;
      let d2 = _that[str].data2;
      this.setvalue(d1, v);
      this.setvalue(d2, v);
    }
  }
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
            // 如果是有多选框的页面
            if (this.type === 7 || this.type === 10 || this.type === 11) {
              if (d[q].checked) {
                d[q].value = v;
              }
            } else {
              d[q].value = v;
            }
          }
        }
      }
    }
  }
  // 限制输入框只能输入数字
  changereg() {
    this.curinpt.value = Number(this.curinpt.value.replace(/\D/g, ""));
  }

  // 确认提交按钮事件
  sub() {
    let data = [];
    this.popup.sub.top = "10px";
    if (this.type === 1) {
      this.popup.sub.top = "300px";
    }

    let point = (11.633 + (1.3 / 7.8) * this.rangevalue).toFixed(3);
    let _that = this;
    let str = "dpcdata" + this.type;
    if (_that[str] instanceof Array) {
      for (let q = 0; q < _that[str].length; q++) {
        let d1 = _that[str][q].data1;
        let d2 = _that[str][q].data2;
        if (d1) {
          if (d1[0] instanceof Array) {
            for (let w = 0; w < d1.length; w++) {
              this.setsubdata(d1[w], data, _that[str][q].title, point);
            }
          } else {
            this.setsubdata(d1, data, _that[str][q].title, point);
          }
        }
        if (d2) {
          if (d2[0] instanceof Array) {
            for (let w = 0; w < d2.length; w++) {
              this.setsubdata(d2[w], data, _that[str][q].title, point);
            }
          } else {
            this.setsubdata(d2, data, _that[str][q].title, point);
          }
        }
      }
    } else {
      let d1 = _that[str].data1;
      let d2 = _that[str].data2;
      if (d1) {
        if (d1[0] instanceof Array) {
          for (let w = 0; w < d1.length; w++) {
            this.setsubdata(d1[w], data, _that[str].title, point);
          }
        } else {
          this.setsubdata(d1, data, _that[str].title, point);
        }
      }
      if (d2) {
        if (d2[0] instanceof Array) {
          for (let w = 0; w < d2.length; w++) {
            this.setsubdata(d2[w], data, _that[str].title, point);
          }
        } else {
          this.setsubdata(d2, data, _that[str].title, point);
        }
      }
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

  // 设置波色球的数据
  setball() {
    let data = [];
    for (let q = 1; q <= 50; q++) {
      let o = Object.assign({}, this.BALL);
      o.numb = q;
      if (q < 50 && q > 40) {
        if (q % 6 === 3 || q % 6 === 4) {
          o.red = true;
        }
        if (q % 6 === 5 || q % 6 === 0) {
          o.blue = true;
        }
        if (q % 6 === 1 || q % 6 === 2) {
          o.green = true;
        }
      }
      if (q < 41 && q > 30) {
        if (q % 6 === 4 || q % 6 === 5) {
          o.red = true;
        }
        if (q % 6 === 0 || q % 6 === 1) {
          o.blue = true;
        }
        if (q % 6 === 2 || q % 6 === 3) {
          o.green = true;
        }
      }
      if (q < 31 && q > 20) {
        if (q % 6 === 5 || q % 6 === 0) {
          o.red = true;
        }
        if (q % 6 === 1 || q % 6 === 2) {
          o.blue = true;
        }
        if (q % 6 === 3 || q % 6 === 4) {
          o.green = true;
        }
      }
      if (q < 21 && q > 10) {
        if (q % 6 === 0 || q % 6 === 1) {
          o.red = true;
        }
        if (q % 6 === 2 || q % 6 === 3) {
          o.blue = true;
        }
        if (q % 6 === 4 || q % 6 === 5) {
          o.green = true;
        }
      }

      if (q < 11) {
        if (q % 6 === 1 || q % 6 === 2) {
          o.red = true;
        }
        if (q % 6 === 3 || q % 6 === 4) {
          o.blue = true;
        }
        if (q % 6 === 5 || q % 6 === 0) {
          o.green = true;
        }
      }
      data.push(o);
    }
    data[data.length - 1].numb = null;
    return data;
  }
// 设置合肖数据
sethexiaoball(n){
    let data = this.setshengxiaoball();
    for (let i = 0; i < data.length; i++) {
       for (let q = 0; q < data[i].length; q++) {
           if(data[i][q].numb === 49){
               data[i].splice(q,1);
           }
       }
    }
    return data[n];
}
// 设置尾号数据
setweiball(n){
    let d = this.setball();
    let data = [];
    for (let i = 0; i < 10; i++) {
        data[i] = [];
        for (let q = 0; q < d.length; q++) {
            if (d[q].numb % 10 === i) {
                let o = Object.assign({},d[q]);
                data[i].push(o);
            }
        }
    }
    return data[n];
}

  // 过滤波色 大小数据。 t为波色 n为大小判断
  setball2(t, n) {
    let d = this.setball();
    d.splice(48);
    let data = d.filter(o => {
      if (n < 2) {
        return o[t] && o.numb % 2 === n;
      } else {
        if (n === 24) {
          return o[t] && o.numb <= n;
        } else {
          return o[t] && o.numb >= n;
        }
      }
    });
    return data;
  }
  // 设置生肖球数据
  setball3(z) {
    let data = this.setshengxiaoball();
    return data[z];
  }
  // 设置生肖球数据
  setshengxiaoball() {
    let d = this.setball();
    d.splice(49);
    let data = [];
    for (let i = 0; i < 12; i++) {
      data[i] = [];
    }
    for (let i = 0; i < d.length; i++) {
      let o = d[i];
      let n = 48 - i + 10;
      if (n >= 12) {
        n = n % 12;
      }
      data[n].push(o);
    }
    return data;
  }
  // 设置正码球数据
  setzhengma() {
    let data = [];
    let d = this.zhengma;
    for (let i = 0; i < d.length; i++) {
      let o = Object.assign({}, this.BALL2);
      o.name = d[i];
      data.push(o);
    }
    return data;
  }
}
