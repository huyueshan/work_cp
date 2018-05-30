import { Component, OnInit } from '@angular/core';
import { QUOTA, userdef } from "../../../../factory/usercent";
@Component({
  selector: 'app-proquota',
  templateUrl: './proquota.component.html',
  styleUrls: ['./proquota.component.scss']
})
export class ProquotaComponent implements OnInit {
  public protype = '重庆时时彩【信】';
  public quotadefdata: QUOTA[];

  public takedata = [
    {
      type:"总和单双",
      min: 1,
      maxbonus: 20000,
      max: 100000,
    },
    {
      type:"总和大小",
      min: 1,
      maxbonus: 50000,
      max: 300000,
    },
    {
      type:"球号单双",
      min: 1,
      maxbonus: 20000,
      max: 100000,
    },
    {
      type:"球号号码",
      min: 1,
      maxbonus: 50000,
      max: 200000,
    },
    {
      type:"球号大小",
      min: 1,
      maxbonus: 20000,
      max: 100000,
    },
    {
      type:"龙虎斗",
      min: 1,
      maxbonus: 10000,
      max: 200000,
    },
    {
      type:"前三",
      min: 1,
      maxbonus: 20000,
      max: 100000,
    },
    {
      type:"中三",
      min: 1,
      maxbonus: 20000,
      max: 100000,
    },
    {
      type:"后三",
      min: 1,
      maxbonus: 50000,
      max: 400000,
    },
    {
      type:"全5中1",
      min: 1,
      maxbonus: 100000,
      max: 200000,
    },
  ];
  constructor() {}

  ngOnInit() {
    this.inttable();
  }

  // 初始表格数据
  inttable() {
    let data = [];
    for (let i = 0; i < this.takedata.length; i++) {
      // 使用不同的数据默认值！！！
      let item = Object.assign({}, userdef.Quotadef, this.takedata[i]);
      data.push(item);
    }
    this.quotadefdata = data;
  }
}