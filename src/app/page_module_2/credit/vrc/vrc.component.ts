import { Component, OnInit, OnDestroy, ElementRef } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
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
  public vidon = true; //视频盒子开关
  public chattab = 0; // 聊天盒子tab
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
      y: "-86px",
      defy: "-10px",
      hovery: "-86px"
    },
    {
      value: 50,
      y: "-162px",
      defy: "-162px",
      hovery: "-238px"
    },
    {
      value: 100,
      y: "-314px",
      defy: "-314px",
      hovery: "-390px"
    },
    {
      value: 500,
      y: "-466px",
      defy: "-466px",
      hovery: "-542px"
    },
    {
      value: 1000,
      y: "-618px",
      defy: "-618px",
      hovery: "-694px"
    },
  ];
  // 自定义筹码数据
  public custom={
    value: '',
    y: "-922px",
    defy: "-922px",
    hovery: "-998px",
    color: "black",

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
  public tabledata = [
    {
      channel: "VR彩票百家乐",
      play: "百家乐",
      issue: "20180613121",
      numb: "和",
      money1: "10",
      money2: "0",
      status: 0
    },
    {
      channel: "VR彩票百家乐",
      play: "百家乐",
      issue: "20180613121",
      numb: "和",
      money1: "10",
      money2: "0",
      status: 1
    },
    {
      channel: "VR彩票百家乐",
      play: "百家乐",
      issue: "20180613121",
      numb: "和",
      money1: "10",
      money2: "0",
      status: 2
    },
    {
      channel: "VR彩票百家乐",
      play: "百家乐",
      issue: "20180613121",
      numb: "和",
      money1: "10",
      money2: "0",
      status: 3
    }
  ];

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
  public pagination = {
      totalNum:40,  //总数据条数 
      pageSize: 4, // 每页显示数量
      curPage: 1, //当前页
      segmentSize: 5, //最大显示页码标签数量
      totalPage:10,// 最大页码数。
      };


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
}

// 弹窗
  setshade(){
    // this.shade.w = document.body.clientWidth;
    this.shade.w = screen.width;
    this.shade.h = screen.height;
  }
  //表单删除事件
  del(i) {
    this.tabledata.splice(i, 1);
  }
  // 提交按钮事件
  sub() {
    console.log(this.actiondata);
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
        b[j].y = b[j].defy;
      }
      this.custom.y= this.custom.defy;
      this.custom.color= 'black';
      if (i===-1) {
        this.custom.y= this.custom.hovery;
        this.custom.color= 'white';
        this.oddsmoney = Number(this.custom.value);
      }else{

          b[i].y = b[i].hovery;
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
  linkrouter(L) {
    // 跳转路由
    this.router.navigate([L]);
  } 
  
  // 分页组件点击页码事件，参数i为点击页码数
  getPageData(i) {
      console.log(i);
  }
}
