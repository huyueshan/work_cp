import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
<<<<<<< HEAD
  public url = "background:url('../images/nav_01.png') 0 -104px;";
=======
  public tabactive = 0;
>>>>>>> e56c7ffdc8c8974d6f691c0eba24dfba123b61ee
  public navdatal = [
    {
      text: "首页",
      bgpositiony: "0",
      isover: false,
      link: ""
    },
    {
      text: "彩票大厅",
      bgpositiony: "-104",
      isover: false,
      link: ""
    },
    {
      text: "用户中心",
      bgpositiony: "-208",
      isover: false,
      link: ""
    },
    {
      text: "优惠活动",
      bgpositiony: "-312",
      isover: false,
      link: ""
    }
  ];
  public navdatar = [
    {
      text: "平台公告",
      bgpositiony: "0",
      isover: false,
      link: ""
    },
    {
      text: "彩种信息",
      bgpositiony: "-104",
      isover: false,
      link: ""
    },
    {
      text: "手机下注",
      bgpositiony: "-208",
      isover: false,
      link: ""
    },
    {
      text: "在线客服",
      bgpositiony: "-312",
      isover: false,
      link: ""
    }
  ];
<<<<<<< HEAD

  constructor() {}

  ngOnInit() {}
=======
  public mdtabdata = [
    {
      text:'热门游戏',
      link:''
    },
    {
      text:'移动端下载',
      link:''
    },
    {
      text:'优惠活动',
      link:''
    },
  ];
  public ball_list = [
    {
      url:'url("../images/ball_01.png")',
      x: -346,
      y: -10,
      left:'0'
    },
    {
      url:'url("../images/ball_02.png")',
      x: -346,
      y: -134,
      left:'120'
    },
    {
      url:'url("../images/ball_03.png")',
      x: -10,
      y: -258,
      left:'240'
    },
    {
      url:'url("../images/ball_04.png")',
      x: -10,
      y: -258,
      left:'360'
    },
    {
      url:'url("../images/ball_05.png")',
      x: -10,
      y: -258,
      left:'480'
    },
    {
      url:'url("../images/ball_06.png")',
      x: -10,
      y: -10,
      left:'600'
    },
    {
      url:'url("../images/ball_07.png")',
      x: -122,
      y: -134,
      left:'720'
    },
    {
      url:'url("../images/ball_08.png")',
      x: -234,
      y: -10,
      left:'840'
    },
    {
      url:'url("../images/ball_09.png")',
      x: -10,
      y: -134,
      left:'960'
    },
    {
      url:'url("../images/ball_08.png")',
      x: -234,
      y: -10,
      left:'840'
    },
    {
      url:'url("../images/ball_09.png")',
      x: -10,
      y: -134,
      left:'960'
    },
  ];
  public touzhu_list= [,,,,,,,,,,,];
  public foottopitem_list=[
    {
      x:'-1',
      zh:'如何存款',
      en:'HOW TO DEPOSIT',
      link:''
    },
    {
      x:'-254',
      zh:'如何取款',
      en:'WITHDRAW MONEY',
      link:''
    },
    {
      x:'-506',
      zh:'代理加盟',
      en:'AGENT TO JOIN',
      link:''
    },
    {
      x:'-759',
      zh:'手机投注',
      en:'MOBILEBETTING',
      link:''
    },

  ];
  public foothelp_list=[
    {
      text:'存款帮助',
      link:''
    },
    {
      text:'联系我们',
      link:''
    },
    {
      text:'取款帮助',
      link:''
    },
    {
      text:'常见问题',
      link:''
    },

  ];
  constructor() {}
  
  ngOnInit() {
  }
  mdtabclick(i){
    this.tabactive = i;
  }
>>>>>>> e56c7ffdc8c8974d6f691c0eba24dfba123b61ee
  navmouseenter(i, t) {
    if (t == "left") {
      this.navdatal[i].isover = true;
    }
    this.navdatar[i].isover = true;
  }
  navmouseleave(i, t) {
    if (t == "left") {
      this.navdatal[i].isover = false;
    }
    this.navdatar[i].isover = false;
  }
<<<<<<< HEAD
=======
  // todo:热门游戏小球移动效果
  ballclick(t){
    console.log('dianjil');
    let data = this.ball_list;
    for (let i = 0; i < data.length; i++) {
      if (t == "left") {
        data[i].left =''+ (Number(data[i].left)-120);
      }else{
        data[i].left =''+ (Number(data[i].left)+120);      }
      
    }

  }
>>>>>>> e56c7ffdc8c8974d6f691c0eba24dfba123b61ee
}
