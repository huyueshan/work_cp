import { Component, OnInit } from '@angular/core';

import { HttpInterceptorService } from "../../../../../factory/Http.Service";

import { Api } from "../../../../../factory/api.model";

import userModel from '../../../../../status/user.model';
@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';

  
    // 传给弹窗模块数据
    public  modalInfo={
        title:'title',
        width:200,
        show: false,
    } 

    public changeitem = ['账号密码','提款密码','手机绑定','密保问题',]
  constructor(private http:HttpInterceptorService) { }

  ngOnInit() {

    this.http.get(Api.gettest,{}).then(res => {
        console.log('请求到的数据：', res);
    });
  
  }


  // 显示弹窗
  detail(i){
      let str = `修改${this.changeitem[i]}`
    this.MODAL({title: str,});
  }

  // 弹窗关闭事件 可以自定义命名
  closeModal(e){
    this.modalInfo.show = false;
}

// 弹窗显示事件 data为对象 fn传一个方法时点击确认时触发
MODAL(data){
    let o = {
        title:'title',   // title不传值默认
        center:true,  // title 是否居中
        width:500,
        show: true,
    }
    this.modalInfo = Object.assign({},o,data);
}

}
