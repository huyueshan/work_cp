import { Component, OnInit } from "@angular/core";
import userModel from '../../../../../status/user.model';

@Component({
  selector: "app-pronote",
  templateUrl: "./pronote.component.html",
  styleUrls: ["./pronote.component.scss"]
})
export class PronoteComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  public pagination = {
    totalNum:20,  //总数据条数 
    pageSize: 5, // 每页显示数量
    curPage: 1, //当前页
    segmentSize: 5, //最大显示页码标签数量
    totalPage:4,// 最大页码数。
  };
  public checkall = false;
  public noread = 0;
  public pronotedata = [
    {
      id: "numb1",
      check: false,
      addresser: "系统消息",
      theme: "重磅推出：VR彩种火爆上线！ 拷贝",
      time: "2018-05-30  14:48:50",
      isread: false
    },
    {
      id: "numb2",
      check: false,
      addresser: "系统消息",
      theme: "重磅推出：VR彩种火爆上线！ 拷贝",
      time: "2018-05-30  14:48:50",
      isread: false
    },
    {
      id: "numb3",
      check: false,
      addresser: "系统消息",
      theme: "重磅推出：VR彩种火爆上线！ 拷贝",
      time: "2018-05-30  14:48:50",
      isread: false
    },
    {
      id: "numb4",
      check: false,
      addresser: "系统消息",
      theme: "重磅推出：VR彩种火爆上线！ 拷贝",
      time: "2018-05-30  14:48:50",
      isread: false
    },
    {
      id: "numb5",
      check: false,
      addresser: "系统消息",
      theme: "重磅推出：VR彩种火爆上线！ 拷贝",
      time: "2018-05-30  14:48:50",
      isread: false
    },
    {
      id: "numb6",
      check: false,
      addresser: "系统消息",
      theme: "重磅推出：VR彩种火爆上线！ 拷贝",
      time: "2018-05-30  14:48:50",
      isread: false
    }
  ];
  constructor() {}

  ngOnInit() {
    this.noreadnumb();
  }

  read() {
    let d = this.pronotedata;
    for (let i = 0; i < d.length; i++) {
      if (d[i].check) {
        d[i].isread = true;
      }
    }
    this.noreadnumb();
  }
  noreadnumb(){
    let d = this.pronotedata;
    let n = 0;
    for (let i = 0; i < d.length; i++) {
      if (!d[i].isread) {
        n++;
      }
    }
    this.noread = n;
  }
  clear() {
    let d = this.pronotedata;
    let n = [];
    for (let i = 0; i < d.length; i++) {
      if(!d[i].check){
        n.push(d[i]);
      }
    }
    this.pronotedata = n;
    this.noreadnumb();
  }
  allchange() {
    let d = this.pronotedata;
    if (this.checkall) {
      for (let i = 0; i < d.length; i++) {
        d[i].check = true;
      }
    } else {
      for (let i = 0; i < d.length; i++) {
        d[i].check = false;
      }
    }
  }
  itemchange(){
    this.checkall = true;
    let d = this.pronotedata;
    for (let i = 0; i < d.length; i++) {
      if(!d[i].check){
        this.checkall = false;
        return;
      }
    }
  }
  // 分页组件点击页码事件，参数i为点击页码数
  getPageData(i) {
    //  此处请求数据
    console.log(i);
}
}
