import { Component, OnInit } from "@angular/core";
import userModel from '../../../../../status/user.model';

@Component({
  selector: "app-withdrawdeposit",
  templateUrl: "./withdrawdeposit.component.html",
  styleUrls: ["./withdrawdeposit.component.scss"]
})
export class WithdrawdepositComponent implements OnInit {
    public now_lang :any=userModel.langpackage;
    public now_lang_type :any='zh';
  public addbanck = false;
  public status = 0;
  public currentab = -1;
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
        scale: false,
    },
};
  public querydata = {
    starttime: "",
    endtime: "",
  };
  
  public formdata = {
    username: "",
    bankname: "",
    bankbranch: "",
    cardnmb: "",
    phone: "",
    note: "",
    checkvalue: ""
  };
  public subdata = {
    money:0,
    password:'',
  }
  public tabselect1= false;
  public tabselect2= false;
  public tabledata = [
    {
      starttime:'起始：2018-06-01 16:00:00',
      endtime:'结束：2018-06-03 16:00:00',
      data1:'1000',
      data2:'0',
      data3:'-',
      data4:'10',
      data5:'100',
      data6:'',
      data7:'否',
      data8:'是',
      data9:'0 ',
      data10:'1',
      data11:'通过',
      data12:'否',
    },
    {
      starttime:'起始：2018-06-01 16:00:00',
      endtime:'结束：2018-06-03 16:00:00',
      data1:'1000',
      data2:'0',
      data3:'-',
      data4:'10',
      data5:'100',
      data6:'',
      data7:'否',
      data8:'是',
      data9:'0 ',
      data10:'1',
      data11:'通过',
      data12:'否',
    },
    {
      starttime:'起始：2018-06-01 16:00:00',
      endtime:'结束：2018-06-03 16:00:00',
      data1:'1000',
      data2:'0',
      data3:'-',
      data4:'10',
      data5:'100',
      data6:'',
      data7:'否',
      data8:'是',
      data9:'0 ',
      data10:'1',
      data11:'通过',
      data12:'否',
    },
    {
      starttime:'起始：2018-06-01 16:00:00',
      endtime:'结束：2018-06-03 16:00:00',
      data1:'1000',
      data2:'0',
      data3:'-',
      data4:'10',
      data5:'100',
      data6:'',
      data7:'否',
      data8:'是',
      data9:'0 ',
      data10:'1',
      data11:'通过',
      data12:'否',
    },
  ];
  constructor() {}

  ngOnInit() {}
  addbank(){
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
  deladd(){
    this.addbanck = false;
    this.popup.note.scale = false;
  }
  addsub(){
      alert('提交数据！');
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
}
