import { NgModule } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { RouteguardService } from "./router.service";

// ！！！注意：定义默认 路由 打包是根据这里进行分路由打包的，所以每一个模板的路由必须放进去
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
	
	//模板1的路由
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
        path: 'home',
        loadChildren: '../app/page_module_1/home/home.module#HomeModule',
		canActivate: [RouteguardService]
    }, 
    {
        path: 'lottery',
        loadChildren: '../app/page_module_1/lottery/layout.module#LayoutModule',
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
        path: 'result',
        loadChildren: '../app/page_module_1/result/result.module#ResultModule',
        canActivate: [RouteguardService]
    },
    {
        path: 'AgainLogin',
        loadChildren: '../app/page_module_1/AgainLogin/AgainLogin.module#AgainLoginModule',
        canActivate: [RouteguardService]
    },
	//模板2的路由
	{
        path: 'login',
        loadChildren: '../app/page_module_2/login/login.module#LoginModule',
		canActivate: [RouteguardService]
    }, 
    {
        path: 'home',
        loadChildren: '../app/page_module_2/home/home.module#HomeModule',
		canActivate: [RouteguardService]
    }, 
	{
        path: 'detail',
        loadChildren: '../app/page_module_2/detail/detail.module#DetailModule',
		canActivate: [RouteguardService]
    }, 
    {
        path: 'lottery',
        loadChildren: '../app/page_module_2/lottery/layout.module#LayoutModule',
        canActivate: [RouteguardService]
    },
	{
        path: 'register',
		loadChildren: '../app/page_module_2/register/register.module#RegisterModule',
		canActivate: [RouteguardService]
    },
	{
        path: 'index',
		loadChildren: '../app/page_module_1/index/index.module#IndexModule',
		canActivate: [RouteguardService]
    },
	{
        path: 'usercenter',
		loadChildren: '../app/page_module_2/usercenter/usercenter.module#UsercenterModule',
		canActivate: [RouteguardService]
	},
	{
        path: 'result',
        loadChildren: '../app/page_module_2/result/result.module#ResultModule',
        canActivate: [RouteguardService]
    },
	//模板3的路由
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
        path: 'index',
		loadChildren: '../app/page_module_3/index/index.module#IndexModule',
		canActivate: [RouteguardService]
    },
    {
        path: 'usercenter',
        loadChildren: '../app/page_module_3/usercenter/usercenter.module#UsercenterModule',
        canActivate: [RouteguardService]
        
    },
    {
        path: 'result',
        loadChildren: '../app/page_module_3/result/result.module#ResultModule',
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
        
    }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
  providers: [RouteguardService]
})
export class AppRoutingModule {
  constructor(private router: Router, private httpClient: HttpClient) {}
}
