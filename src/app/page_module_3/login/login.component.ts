import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

import { Base } from '../../../factory/base.model';
import { Api } from '../../../factory/api.model';
import { formmod } from '../../../factory/form';
import userModel from '../../../status/user.model';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
	constructor(private httpClient:HttpClient) { }
	loadpage=false;
    httpOptions = {  
		headers: new HttpHeaders({ 'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8'})  
	};
	ngOnInit(){
		this.loadpage = userModel.platform;
		Base.DOM.title('用户登录')
	}
	login(){
		let val = <any>{}
		val = formmod.GetName(['mobile','password','tx_code']);
		if(!formmod.Vaildform(val)){
			return
		}
		let data = {
			username: val.mobile.value,
			password: val.password.value
		}
		
		this.httpClient.post(Api.login, data, this.httpOptions)  
		.subscribe(  
			val => {  
				console.log('post请求成功', val);    
			},  
			error => {  
				formmod.WARNPOST('fail', '请求失败，请稍后再试！');   
			}  
		);
	}
}