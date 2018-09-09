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
  public showhich :any=[];
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
  // public hoveridex = -1;
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
  toggle_show(item){
    console.log('????')
    console.log($.inArray(item, this.showhich))
    if ($.inArray(item, this.showhich)===-1) {
      this.showhich.push(item);
    }else{
      this.showhich.splice($.inArray(item,this.showhich),1); 
    }
  }
  onPageChanged(e) {
    console.log(e.data.page);
  }
  isInArray(arr,value){
      var index = $.inArray(value,arr);
      if(index >= 0){
          return true;
      }
      return false;
  }
}
