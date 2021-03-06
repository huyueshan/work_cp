import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { Base } from '../../../../factory/base.model';
import userModel from '../../../../status/user.model';

import languagepackage from '../../../../status/language';

@Component({
    selector: 'language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.scss']
})

export class LanguageComponent {
	constructor() { 
        let that = this
	}
	loadpage=false;
	ngOnInit(){
        this.check_language()
	}
    now_lang={};
    lang_config = userModel.lang_config
    //语言部分函数
    check_language(){
        if (Base.Store.get('now_lot_lang')==false) {
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
        userModel.now_lang_type = lang;
    }
    change_language(lang){
        Base.Store.set('now_lot_lang',lang);
        this.load_langpackge(lang)
        location.reload()
    }
};
