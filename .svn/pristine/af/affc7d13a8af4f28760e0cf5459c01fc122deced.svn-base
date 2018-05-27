import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // 底部大图链接处数据
  public foottopitem_list = [
    {
      x: "-1",
      isover: false,
      zh: "如何存款",
      en: "HOW TO DEPOSIT",
      link: ""
    },
    {
      x: "-254",
      isover: false,
      zh: "如何取款",
      en: "WITHDRAW MONEY",
      link: ""
    },
    {
      x: "-506",
      isover: false,
      zh: "代理加盟",
      en: "AGENT TO JOIN",
      link: ""
    },
    {
      x: "-759",
      isover: false,
      zh: "手机投注",
      en: "MOBILEBETTING",
      link: ""
    }
  ];
  // 底部使用帮助数据
  public foothelp_list = [
    {
      text: "存款帮助",
      link: ""
    },
    {
      text: "联系我们",
      link: ""
    },
    {
      text: "取款帮助",
      link: ""
    },
    {
      text: "常见问题",
      link: ""
    }
  ];
  constructor() { }

  ngOnInit() {
  }
   // 底部大图标链接处鼠标经过事件
   footmouseenter(i) {
    this.foottopitem_list[i].isover = true;
  }
  footmouseleave(i) {
    this.foottopitem_list[i].isover = false;
  }

}
