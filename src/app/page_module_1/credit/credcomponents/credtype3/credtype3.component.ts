// import { validators } from './../../../component/ui';
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-credtype3",
  templateUrl: "./credtype3.component.html",
  styleUrls: ["./credtype3.component.scss"]
})
export class Credtype3Component implements OnInit {
  @Input() rangevalue;
  //   public rangevalue = 0; //绑定滑动条数据
  @Input() selectbtnvalue;
  public setallmoney = {
    value: ""
  }; //绑定快捷金额
  public boxshow = false; // 选择金额框
  public boxposition = {
    x: "",
    y: ""
  };
  public curinpt;
  public betdata = [
    {
      numb: 0,
      value: "",
      order: 0
    },
    {
      numb: 1,
      value: "",
      order: 5
    },
    {
      numb: 2,
      value: "",
      order: 1
    },
    {
      numb: 3,
      value: "",
      order: 6
    },
    {
      numb: 4,
      value: "",
      order: 2
    },
    {
      numb: 5,
      value: "",
      order: 7
    },
    {
      numb: 6,
      value: "",
      order: 3
    },
    {
      numb: 7,
      value: "",
      order: 8
    },
    {
      numb: 8,
      value: "",
      order: 4
    },
    {
      numb: 9,
      value: "",
      order: 9
    }
  ];
  public contenttoptitle = [, , , , ,];

  constructor() {}

  ngOnInit() {}

  inmoneyfocus(e, i) {
    this.boxshow = true;
    let box = this.boxposition;
    box.x = e.target.offsetLeft - 4 + "px";
    box.y = e.target.offsetTop + 24 + "px";
    if (i == "all") {
      this.curinpt = this.setallmoney;
      console.log(this.curinpt);
    } else {
      this.curinpt = this.betdata[i];
    }
  }
  inmoneyblur() {
    setTimeout(() => {
      this.boxshow = false;
    }, 200);
  }
  optinclick(i) {
    this.curinpt.value = i;
    this.boxshow = false;
  }
  reset() {
    let d = this.betdata;
    for (let i = 0; i < d.length; i++) {
      d[i].value = "";
    }
    this.setallmoney.value = "";
  }
}
