import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss']
})
export class RechargeComponent implements OnInit {
  public rechitemindex = 0;
  public rechitemindex2 = 0;
  public activeinfo = {
    inaccount:false,
  };
  public status = {
    bank:1,

  };
  public moneydata={
    money:'',
    name:'',
  }
  public rechdata=[
    {
      bgtop: -110,
      hover:false,
      active: false,
      text:'银行卡转账',
      height:23,
    },
    {
      bgtop: -153,
      hover:false,
      active: false,
      text:'在线支付',
      height:27,
    },
    {
      bgtop: -542,
      hover:false,
      active: false,
      text:'支付宝',
      height:31,
      
    },
    {
      bgtop: -392,
      hover:false,
      active: false,
      text:'微信',
      height:30,
      
    },
    {
      bgtop: -442,
      hover:false,
      active: false,
      text:'京东',
      height:30,
      
    },
  ];
  public rechdata2=[
    {
      bgtop: -200,
      hover:false,
      active: false,
      text:'银行卡转账',
      height:27,
    },
    {
      bgtop: -247,
      hover:false,
      active: false,
      text:'在线支付',
      height:28,
    },
    {
      bgtop: -295,
      hover:false,
      active: false,
      text:'支付宝',
      height:28,
      
    },
    {
      bgtop: -392,
      hover:false,
      active: false,
      text:'微信',
      height:31,
      
    },
    {
      bgtop: -542,
      hover:false,
      active: false,
      text:'京东',
      height:29,
      
    },
  ];

  constructor() { }

  ngOnInit() {
  }
  rechitem(i){
    this.rechitemindex=i; 
  }
  rechitem2(i){
    this.rechitemindex2=i; 
  }
  set_status(i){
    this.status.bank = i;

  }

}
