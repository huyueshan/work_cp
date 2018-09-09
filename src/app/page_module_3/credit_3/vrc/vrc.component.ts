import { Component, OnInit } from "@angular/core";
import { Router} from "@angular/router";
import userModel from "../../../../status/user.model";

@Component({
  selector: "app-vrc",
  templateUrl: "./vrc.component.html",
  styleUrls: ["./vrc.component.scss"]
})
export class VRcComponent implements OnInit {
  loadpage = false;
    public outnumber = [3,9,5] //开奖号码
    public cpnav = {
        style: "credit",
        prev:'20180517022',
        prevball:[3,9,5],
        next:'20180517023',
        time:''
    };
    public media = true;
  public chatput = ''; // 绑定聊天盒子输入框
  public addmoney = 0;
  public oddsmoney = 10;
  public actiondata = [
    {
      name: "闲赢",
      odds: "1 : 1",
      value: 0,
      active: false
    },
    {
      name: "和",
      odds: "1 : 8",
      value: 0,
      active: false
    },
    {
      name: "庄赢",
      odds: "1 : 1",
      value: 0,
      active: false
    },
    {
      name: "闲对",
      odds: "1 : 8",
      value: 0,
      active: false
    },
    {
      name: "庄对",
      odds: "1 : 8",
      value: 0,
      active: false
    }
  ];
  public balldata = [
    {
      value: 10,
      active: true,
    },
    {
      value: 50,
      active: false,
    },
    {
      value: 100,
      active: false,
    },
    {
      value: 500,
      active: false,
    },
    {
      value: 1000,
      active: false,
    },
  ];
  // 自定义筹码数据
  public custom={
    value: '',
    active: false,

  };
  // 说明提示数据
  public tipsactive = 0;
  public querydatelistindex = 0;
  public querydatelist = [
    {
      text: "今天",
      active: false
    },
    {
      text: "昨天",
      active: false
    },
    {
      text: "前天",
      active: false
    },
    {
      text: "大前天",
      active: false
    }
  ];
  public SUB_OB={
    channel: "VR彩票百家乐",
    play: "百家乐",
    issue: "20180613121",
    numb: "",
    money1: "0",
    money2: "0",
    status: 0
  };
  public toudata = []; // 投注数据
  public tabledata = []; // 当前表单显示数据

  public querystyle = 0;
  //   public tablestatus = 0; // 绑定表单状态 未开奖/撤单/中奖/未中奖

  //弹窗
  public shade = {
    show: false,
    w: 0,
    h: 0
  };
  public shadedata;
  //传给分页组件数据 
  public PAGOB = {
    totalNum:0, 
    pageSize: 4, 
    curPage: 1, 
    segmentSize: 5, 
    totalPage:0,
};
  public pagination = {
      totalNum:0,  //总数据条数 
      pageSize: 4, // 每页显示数量
      curPage: 1, //当前页
      segmentSize: 5, //最大显示页码标签数量
      totalPage:0,// 最大页码数。
  };
  // 传给弹窗组件数据
  public  popoutInfo={
      title:'string',
      msg:'string',
      event: false,
      show: false,
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadpage = userModel.platform;
    this.setshade();
    
    
}

// 显示弹窗
shadec(i){
    this.shadedata = this.tabledata[i];
    this.shade.show = true;
}
//关闭弹窗
closec(){
    this.shade.show = false;
}
// 撤单
chedan(){
    this.shadedata.status = 1;
    this.POPNOTE({msg:'撤单成功！'});
}

// 弹窗
  setshade(){
    this.shade.w = screen.width;
    this.shade.h = screen.height;
  }
  //表单删除事件
  del(i) {
    this.tabledata.splice(i, 1);
    // let n = this.pagination.pageSize * (this.pagination.curPage - 1) + i
    // this.toudata.splice(n, 1)
  }
  // 提交按钮事件
  sub() {
    let d = this.actiondata;
    let toud = this.toudata;
    let n = 0;
    for (let i = 0; i < d.length; i++) {
        if (Number(d[i].value)>0) {
            let o = Object.assign({},this.SUB_OB);
            o.numb = d[i].name;
            o.money1 = d[i].value+'';
            toud.unshift(o);
            n++;
        }
    }
    if (n>0) {
        this.POPNOTE({msg:'提交成功！'});
    }else{
        this.POPNOTE({msg:'请完成下注内容！'});
    }
    //此处应提交数据 同时请求更新的投注数据 分页数据一定要改变对象指针
    let po= Object.assign({},this.PAGOB);
    po.totalNum = toud.length;
    this.pagination = Object.assign({},po);
    this.tabledata = toud.slice(0,this.pagination.pageSize)
    this.clear();
  }
  // 清空按钮事件，清空所有投注数据
  clear() {
    let d = this.actiondata;
    for (let i = 0; i < d.length; i++) {
      d[i].value = 0;
      d[i].active = false;
    }
    this.addmoney = 0;
  }
  // 投注区点击事件
  palyclick(n) {
    let d = this.actiondata;
    d[n].value += this.oddsmoney;
    this.addmoney += this.oddsmoney;
    d[n].active = true;
  }
  // 中间筹码 球点击事件
  ballclick(i) {
      let b = this.balldata;
      for (let j = 0; j < b.length; j++) {
        b[j].active = false;
      }
      this.custom.active = false;
      if (i===-1) {
        this.custom.active = true;
        this.oddsmoney = Number(this.custom.value);
      }else{
          b[i].active = true;
          this.oddsmoney = Number(b[i].value);
      }
  }
  changereg() {
    let v = this.custom;
    v.value = v.value.replace(/\D/g, "");
    if (Number(v.value) === 0 || v.value === "") {
        v.value = "1";
    }
    this.oddsmoney = Number(this.custom.value);
}
// 右键点击下注球事件
mouse_r_click(e,n){
    if(e.button ==2){
        this.actiondata[n].active = false;
        this.addmoney -= this.actiondata[n].value;
        this.actiondata[n].value = 0;
    }
}
  linkrouter(L) {
    // 跳转路由
    this.router.navigate([L]);
  } 
  
  // 分页组件点击页码事件，参数i为点击页码数
  getPageData(i) {
      console.log(i);
      let start = this.pagination.pageSize * (i-1);
      this.tabledata = this.toudata.slice(start,start+this.pagination.pageSize)
  }
  // 绑定给弹窗组件的事件；
  NOTARIZE(){
      return
  }
  // 弹窗关闭事件 可以自定义命名
  closePopouot(e){
      this.popoutInfo.show = false;
  }

  // 弹窗显示事件 data为对象 fn传一个方法时点击确认时触发
  POPNOTE(data,fn=null){
      let o = {
          title:'操作提示',   //title不传值默认为 ‘操作提示’
          msg:' ',
          event: false,
          show: true,
      }
      if (typeof fn === 'function') {
          this.NOTARIZE = fn;
          o.event = true;
      }else{
          this.NOTARIZE = ()=>{return};
      }
      this.popoutInfo = Object.assign({},o,data);
  }
}
