import { Component, OnInit } from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { FormGroup,FormsModule,FormControl,FormBuilder,AbstractControl,Validators,ReactiveFormsModule } from "@angular/forms";
import { HeadComponent } from '../component/head.component';

import { validators } from '../component/validators';
import { Base } from '../../../factory/base.model';
import { Api } from '../../../factory/api.model';
import { formmod } from '../../../factory/form';
import userModel from '../../../status/user.model';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
	constructor() { }
	private user=new validators();
	loadpage=false;
	ngOnInit(){
		this.loadpage = userModel.platform
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
		$.ajax({
			type: "post",
			url: 'api/user/login',
			data:data,
			dataType: 'json',
			success: function (data) {
				
			}
		});
	}
}