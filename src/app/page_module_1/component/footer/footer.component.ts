import { Component, OnInit } from '@angular/core';
import userModel from '../../../../status/user.model';
import { Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";
import { Base } from "../../../../factory/base.model";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // 底部大图链接处数据
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  public foottopitem_list = [
    {
      x: "0",
      zh: this.now_lang.index.HOW_TO_DEPOSIT,
      en: "HOW TO DEPOSIT",
      link: ""
    },
    {
      x: "-254",
      zh: this.now_lang.index.WITHDRAW_MONEY,
      en: "WITHDRAW MONEY",
      link: ""
    },
    {
      x: "-505",
      zh: this.now_lang.index.AGENT_TO_JOIN,
      en: "AGENT TO JOIN",
      link: ""
    },
    {
      x: "-759",
      zh: this.now_lang.index.MOBILEBETTING,
      en: "MOBILEBETTING",
      link: ""
    }
  ];
  // 底部使用帮助数据
  public foothelp_list = [
    {
      text: this.now_lang.index.Money_help,
      link: ""
    },
    {
      text: this.now_lang.index.Connect_us,
      link: ""
    },
    {
      text: this.now_lang.index.Withdraw_help,
      link: ""
    },
    {
      text: this.now_lang.index.Normal_prom,
      link: ""
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
    this.now_lang_type=userModel.now_lang_type;
  }
  
  linkclick(i){
    Base.Store.set('indexitem',i,false);
    this.router.navigate(["/index"]);
}
   // 底部大图标链接处鼠标经过事件
  //  footmouseenter(i) {
  //   this.foottopitem_list[i].isover = true;
  // }
  // footmouseleave(i) {
  //   this.foottopitem_list[i].isover = false;
  // }

}
