

import {Injectable}    from '@angular/core';  
import { HttpInterceptorService } from './Http.Service';
import { Base } from "./base.model";
import { Api } from "./api.model";
  
@Injectable()  
export class PageinitService {  
  
  constructor(private http: HttpInterceptorService) {} 


  public checkStatus= null;  // 定时刷新  定时器变量


  // 用户登录
    USERLOG(data={}){
        this.http.post(Api.logintest,data).then(
            res =>{
                console.log("~~~~~~~~~~~~~~~~~~~~登录成功！，返回信息：" ,res);
                Base.Store.set('isLoaded',true,false);
                this.READY();
            }
        )
    }

  // 用户登出
    USEROUT(data={}){
        this.http.post(Api.logintest,data).then(
            res =>{
                console.log("==============退出登录，返回信息：" ,res);
                Base.Store.remove('isLoaded');
                clearInterval(this.checkStatus);   // 清除定时刷新定时器
            }
        )
    }

    //登陆判断
    ISLOG(){
        // 如果已经登陆，直接请求后台验证 获取数据
        this.http.post(Api.logintest,{})
        .then(result => {  
            if(result.success){
                // success(Validate) 为登陆状态是否正常--后台返回对象的键名   
                // 如果返回的登陆状态true，更新用户在线时长 金额等信息
                console.log("+++++++++已经登录，返回用户信息：" , result);  

                
                Base.Store.set('isLoaded',true,false);
                return true;

            }else{
                // 如果返回的登陆状态false， 登出账号， 转到重新登陆提示页面
                this.USEROUT();
                console.log('=========已经退出登陆，请重新登陆');
                return false;
            }
        }); 

    }


    // 开始运行页面
    READY(){
        // 登录状态判断
      if (Base.Store.get('isLoaded')) {
            /// 定时刷新检测是否已在其他地方登录
            clearInterval(this.checkStatus); // 先清除定时器，再创建。
            this.checkStatus = setInterval(() => {
                this.ISLOG();
                
            }, 3000);

      }else{
        
        // 如果没有登陆， 跳转到登陆提示页面
        console.log("您还没有登录，请登陆" ); 
      }
  }


}  