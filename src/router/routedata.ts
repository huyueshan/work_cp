import { RouterModule, Routes, Router,Route} from "@angular/router";
import { RouteguardService } from './router.service';
// const rout:Route = require('../app/page_module_2/home/home.module#HomeModule');
let str ='../app/page_module_2/home/home.module#HomeModule';
const item1:Routes =[
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
        // loadChildren:str,
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
const item2:Routes = [
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
        path: 'register',
        loadChildren: '../app/page_module_1/register/register.module#RegisterModule'
    },
    {
        path: 'index',
        loadChildren: '../app/page_module_1/index/index.module#IndexModule'
    },
    {
        path: 'sscmod',
        loadChildren: '../app/page_module_1/sscmod/official/ssc.module#SSCofficialModule',
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
        path: 'index',
        loadChildren: '../app/page_module_1/index/index.module#IndexModule'
    },
    {
        path: 'usercenter',
        loadChildren: '../app/page_module_1/usercenter/usercenter.module#UsercenterModule',
        
    },
    {
        path: '**',   // 错误路由重定向[写在最后一个],可作为404页面
        redirectTo: 'home',
        pathMatch: 'full'  // 必须要设置
    }
];
const item3:Routes =[
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
const item4:Routes = [
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
export const routedata = {
    item1,
    item2,
    item3,
    item4,
}
