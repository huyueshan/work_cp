import { Component, OnInit } from '@angular/core';
import { MYREPORT, userdef } from "../../../../../factory/usercent";

@Component({
  selector: 'app-myreport',
  templateUrl: './myreport.component.html',
  styleUrls: ['./myreport.component.scss']
})
export class MyreportComponent implements OnInit {
  public querydata = {
    starttime: "",
    endtime: "",
  };
  public pagination = {
    pagenumber: 10, // 每页显示数量
    page: 1, //当前页
    totalPage: 5, //最大页数
    gopage: false, //是否可以选页跳转
    segmentSize: 3, //最大显示页码标签数量
    startFrom: 1 //开始页从1计算
  };
  public hl = {
    firstpage: "首页",
    prevpage: "上一页",
    nextpage: "下一页",
    lastpage: "尾页",
    gopage: "跳转"
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

  // 分页组建事件，e.data.page为需要跳转的页数
  onPageChanged(e) {
    console.log(e.data.page);
  }
}