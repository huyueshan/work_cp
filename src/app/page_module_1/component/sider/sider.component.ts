import { Component, OnInit, OnDestroy, ElementRef } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-sider",
  templateUrl: "./sider.component.html",
  styleUrls: ["./sider.component.scss"]
})
export class CSiderComponent implements OnInit, OnDestroy {
    public queresult = 0; // 控制 开奖结果列表区
    public listresult = 0; // 控制 排行列表区
  
    //    绑定 排行列表期数数据
    public querydata = {
      qishu: "2期"
    };
    public resultdata = [, , , , , , , , , ,];
    constructor( private router: Router) {}
  
    ngOnInit() {
    }
    ngOnDestroy() {}
  
    linkrouter(t) {
      this.router.navigate([t]);
    }
  }
  