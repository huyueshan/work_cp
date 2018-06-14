import { ProquotaComponent } from "./../proquota/proquota.component";
import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-userdata",
  templateUrl: "./userdata.component.html",
  styleUrls: ["./userdata.component.scss"]
})
export class UserdataComponent implements OnInit {
  public showindex = -1;
  public userinfo = {
    name: {
      text: "test02",
      show: false,
      succee: false
    }
  };
  public info = [
    {
      name: "username",
      lable: "用户名称",
      text: "test02",
      top: 26,
      userup: {
        text: "test02",
        show: false,
        succee: false
      }
    },
    {
      name: "phone",
      lable: "手机号码",
      text: "13800008888",
      top: 76,
      userup: {
        text: "13800008888",
        show: false,
        succee: false
      }
    },
    {
      name: "name",
      lable: "真实姓名",
      text: "赌神",
      top: 126,
      userup: {
        text: "赌神",
        show: false,
        succee: false
      }
    },
    {
      name: "email",
      lable: "用户邮箱",
      text: "9999999@qq.com",
      top: 176,
      userup: {
        text: "9999999@qq.com",
        show: false,
        succee: false
      }
    },
    {
      name: "qqaccount",
      lable: "用户QQ",
      text: "999999999",
      top: 226,
      userup: {
        text: "999999999",
        show: false,
        succee: false
      }
    },
    {
      name: "weixin",
      lable: "用户微信",
      text: "999999",
      top: 276,
      userup: {
        text: "999999",
        show: false,
        succee: false
      }
    },
  ];

  constructor() {}

  ngOnInit() {}

  upclick(i){
    this.showindex = i;
    this.info[i].userup.succee = false;
  }
  inputblur(i){
    let O = this.info[i].userup
    let d = O.text;
    if(d){
      O.succee = true;
      this.info[i].text = O.text;
    }else{
      O.succee = false;
    }

  }

  trim(param) {
    let value;
    if ((value = param) == "") {
      return value;
    }
    while (true) {
      if (value.indexOf(" ") == 0) {
        value = value.substring(1, parseInt(value.length));
      } else if (
        parseInt(value.length) != 0 &&
        value.lastIndexOf(" ") == parseInt(value.length) - 1
      ) {
        value = value.substring(0, parseInt(value.length) - 1);
      } else {
        return value;
      }
    }
  }

}
