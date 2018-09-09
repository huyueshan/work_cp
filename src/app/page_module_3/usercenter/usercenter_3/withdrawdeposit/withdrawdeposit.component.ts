import { Component, OnInit } from "@angular/core";
import userModel from "../../../../../status/user.model";

@Component({
  selector: "app-withdrawdeposit",
  templateUrl: "./withdrawdeposit.component.html",
  styleUrls: ["./withdrawdeposit.component.scss"]
})
export class WithdrawdepositComponent implements OnInit {
  public now_lang: any = userModel.langpackage;
  public now_lang_type: any = "zh";
  public rechargemoney = 0;
  public rechitemindex = 0;
  public rechitemindex2 = 0;
  public rechitemindex3 = -1;
  public moneyitemindex = 0;
  public customoney = ""; //自定义金额
  public activeinfo = {
    inaccount: false
  };
  public status = {
    bank: 1
  };
  public moneydata = {
    money: "",
    name: ""
  };
  public rechdata3 = [
    {
      bgtop: -74,
      text: "中国工商银行",
      carnumb: "*********8888",
      height: 12,
      width: 12
    },
    {
      bgtop: -10,
      text: "中国银行",
      carnumb: "*********8888",
      height: 12,
      width: 12
    },
    {
      bgtop: -42,
      text: "中国建设银行",
      carnumb: "*********8888",
      height: 12,
      width: 12
    }
  ];

  constructor() {}

  ngOnInit() {}

  changereg() {
    let v = this.customoney;
    v = v.replace(/\D/g, "");
    if (Number(v) === 0 || v === "") {
      this.customoney = "0";
    }
    if (Number(v) > 0) {
      this.customoney = v;
      this.moneydata.money = v;
    }
  }
}
