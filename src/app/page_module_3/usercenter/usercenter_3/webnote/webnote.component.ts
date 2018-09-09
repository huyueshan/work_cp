import { Component, OnInit } from '@angular/core';
import userModel from '../../../../../status/user.model';
@Component({
  selector: 'app-webnote',
  templateUrl: './webnote.component.html',
  styleUrls: ['./webnote.component.scss']
})
export class WebnoteComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  public pagination = {
    totalNum:20,  //总数据条数 
    pageSize: 5, // 每页显示数量
    curPage: 1, //当前页
    segmentSize: 5, //最大显示页码标签数量
    totalPage:4,// 最大页码数。
  };

  public webnotedata=[
    {
      id:'1',
      text:'友情提醒：周流水大闯关活动彩金派送通知',
      time:'2018-05-30',
      hover: false,
    },
    {
      id:'2',
      text:'友情提醒：周流水大闯关活动彩金派送通知',
      time:'2018-05-30',
      hover:false,
    },
    {
      id:'3',
      text:'友情提醒：周流水大闯关活动彩金派送通知',
      time:'2018-05-30',
      hover:false,
    },
    {
      id:'4',
      text:'友情提醒：周流水大闯关活动彩金派送通知',
      time:'2018-05-30',
      hover:false,
    },
    {
      id:'5',
      text:'友情提醒：周流水大闯关活动彩金派送通知',
      time:'2018-05-30',
      hover:false,
    },
  ];
  constructor() { }

  ngOnInit() {
  }
enter(i){
  this.webnotedata[i].hover = true;
}
leave(i){
  this.webnotedata[i].hover = false;
}

  // 分页组件点击页码事件，参数i为点击页码数
    getPageData(i) {
        //  此处请求数据
    }
}
