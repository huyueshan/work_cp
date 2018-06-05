import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-withdrawdeposit",
  templateUrl: "./withdrawdeposit.component.html",
  styleUrls: ["./withdrawdeposit.component.scss"]
})
export class WithdrawdepositComponent implements OnInit {
  public addbanck = false;
  public status = 0;
  public currentab = -1;
  public shade = {
    w: 0,
    h: 0
  };
  public querydata = {
    starttime: "",
    endtime: "",
  };
  
  public formdata = {
    username: "",
    bankname: "",
    bankbranch: "",
    cardnmb: "",
    phone: "",
    note: "",
    checkvalue: ""
  };
  public subdata = {
    money:0,
    password:'',
  }
  public tabselect1= false;
  public tabselect2= false;
  public tabledata = [
    {
      starttime:'起始：2018-06-01 16:00:00',
      endtime:'结束：2018-06-03 16:00:00',
      data1:'1000',
      data2:'0',
      data3:'-',
      data4:'10',
      data5:'100',
      data6:'',
      data7:'否',
      data8:'是',
      data9:'0 ',
      data10:'1',
      data11:'通过',
      data12:'否',
    },
    {
      starttime:'起始：2018-06-01 16:00:00',
      endtime:'结束：2018-06-03 16:00:00',
      data1:'1000',
      data2:'0',
      data3:'-',
      data4:'10',
      data5:'100',
      data6:'',
      data7:'否',
      data8:'是',
      data9:'0 ',
      data10:'1',
      data11:'通过',
      data12:'否',
    },
    {
      starttime:'起始：2018-06-01 16:00:00',
      endtime:'结束：2018-06-03 16:00:00',
      data1:'1000',
      data2:'0',
      data3:'-',
      data4:'10',
      data5:'100',
      data6:'',
      data7:'否',
      data8:'是',
      data9:'0 ',
      data10:'1',
      data11:'通过',
      data12:'否',
    },
    {
      starttime:'起始：2018-06-01 16:00:00',
      endtime:'结束：2018-06-03 16:00:00',
      data1:'1000',
      data2:'0',
      data3:'-',
      data4:'10',
      data5:'100',
      data6:'',
      data7:'否',
      data8:'是',
      data9:'0 ',
      data10:'1',
      data11:'通过',
      data12:'否',
    },
  ];
  constructor() {}

  ngOnInit() {}
  addbank() {
    this.shade.w = document.body.clientWidth;
    this.shade.h = screen.height;
    this.addbanck = true;
  }
  deladd() {
    this.addbanck = false;
  }
}
