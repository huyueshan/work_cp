import { Component, OnInit,Input, Output, EventEmitter, HostListener} from '@angular/core';

@Component({

  selector: 'app-pupout',
  templateUrl: './pupout.component.html',
  styleUrls: ['./pupout.component.scss']
})
export class PupoutComponent implements OnInit{
  @Input() data: {
      title:string,
      message:string,
      event:boolean,
      show: boolean,
      scale: boolean,
  };
  @Output() private close=new EventEmitter();
  @HostListener('window:resize',['$event']) onResize(e){
    this.setfixed(this.popup.note, 300, 160);
  }

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
        left: 200,
        top: 50,
    },
};
  constructor() { }

  ngOnInit() {
      let p = this.popup;
      p.shade.w = screen.width;
      p.shade.h = screen.height;
      this.setfixed(p.note, 300, 160);
  }

      // 提示信息窗口关闭事件
      click(b=false) {
        this.close.emit(b);
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
