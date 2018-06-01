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
      icon_x:-10,
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
      icon_x:-56,
      isover: false,
      isactive:false,
      items:[
        {
          text:'充值记录',
          link:'/usercenter/moneyrecord',
        },
        {
          text:'帐变报表',
          link:'/usercenter/acchange',
        },
        {
          text:'个人报表',
          link:'/usercenter/myreport',
        },
        {
          text:'团队报表',
          link:'/usercenter/myreport',
        },
        {
          text:'优惠活动详情',
          link:'/usercenter/discount',
        }
      ]
    },
    {
      title:'账户管理',
      icon_x:-102,
      isover: false,
      isactive:false,
      items:[
        {
          text:'个人总览',
          link:'/usercenter/myoverview',
        },
        {
          text:'安全中心',
          link:'/usercenter/security',
        },
        {
          text:'银行卡管理',
          link:'/usercenter/bankmanage',
        },
        {
          text:'用户充值',
          link:'/usercenter/recharge',
        },
        {
          text:'用户资料',
          link:'/usercenter/userdata',
        },
        {
          text:'彩种信息',
          link:'/usercenter/proinfo',
        },
        {
          text:'彩种限额',
          link:'/usercenter/quota',
        },
      ]
    },
    {
      title:'代理管理',
      icon_x:-148,
      isover: false,
      isactive:false,
      items:[
        {
          text:'用户列表',
          link:'usercenter/userlist',
        },
        {
          text:'注册管理',
          link:'usercenter/regismanage',
        },
        {
          text:'推广注册',
          link:'usercenter/regisgenera',
        }
      ]
    },
    {
      title:'短信公告',
      icon_x:-194,
      isover: false,
      isactive:false,
      items:[
        {
          text:'站内短信',
          link:'/usercenter/pronote',
        },
        {
          text:'网站公告',
          link:'/usercenter/webnote',
        }
      ]
    },
    
  ];
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  // 充值按钮事件
  recharge(){
    this.router.navigate(["/usercenter/recharge"]);
    this.currentfristitem = "账户管理";
    this.currentitem ="用户充值";
  }

  // 左侧导航栏一级菜单点击事件
  itemboxclick(i){
    if (this.currentactive == i) {
      this.currentactive = -1;
    }else{
      this.currentactive = i;
    }
  }
  itemboxenter(i){
    this.usersidedata[i].isover = true;
  }
  itemboxleave(i){
    this.usersidedata[i].isover = false;
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
