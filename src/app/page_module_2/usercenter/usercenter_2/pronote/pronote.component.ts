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
    pagenumber: 10, // 每页显示数量
    page: 1, //当前页
    totalPage: 5, //最大页数
    gopage: false, //是否可以选页跳转
    segmentSize: 3, //最大显示页码标签数量
    startFrom: 1 //开始页从1计算
  };
  public hl = {
    firstpage: this.now_lang.User_center_c.Index,
    prevpage: this.now_lang.User_center_c.Prepage,
    nextpage: this.now_lang.User_center_c.Nextpage,
    lastpage: this.now_lang.User_center_c.Tail_page,
    gopage: this.now_lang.User_center_c.Jump
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
  onPageChanged(e) {
    console.log(e.data.page);
  }
}
