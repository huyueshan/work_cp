
import { Component, OnInit, OnDestroy, ElementRef } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import userModel from "../../../../status/user.model";

@Component({
  selector: 'app-vrc',
  templateUrl: './vrc.component.html',
  styleUrls: ['./vrc.component.scss']
})
export class VRcComponent implements OnInit {
    loadpage = false;

    vidon = true;

    public addmoney = 0;
    public oddsmoney = 10;
    public actiondata = [
        {
            name:'闲赢',
            odds:'1 : 1',
            value:0,
            active:false,
        },
        {
            name:'和',
            odds:'1 : 1',
            value:0,
            active:false,
        },
        {
            name:'庄赢',
            odds:'1 : 1',
            value:0,
            active:false,
        },
        {
            name:'闲对',
            odds:'1 : 8',
            value:0,
            active:false,
        },
        {
            name:'庄对',
            odds:'1 : 8',
            value:0,
            active:false,
        },
    ];
    public balldata = [
        {
            value: 10,
            y:'-450px',
            defy:'-10px',
            hovery:'-450px',
        },
        {
            value: 50,
            y:'-98px',
            defy:'-98px',
            hovery:'-538px',
        },
        {
            value: 100,
            y:'-186px',
            defy:'-186px',
            hovery:'-626px',
        },
        {
            value: 500,
            y:'-274px',
            defy:'-274px',
            hovery:'-714px',
        },
        {
            value: 1000,
            y:'-362px',
            defy:'-362px',
            hovery:'-802px',
        },
    ];
  constructor(private router: Router) { }

  ngOnInit() {
    this.loadpage = userModel.platform;
  }
  // 提交按钮事件
  sub(){
      console.log(this.actiondata);
  }
  // 清空按钮事件，清空所有投注数据
  clear(){
    let d = this.actiondata;
    for(let i = 0; i< d.length; i++){
        d[i].value = 0 ;
        d[i].active =false;
    }
    this.addmoney = 0 ;
  }
  // 投注区点击事件
  palyclick(n){
      let d = this.actiondata;
    d[n].value += this.oddsmoney;
    this.addmoney += this.oddsmoney;
    d[n].active = true;
  }
  // 中间筹码 球点击事件
  ballclick(i){
      let b = this.balldata;
      for (let j = 0; j < b.length; j++) {
        b[j].y = b[j].defy;
      }
      b[i].y = b[i].hovery;
      this.oddsmoney = b[i].value;

  }
  linkrouter(L) {
    // 跳转路由
    this.router.navigate([L]);
  }

}
