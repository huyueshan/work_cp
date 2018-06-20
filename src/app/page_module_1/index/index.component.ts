import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import userModel from '../../../status/user.model';

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  public now_lang :any={};
  public tabactive = 0; // 头部导航是否鼠标经过
  public tableactive = 0; // 底部大图标链接位置是否鼠标经过
  // 头部左边导航数据
  
  public navdatal = [
    {
      text: "首页",
      bgpositiony: -10,
      isover: false,
      link: ""
    },
    {
      text: "彩票大厅",
      bgpositiony: -114,
      isover: false,
      link: "/lottery"
    },
    {
      text: "用户中心",
      bgpositiony: -218,
      isover: false,
      link: "/usercenter"
    },
    {
      text: "优惠活动",
      bgpositiony: -322,
      isover: false,
      link: ""
    }
  ];
  // 头部右边导航数据
  public navdatar = [
    {
      text: "平台公告",
      bgpositiony: -10,
      isover: false,
      link: ""
    },
    {
      text: "彩种信息",
      bgpositiony: -114,
      isover: false,
      link: ""
    },
    {
      text: "手机下注",
      bgpositiony: -218,
      isover: false,
      link: ""
    },
    {
      text: "在线客服",
      bgpositiony: -322,
      isover: false,
      link: ""
    }
  ];
  // 中间内容取tab数据
  public mdtabdata = [
    {
      text: "热门游戏",
      link: ""
    },
    {
      text: "移动端下载",
      link: ""
    },
    {
      text: "优惠活动",
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
      link: "/lottery/officialssc"
    },
    {
      x: -10,
      y: -258,
      left: "480",
      link: "/lottery/officialssc"
    },
    {
      x: -10,
      y: -10,
      left: "600",
      link: "/lottery/officialssc"
    },
    {
      x: -122,
      y: -134,
      left: "720",
      link: "/lottery/officialssc"
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
      title: "时时彩",
      link: "/lottery/officialssc"
    },
    {
      src: require("../images/shifencai.jpg"),
      title: "分时彩",
      link: "/lottery/creditssc"
    },
    {
      src: require("../images/VR_cai.jpg"),
      title: "VR彩",
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
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.now_lang=userModel.langpackage;
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
      console.log(t);
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
