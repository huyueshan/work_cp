import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Router } from "@angular/router";

import { Base } from '../../../factory/base.model';
import { formmod } from '../../../factory/form';
import userModel from '../../../status/user.model';

import { PageinitService } from '../../../factory/Pageinit.Service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
	constructor(private httpClient:HttpClient, private Pginit:PageinitService,private router: Router) { }
	loadpage=false;
    httpOptions = {  
		headers: new HttpHeaders({ 'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8'})  
	};
	ngOnInit(){
		this.loadpage = userModel.platform;
        Base.DOM.title('用户登录');
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
        
        Base.Store.set('isLoaded',true,false);
        this.Pginit.USERLOG(data);
        this.router.navigateByUrl("index")
		
		
	}
}