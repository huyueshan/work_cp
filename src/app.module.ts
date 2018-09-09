import { enableProdMode } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from "@angular/router";
import { SharkModule } from '@ntesmail/shark-angular2';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { ApplicationRef } from '@angular/core';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Base } from './factory/base.model';
const way = Base.Store.get('isTemplet');
// if(Base.Store.get('isTemplet')){
	// require("./styles/waybill/waybill_"+way+".scss");在页面引用可解决图片路径权限问题
// };
import "./styles/scss/index.scss";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './router/router.module';
import { InterceptorService } from './router/ljq.service';
import { HttpInterceptorService } from '../src/factory/Http.Service';
import { PageinitService } from './factory/Pageinit.Service';


if (ENV === 'prod') {
    enableProdMode();
}

@NgModule({
    imports: [BrowserModule, FormsModule, SharkModule, AppRoutingModule,HttpModule ,HttpClientModule,],
    declarations: [AppComponent],
	providers: [
        {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true},
        HttpInterceptorService,
        PageinitService,
	],
    bootstrap: [AppComponent,
        
    ]
}) 
export class AppModule {
    constructor(public appRef: ApplicationRef,private router:Router) { 
		
	}
	
	//此部分用来调试，查看报错位置
    hmrOnInit(store: any) {
		
    }
    hmrOnDestroy(store: any) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement)
        store.disposeOldHosts = createNewHosts(cmpLocation)
        removeNgStyles()
    }
    hmrAfterDestroy(store: any) {
        store.disposeOldHosts()
        delete store.disposeOldHosts
    }
	//end
}

// 启动
platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.log(err)); 
