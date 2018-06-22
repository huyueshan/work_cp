import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-wenlu',
  templateUrl: './wenlu.component.html',
  styleUrls: ['./wenlu.component.scss']
})
export class WenluComponent implements OnInit {

    public bottabactive = 0; // 控制 底部问路tab标签变量
    public typeoption = "龙虎斗"; //绑定 底部问路选择框数据
    public bottomtabdata;
    public bottomtabdata1 = [
      {
        name: "1vs2"
      },
      {
        name: "1vs3"
      },
      {
        name: "1vs4"
      },
      {
        name: "1vs5"
      },
      {
        name: "2vs3"
      },
      {
        name: "2vs4"
      },
      {
        name: "2vs5"
      },
      {
        name: "3vs4"
      },
      {
        name: "3vs5 "
      },
      {
        name: "4vs5"
      }
    ];
    public bottomtabdata2 = [
      {
        name: "球号"
      },
      {
        name: "单双"
      },
      {
        name: "大小"
      },
      {
        name: "总和单双"
      },
      {
        name: "总和大小"
      }
    ];
  
    public typeoptiondata = [
      "第一球",
      "第二球",
      "第三球",
      "第四球",
      "第五球",
      "龙虎斗"
    ];
    public tablebox1 = {
        name: "大路",
        width: "780px",
        evleft: 0,
        drag: false,
        left: "0px",
        data: []
      };
      public tablebox2 = {
        name: "盘珠路",
        width: "170px",
        evleft: 0,
        drag: false,
        left: "0px",
        data: []
      };
      public tablebox3 = {
        name: "大眼路",
        width: "170px",
        evleft: 0,
        drag: false,
        left: "0px",
        data: []
      };
      public tablebox4 = {
        name: "小路",
        width: "170px",
        evleft: 0,
        drag: false,
        left: "0px",
        data: []
      };
      public tablebox5 = {
        name: "曱甴路",
        width: "170px",
        evleft: 0,
        drag: false,
        left: "0px",
        data: []
      };
    
  

  constructor(private el: ElementRef,) { }

  ngOnInit() {
    this.typeoptchange(); //初始问路tab数据；
    this.tablebox1.data = this.setwenludata(); //临时测试数据
    this.tablebox2.data = this.setwenludata(); //临时测试数据
    this.tablebox3.data = this.setwenludata(); //临时测试数据
    this.tablebox4.data = this.setwenludata(); //临时测试数据
    this.tablebox5.data = this.setwenludata(); //临时测试数据

  }

  typeoptchange() {
    this.bottabactive = 0;
    if (this.typeoption === "龙虎斗") {
      this.bottomtabdata = this.bottomtabdata1;
    } else {
      this.bottomtabdata = this.bottomtabdata2;
    }
  }

    // 底部问路拖拽事件
  // ev 事件对象 ， t 当前表格数据对象
  dragdown(ev, t) {
    let _that = this;
    let d = _that[t];
    let e = ev || event;
    let str = "#" + t;
    let ele = this.el.nativeElement.querySelector(str);
    d.evleft = e.clientX - ele.offsetLeft;
    d.drag = true;
  }
  // ev 事件对象 ， t 当前表格数据对象
  dragmove(ev, t) {
    let _that = this;
    let d = _that[t];
    if (d.drag) {
      let e = ev || event;
      let str = "#" + t;
      let ele = this.el.nativeElement.querySelector(str);
      let n = e.clientX - d.evleft;
      let w = d.data[0].length * 16; //table的宽度，16为表格td的宽度
      let p = parseInt(d.width); // 包裹table元素的宽度；
      if (n > 0) {
        d.left = "0px";
      } else if (n < p - w) {
        d.left = p - w + "px";
      } else {
        d.left = n + "px";
      }
    }
  }
    //临时测试数据方法
    setwenludata() {
        let data = [];
        for (let i = 0; i < 6; i++) {
          data[i] = [];
          for (let q = 0; q < 60; q++) {
            data[i][q] = "";
          }
        }
        return data;
      }
    


}
