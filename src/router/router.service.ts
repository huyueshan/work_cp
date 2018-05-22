import { Injectable } from '@angular/core';
import { Resolve, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationStart } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import userModel from '../status/user.model';
import { Base } from '../factory/base.model';
import { Api } from '../factory/api.model';

@Injectable()
export class RouteguardService implements CanActivate{
	constructor(private router: Router, private httpClient : HttpClient) { }
	private isLoaded = false;
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>{
		return new Promise(resolve => {
			if (this.isLoaded) {
			  resolve(true);
			  return;
			}
			Base.Store.set('isTemplet','1',false)
			if(!Base.Store.get('isTemplet')){
				// 根据域名配置不通路由模块
				this.httpClient.get(Api.gettemple)
				.subscribe(menuGroups => {
					const appnewRoutes: Routes =[
						{
							path: '',
							redirectTo: 'home',
							pathMatch: 'full'
						},
						{
							path: 'login',
							loadChildren: '../app/page_module_1/login/login.module#LoginModule',
							canActivate: [RouteguardService]
						}, 
						{
							path: 'home',
							loadChildren: '../app/page_module_2/home/home.module#HomeModule'
						}, 
						{
							path: 'detail',
							loadChildren: '../app/page_module_2/detail/detail.module#DetailModule'
						},
						{
							path: 'test',
							loadChildren: '../app/page_module_2/test/detail.module#DetailModule'
						},
						{
							path: '**',   // 错误路由重定向[写在最后一个],可作为404页面
							redirectTo: 'home',
							pathMatch: 'full'  // 必须要设置
						}
					];
					this.router.resetConfig(appnewRoutes);
					this.isLoaded = true;
					resolve(true);
					this.router.navigateByUrl(state.url);
					Base.Store.set('isTemplet','1',false)
					userModel.platform = true
				});
			}else{
				// 这里接口写好后会换成接口的返回字段，肯定不能用缓存来判断 Base.Store.get('isTemplet')
				if(Base.Store.get('isTemplet')=='1'){
					const appnewRoutes: Routes =[
						{
							path: '',
							redirectTo: 'home',
							pathMatch: 'full'
						},
						{
							path: 'login',
							loadChildren: '../app/page_module_1/login/login.module#LoginModule',
							canActivate: [RouteguardService]
						}, 
						{
							path: 'home',
							loadChildren: '../app/page_module_1/home/home.module#HomeModule'
						}, 
											{
							path: 'detail',
							loadChildren: '../app/page_module_1/detail/detail.module#DetailModule'
						},
						{
							path: 'test',
							loadChildren: '../app/page_module_1/test/detail.module#DetailModule'
						},
						{
							path: 'register',
							loadChildren: '../app/page_module_1/register/register.module#RegisterModule'
						},
						{
							path: '**',   // 错误路由重定向[写在最后一个],可作为404页面
							redirectTo: 'home',
							pathMatch: 'full'  // 必须要设置
						}
					];
					this.router.resetConfig(appnewRoutes);
					this.isLoaded = true;
					resolve(true);
					this.router.navigateByUrl(state.url);
				}else if(Base.Store.get('isTemplet')=='2'){
					const appnewRoutes: Routes =[
						{
							path: '',
							redirectTo: 'home',
							pathMatch: 'full'
						},
						{
							path: 'home',
							loadChildren: '../app/page_module_2/home/home.module#HomeModule'
						}, 
						{
							path: 'detail',
							loadChildren: '../app/page_module_2/detail/detail.module#DetailModule'
						},
						{
							path: 'test',
							loadChildren: '../app/page_module_2/test/detail.module#DetailModule'
						},
						{
							path: '**',   // 错误路由重定向[写在最后一个],可作为404页面
							redirectTo: 'home',
							pathMatch: 'full'  // 必须要设置
						}
					];
					this.router.resetConfig(appnewRoutes);
					this.isLoaded = true;
					resolve(true);
					this.router.navigateByUrl(state.url);
				}else{
					const appnewRoutes: Routes =[
						{
							path: '',
							redirectTo: 'home',
							pathMatch: 'full'
						},
						{
							path: 'home',
							loadChildren: '../app/page_module_3/home/home.module#HomeModule'
						}, 
						{
							path: 'detail',
							loadChildren: '../app/page_module_3/detail/detail.module#DetailModule'
						},
						{
							path: 'test',
							loadChildren: '../app/page_module_3/test/detail.module#DetailModule'
						},
						{
							path: '**',   // 错误路由重定向[写在最后一个],可作为404页面
							redirectTo: 'home',
							pathMatch: 'full'  // 必须要设置
						}
					];
					this.router.resetConfig(appnewRoutes);
					this.isLoaded = true;
					resolve(true);
					this.router.navigateByUrl(state.url);
				}
				
				
				userModel.platform = true
				
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
						resolve(false);
					}else{
						// 已登录，跳转到当前路由
						resolve(true);
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
						resolve(false);
					}
				}else{
					resolve(true);
				}
			}
		})
	}
}