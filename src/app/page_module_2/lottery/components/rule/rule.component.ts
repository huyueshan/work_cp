import { Component, OnInit,Input, Output, OnChanges, EventEmitter, HostListener} from '@angular/core';

import { CPLAY } from '../../../../../factory/cpdata';

@Component({

  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss']
})
export class RuleComponent implements OnInit, OnChanges{
    @Input() ruleshow ;
    @Input() cptype;
    @Input() cpstyle;
    @Input() cpnav; // 所有彩种数据
    @Input() cpname; // 当前彩种名字

  @Output() private close=new EventEmitter();
  @HostListener('window:resize',['$event']) onResize(e){
    this.setfixed(this.popup.note, 850, 640);
  }
  public rule_data=""; // 规则内容
  public navdata = []; // 导航数据
  public gamename = ''

  public scale = false;

  public popup = {
    // 遮罩层
    shade: {
        w: 0,
        h: 0
    },
    note: {
        drag: false,
        dragleft: 0,
        dragtop: 0,
        left: 200,
        top: 50,
    },
};
  constructor() { }

  ngOnInit() {
      let p = this.popup;
      p.shade.w = screen.width;
      p.shade.h = screen.height;
      this.pageInit();
  }
  ngOnChanges(){
      this.pageInit();
    }
    pageInit(){
        // 设置当前官方或信用玩法彩种导航数据
        this.navdata = [];
        for (let i = 0; i < this.cpnav.length; i++) {
            if (this.cpnav[i][this.cpstyle]) {
                this.navdata.push(this.cpnav[i])
            }
        }
        
        this.gamename = this.cpname;
        this.rule_data = CPLAY[this.cptype][this.cpstyle]

        let p = this.popup;
        this.setfixed(p.note, 850, 640);
        this.scale = false;
        setTimeout(() => {
            this.scale = true;
        }, 10); 
    }
    //彩种导航点击事件
    navchange(item){
        this.gamename = item.text;
        this.rule_data = CPLAY[item.type][this.cpstyle]
    }

      // 窗口关闭事件
    click(e=false) {
        this.close.emit();
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
