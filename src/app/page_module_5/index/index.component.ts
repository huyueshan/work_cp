import { Component, OnInit,
    OnDestroy, } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import userModel from '../../../status/user.model';
import { Base } from "../../../factory/base.model";
import { PageinitService } from '../../../factory/Pageinit.Service';
import { TransferService } from '../../../factory/Transfer.Service';

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit, OnDestroy {
  public tabactive = 0; // 头部导航是否鼠标经过
  public tableactive = 0; // 底部大图标链接位置是否鼠标经过
  // 头部左边导航数据
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  // 登陆表单数据
  public logindata = {
    name: {
      value: "",
      err: false,
      errtext:'手机号格式不正确！',
    },
    password: {
      value: "",
      err: false,
      errtext:'请输入您的密码！',
    },
    security: {
      value: "",
      err: false,
      errtext:'验证码不正确！',
    }
  };
  // 登陆表单错误提示信息
  public errinfo = {
    show: false,
    content: "",
  };
// 登陆表单验证正则
  private formtype = {
    name: /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$|17[0-9]{9}/,
    password: /^[\d]{1,15}$/,
    security: /^(\d){4}$/
  };

  public resultdata = [5,2,9,3,6];
  public hisdata = [,,,,,,,,,,,]
  public gamedata = [
      {
          name:'时时彩',
          result:[5,2,9,3,6],
          time:50 ,
          src:require("../images/mod5/ssc80_m5.png"),
          width:84,
          link:'',
      },
      {
          name:'福彩',
          result:[5,2,9,3,6],
          time:50 ,
          src:require("../images/mod5/fc80_m5.png"),
          width:70,
          link:'',
      },
      {
          name:'幸运彩',
          result:[5,2,9,3,6],
          time:50 ,
          src:require("../images/mod5/xy80_m5.png"),
          width:70,
          link:'',
      },
      {
          name:'快乐彩',
          result:[5,2,9,3,6],
          time:50 ,
          src:require("../images/mod5/klc80_m5.png"),
          width:88,
          link:'',
      },
  ]
  
  
  constructor(private route: ActivatedRoute, private router: Router, private Pginit:PageinitService, private Transfer:TransferService) {}

  ngOnInit() {
    this.now_lang_type=userModel.now_lang_type;
    if (Base.Store.get('indexitem')) {
        this.tabactive = Number(Base.Store.get('indexitem'));
        Base.Store.set('indexitem',0,false);
        window.scrollTo(0,520);
    }

        this.Pginit.READY({},true);
  }

  ngOnDestroy(){

      // 凡是引入了PageinitService 服务的页面都需要做下面操作
    clearInterval(this.Pginit.checkStatus);  // 清除Pageinit.Service 中的定时器  ！！！！！！！！！！！！！！！！！！！！！！！！

  }

  // 临时登陆退出
  outlog(){
      if (Base.Store.get('isLoaded')) {
          this.Pginit.USEROUT();
        }else{
            this.Pginit.USERLOG({});
      }
  }

  // 登陆表单输入框获取焦点事件
  focus(t) {
    this.logindata[t].err = false;
    this.errinfo.show = false;
  }
  // 错误提示框显示
  errboxshow(){
    this.errinfo.show = true;
    setTimeout(() => {
      this.errinfo.show = false;
    }, 2000);
  }
  // 登陆表单提交
  onsubmit() {
    let data = this.logindata;
    let err = this.errinfo;
    let reg = this.formtype;
    for (let item in this.logindata){
        if (!reg[item].test(data[item].value)) {
          err.content = data[item].errtext;
          data[item].err = true;
          this.errboxshow();
          return false;
        } else {
          data[item].err = false;
        }
    }
    let str = `name=${data.name.value}&password=${
        data.password.value}&security=${data.security.value}`;
      alert(str);
    this.router.navigate(["/creditssc/cq"]);
    return false;
  }
}
