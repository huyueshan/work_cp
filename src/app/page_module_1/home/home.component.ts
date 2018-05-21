import { Component } from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { Base } from '../../../factory/base.model';
import { Api } from '../../../factory/api.model';
import userModel from '../../../status/user.model';
import Sstore from '../../../factory/Sstore'
import  { LanguageComponent } from '../component/language/language.component'

@Component({
    selector: 'home',
    template: `<LanguageComponent></LanguageComponent>`,
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
	constructor(private FormsModule:FormsModule) { 
        let that = this
        console.log(LanguageComponent)
	}
	loadpage=false;
    //公共读取
    now_lang  =  Sstore.langpackage;

    //公共读取结束
	ngOnInit(){
		this.loadpage = userModel.platform
        console.log(this.now_lang)
        console.log(Sstore.langpackage)
	}
	
    tooltipContent = '用户名和密码请随便输入';
    username = '';
    filterData(value, config) {
        let arr = ['sina.com'];
        var list = [];
        if(!value){
            return list;
        }
        if (value.indexOf('@') > -1) {
            var email = value.split('@');
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].indexOf(email[1]) > -1) {
                    list.push({
                        name: email[0] + '@' + arr[i]
                    });
                }
            }
        } else {
            for (var i = 0; i < arr.length; i++) {
                list.push({
                    name: value + '@' + arr[i]
                });
            }
        }
        return list;
    }
};
