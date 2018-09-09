import { Component, OnInit,
    OnDestroy, } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import userModel from '../../../status/user.model';
import { Base } from "../../../factory/base.model";
import { PageinitService } from '../../../factory/Pageinit.Service';

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
  public navdatal = [
    {
      text: this.now_lang.index.Index,
      bgpositiony: -10,
      isover: false,
      link: ""
    },
    {
      text: this.now_lang.index.Lot_lobby,
      bgpositiony: -114,
      isover: false,
      link: "/lottery"
    },
    {
      text: this.now_lang.index.User_center,
      bgpositiony: -218,
      isover: false,
      link: "/usercenter"
    },
    {
      text: this.now_lang.index.Discount,
      bgpositiony: -322,
      isover: false,
      link: "/usercenter/discount"
    }
  ];
  // 头部右边导航数据
  public navdatar = [
    {
      text: this.now_lang.index.Notice,
      bgpositiony: -10,
      isover: false,
      link: "/usercenter/webnote"
    },
    {
      text: this.now_lang.index.Lot_info,
      bgpositiony: -114,
      isover: false,
      link: "/usercenter/proinfo"
    },
    {
      text: this.now_lang.index.Pho_bet,
      bgpositiony: -218,
      isover: false,
      link: "game2"
    },
    {
      text:  this.now_lang.index.Client_service,
      bgpositiony: -322,
      isover: false,
      link: ""
    }
  ];
  // 中间内容取tab数据
  public mdtabdata = [
    {
      text: this.now_lang.index.Hot_game,
      link: ""
    },
    {
      text: this.now_lang.index.App_down,
      link: ""
    },
    {
      text: this.now_lang.index.Discount,
      link: ""
    }
  ];
  // 热门游戏彩种球数据
  public ball_list = [
    {
      x: -10,
      y: -10,
      left: "-240",
      link: "/lottery/officialssc"
    },
    {
      x: -122,
      y: -134,
      left: "-120",
      link: "/lottery/officialssc"
    },
    {
      x: -10,
      y: -258,
      left: "0",
      link: "/lottery/officialssc/cq"
    },
    {
      x: -346,
      y: -134,
      left: "120",
      link: "/lottery/officialssc"
    },
    {
      x: -10,
      y: -258,
      left: "240",
      link: "/lottery/officialssc"
    },
    {
      x: -10,
      y: -258,
      left: "360",
      link: "/lottery/officialpk10/bjpk"
    },
    {
      x: -10,
      y: -258,
      left: "480",
      link: "/lottery/officialpk10/bjpk"
    },
    {
      x: -10,
      y: -10,
      left: "600",
      link: "/lottery/officialpk10/bjpk"
    },
    {
      x: -122,
      y: -134,
      left: "720",
      link: "/lottery/officialpk10/bjpk"
    },
    {
      x: -346,
      y: -134,
      left: "840",
      link: "/lottery/officialssc"
    },
    {
      x: -10,
      y: -258,
      left: "960",
      link: "/lottery/officialssc"
    },
    {
      x: -10,
      y: -10,
      left: "1080",
      link: "/lottery/officialssc"
    },
    {
      x: -122,
      y: -134,
      left: "1200",
      link: "/lottery/officialssc"
    },
    {
      x: -346,
      y: -134,
      left: "1320",
      link: "/lottery/officialssc"
    },
  ];
  // 热门游戏内容区数据
  public hotcard_list = [
    {
      src: require("../images/shishicai.jpg"),
      title: this.now_lang.index.ssc,
      link: "/lottery/officialssc"
    },
    {
      src: require("../images/shifencai.jpg"),
      title: this.now_lang.index.fsc,
      link: "/lottery/officialffc"
    },
    {
      src: require("../images/VR_cai.jpg"),
      title: this.now_lang.index.vrc,
    //   link: "/lottery/creditpk10"
      link: "/lottery/vrc"
    }
  ];
  // 投注排行和中奖排行数据
  public touzhu_list = [, , , , , , , , , , ,];
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
  constructor(private route: ActivatedRoute, private router: Router, private Pginit:PageinitService) {}

  ngOnInit() {
    this.now_lang_type=userModel.now_lang_type;
    if (Base.Store.get('indexitem')) {
        this.tabactive = Number(Base.Store.get('indexitem'));
        Base.Store.set('indexitem',0,false);
        window.scrollTo(0,520);
    }

    
    if (!Base.Store.get('isLoaded')){
        console.log('您还没有登录，请登陆！');
    }else{
        console.log('您已经登录');
        this.Pginit.READY();
    }
  }

  ngOnDestroy(){
    clearInterval(this.Pginit.checkStatus);  // 清除Pageinit.Service 中的定时器  ！！！！！！！！！！！！！！！！！！！！！！！！

  }

  // 临时登陆退出
  outlog(){
      if (Base.Store.get('isLoaded')) {
          this.Pginit.USEROUT();
        }else{
            this.Pginit.USERLOG();
      }
  }

  // 中间内容区tab切换事件
  mdtabclick(i) {
    this.tabactive = i;
  }
  // 头部左右导航鼠标经过事件
  navmouseenter(i, t) {
    if (t == "left") {
      this.navdatal[i].isover = true;
    } else {
      this.navdatar[i].isover = true;
    }
  }
  navmouseleave(i, t) {
    if (t == "left") {
      this.navdatal[i].isover = false;
    } else {
      this.navdatar[i].isover = false;
    }
  }
  // todo:热门游戏小球移动效果
  ballclick(t) {
    let data = this.ball_list;
    if (t == "left") {
      if (Number(data[0].left) < -600) {
        return;
      } else {
        for (let i = 0; i < data.length; i++) {
          data[i].left = "" + (Number(data[i].left) - 120);
        }
      }
    } else {
      if (Number(data[data.length - 1].left) > 1320) {
        return;
      } else {
        for (let i = 0; i < data.length; i++) {
          data[i].left = "" + (Number(data[i].left) + 120);
        }
      }
    }
  }
  linkrouter(t) {
      if (t === "game2") {
        window.location.hash = "#game";
        this.tabactive = 1;
        return;
      }
    this.router.navigate([t]);
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
