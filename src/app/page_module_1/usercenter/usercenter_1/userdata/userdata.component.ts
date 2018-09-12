import { Component, OnInit } from "@angular/core";

import { HttpInterceptorService } from "../../../../../factory/Http.Service";

import { Api } from "../../../../../factory/api.model";

import userModel from '../../../../../status/user.model';

@Component({
  selector: "app-userdata",
  templateUrl: "./userdata.component.html",
  styleUrls: ["./userdata.component.scss"]
})
export class UserdataComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
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
      lable: this.now_lang.User_center_c.User_name,
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
      lable: this.now_lang.User_center_c.Phone_number,
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
      lable: this.now_lang.User_center_c.Real_name,
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
      lable: this.now_lang.User_center_c.Real_name.Email,
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
      lable: this.now_lang.User_center_c.Real_name.User_qq,
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
      lable: this.now_lang.User_center_c.Real_name.User_weixin,
      text: "999999",
      top: 276,
      userup: {
        text: "999999",
        show: false,
        succee: false
      }
    },
  ];

  constructor( private http:HttpInterceptorService) {}

  ngOnInit() {

    this.http.get(Api.gettest,{}).then(res => {
        console.log('请求到的数据：', res);
    });
}

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
