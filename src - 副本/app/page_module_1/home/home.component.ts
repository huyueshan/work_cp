import { Component } from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { Base } from '../../../factory/base.model';
import { Api } from '../../../factory/api.model';
import userModel from '../../../status/user.model';
import Sstore from '../../../factory/Sstore';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
	constructor(private FormsModule:FormsModule) { 
        let that = this
	}
	loadpage=false;
    //公共读取
    now_lang  =  Sstore.langpackage;
    //公共读取结束
	ngOnInit(){
		this.loadpage = userModel.platform
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
