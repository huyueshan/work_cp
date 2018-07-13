import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Router,Route, ActivatedRoute, Params, NavigationEnd } from "@angular/router";
import userModel from "../../../../status/user.model";
import { Base } from "../../../../factory/base.model";
import "rxjs/add/operator/filter";

@Component({
  selector: "app-credit",
  templateUrl: "./ffc.component.html",
  styleUrls: ["./ffc.component.scss"]
})
export class FfccreditComponent implements OnInit, OnDestroy, AfterViewInit {
    loadpage = false;
    public cpnav = {
      style: "credit",
      prev: "20180517022",
      prevball: [2, 5, 9, 0, 8],
      next: "20180517023",
      time: ""
    };
    public odds = 7.8; // 赔率
    public rastep = 7.8; // 滑动条步长
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
    public BALL = {
      numb: 0,
      value: "",
      point:0,
      step:0,
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
    public contenttoptitle3 = [, , , , ,];
    public setallmoney = {
      value: ""
    }; //绑定快捷金额
    // 活动选择框的位置
    public boxposition = {
      x: "",
      y: ""
    };
    public POINt_data = {
        betdata1: {
          data1: [
            { name: "大", point: 1.8, step: 0.02 },
            { name: "小", point: 1.8, step: 0.02 },
            { name: "单", point: 1.8, step: 0.02 },
            { name: "双", point: 1.8, step: 0.02 }
          ],
          data2: [
            { numb: 0, point: 9, step: 0.1 },
            { numb: 1, point: 9, step: 0.1 },
            { numb: 2, point: 9, step: 0.1 },
            { numb: 3, point: 9, step: 0.1 },
            { numb: 4, point: 9, step: 0.1 },
            { numb: 5, point: 9, step: 0.1 },
            { numb: 6, point: 9, step: 0.1 },
            { numb: 7, point: 9, step: 0.1 },
            { numb: 8, point: 9, step: 0.1 },
            { numb: 9, point: 9, step: 0.1 }
          ],
          data3: [
            { name: "总大", point: 1.8, step: 0.156 / 7.8 },
            { name: "总小", point: 1.8, step: 0.156 / 7.8 },
            { name: "总单", point: 1.8, step: 0.156 / 7.8 },
            { name: "总双", point: 1.8, step: 0.156 / 7.8 }
          ],
          data4: [
            { name: "豹子", point: 86.8, step: 7.8 / 7.8 },
            { name: "顺子", point: 11.633, step: 1.3 / 7.8 },
            { name: "对子", point: 2.496, step: 0.289 / 7.8 },
            { name: "杂六", point: 1.926, step: 0.26 / 7.8 },
            { name: "半顺", point: 1.772, step: 0.216 / 7.8 }
          ]
        },
        longhu: {
            long: { name: "龙", point: 1.994, step: 0.224 / 7.8 },
            he: { name: "和", point: 8.98, step: 0.78 / 7.8 },
            hu: { name: "虎", point: 1.994, step: 0.224 / 7.8 },
          },
          betdata3:{
              data1:[
                { numb: 0, point: 2.099, step: 0.191 / 7.8 },
                { numb: 1, point: 2.099, step: 0.191 / 7.8 },
                { numb: 2, point: 2.099, step: 0.191 / 7.8 },
                { numb: 3, point: 2.099, step: 0.191 / 7.8 },
                { numb: 4, point: 2.099, step: 0.191 / 7.8 },
                { numb: 5, point: 2.099, step: 0.191 / 7.8 },
                { numb: 6, point: 2.099, step: 0.191 / 7.8 },
                { numb: 7, point: 2.099, step: 0.191 / 7.8 },
                { numb: 8, point: 2.099, step: 0.191 / 7.8 },
                { numb: 9, point: 2.099, step: 0.191 / 7.8 },
              ]
          }  
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
            { name: "总大", value: "", point: 0, step: 0 },
            { name: "总小", value: "", point: 0, step: 0 },
            { name: "总单", value: "", point: 0, step: 0 },
            { name: "总双", value: "", point: 0, step: 0 }
          ],
          data2: []
        }
      ];
      public betdatab = {
        title: "整合 - 前三",
        data1: [
          { name: "豹子", value: "", point: 0, step: 0 },
          { name: "顺子", value: "", point: 0, step: 0 },
          { name: "对子", value: "", point: 0, step: 0 },
          { name: "杂六", value: "", point: 0, step: 0 },
          { name: "半顺", value: "", point: 0, step: 0 }
        ]
      };
    
      public betdata2 = [
        {
          numb: 0,
          title: "万千  第一球VS第二球",
          value1: { value: "", point: 0, step: 0 },
          value2: { value: "", point: 0, step: 0 },
          value3: { value: "", point: 0, step: 0 }
        },
        {
          numb: 1,
          title: "万百  第一球VS第三球",
          value1: { value: "", point: 0, step: 0 },
          value2: { value: "", point: 0, step: 0 },
          value3: { value: "", point: 0, step: 0 }
        },
        {
          numb: 2,
          title: "万十  第一球VS第四球",
          value1: { value: "", point: 0, step: 0 },
          value2: { value: "", point: 0, step: 0 },
          value3: { value: "", point: 0, step: 0 }
        },
        {
          numb: 3,
          title: "万个  第一球VS第五球",
          value1: { value: "", point: 0, step: 0 },
          value2: { value: "", point: 0, step: 0 },
          value3: { value: "", point: 0, step: 0 }
        },
        {
          numb: 4,
          title: "千百  第二球VS第三球",
          value1: { value: "", point: 0, step: 0 },
          value2: { value: "", point: 0, step: 0 },
          value3: { value: "", point: 0, step: 0 }
        },
        {
          numb: 5,
          title: "千十  第二球VS第四球",
          value1: { value: "", point: 0, step: 0 },
          value2: { value: "", point: 0, step: 0 },
          value3: { value: "", point: 0, step: 0 }
        },
        {
          numb: 6,
          title: "千个  第二球VS第五球",
          value1: { value: "", point: 0, step: 0 },
          value2: { value: "", point: 0, step: 0 },
          value3: { value: "", point: 0, step: 0 }
        },
        {
          numb: 7,
          title: "百十  第三球VS第四球",
          value1: { value: "", point: 0, step: 0 },
          value2: { value: "", point: 0, step: 0 },
          value3: { value: "", point: 0, step: 0 }
        },
        {
          numb: 8,
          title: "百个  第三球VS第五球",
          value1: { value: "", point: 0, step: 0 },
          value2: { value: "", point: 0, step: 0 },
          value3: { value: "", point: 0, step: 0 }
        },
        {
          numb: 9,
          title: "十个  第四球VS第五球",
          value1: { value: "", point: 0, step: 0 },
          value2: { value: "", point: 0, step: 0 },
          value3: { value: "", point: 0, step: 0 }
        }
      ];
      public betdata3 = [
        { numb: 0, value: "", point: 0, step: 0 },
        { numb: 1, value: "", point: 0, step: 0 },
        { numb: 2, value: "", point: 0, step: 0 },
        { numb: 3, value: "", point: 0, step: 0 },
        { numb: 4, value: "", point: 0, step: 0 },
        { numb: 5, value: "", point: 0, step: 0 },
        { numb: 6, value: "", point: 0, step: 0 },
        { numb: 7, value: "", point: 0, step: 0 },
        { numb: 8, value: "", point: 0, step: 0 },
        { numb: 9, value: "", point: 0, step: 0 },
      ];
    // =弹窗对话框数据
  
      
    public popup = {
      // 遮罩层
      shade: {
          show: false,
          w: 0,
          h: 0
      },
      // 设置快捷金额
      setnumb: {
          show: false,
          drag:false,
          dragleft:0,
          dragtop:0,
          value: "",
          left:200,
          top:50,
          scale:false,
          data: []
      },
      // 提示信息框
      note: {
          show: false,
          drag:false,
          dragleft:0,
          dragtop:0,
          messsage: "",
          left:200,
          top:50,
          scale:false,
      },
      // 提交框
      sub: {
          show: false,
          drag:false,
          dragleft:0,
          dragtop:0,
          left:10,
          top: 10,
          scale:false,
          data: []
      }
  };
  public notetip = [];
    public subdata = [];
    public submoney = 0;
    public subob = {
      channel: "重庆时时彩",
      type: "-",
      id: "20180808",
      ball: "-",
      number: "-",
      point: "-",
      money: "-"
    };
    constructor(private el: ElementRef, private router: Router, private route: ActivatedRoute) {}
  
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
        this.subob.channel = "时时彩 - " + this.routeid;
      });
      // 设置各投注项目赔率
      this.POINT();
    }
    ngAfterViewInit() {}
    ngOnDestroy() {}  
    POINT() {
        let _that = this;
        let p = _that.POINt_data;
            let d3 = this.betdata3;
            for (let q = 0; q < d3.length; q++) {            
                this.setpoint(p.betdata3.data1,d3[q],"numb");
            }
            let d2 = this.betdata2;
            for (let q = 0; q < d2.length; q++) {
              d2[q].value1.point = p.longhu.long.point;
              d2[q].value1.step = p.longhu.long.step;
              d2[q].value2.point = p.longhu.he.point;
              d2[q].value2.step = p.longhu.he.step;
              d2[q].value3.point = p.longhu.hu.point;
              d2[q].value3.step = p.longhu.hu.step;
            }
            let d1 = this.betdatam;
            for (let w = 0; w < d1.length; w++) {
                if (w === d1.length-1 ) {
                    for (let j = 0; j < d1[w].data1.length; j++) {
                    this.setpoint(p.betdata1.data3,d1[w].data1[j],"name");
                    }
                    
                }else{
                    for (let j = 0; j < d1[w].data1.length; j++) {
                    this.setpoint(p.betdata1.data1,d1[w].data1[j],"name");
                    }
    
                    for (let j = 0; j < d1[w].data2.length; j++) {
                    this.setpoint(p.betdata1.data2,d1[w].data2[j],"numb");
                    }
                }
            }
            let db = this.betdatab.data1;
            for (let q = 0; q < db.length; q++) {            
                this.setpoint(p.betdata1.data4,db[q],"name");
            }
    }
      setpoint(data,d,name){
        if (d[name] !== null) {
            for (let t = 0; t < data.length; t++) {
                if (String(data[t][name]) === String(d[name])) {
                    d.point = data[t].point;
                    d.step = data[t].step;
                    return
                }
            }
        }
      }
    // 禁用快选活动框事件
      setboxvalid() {
          this.boxvalid = !this.boxvalid;
          let s = this.boxvalid?"快捷金额已开启":"快捷金额已禁用";
          this.NOTEtip(s);
          setTimeout(() => {
              this.popup.note.show = false;
          }, 2000);
      }
    // 滑块左侧递减事件
      rangevaluelessen() {
          if (this.rangevalue > 0) {
              this.rangevalue -= this.rastep;
          }
      }
      // 滑块左侧递加事件
      rangevalueadd() {
          if (this.rangevalue < this.odds) {
              this.rangevalue += this.rastep;
          }
      }
    //前中后三切换事件
    btolastclick(i){
      this.btolast = i;
      this.betdatab.title = i===0?'整合 - 前三':i===1?'整合 - 中三':'整合 - 后三';
    }
    // 切换玩法事件 /整合/龙虎斗/全五中一
    togtype(i) {
        this.reset();
        this.type = i;
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
              this.SETM();
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
      this.NOTEtip("保存成功！");
      setTimeout(() => {
        this.close();
      }, 2000);
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
    //====快选金额事件end=============
    // 提示信息窗口关闭事件
    close() {
        let p = this.popup;
        p.setnumb.show = false;
        p.shade.show = false;
        p.sub.show = false;
        p.note.show = false;
    }
    // 提示信息窗口触发事件 index为提示信息notetip的index或者直接传字符串
    NOTEtip(i){
        let p = this.popup;
        if (typeof(i)==="string") {
            p.note.messsage = i;
        }else{
            this.notetip[i]?p.note.messsage = this.notetip[i]:i;
        }
        this.setfixed(p.note,300,160);
        p.note.scale = false;
        p.note.show = true;
        p.shade.show = true;
        setTimeout(() => {
            p.note.scale = true;
        }, 10);
    }
    // 提交窗口触发事件 d为提交数据
    SUB(d){
        let p = this.popup;
        this.subdata = d;
        this.setfixed(p.sub,800,470);
        p.sub.scale = false;
        p.sub.show = true;
        p.shade.show = true;
        setTimeout(() => {
            p.sub.scale = true;
        }, 10);
    }
    // 设置快捷金额窗口
    SETM(){
        let p = this.popup;
        this.setfixed(p.setnumb,260,410);
        p.setnumb.scale = false;
        p.setnumb.show = true;
        p.shade.show = true;
        setTimeout(() => {
            p.setnumb.scale = true;
        }, 10);
    }
    setfixed(t,w,h){
        let WIDTH = document.body.clientWidth;
        let HEIGHT = document.body.clientHeight;
        t.left = (WIDTH - w)/2<0?0:(WIDTH - w)/2;
        t.top = (HEIGHT - h)/2<10?10:(HEIGHT - h)/2;
    }
    // 弹窗拖动事件
    popmousedown(e,p){
        let _that = this;
        let t = _that.popup[p];
        let ev = e || event;
        t.drag = true;
        t.dragleft = ev.clientX-t.left;
        t.dragtop = ev.clientY-t.top;
    }
    popmouseup(e,p){
        let _that = this;
        let t = _that.popup[p];
        t.drag = false;
    }
    popmousmove(e,p){
        let _that = this;
        let t = _that.popup[p];
        if (t.drag) {
            let ev = e || event;
            t.left = ev.clientX-t.dragleft;
            t.top =ev.clientY-t.dragtop;
        }
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
        this.curinpt = this.betdatab.data1[i];
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
        box.y = e.target.offsetTop + 36 + "px";
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
      if (this.type == 3) {
        let d = this.betdata3;
        this.setvalue(d, v);
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
          this.setvalue(d[w].data1, v);
          this.setvalue(d[w].data2, v);
        }
        let b = this.betdatab.data1;
        this.setvalue(b, v);
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
      if (this.type == 3) {
        let d = this.betdata3;
        this.setsubdata(d,data, '全5中1');
      }
      if (this.type == 2) {
        let d = this.betdata2;
        for (let i = 0; i < d.length; i++) {
          if (Number(d[i].value1.value) > 0) {
            let l = data.length;
            data[l] = Object.assign({}, this.subob);
            data[l].type = "龙虎斗";
            data[l].ball = "龙";
            data[l].point = parseFloat((d[i].value1.point+(d[i].value1.step*this.rangevalue)).toFixed(3));
            data[l].money = d[i].value1.value;
          }
          if (Number(d[i].value2.value) > 0) {
            let l = data.length;
            data[l] = Object.assign({}, this.subob);
            data[l].type = "龙虎斗";
            data[l].ball = "和";
            data[l].point = parseFloat((d[i].value2.point+(d[i].value2.step*this.rangevalue)).toFixed(3));
            data[l].money = d[i].value2.value;
          }
          if (Number(d[i].value3.value) > 0) {
            let l = data.length;
            data[l] = Object.assign({}, this.subob);
            data[l].type = "龙虎斗";
            data[l].ball = "虎";
            data[l].point = parseFloat((d[i].value3.point+(d[i].value3.step*this.rangevalue)).toFixed(3));
            data[l].money = d[i].value3.value;
          }
        }
      }
      if (this.type == 1) {
        let d = this.betdatam;
        let p = this.betdatab;
        for (let i = 0; i < d.length; i++) {
          let d1 = d[i].data1;
          let d2 = d[i].data2;
          let title = "整合 - " + d[i].title;
          this.setsubdata(d1,data, title);
          this.setsubdata(d2,data, title);
        }
        let title = p.title;
        this.setsubdata(p.data1, data, title);
      }
      if(data.length>0){
          this.submoney = 0;
          for (let i = 0; i < data.length; i++) {
              this.submoney += Number(data[i].money);
          }
          this.SUB(data);
          return false;
          
      }else{
          // ===此处提示完成投注内容提示
          this.NOTEtip("请完成投注内容！");
          return false;
      }
    }
    //设置单元数据提交
    setsubdata(d, data, str) {
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
            data[l].point = parseFloat((d[q].point+(d[q].step*this.rangevalue)).toFixed(3));
            data[l].money = d[q].value;
          }
        }
      }
    }
    submit(){
        this.close();
        this.reset();
        this.NOTEtip("提交订单成功！");
        setTimeout(() => {
          this.close();
        }, 2000);
    }
  
    linkrouter(t) {
      this.router.navigate([t]);
    }
    routlink(){
      let str ;
      this.route.params.subscribe(data=>str=data.id);
      this.router.navigate(['/lottery/officialffc', str]);
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
        value: "",
        point: 0,
        step: 0
      };
    }
    return data;
  }
  }
  
