import { Component, OnInit } from "@angular/core";
import userModel from "../../../../../status/user.model";
@Component({
  selector: "app-bankmanage",
  templateUrl: "./bankmanage.component.html",
  styleUrls: ["./bankmanage.component.scss"]
})
export class BankmanageComponent implements OnInit {
  public now_lang: any = userModel.langpackage;
  public now_lang_type: any = "zh";
  public addbanck = false;
  public formdata = {
    username:'',
    bankname:'',
    bankbranch:'',
    cardnmb:'',
    phone:'',
    note:'',
    checkvalue:''
  };
  public bankdata = [
    {
      username: "赌圣",
      bankname: "中国银行深圳支行",
      cardnmb: "8888***************",
      status: "正常",
      time: "2018-08-08 08:08:08"
    },
    {
      username: "赌圣",
      bankname: "中国银行深圳支行",
      cardnmb: "8888***************",
      status: "正常",
      time: "2018-08-08 08:08:08"
    },
    {
      username: "赌圣",
      bankname: "中国银行深圳支行",
      cardnmb: "8888***************",
      status: "正常",
      time: "2018-08-08 08:08:08"
    },
    {
      username: "赌圣",
      bankname: "中国银行深圳支行",
      cardnmb: "8888***************",
      status: "正常",
      time: "2018-08-08 08:08:08"
    },
  ];
  public popup = {
    // 遮罩层
    shade: {
      w: 0,
      h: 0
    },
    // 提示信息框
    note: {
      drag: false,
      dragleft: 0,
      dragtop: 0,
      left: 0,
      top: 0,
      scale: false
    }
  };

  public pagination = {
    totalNum: 20, //总数据条数
    pageSize: 5, // 每页显示数量
    curPage: 1, //当前页
    segmentSize: 5, //最大显示页码标签数量
    totalPage: 4 // 最大页码数。
  };
  constructor() {}

  ngOnInit() {
    this.now_lang_type = userModel.now_lang_type;
  }

  delbankitem(i){
    this.bankdata.splice(i,1);
  }



  addbank() {
    let p = this.popup;
    p.shade.w = screen.width;
    p.shade.h = screen.height;
    this.setfixed(p.note, 500, 520);
    this.addbanck = true;
    p.note.scale = false;
    setTimeout(() => {
      p.note.scale = true;
    }, 10);
  }



  deladd() {
    this.addbanck = false;
    this.popup.note.scale = false;
  }
  addsub() {
    alert("提交数据！");
    this.deladd();
  }

  // 设置显示位置
  setfixed(t, w, h) {
    let WIDTH = document.body.clientWidth;
    let HEIGHT = document.body.clientHeight;
    t.left = (WIDTH - w) / 2 < 0 ? 0 : (WIDTH - w) / 2;
    t.top = (HEIGHT - h) / 2 < 10 ? 10 : (HEIGHT - h) / 2;
  }
  // 弹窗拖动事件
  popmousedown(e) {
    let t = this.popup.note;
    let ev = e || event;
    t.drag = true;
    t.dragleft = ev.clientX - t.left;
    t.dragtop = ev.clientY - t.top;
  }
  popmouseup(e) {
    let t = this.popup.note;
    t.drag = false;
  }
  popmousmove(e) {
    let t = this.popup.note;
    if (t.drag) {
      let ev = e || event;
      t.left = ev.clientX - t.dragleft;
      t.top = ev.clientY - t.dragtop;
    }
  }
  // 分页组件点击页码事件，参数i为点击页码数
  getPageData(i) {
    //  此处请求数据
    console.log(i);
  }
}
