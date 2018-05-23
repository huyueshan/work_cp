import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  public url = "background:url('../images/nav_01.png') 0 -104px;";
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

  constructor() {}

  ngOnInit() {}
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
}
