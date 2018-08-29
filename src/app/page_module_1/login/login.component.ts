import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { RouterModule, Routes, Router } from "@angular/router";

import { Base } from '../../../factory/base.model';
import { Api } from '../../../factory/api.model';
import { formmod } from '../../../factory/form';
import userModel from '../../../status/user.model';
import { HttpInterceptorService } from '../../../app/Http.Service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
	constructor(private httpClient:HttpClient,private hserve:HttpInterceptorService,private router: Router,) { }
	loadpage=false;
    httpOptions = {  
		headers: new HttpHeaders({ 'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8'})  
	};
	ngOnInit(){
		this.loadpage = userModel.platform;
		Base.DOM.title('用户登录')
		// let id = document.getElementById('dialog_login');
		// console.log(document.body.clientHeight)
		// console.log(id.offsetHeight)
		// console.log(id.offsetTop)
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
		
		
		this.hserve.post(Api.login,data).then(result => {  
			console.log("登录接口返回的信息是：" , result);//打印返回的数据  
			this.router.navigateByUrl("index")
		});
	}
}