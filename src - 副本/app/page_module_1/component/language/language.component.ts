import { Component } from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { Base } from '../../../../factory/base.model';
import { Api } from '../../../../factory/api.model';
import userModel from '../../../../status/user.model';
import { setCookie,getCookie,delCookie } from '../../../../factory/utils';
import languagepackage from '../../../../status/language';

import Sstore from '../../../../status/user.model'
@Component({
    selector: 'language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.scss']
})

export class LanguageComponent {
	constructor(private FormsModule:FormsModule) { 
        let that = this
	}
	loadpage=false;
	ngOnInit(){
		// this.loadpage = userModel.platform;
        this.check_language()
	}

    now_lang={};
    lang_config = userModel.lang_config
    //语言部分函数
    check_language(){
        console.log(getCookie('now_lot_lang'))
        if (getCookie('now_lot_lang')==null) {
            setCookie('now_lot_lang',this.lang_config.default_lan,this.lang_config.lang_expt)
            let now_lot_lang = getCookie('now_lot_lang');
            this.load_langpackge(now_lot_lang)
        }else{
            //这里手动改变语言后不做任何操作,但是同样调用引用语言包函数;
            let now_lot_lang = getCookie('now_lot_lang');
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
      setCookie('now_lot_lang',lang,this.lang_config.lang_expt);
      this.load_langpackge(lang)
      location.reload()
    }
};
