import { Component, OnInit } from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { Router, ActivatedRoute, Params } from "@angular/router";

import { GOUC, userdef } from '../../../factory/usercent';

@Component({
  selector: 'app-usercenter',
  templateUrl: './usercenter.component.html',
  styleUrls: ['./usercenter.component.scss']
})
export class UsercenterComponent implements OnInit {
  public currentfristitem:string ='投注记录';
  public currentitem:string ='购彩查询';
  public currentactive = 0;
  public usersidedata = [
    {
      title:'投注记录',
      isover: false,
      isactive:false,
      items:[
        {
          text:'购彩查询',
          link:'/usercenter/goucaiquery',
        },
        {
          text:'追号查询',
          link:'/usercenter/Zhuihaoquery',
        }
      ]
    },
    {
      title:'报表管理',
      isover: false,
      isactive:false,
      items:[
        {
          text:'充值记录',
          link:'/usercenter/goucaiquery',
        },
        {
          text:'帐变报表',
          link:'/usercenter/Zhuihaoquery',
        },
        {
          text:'个人报表',
          link:'/usercenter/Zhuihaoquery',
        },
        {
          text:'优惠活动详情',
          link:'/usercenter/Zhuihaoquery',
        }
      ]
    },
    {
      title:'账户管理',
      isover: false,
      isactive:false,
      items:[
        {
          text:'个人总览',
          link:'/usercenter/goucaiquery',
        },
        {
          text:'安全中心',
          link:'/usercenter/Zhuihaoquery',
        },
        {
          text:'银行卡管理',
          link:'/usercenter/Zhuihaoquery',
        },
        {
          text:'用户资料',
          link:'/usercenter/Zhuihaoquery',
        },
        {
          text:'彩种信息',
          link:'/usercenter/Zhuihaoquery',
        },
        {
          text:'彩种限额',
          link:'/usercenter/Zhuihaoquery',
        },
      ]
    },
    {
      title:'代理管理',
      isover: false,
      isactive:false,
      items:[
        {
          text:'购彩查询2',
          link:'',
        },
        {
          text:'追号查询2',
          link:'',
        }
      ]
    },
    {
      title:'短信公告',
      isover: false,
      isactive:false,
      items:[
        {
          text:'购彩查询2',
          link:'',
        },
        {
          text:'追号查询2',
          link:'',
        }
      ]
    },
    
  ];
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  // }

  // 左侧导航栏一级菜单点击事件
  itemboxclick(i){
    if (this.currentactive == i) {
      this.currentactive = -1;
    }else{
      this.currentactive = i;
    }
  }
  // 左侧导航栏二级菜单点击事件
  itemclick(f,t,L){
    // 当前选中用户中心一级菜单
    this.currentfristitem = f;
    // 当前选中用户中心二级菜单
    this.currentitem = t;
    // 跳转路由
    this.router.navigate([L]);
  }

}
