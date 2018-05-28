import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  public tabactive = 0; // 头部导航是否鼠标经过
  public tableactive = 0; // 底部大图标链接位置是否鼠标经过
  // 头部左边导航数据
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
      link: "/usercenter"
    },
    {
      text: "优惠活动",
      bgpositiony: "-312",
      isover: false,
      link: ""
    }
  ];
  // 头部右边导航数据
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
  // 中间内容取tab数据
  public mdtabdata = [
    {
      text: "热门游戏",
      link: ""
    },
    {
      text: "移动端下载",
      link: ""
    },
    {
      text: "优惠活动",
      link: ""
    }
  ];
  // 热门游戏彩种球数据
  public ball_list = [
    {
      url: 'url("../images/ball_04.png")',
      x: -10,
      y: -10,
      left: "-240"
    },
    {
      url: 'url("../images/ball_05.png")',
      x: -122,
      y: -134,
      left: "-120"
    },
    {
      url: 'url("../images/ball_01.png")',
      x: -346,
      y: -10,
      left: "0"
    },
    {
      url: 'url("../images/ball_02.png")',
      x: -346,
      y: -134,
      left: "120"
    },
    {
      url: 'url("../images/ball_03.png")',
      x: -10,
      y: -258,
      left: "240"
    },
    {
      url: 'url("../images/ball_04.png")',
      x: -10,
      y: -258,
      left: "360"
    },
    {
      url: 'url("../images/ball_05.png")',
      x: -10,
      y: -258,
      left: "480"
    },
    {
      url: 'url("../images/ball_06.png")',
      x: -10,
      y: -10,
      left: "600"
    },
    {
      url: 'url("../images/ball_07.png")',
      x: -122,
      y: -134,
      left: "720"
    },
    {
      url: 'url("../images/ball_08.png")',
      x: -234,
      y: -10,
      left: "840"
    },
    {
      url: 'url("../images/ball_09.png")',
      x: -10,
      y: -134,
      left: "960"
    },
    {
      url: 'url("../images/ball_08.png")',
      x: -234,
      y: -9,
      left: "1080"
    },
    {
      url: 'url("../images/ball_09.png")',
      x: -10,
      y: -134,
      left: "1200"
    }
  ];
  // 热门游戏内容区数据
  public hotcard_list= [
    {
      src : require("../images/shishicai.jpg"),
      title: '时时彩',
      link: '',
    },
    {
      src : require("../images/shifencai.jpg"),
      title: '分时彩',
      link: '',
    },
    {
      src : require("../images/VR_cai.jpg"),
      title: 'VR彩',
      link: '',
    },
    
  ];
  // 投注排行和中奖排行数据
  public touzhu_list = [, , , , , , , , , , ,];

  constructor(private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {}
  // 中间内容区tab切换事件
  mdtabclick(i) {
    this.tabactive = i;
  }
   // 头部左右导航鼠标经过事件
  navmouseenter(i, t) {
    if (t == "left") {
      this.navdatal[i].isover = true;
    }else{
      this.navdatar[i].isover = true;
    }
  }
  navmouseleave(i, t) {
    if (t == "left") {
      this.navdatal[i].isover = false;
    }else{
      this.navdatar[i].isover = false;
    }
  }
  // todo:热门游戏小球移动效果
  ballclick(t) {
    let data = this.ball_list;
    if(t == "left"){
      if (Number(data[0].left) < -600) {
        return;
      } else {
        for (let i = 0; i < data.length; i++) {
            data[i].left = "" + (Number(data[i].left) - 120);
          }
        }
    }else{
      if(Number(data[data.length - 1].left) > 1320){
        return;
      } else{
        for (let i = 0; i < data.length; i++) {
          data[i].left = "" + (Number(data[i].left) + 120);
        }
      }
    }
      
  }
  linkrouter(t){
    console.log(t);
    // let e = "/login"
    this.router.navigate([t]);
    // this.router.navigate(["/home"]);
  }
}
