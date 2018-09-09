import { Component, OnInit, ElementRef } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import userModel from "../../../status/user.model";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  public tabactive = 0; // 头部导航是否鼠标经过
  public tableactive = 0; // 底部大图标链接位置是否鼠标经过
  // 头部左边导航数据
  public now_lang: any = userModel.langpackage;
  public now_lang_type: any = "zh";
  public lineinfo = {
    width: "60px",
    left: "0px"
  };
  public cursrank = 0;
  public listdata = {
    top: 0,
    touzhu_list: [, , , , , , , , , ,],
    zhogj_list: [, , , , , , , , , ,]
  };
  public changelisttop;
  public langdata = {
    show: false,
    data: ["中文", "English", "한국어"],
    curlang: "中文"
  };
  public cpacitve = -1;
  public cpdata = [
    {
      name: "北京快乐8",
      width: "81px",
      height: "61px",
      top: "-329px",
      deftop: "-329px",
      overtop: "-492px",
      link: "/lottery/officialklc/bjkl8"
    },
    {
      name: "重庆时时彩",
      width: "78px",
      height: "63px",
      top: "-574px",
      deftop: "-574px",
      overtop: "-657px",
      link: "/lottery/officialssc/cq"
    },
    {
      name: "福彩3D",
      width: "65px",
      height: "62px",
      top: "-89px",
      deftop: "-89px",
      overtop: "-410px",
      link: "/lottery/officialdpc/fc3d"
    },
    {
      name: "北京Pk10",
      width: "86px",
      height: "60px",
      top: "-10px",
      deftop: "-10px",
      overtop: "-249px",
      link: "/lottery/officialpk10/bjpk"
    },
    {
      name: "幸运28",
      width: "66px",
      height: "66px",
      top: "-169px",
      deftop: "-169px",
      overtop: "-740px",
      link: "/lottery/creditpcdd/xy28"
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.now_lang_type = userModel.now_lang_type;
  }
  ngAfterViewInit() {
    this.changelisttop = setInterval(() => {
      this.changetop();
    }, 50);
  }
  ngOnDestroy(): void {
    clearInterval(this.changelisttop);
  }
  changetop() {
    let LIST_H = this.el.nativeElement.querySelector("#infobox").offsetHeight;
    let listtop = this.listdata.top;
    this.listdata.top = Math.abs(listtop) > LIST_H ? 240 : listtop - 1;
  }
  liststop(i) {
    if (i===1 && this.changelisttop===null) {
      this.changelisttop = setInterval(() => {
        this.changetop();
      }, 50);
    }else{
        clearInterval(this.changelisttop);
        this.changelisttop =null;
    }
  }

  navclick(event, i) {
    let el = event || window.event;
    let e = el.target || el.srcElement;
    let o = {
      width: e.offsetWidth + "px",
      left: e.offsetLeft + "px"
    };
    this.lineinfo = Object.assign({}, o);
  }

  langclick(i) {
    this.langdata.curlang = this.langdata.data[i];
  }

  entercp(i) {
    this.cpdata[i].top = this.cpdata[i].overtop;
    this.cpacitve = i;
  }
  leavecp(i) {
    this.cpdata[i].top = this.cpdata[i].deftop;
    this.cpacitve = -1;
  }
  toglist(i) {
    if (this.cursrank === i) {
      return;
    }
    this.cursrank = i;
    this.listdata.top = 0;
  }
  
  
  linkrout(L) {
    // 跳转路由
    this.router.navigate([L]);
  }
}
