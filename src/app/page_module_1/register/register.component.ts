import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public formdata={
    account:'',
    password1:'',
    password2:'',
    phone:'',
    security:'',
  };
  public errtip='';

  constructor() { }

  ngOnInit() {
  }
  validator(info){
    console.log(this.formdata[info]);
    // switch (info) {
    //   case "account":
        
    //     break;
    //   case "password1":
        
    //     break;
    //   case "password2":
        
    //     break;
    //   case "phone":
        
    //     break;
    //   case "security":
        
    //     break;
    
    //   default:
    //     break;
    // }

  }
  onsubmit(){
    // 验证脚本


  let data = `account=${this.formdata.account}&account=${this.formdata.password1}&account=${this.formdata.phone}`;


    return false
  }

}
