import { Component, OnInit,Input,OnDestroy, Type } from "@angular/core";
import { SharkModule } from "@ntesmail/shark-angular2";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/observable';
import { Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";

import { Base } from "../../../../factory/base.model";
import { Api } from "../../../../factory/api.model";
import { formmod } from "../../../../factory/form";
import userModel from "../../../../status/user.model";
//语言测试
import { setCookie,getCookie,delCookie } from '../../../../factory/utils';
import languagepackage from '../../../../status/language';
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit,OnDestroy {
    @Input() username :  {Type:any, default:'chen' }; // 用户名
    @Input() curpath :  ''; // 当前路由位置
    public timedate;
    public time;

    
  constructor(private httpClient: HttpClient) {}

	ngOnInit(){
        this.timedate = setInterval(() => {
            this.time = new Date();
        }, 1000);
		// this.loadpage = userModel.platform;
        this.check_language()
	}
    ngOnDestroy() {
        clearInterval(this.timedate);
    }
    now_lang={};
    now_lang_type = '';
    lang_config = userModel.lang_config;
    //语言部分函数
    check_language(){
        if (Base.Store.get('now_lot_lang')==null) {
            Base.Store.set('now_lot_lang',this.lang_config.default_lan)
            let now_lot_lang = Base.Store.get('now_lot_lang');
            this.load_langpackge(now_lot_lang)
        }else{
            //这里手动改变语言后不做任何操作,但是同样调用引用语言包函数;
            let now_lot_lang = Base.Store.get('now_lot_lang');
            this.load_langpackge(now_lot_lang)
        }
    }
    load_langpackge(lang){
    	this.now_lang_type = lang;
        this.now_lang = languagepackage[lang];
        userModel.langpackage = this.now_lang;
    }
    change_language(lang){
       Base.Store.set('now_lot_lang',lang);
       this.load_langpackge(lang)
       location.reload()
    }
    refresh_money(em,em2){
    	em.innerHTML = '- - - - - -';
    	em2.classList.add("active");
    	setTimeout(function(){
    		em.innerHTML = '99999.99'
    		em2.classList.remove("active");
    	}, 1000)
    }

}
