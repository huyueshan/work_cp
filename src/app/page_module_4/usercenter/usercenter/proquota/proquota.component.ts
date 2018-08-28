import { Component, OnInit } from '@angular/core';
import { QUOTA, userdef } from "../../../../../factory/usercent";
import userModel from '../../../../../status/user.model';
@Component({
  selector: 'app-proquota',
  templateUrl: './proquota.component.html',
  styleUrls: ['./proquota.component.scss']
})
export class ProquotaComponent implements OnInit {
  public protype = '重庆时时彩【信】';
  public quotadefdata: QUOTA[];
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  public takedata = [
    {
      type:this.now_lang.User_center_c.Sum_odd_eve,
      min: 1,
      maxbonus: 20000,
      max: 100000,
    },
    {
      type:this.now_lang.User_center_c.Sum_big_sma,
      min: 1,
      maxbonus: 50000,
      max: 300000,
    },
    {
      type:this.now_lang.User_center_c.Ball_odd_eve,
      min: 1,
      maxbonus: 20000,
      max: 100000,
    },
    {
      type:this.now_lang.User_center_c.Ball_number,
      min: 1,
      maxbonus: 50000,
      max: 200000,
    },
    {
      type:this.now_lang.User_center_c.Ball_number_size,
      min: 1,
      maxbonus: 20000,
      max: 100000,
    },
    {
      type:this.now_lang.User_center_c.Dragon_tiger,
      min: 1,
      maxbonus: 10000,
      max: 200000,
    },
    {
      type:this.now_lang.User_center_c.Firsr_three,
      min: 1,
      maxbonus: 20000,
      max: 100000,
    },
    {
      type:this.now_lang.User_center_c.Mid_three,
      min: 1,
      maxbonus: 20000,
      max: 100000,
    },
    {
      type:this.now_lang.User_center_c.Last_three,
      min: 1,
      maxbonus: 50000,
      max: 400000,
    },
    {
      type:this.now_lang.User_center_c.All_5_1,
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