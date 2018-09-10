import { Component } from '@angular/core';
import {
    Router,
} from "@angular/router";

@Component({
    selector: 'app-AgainLogin',
    templateUrl: './AgainLogin.component.html',
    styleUrls: ['./AgainLogin.component.scss']
})

export class AgainLoginComponent {

    // 传给弹窗组件数据
    public  popoutInfo={
        title:'string',
        msg:'string',
        event: false,
        show: false,
    }
	constructor(private router: Router) {}
	ngOnInit(){
        this.POPNOTE({title:'提示',msg:'您还没有登录，请先登录！'})
	}    
    // 绑定给弹窗组件的事件；
    NOTARIZE(){
        return
    }
    // 弹窗关闭事件 可以自定义命名
    closePopouot(e){
        this.popoutInfo.show = false;
        this.router.navigateByUrl("login");
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