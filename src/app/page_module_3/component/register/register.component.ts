import { Component, OnInit, Output, EventEmitter, ElementRef } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
@Output() private close=new EventEmitter();
  public formdata = {
    account: "",
    password1: "",
    password2: "",
    phone: "",
    security: ""
  };
  public inborder = {
    account: false,
    password1: false,
    password2: false,
    phone: false,
    security: false
  };
  public errdata = new Set();
  public errtip = "";
  private formtype = {
    cash: /^[\d]{1,20}$/,
    tel: /^0[\d]{8,13}$/,
    price2: /^[\d]{1,6}[.][\d]{1,2}$/,
    email: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    mobile: /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$|17[0-9]{9}/,
    v_code: /^(\d){4}$/,
    name: /^[\w\W]{1,10}$/,
    address: /^[\w\W]{1,30}$/,
    password: /^[\d]{1,15}$/,
    passwords: /^[\d]{1,15}$/,
    mobile_tel: /^(13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$|17[0-9]{9})|^(0[\d]{8,13})|^(400[\d]{6,8})$/,
    string: /^[\w\W]{1,25}$/,
    cardno: /^[\d]{1,30}$/
  };
  public errtiplist: string[] = [
    "账号不能为空！",
    "用户名填写10个字符以内",
    "密码不能为空！",
    "需填15字符以内",
    "请再次输入密码确认！",
    "两次输入的密码不一致！",
    "手机号码不能为空！",
    "请填写正确手机号格式！",
    "验证码不能为空！",
    "验证码格式为4位数字"
  ];
  constructor(
    private el: ElementRef,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {}

  private trim(param) {
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
  validator(info) {
    let value;
    let reg = this.formtype;
    let arr = this.errtiplist;
    let set = this.errdata;
    let tip = this.errtip;
    switch (info) {
      case "account":
        this.inborder.account = true;
        value = this.formdata.account;
        if (this.trim(value) == "") {
          set.add(arr[0]);
          this.errtip = arr[0];
        } else if (!reg.name.test(value)) {
          set.delete(arr[0]);
          set.add(arr[1]);
          this.errtip = arr[1];
        } else {
          this.inborder.account = false;
          set.delete(arr[0]);
          set.delete(arr[1]);
          for (let i = 0; i < arr.length; i++) {
            if (set.has(arr[i])) {
              this.errtip = arr[i];
              return;
            }
          }
          this.errtip = "";
        }
        break;
      case "password1":
        this.inborder.password1 = true;
        value = this.formdata.password1;
        if (this.trim(value) == "") {
          set.add(arr[2]);
          this.errtip = arr[2];
        } else if (!reg.password.test(value)) {
          set.delete(arr[2]);
          set.add(arr[3]);
          this.errtip = arr[3];
        } else {
          this.inborder.password1 = false;
          set.delete(arr[2]);
          set.delete(arr[3]);
          for (let q = 0; q < arr.length; q++) {
            if (set.has(arr[q])) {
              this.errtip = arr[q];
              return;
            }
          }
          this.errtip = "";
        }
        break;
      case "password2":
        this.inborder.password2 = true;
        value = this.formdata.password2;
        if (this.trim(value) == "") {
          set.add(arr[4]);
          this.errtip = arr[4];
        } else if (value !== this.formdata.password1) {
          set.delete(arr[4]);
          set.add(arr[5]);
          this.errtip = arr[5];
        } else {
          this.inborder.password2 = false;
          set.delete(arr[4]);
          set.delete(arr[5]);
          for (let q = 0; q < arr.length; q++) {
            if (set.has(arr[q])) {
              this.errtip = arr[q];
              return;
            }
          }
          this.errtip = "";
        }
        break;
      case "phone":
        this.inborder.phone = true;
        value = this.formdata.phone;
        if (this.trim(value) == "") {
          set.add(arr[6]);
          this.errtip = arr[6];
        } else if (!reg.mobile.test(value)) {
          set.delete(arr[6]);
          set.add(arr[7]);
          this.errtip = arr[7];
        } else {
          this.inborder.phone = false;
          set.delete(arr[6]);
          set.delete(arr[7]);
          for (let q = 0; q < arr.length; q++) {
            if (set.has(arr[q])) {
              this.errtip = arr[q];
              return;
            }
          }
          this.errtip = "";
        }
        break;
      case "security":
        this.inborder.security = true;
        value = this.formdata.security;
        if (this.trim(value) == "") {
          set.add(arr[8]);
          this.errtip = arr[8];
        } else if (!reg.v_code.test(value)) {
          set.delete(arr[8]);
          set.add(arr[9]);
          this.errtip = arr[9];
        } else {
          this.inborder.security = false;
          set.delete(arr[8]);
          set.delete(arr[9]);
          for (let q = 0; q < arr.length; q++) {
            if (set.has(arr[q])) {
              this.errtip = arr[q];
              return;
            }
          }
          this.errtip = "";
        }
        break;
      default:
        break;
    }
  }
  onsubmit() {
    this.errdata.clear();
    this.errtip = "";
    for (let item in this.formdata) {
      this.inborder[item] = false;
    }
    for (let item in this.formdata) {
      this.validator(item);
      if (this.errtip) {
        this.inborder[item] = true;
        const str = "#" + item;
        this.el.nativeElement.querySelector(str).focus();
        return false;
      }
    }
    let data = `account=${this.formdata.account}&password=${
      this.formdata.password1
    }&phone=${this.formdata.phone}`;
    alert(data);
    this.router.navigate(["/index"]);
    return false;
  }


  closeself(){
    this.close.emit();
  }
}
