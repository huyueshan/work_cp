import { Component, OnInit } from "@angular/core";
import userModel from '../../../../../status/user.model';
@Component({
  selector: "app-recharge",
  templateUrl: "./recharge.component.html",
  styleUrls: ["./recharge.component.scss"]
})
export class RechargeComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  public rechargemoney = 0;
  public rechitemindex = 0;
  public rechitemindex2 = 0;
  public rechitemindex3 = -1;
  public moneyitemindex = 0;
  public nameinputactive = false;
  public customoney = ''; //自定义金额
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
  public moneyitem = ['100','500','1000','1500'];
  public rechdata = [
    {
      bgtop: -212,
      active: false,
      text: this.now_lang.User_center_c.Bank_transfer,
      height: 19,
      width:23,
    },
    {
      bgtop: -251,
      active: false,
      text: this.now_lang.User_center_c.Online_pay,
      height: 19,
      width:19,
    },
    {
      bgtop: -290,
      active: false,
      text: this.now_lang.User_center_c.Zhifubao,
      height: 20,
      width:20,
    },
    {
      bgtop: -174,
      active: false,
      text: this.now_lang.User_center_c.Weixin,
      height: 18,
      width:18,
    },
    {
      bgtop: -370,
      active: false,
      text: this.now_lang.User_center_c.Jindong,
      height: 20,
      width:20,
    }
  ];
  public rechdata2 = [
    {
      bgtop: -452,
      active: false,
      text: '网银转账',
      height: 23,
      width:26,
    },
    {
      bgtop: -106,
      active: false,
      text: 'ATM入款',
      height: 13,
      width:24,
    },
    {
      bgtop: -139,
      active: false,
      text: '银行柜台',
      height: 15,
      width:15,
    },
    {
      bgtop: -410,
      active: false,
      text: '手机转账',
      height: 22,
      width:14,
    },
    {
      bgtop: -290,
      active: false,
      text: '支付宝',
      height: 22,
      width:20,
    },
    {
      bgtop: -174,
      active: false,
      text: '微信',
      height: 18,
      width:18,
    }
  ];
  public rechdata3 = [
    {
      bgtop: -74,
      text: "中国工商银行",
      carnumb:'*********8888',
      height: 12,
      width:12,
    },
    {
      bgtop: -10,
      text: "中国银行",
      carnumb:'*********8888',
      height: 12,
      width:12,
    },
    {
      bgtop: -42,
      text: "中国建设银行",
      carnumb:'*********8888',
      height: 12,
      width:12,
    },
  ];

  constructor() {}

  ngOnInit() {}



  changereg() {
    let v = this.customoney;
    v= v.replace(/\D/g, "");
    if (Number(v) === 0 || v === "") {
        this.customoney = '1';
    }
    if (Number(v) > 0) {
        this.customoney = v;
        this.moneydata.money = v;
    }
}

  rechitem(i, d) {
      let _that = this;
        _that[d] = i;
        if (d === 'moneyitemindex') {
            this.moneydata.money = this.moneyitem[i];
        }
  }

}
