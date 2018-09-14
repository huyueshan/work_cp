import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import "rxjs/add/operator/filter";
@Component({
  selector: "app-side",
  templateUrl: "./side.component.html",
  styleUrls: ["./side.component.scss"]
})
export class SideComponent implements OnInit, AfterViewInit {
  @Input() navtitle:string;
  @Input() data: any; //导航数据包括图标位置数据
  @Input() bgurl: any; // 导航图标的背景图属性数据！！！需要在父级组件先require进来！！！
  public currentparent:string; //一级导航
  public currentitem:string; // 二级导航
  public currentactive:number; // 当前展开的子导航

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.getrouteurl();
    // 路由地址改变后的事件
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        this.getrouteurl();
      });
  }
  ngAfterViewInit() {}

  // 导航栏一级菜单点击事件
  itemboxclick(i) {
    this.itemiconinit(i);
    if (this.currentactive == i) {
      this.currentactive = -1;
    } else {
      this.currentactive = i;
    }
  }
  getrouteurl() {
    let t = this.router.url;
    let d = this.data;
    for (let i = 0; i < d.length; i++) {
      for (let q = 0; q < d[i].items.length; q++) {
        if (t == d[i].items[q].link) {
          this.currentparent = d[i].title;
          this.currentitem = d[i].items[q].text;
          this.currentactive = i;
        }
      }
    }
    this.itemiconinit(this.currentactive);
  }
  // 初始当前有效导航目录样式
  itemiconinit(i) {
    //    清除其他导航点击样式
    for (let q = 0; q < this.data.length; q++) {
      let d = this.data[q];
      d.isover = false;
      d.bg.x = d.bg.defx;
      d.bg.y = d.bg.defy;
    }
    this.itemboxenter(i);
  }
  // 鼠标经过目录事件
  itemboxenter(i) {
    let d = this.data[i];
    d.isover = true;
    d.bg.x = d.bg.hovx;
    d.bg.y = d.bg.hovy;
  }
  // 鼠标离开目录事件
  itemboxleave(i) {
    let d = this.data[i];
    if (this.currentactive == i) {
      d.bg.x = d.bg.hovx;
      d.bg.y = d.bg.hovy;
      return;
    }
    d.isover = false;
    d.bg.x = d.bg.defx;
    d.bg.y = d.bg.defy;
  }
  // 导航栏二级菜单点击事件
  itemclick(L) {
    // 跳转路由
    this.router.navigate([L]);
  }
}
