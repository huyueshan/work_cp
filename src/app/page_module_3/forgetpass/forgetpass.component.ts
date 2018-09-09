import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

import { Base } from '../../../factory/base.model';
import { Api } from '../../../factory/api.model';
import { formmod } from '../../../factory/form';
import userModel from '../../../status/user.model';

@Component({
    selector: 'forgetpass',
    templateUrl: './forgetpass.component.html',
    styleUrls: ['./forgetpass.component.scss']
})

export class ForgetpassComponent {
	constructor(private httpClient:HttpClient) { }
	// 传给弹窗组件数据
    public  popoutInfo={
        title:'string',
        msg:'string',
        event: false,
        show: false,
    }
	loadpage=false;
    httpOptions = {  
		headers: new HttpHeaders({ 'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8'})  
	};
	ngOnInit(){
		this.loadpage = userModel.platform;
		Base.DOM.title('忘记密码')
	}
	getpass(){
		let val = <any>{}
		let that = this
		val = formmod.GetName(['mobile','password','password2','tx_code']);
		if(!formmod.Vaildform(val)){
			return
		}
		if(val.password.value != val.password2.value){
			that.POPNOTE({msg:'密码输入不一致'});
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
				that.POPNOTE({msg:'请求失败，请稍后再试！'});
			}  
		);
	}
	// 绑定给弹窗组件的事件；
    NOTARIZE(){
        return
    }
    // 弹窗关闭事件 可以自定义命名
    closePopouot(e){
        this.popoutInfo.show = false;
    }

    // 弹窗显示事件 data为对象 fn传一个方法时点击确认时触发
    POPNOTE(data,fn=null){
        let o = {
            title:'操作提示',   //title不传值默认为 ‘操作提示’
            msg:' ',
            event: false,
            show: true,
        }
        if (typeof fn === 'function') {
            this.NOTARIZE = fn;
            o.event = true;
        }else{
            this.NOTARIZE = ()=>{return};
        }
        this.popoutInfo = Object.assign({},o,data);
    }
}