import { Component, OnInit,Input, Type } from "@angular/core";
import { SharkModule } from "@ntesmail/shark-angular2";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";

import { Base } from "../../../../factory/base.model";
import { Api } from "../../../../factory/api.model";
import { formmod } from "../../../../factory/form";
import userModel from "../../../../status/user.model";
//语言测试
import { setCookie,getCookie,delCookie } from '../../../../factory/utils';
import languagepackage from '../../../../status/language';
import Sstore from '../../../../status/user.model'
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input() username :  {Type:any, default:'chen' }; // 用户名
  
  constructor(private httpClient: HttpClient) {}

	ngOnInit(){
		// this.loadpage = userModel.platform;
        this.check_language()
	}

    now_lang={};
    lang_config = userModel.lang_config
    //语言部分函数
    check_language(){
        console.log(getCookie('now_lot_lang'))
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
        this.now_lang = languagepackage[lang];
        Sstore['langpackage'] = this.now_lang;
        console.log(Sstore['langpackage'])
        console.log(Sstore['langpackage'])
    }
    change_language(lang){
       Base.Store.set('now_lot_lang',lang);
      this.load_langpackge(lang)
      location.reload()
    }

}
