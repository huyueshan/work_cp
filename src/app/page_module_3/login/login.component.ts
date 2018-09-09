import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
	constructor(private httpClient:HttpClient) { }
	loadpage=false;
	ngOnInit(){
	}
}