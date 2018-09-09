import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Routes, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import userModel from "../status/user.model";
import { Base } from "../factory/base.model";
// import { Api } from "../factory/api.model";
import { HttpInterceptorService } from '../factory/Http.Service';

import languagepackage from "../status/language";
@Injectable()

export class RouteguardService implements CanActivate{
	constructor(private router: Router, private httpClient : HttpClient ,private hserve:HttpInterceptorService) {}
	private isLoaded = false;
	
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>{
		return new Promise(resolve => {
			let that = this;
			
			//语言检测
			let lang_config = userModel.lang_config;
			let now_lang = {}
			function  check_language(){
		        if (Base.Store.get('now_lot_lang')==false) {
		            Base.Store.set('now_lot_lang',lang_config.default_lan)
		            let now_lot_lang = Base.Store.get('now_lot_lang');
		            load_langpackge(now_lot_lang)
		        }else{
		            //这里手动改变语言后不做任何操作,但是同样调用引用语言包函数;
		            let now_lot_lang = Base.Store.get('now_lot_lang');
		            load_langpackge(now_lot_lang)
		        }
		    }
		    function load_langpackge(lang){
			    userModel.now_lang_type = lang;
		        now_lang = languagepackage[lang];
		        userModel.langpackage = now_lang;
				          
		    } 
		    check_language();
			
			// 判断是否需要重置路由的
			if (this.isLoaded) {
				resolve(true);
				return;
			}
			if(!Base.Store.get('isTemplet')){
				// this.hserve.post(',{},)
				// .then(result => {  
				  // console.log("登录接口返回的信息是：" , result);//打印返回的数据  
				  // that.routerReconfig('1')
				  // resolve(true);
				// }); 
				that.routerReconfig('2')
				resolve(true);
			}else{
				that.routerReconfig(Base.Store.get('isTemplet'))
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
						this.router.navigate(['index']);
						resolve(false);
					}
				}else{
					resolve(true);
				}
			}
		})
	}
	
	routerReconfig(t){
		const item1:Routes =[
			{
				path: '',
				redirectTo: 'index',
				pathMatch: 'full'
			},
			{
				path: 'login',
				loadChildren: '../app/page_module_1/login/login.module#LoginModule',
				canActivate: [RouteguardService]
			},
			{
				path: 'forgetpass',
				loadChildren: '../app/page_module_1/forgetpass/forgetpass.module#ForgetpassModule',
				canActivate: [RouteguardService]
			}, 
			{
				path: 'index',
				loadChildren: '../app/page_module_1/index/index.module#IndexModule',
				canActivate: [RouteguardService]
			},
			{
				path: 'result',
				loadChildren: '../app/page_module_1/result/result.module#ResultModule',
				canActivate: [RouteguardService]
			},  
			{
				path: 'lottery',
				loadChildren: '../app/page_module_1/lottery/layout.module#LayoutModule',
				canActivate: [RouteguardService]
			},  
			{
				path: 'home',
				loadChildren: '../app/page_module_1/home/home.module#HomeModule',
				canActivate: [RouteguardService]
			}, 
			{
				path: 'register',
				loadChildren: '../app/page_module_1/register/register.module#RegisterModule',
				canActivate: [RouteguardService]
			},
			{
				path: 'index',
				loadChildren: '../app/page_module_1/index/index.module#IndexModule',
				canActivate: [RouteguardService]
			},
			{
				path: 'usercenter',
				loadChildren: '../app/page_module_1/usercenter/usercenter.module#UsercenterModule',
				canActivate: [RouteguardService]
				
			},
			{
				path: '**',   // 错误路由重定向[写在最后一个],可作为404页面
				redirectTo: 'index',
				pathMatch: 'full'  // 必须要设置
			}
		];
		const item2:Routes =[
			{
				path: '',
				redirectTo: 'index',
				pathMatch: 'full'
			},
			{
				path: 'login',
				loadChildren: '../app/page_module_2/login/login.module#LoginModule',
				canActivate: [RouteguardService]
			},
			{
				path: 'register',
				loadChildren: '../app/page_module_2/register/register.module#RegisterModule',
				canActivate: [RouteguardService]
			},
			{
				path: 'index',
				loadChildren: '../app/page_module_2/index/index.module#IndexModule',
				canActivate: [RouteguardService]
			},
			{
				path: 'result',
				loadChildren: '../app/page_module_2/result/result.module#ResultModule',
				canActivate: [RouteguardService]
			},  
			{
				path: 'lottery',
				loadChildren: '../app/page_module_2/lottery/layout.module#LayoutModule',
				canActivate: [RouteguardService]
			},  
			{
				path: 'home',
				loadChildren: '../app/page_module_2/home/home.module#HomeModule',
				canActivate: [RouteguardService]
			}, 
			{
				path: 'register',
				loadChildren: '../app/page_module_2/register/register.module#RegisterModule',
				canActivate: [RouteguardService]
			},
			{
				path: 'index',
				loadChildren: '../app/page_module_2/index/index.module#IndexModule',
				canActivate: [RouteguardService]
			},
			{
				path: 'usercenter',
				loadChildren: '../app/page_module_2/usercenter/usercenter.module#UsercenterModule',
				canActivate: [RouteguardService]
				
			},
			{
				path: '**',   // 错误路由重定向[写在最后一个],可作为404页面
				redirectTo: 'index',
				pathMatch: 'full'  // 必须要设置
			}
		];
		const item3:Routes =[
			{
				path: '',
				redirectTo: 'index',
				pathMatch: 'full'
			},
			{
				path: 'login',
				loadChildren: '../app/page_module_3/login/login.module#LoginModule',
				canActivate: [RouteguardService]
			},
			{
				path: 'forgetpass',
				loadChildren: '../app/page_module_3/forgetpass/forgetpass.module#ForgetpassModule',
				canActivate: [RouteguardService]
			}, 
			{
				path: 'register',
				loadChildren: '../app/page_module_3/register/register.module#RegisterModule',
				canActivate: [RouteguardService]
			},
			{
				path: 'index',
				loadChildren: '../app/page_module_3/index/index.module#IndexModule',
				canActivate: [RouteguardService]
			},
			{
				path: 'result',
				loadChildren: '../app/page_module_3/result/result.module#ResultModule',
				canActivate: [RouteguardService]
			},  
			{
				path: 'lottery',
				loadChildren: '../app/page_module_3/lottery/layout.module#LayoutModule',
				canActivate: [RouteguardService]
			},  
			{
				path: 'register',
				loadChildren: '../app/page_module_3/register/register.module#RegisterModule',
				canActivate: [RouteguardService]
			},
			{
				path: 'usercenter',
				loadChildren: '../app/page_module_3/usercenter/usercenter.module#UsercenterModule',
				canActivate: [RouteguardService]
			},
			{
				path: 'phone',
				loadChildren: '../app/page_module_3/phone/phone.module#PhoneModule',
				canActivate: [RouteguardService]
				
			},
			{
				path: 'activity',
				loadChildren: '../app/page_module_3/activity/activity.module#ActivityModule',
				canActivate: [RouteguardService]
				
			},
			{
				path: '**',   // 错误路由重定向[写在最后一个],可作为404页面
				redirectTo: 'index',
				pathMatch: 'full'  // 必须要设置
			}
		];
		// 下面固定，勿动
		const routitem = 'item'+t;
		this.router.resetConfig(eval(routitem));
		this.isLoaded = true;
		this.router.navigateByUrl(userModel.currenturl);
	}
}
