import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goucaiquery',
  templateUrl: './goucaiquery.component.html',
  styleUrls: ['./goucaiquery.component.scss']
})
export class GoucaiqueryComponent implements OnInit {
  
public querydata = {
  starttime:'',
  endtime:'',
  caizhong:'全部',
  playtype:'全部',
  status:'全部',
  iswrap: true,
}
public pagination = {
  pagenumber:10, // 每页显示数量
  page:1, //当前页
  totalPage:5, //最大页数
  gopage: false, //是否可以选页跳转
  segmentSize:3, //最大显示页码标签数量
  startFrom:1, //开始页从1计算
}
  constructor() { }

  ngOnInit() {
  }
  // 分页组建事件，e.data.page为需要跳转的页数
  onPageChanged(e){
    console.log(e.data.page);
  }

}
