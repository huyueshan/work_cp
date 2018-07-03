import {
  Component,
  OnInit,
  AfterViewChecked,
  AfterViewInit,
  ElementRef,
  Input
} from "@angular/core";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.scss"]
})
export class CanvasComponent
  implements OnInit, AfterViewChecked, AfterViewInit {
  @Input() viewdata;
  // 单元格基础数据
  public BALL = {
    value: -1,
    ischecked: false,
    isrepet: false,
    isdouble: false,
    isomission: false,
    omisvalue: 0, // 遗漏值
    dbvalue: 0, // 同期重出值
    revalue: 0, // 连出值
    haowen: -1 //号温值
  };

  // 表格统计数据
  public stdata = {
    sumv: { data: [], disdata: [] }, //总和
    meanom: { data: [], disdata: [] }, //平均遗漏
    maxom: { data: [], disdata: [] }, //最大遗漏
    maxre: { data: [], disdata: [] }, // 最大连出
    omdata: { data: [], disdata: [] },
    redata: { data: [], disdata: [] }
  };
  // 分析表格单元行数据
  public Datalist = {
    id: -1,
    number: "000000",
    data: [], //开奖号码
    body: [], // 表格分析数据
    disdata: [] // 号码分布数据
  };
  // 后台获取数据格式
  public OB = { id: 0, number: "180100", data: [] };
  public balldata = this.setballdata(30); // 后台的开奖数据
  public ballomisdata = this.setbassomisdata(); // 接受的第一期数据的遗漏值

  public thdata = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  public canva = {
    width: "",
    height: ""
  };
  public outdata = []; // 分析表格数据
  public linedata = []; // 划线数据

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.pageinit(30);
    console.log(this.ballomisdata);
  }
  ngAfterViewInit() {}
  ngAfterViewChecked() {}

  pageinit(n) {
    // 设置数据 此处请求后台数据
    let d = this.setballdata(n);
    let omd = this.setbassomisdata();
    this.outdata = this.continvalue(this.omisssionvalue(this.creat_tr(d), omd));
    this.outdata = JSON.parse(JSON.stringify(this.outdata));
    // 画线
    setTimeout(() => {
      this.linedata = this.getcanvasdata();
      setTimeout(() => {
        this.drawline();
      }, 600);
    }, 300);
    // 设置统计数据
    this.setstdata(this.outdata);
    this.sethaowen(this.stdata, this.outdata);
  }

  // 设置画线数据
  getcanvasdata() {
    let data = [];
    //  获取canvas容器元素集
    const ele1 = this.el.nativeElement.querySelector("#chartsTable");
    this.canva.width = ele1.offsetWidth;
    this.canva.height = ele1.offsetHeight;
    for (let q = 0; q < 5; q++) {
      const str = `.cvs${q}.bgred`;
      const ele = this.el.nativeElement.querySelectorAll(str);
      const d = [];
      for (let i = 0; i < ele.length; i++) {
        const l = ele[i].offsetLeft + 10;
        const t = ele[i].offsetTop + 10;
        d[i] = {
          left: l,
          top: t
        };
      }
      data.push(d);
    }
    return data;
  }
  // 画线
  drawline() {
    const ctxele = this.el.nativeElement.querySelector("#canva");
    if (ctxele == null) {
      return false;
    }
    const ctx = ctxele.getContext("2d");
    const d = this.linedata;
    for (let q = 0; q < d.length; q++) {
      let color = q % 2 === 1 ?"#9A019A":"blue";
      ctx.fillStyle = "blue";
      ctx.strokeStyle = "blue";
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.lineCap = "round";
      ctx.moveTo(d[q][0].left, d[q][0].top);
      for (let i = 1; i < d[q].length; i++) {
        ctx.lineTo(d[q][i].left, d[q][i].top);
      }
      ctx.stroke();
    }
  }

  // 设置统计数据
  setstdata(d) {
    let D = d;
    let l = 5;
    let std = this.stdata;
    let omd = std.omdata;
    let red = std.redata;
    for (let i = 0; i < l; i++) {
      std.sumv.data[i] = this.setstdatvalue(0);
      std.meanom.data[i] = this.setstdatvalue(0);
      std.maxom.data[i] = this.setstdatvalue(0);
      std.maxre.data[i] = this.setstdatvalue(0);
      omd.data[i] = this.setstdatvalue(1);
      red.data[i] = this.setstdatvalue(1);
    }
    // 分布区统计数据
    std.sumv.disdata = this.setstdatvalue(0);
    std.meanom.disdata = this.setstdatvalue(0);
    std.maxom.disdata = this.setstdatvalue(0);
    std.maxre.disdata = this.setstdatvalue(0);
    omd.disdata = this.setstdatvalue(1);
    red.disdata = this.setstdatvalue(1);
    // 出现总次数  、遗漏数组
    for (let i = 0; i < D[0].body.length; i++) {
      for (let w = 0; w < D[0].body[0].data.length; w++) {
        for (let q = 0; q < D.length; q++) {
          if (D[q].body[i].data[w].ischecked) {
            std.sumv.data[i][w].value += 1;
            let n = D[q].body[i].data[w].revalue;
            red.data[i][w].arr.push(n);
            if (q !== 0 && !D[q - 1].body[i].data[w].ischecked) {
              let n1 = D[q - 1].body[i].data[w].omisvalue;
              omd.data[i][w].arr.push(n1);
            }
          }
          if (q === D.length - 1 && !D[q].body[i].data[w].ischecked) {
            let n2 = D[q].body[i].data[w].omisvalue;
            omd.data[i][w].arr.push(n2);
          }
        }
      }
    }

    // 最大遗漏、平均遗漏
    for (let i = 0; i < omd.data.length; i++) {
      for (let q = 0; q < omd.data[i].length; q++) {
        let d = omd.data[i][q].arr;
        // 最大遗漏
        if (d.length === 0) {
          std.maxom.data[i][q].value = 0;
        } else {
          d.sort((a, b) => {
            return b - a;
          });
          std.maxom.data[i][q].value = d[0];
        }
        // 平均遗漏
        let n = 0;
        for (let w = 0; w < d.length; w++) {
          n += d[w];
        }
        std.meanom.data[i][q].value = Math.round(n / d.length);
      }
    }
    // 最大连出
    for (let i = 0; i < red.data.length; i++) {
      for (let q = 0; q < red.data[i].length; q++) {
        let d = red.data[i][q].arr;
        if (d.length === 0) {
          std.maxre.data[i][q].value = 0;
        } else {
          d.sort((a, b) => {
            return b - a;
          });
          std.maxre.data[i][q].value = d[0];
        }
      }
    }
    // 分布区统计 出现总次数  、遗漏数组
    for (let i = 0; i < D[0].disdata.length; i++) {
      for (let q = 0; q < D.length; q++) {
        if (D[q].disdata[i].ischecked) {
          std.sumv.disdata[i].value += D[q].disdata[i].dbvalue;
          let n = D[q].disdata[i].revalue;
          red.disdata[i].arr.push(n);
          if (q !== 0 && !D[q - 1].disdata[i].ischecked) {
            let n1 = D[q - 1].disdata[i].omisvalue;
            omd.disdata[i].arr.push(n1);
          }
        }
        if (q === D.length - 1 && !D[q].disdata[i].ischecked) {
          let n2 = D[q].disdata[i].omisvalue;
          omd.disdata[i].arr.push(n2);
        }
      }
    }
    // 分布区最大遗漏、平均遗漏
    for (let i = 0; i < omd.disdata.length; i++) {
      // for (let q = 0; q < omd.disdata[i].length; q++) {
      let d = omd.disdata[i].arr;
      // 最大遗漏
      if (d.length === 0) {
        std.maxom.disdata[i].value = 0;
      } else {
        d.sort((a, b) => {
          return b - a;
        });
        std.maxom.disdata[i].value = d[0];
      }
      // 平均遗漏
      let n = 0;
      for (let w = 0; w < d.length; w++) {
        n += d[w];
      }
      std.meanom.disdata[i].value = Math.round(n / d.length);
      // }
    }
    // 分布区  最大连出
    for (let i = 0; i < red.disdata.length; i++) {
      let d = red.disdata[i].arr;
      if (d.length === 0) {
        std.maxre.disdata[i].value = 0;
      } else {
        d.sort((a, b) => {
          return b - a;
        });
        std.maxre.disdata[i].value = d[0];
      }
    }

    console.log(this.stdata);
  }
  setstdatvalue(n) {
    let data = [];
    for (let i = 0; i < 10; i++) {
      let o = {};
      if (n) {
        o = { ball: i, arr: [] };
      } else {
        o = { ball: i, value: 0 };
      }
      data.push(o);
    }
    return data;
  }
  sethaowen(s, d) {
    // 设置号温
    let S = s.sumv.data;
    let D = d;
    for (let i = 0; i < S.length; i++) {
      for (let q = 0; q < S[i].length; q++) {
        for (let w = 0; w < D.length; w++) {
          if (D[w].body[i].data[q].ischecked) {
            if (S[i][q].value < D.length / 20) {
              D[w].body[i].data[q].haowen = 1;
            } else if (S[i][q].value > D.length / 9) {
              D[w].body[i].data[q].haowen = 3;
            } else {
              D[w].body[i].data[q].haowen = 2;
            }
          }
        }
      }
    }
  }

  // 设置是否需要显示遗漏矩形背景
  continvalue(D) {
    let data = D;
    for (let i = data.length - 1; i >= 0; i--) {
      let d = data[i].body;
      let di = data[i].disdata;
      if (i === data.length - 1) {
        for (let j = 0; j < d.length; j++) {
          const b = d[j].data;
          for (let q = 0; q < b.length; q++) {
            if (!b[q].ischecked) {
              b[q].isomission = true;
            }
          }
        }
        for (let q = 0; q < di.length; q++) {
          if (!di[q].ischecked) {
            di[q].isomission = true;
          }
        }
      } else {
        for (let n = 0; n < d.length; n++) {
          const b = d[n].data;
          for (let q = 0; q < b.length; q++) {
            if (!b[q].ischecked && data[i + 1].body[n].data[q].isomission) {
              b[q].isomission = true;
            }
          }
        }
        for (let q = 0; q < di.length; q++) {
          if (!di[q].ischecked && data[i + 1].disdata[q].isomission) {
            di[q].isomission = true;
          }
        }
      }
    }
    return data;
  }
  // 设置遗漏值和重号
  omisssionvalue(D, omd) {
    let data = D;
    for (let i = 0; i < data.length; i++) {
      let d = data[i].body;
      let di = data[i].disdata;
      if (i === 0) {
        for (let n = 0; n < d.length; n++) {
          const b = d[n].data;
          for (let q = 0; q < b.length; q++) {
            if (b[q].ischecked) {
              b[q].omisvalue = 0;
              b[q].revalue = 1;
            } else {
              b[q].omisvalue = Number(omd[n][q]);
            }
          }
        }
        for (let q = 0; q < di.length; q++) {
          if (di[q].ischecked) {
            di[q].omisvalue = 0;
            di[q].revalue = 1;
          } else {
            di[q].omisvalue = 1;
            di[q].revalue = 0;
          }
        }
      } else {
        for (let j = 0; j < d.length; j++) {
          const c = d[j].data;
          for (let q = 0; q < c.length; q++) {
            if (c[q].ischecked) {
              c[q].omisvalue = 0;
              c[q].revalue = data[i - 1].body[j].data[q].revalue + 1;
              if (data[i - 1].body[j].data[q].ischecked) {
                c[q].isrepet = true;
                data[i - 1].body[j].data[q].isrepet = true;
              }
            } else {
              c[q].omisvalue = data[i - 1].body[j].data[q].omisvalue + 1;
            }
          }
        }
        for (let q = 0; q < di.length; q++) {
          if (di[q].ischecked) {
            di[q].omisvalue = 0;
            di[q].revalue = data[i - 1].disdata[q].revalue + 1;
            if (data[i - 1].disdata[q].ischecked) {
              di[q].isrepet = true;
              data[i - 1].disdata[q].isrepet = true;
            }
          } else {
            di[q].omisvalue = data[i - 1].disdata[q].omisvalue + 1;
          }
        }
      }
    }
    return data;
  }
  // 转化数据
  creat_tr(data) {
    const d = [];
    for (let i = 0; i < data.length; i++) {
      d[i] = {};
      d[i] = Object.assign({}, this.Datalist, data[i]);
      d[i].body = [];
      for (let q = 0; q < data[i].data.length; q++) {
        const n = data[i].data[q];
        const arr = this.createball(10);
        arr[n].ischecked = true;
        d[i].body[q] = {
          clname: "cvs" + q,
          data: arr
        };
      }
      d[i].disdata = this.setdisdata(d[i].data);
    }
    // console.log(d);
    return d;
  }
  // 创建球数据
  createball(n) {
    const data = [];
    for (let i = 0; i < n; i++) {
      data[i] = Object.assign({}, this.BALL);
      data[i].value = i; // 初始显示单元格的数据参考值
    }
    return data;
  }

  //创建分布区数据 参数d为 经过设置的开奖数据数组
  setdisdata(d) {
    let data = [];
    data = this.createball(10);
    for (let q = 0; q < d.length; q++) {
      let n = Number(d[q]);
      data[n].ischecked = true;
      data[n].dbvalue += 1;
      if (data[n].dbvalue > 1) {
        data[n].isdouble = true;
      }
    }
    return data;
  }
  // 创建开奖数据  n 为开奖数据期数
  setballdata(n) {
    let data = [];
    for (let i = 0; i < n; i++) {
      let d = Object.assign({}, this.OB);
      d.id = i + 1;
      d.number = 180101 + i + "";
      d.data = [];
      for (let q = 0; q < 5; q++) {
        d.data[q] = Math.floor(Math.random() * 10);
      }
      data.push(d);
    }
    return data;
  }
  setbassomisdata() {
    let d = [];
    for (let i = 0; i < 5; i++) {
      d[i] = [];
      for (let q = 0; q < 10; q++) {
        d[i].push(Math.floor(Math.random() * 10 + 1));
      }
    }
    return d;
  }
}
