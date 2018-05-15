import { Injectable } from '@angular/core';
import { Resolve, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from '../app/page_module_1/home/home.component';

import userModel from '../status/user.model';

@Injectable()
export class RouteguardService implements CanActivate{

  constructor(private router: Router, private httpClient : HttpClient) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    // 返回值 true: 跳转到当前路由 false: 不跳转到当前路由
    // 当前路由名称
    var path = route.routeConfig.path;  
    // nextRoute: 设置需要路由守卫的路由集合
    const nextRoute = ['login'];
    let isLogin = userModel.isLogin;  // 是否登录
    // 当前路由是nextRoute指定页时
    if (nextRoute.indexOf(path) >= 0) {
		if (!isLogin) {
			// 未登录，跳转到login
			this.router.navigate(['login']);
			return false;
		}else{
			// 已登录，跳转到当前路由
			return true;
		}
    }
    // 当前路由是login时 
    if (path === 'login') {
		if (!isLogin) {
			// 未登录，跳转到当前路由
			return true;
		}else{
			// 已登录，跳转到home
			this.router.navigate(['home']);
			return false;
		}
    }else{
		return true;
	}
  }
}