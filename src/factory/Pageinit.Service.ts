import { Injectable } from "@angular/core";
import { HttpInterceptorService } from "./Http.Service";
import { Router } from "@angular/router";

import { TransferService } from "./Transfer.Service";

import { Base } from "./base.model";
import { Api } from "./api.model";

@Injectable()
export class PageinitService {
  constructor(
    private http: HttpInterceptorService,
    private router: Router,
    private Transfer: TransferService
  ) {}

  public checkStatus = null; // 定时刷新  定时器变量

  // 用户登录
  USERLOG(data) {
    this.http.post(Api.logintest, data).then(res => {
      console.log("~~~~~~~~~~~~~~~~~~~~登录成功！，返回信息：", res);
      if (data.username) {
        this.Transfer.user_name = data.username;
      }
      Base.Store.set("isLoaded", true, false);
    });
  }

  // 用户登出
  USEROUT(data = {}) {
    this.http.post(Api.logintest, data).then(res => {
      console.log("==============退出登录，返回信息：", res);
      Base.Store.remove("isLoaded");
      clearInterval(this.checkStatus); // 清除定时刷新定时器
      this.ISLOG(data);
    //   history.go(0);
    });
  }

  //登陆判断
  ISLOG(data = {}) {
    // 如果已经登陆，直接请求后台验证 获取数据
    this.http.post(Api.logintest, data).then(result => {
      if (result.success) {
        // success(Validate) 为登陆状态是否正常--后台返回对象的键名
        // 如果返回的登陆状态true，更新用户在线时长 金额等信息
        console.log("+++++++++登录状态，返回用户信息：", result);

        return true;
      } else {
        // 如果返回的登陆状态false， 登出账号， 转到重新登陆提示页面
        // this.USEROUT();
        // this.router.navigateByUrl("AgainLogin");
        console.log("=========服务器返回登录异常", result);
        return false;
      }
    });
  }

  // 开始运行页面  参数authority 为true表示用在用户没有登录也可以访问的页面
  READY(data, authority = false) {
    // 先清除定时器，再创建。
    clearInterval(this.checkStatus);

    // 如果没有登陆，而且页面必须登录才能访问 跳转到登陆提示页面
    if (!Base.Store.get("isLoaded")) {
      console.log("您还没有登录，请登陆");
      !authority && this.router.navigateByUrl("AgainLogin");
    }

    /// 定时刷新检测是否已在其他地方登录
    this.checkStatus = setInterval(() => {
      this.Transfer.nowOnline += 1; // 测试。在线人数定时加一
      console.log('在线人数： '+ this.Transfer.nowOnline);
      if (Base.Store.get("isLoaded") && !authority) {
        this.ISLOG(data);
      }
    }, 10000);
  }
}
