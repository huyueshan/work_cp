import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bankmanage',
  templateUrl: './bankmanage.component.html',
  styleUrls: ['./bankmanage.component.scss']
})
export class BankmanageComponent implements OnInit {
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
