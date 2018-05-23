import { Component, OnInit } from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

import { Base } from '../../../../factory/base.model';
import { Api } from '../../../../factory/api.model';
import { formmod } from '../../../../factory/form';
import userModel from '../../../../status/user.model';

@Component({
    selector: 'ssccredit',
    templateUrl: './ssc.component.html',
    styleUrls: ['./ssc.component.scss']
})

export class SSCcreditComponent implements OnInit {
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
		
		
	}
}