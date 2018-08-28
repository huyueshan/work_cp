import { Component, OnInit } from '@angular/core';
import userModel from '../../../../../status/user.model';
@Component({
  selector: 'app-bankmanage',
  templateUrl: './bankmanage.component.html',
  styleUrls: ['./bankmanage.component.scss']
})
export class BankmanageComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  public addbanck = false;
  public shade = {
    w:0,
    h:0,
  };
  public formdata = {
    username:'',
    bankname:'',
    bankbranch:'',
    cardnmb:'',
    phone:'',
    note:'',
    checkvalue:''
  };
  constructor() { }

  ngOnInit() {
    this.now_lang_type=userModel.now_lang_type;
  }
  addbank(){
    this.shade.w = screen.width;
    this.shade.h = screen.height;
    this.addbanck = true;
  }
  deladd(){
    this.addbanck = false;
  }

}
