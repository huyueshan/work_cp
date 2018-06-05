import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recharge",
  templateUrl: "./recharge.component.html",
  styleUrls: ["./recharge.component.scss"]
})
export class RechargeComponent implements OnInit {
  public rechargemoney = 0;
  public rechitemindex = 0;
  public rechitemindex2 = 0;
  public rechitemindex3 = 0;
  public rechitemindex4 = 0;
  public rechitemindex5 = 0;
  public rechitemindex6 = 0;
  public rechitemindex7 = 0;
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
  public rechdata = [
    {
      bgtop: -110,
      hover: false,
      active: false,
      text: "银行卡转账",
      height: 23
    },
    {
      bgtop: -153,
      hover: false,
      active: false,
      text: "在线支付",
      height: 27
    },
    {
      bgtop: -542,
      hover: false,
      active: false,
      text: "支付宝",
      height: 31
    },
    {
      bgtop: -392,
      hover: false,
      active: false,
      text: "微信",
      height: 30
    },
    {
      bgtop: -442,
      hover: false,
      active: false,
      text: "京东",
      height: 30
    }
  ];
  public rechdata2 = [
    {
      bgtop: -200,
      hover: false,
      active: false,
      text: "银行卡转账",
      height: 27
    },
    {
      bgtop: -247,
      hover: false,
      active: false,
      text: "在线支付",
      height: 28
    },
    {
      bgtop: -295,
      hover: false,
      active: false,
      text: "支付宝",
      height: 28
    },
    {
      bgtop: -392,
      hover: false,
      active: false,
      text: "微信",
      height: 31
    },
    {
      bgtop: -542,
      hover: false,
      active: false,
      text: "京东",
      height: 29
    }
  ];
  public rechdata3 = [
    {
      bgtop: -200,
      hover: false,
      active: false,
      text: "支付1",
      height: 27
    },
    {
      bgtop: -153,
      hover: false,
      active: false,
      text: "支付2",
      height: 27
    }
  ];
  public rechdata4 = [
    {
      bgtop: -106,
      hover: false,
      active: false
    },
    {
      bgtop: -156,
      hover: false,
      active: false
    },
    {
      bgtop: -206,
      hover: false,
      active: false
    },
    {
      bgtop: -256,
      hover: false,
      active: false
    },
    {
      bgtop: -306,
      hover: false,
      active: false
    },
    {
      bgtop: -356,
      hover: false,
      active: false
    },
    {
      bgtop: -407,
      hover: false,
      active: false
    },
    {
      bgtop: -156,
      hover: false,
      active: false
    }
  ];
  public rechdata5 = [
    {
      bgtop: -542,
      hover: false,
      active: false,
      text: "支付宝1",
      height: 31
    },
    {
      bgtop: -542,
      hover: false,
      active: false,
      text: "支付宝2",
      height: 31
    }
  ];
  public rechdata6 = [
    {
      bgtop: -343,
      hover: false,
      active: false,
      text: "微信支付1",
      height: 29
    },
    {
      bgtop: -343,
      hover: false,
      active: false,
      text: "微信支付2",
      height: 29
    }
  ];
  public rechdata7 = [
    {
      bgtop: -442,
      hover: false,
      active: false,
      text: "京东支付",
      height: 30
    },
  ];

  constructor() {}

  ngOnInit() {}
  rechitem(i) {
    this.rechitemindex = i;
  }
  rechitem2(i) {
    this.rechitemindex2 = i;
  }
  rechitem3(i) {
    this.rechitemindex3 = i;
  }
  rechitem4(i) {
    this.rechitemindex4 = i;
  }
  rechitem5(i) {
    this.rechitemindex5 = i;
  }
  rechitem6(i) {
    this.rechitemindex6 = i;
  }
  rechitem7(i) {
    this.rechitemindex6 = i;
  }
  set_status(i) {
    this.status.bank = i;
  }
}
