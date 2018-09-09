import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Router } from "@angular/router";

import { Base } from '../../../factory/base.model';
import { Api } from '../../../factory/api.model';
import { formmod } from '../../../factory/form';
import userModel from '../../../status/user.model';
import { HttpInterceptorService } from '../../../factory/Http.Service';

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
			this.router.navigateByUrl("index")
		});
	}
}