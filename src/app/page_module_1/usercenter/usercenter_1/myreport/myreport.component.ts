import { Component, OnInit } from '@angular/core';
import { MYREPORT, userdef } from "../../../../../factory/usercent";
import userModel from '../../../../../status/user.model';
@Component({
  selector: 'app-myreport',
  templateUrl: './myreport.component.html',
  styleUrls: ['./myreport.component.scss']
})
export class MyreportComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  public querydata = {
    starttime: "",
    endtime: "",
  };
  public pagination = {
    totalNum:20,  //总数据条数 
    pageSize: 5, // 每页显示数量
    curPage: 1, //当前页
    segmentSize: 5, //最大显示页码标签数量
    totalPage:4,// 最大页码数。
  };
  public myreportdata: MYREPORT[];

  public takedata = [
    {
      date: '2018-05-22',
      recharge: 0,
      atm: 0,
      caitou: 2,
      vaildtou:2,
      winning: 0,
      rebates: 0,
      rebatesage : 0,
      bonus : 0,
      profitorloss : -2,
    },
    {
      date: '2018-05-22',
      recharge: 0,
      atm: 0,
      caitou: 2,
      vaildtou:2,
      winning: 0,
      rebates: 0,
      rebatesage : 0,
      bonus : 0,
      profitorloss : -2,
    },
    {
      date: '2018-05-22',
      recharge: 0,
      atm: 0,
      caitou: 2,
      vaildtou:2,
      winning: 0,
      rebates: 0,
      rebatesage : 0,
      bonus : 0,
      profitorloss : -2,
    },
    {
      date: '2018-05-22',
      recharge: 0,
      atm: 0,
      caitou: 2,
      vaildtou:2,
      winning: 0,
      rebates: 0,
      rebatesage : 0,
      bonus : 0,
      profitorloss : -2,
    },
    {
      date: '2018-05-22',
      recharge: 0,
      atm: 0,
      caitou: 2,
      vaildtou:2,
      winning: 0,
      rebates: 0,
      rebatesage : 0,
      bonus : 0,
      profitorloss : -2,
    },
    {
      date: '2018-05-22',
      recharge: 0,
      atm: 0,
      caitou: 2,
      vaildtou:2,
      winning: 0,
      rebates: 0,
      rebatesage : 0,
      bonus : 0,
      profitorloss : -2,
    },
  ];
  constructor() {}

  ngOnInit() {
    this.now_lang_type=userModel.now_lang_type;
    this.inttable();
  }

  // 初始表格数据
  inttable() {
    let data = [];
    for (let i = 0; i < this.takedata.length; i++) {
      // 使用不同的数据默认值！！！
      let item = Object.assign({}, userdef.Myreportdef, this.takedata[i]);
      data.push(item);
    }
    this.myreportdata = data;
  }
  add(t){
    let n = 0;
    let d = this.myreportdata;
    for (let i = 0; i < d.length; i++) {
      n += Number(d[i][t]);
    }
    return n
  }

   // 分页组件点击页码事件，参数i为点击页码数
   getPageData(i) {
    //  此处请求数据
    }
}