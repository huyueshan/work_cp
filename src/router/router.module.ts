import { NgModule } from "@angular/core";
import { RouterModule, CanActivate, Routes, Router } from "@angular/router";
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
        path: 'officialssc',
		loadChildren: '../app/page_module_1/official/ssc/ssc.module#SSCofficialModule',
		canActivate: [RouteguardService]
    }, 
	{
        path: 'detail',
        loadChildren: '../app/page_module_1/detail/detail.module#DetailModule',
		canActivate: [RouteguardService]
    }, 
    {
        path: 'creditssc',
        loadChildren: '../app/page_module_1/credit/ssc/ssc.module#SSCcreditModule',
        canActivate: [RouteguardService]
    },  
    {
        path: 'creditffc',
        loadChildren: '../app/page_module_1/credit/ffc/ffc.module#FFCcreditModule',
        canActivate: [RouteguardService]
    },
    {
        path: 'vrc',
        loadChildren: '../app/page_module_1/credit/vrc/vrc.module#VRCcreditModule',
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
	//模板2的路由
	{
        path: 'login',
        loadChildren: '../app/page_module_2/login/login.module#LoginModule',
		canActivate: [RouteguardService]
    }, 
	// {
        // path: 'forgetpass',
        // loadChildren: '../app/page_module_2/forgetpass/forgetpass.module#ForgetpassModule',
		// canActivate: [RouteguardService]
    // }, 
    {
        path: 'home',
        loadChildren: '../app/page_module_2/home/home.module#HomeModule',
		canActivate: [RouteguardService]
    }, 
	{
        path: 'officialssc',
		loadChildren: '../app/page_module_2/official/ssc/ssc.module#SSCofficialModule',
		canActivate: [RouteguardService]
    }, 
	{
        path: 'detail',
        loadChildren: '../app/page_module_2/detail/detail.module#DetailModule',
		canActivate: [RouteguardService]
    }, 
    {
        path: 'creditssc',
        loadChildren: '../app/page_module_2/credit/ssc/ssc.module#SSCcreditModule',
        canActivate: [RouteguardService]
    },  
    {
        path: 'creditffc',
        loadChildren: '../app/page_module_2/credit/ffc/ffc.module#FFCcreditModule',
        canActivate: [RouteguardService]
    },
    {
        path: 'vrc',
        loadChildren: '../app/page_module_2/credit/vrc/vrc.module#VRCcreditModule',
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
        path: 'usercenter',
		loadChildren: '../app/page_module_2/usercenter/usercenter.module#UsercenterModule',
		canActivate: [RouteguardService]
	},
	{
        path: 'result',
        loadChildren: '../app/page_module_2/result/result.module#ResultModule',
        canActivate: [RouteguardService]
    },
    // 模板三路由
    {
        path: 'login',
        loadChildren: '../app/page_module_3/login/login.module#LoginModule',
        canActivate: [RouteguardService]
    },
	{
        path: 'test',
        loadChildren: '../app/page_module_3/test/detail.module#DetailModule',
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
        
    },
    {
		path: '**',   // 错误路由重定向[写在最后一个],可作为404页面
		redirectTo: 'index',
		pathMatch: 'full'  // 必须要设置
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
