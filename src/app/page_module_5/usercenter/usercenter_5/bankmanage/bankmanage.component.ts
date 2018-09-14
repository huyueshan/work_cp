import { Component, OnInit } from '@angular/core';

import { HttpInterceptorService } from "../../../../../factory/Http.Service";

import { Api } from "../../../../../factory/api.model";

import userModel from '../../../../../status/user.model';
@Component({
  selector: 'app-bankmanage',
  templateUrl: './bankmanage.component.html',
  styleUrls: ['./bankmanage.component.scss']
})
export class BankmanageComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
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
  constructor( private http:HttpInterceptorService) { }

  ngOnInit() {
    this.now_lang_type=userModel.now_lang_type;

    this.http.get(Api.gettest,{}).then(res => {
        console.log('请求到的数据：', res);
    });
  }
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
