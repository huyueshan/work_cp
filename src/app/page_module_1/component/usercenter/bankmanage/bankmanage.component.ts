import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bankmanage',
  templateUrl: './bankmanage.component.html',
  styleUrls: ['./bankmanage.component.scss']
})
export class BankmanageComponent implements OnInit {
  public addbanck = false;
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
    this.addbanck = true;
  }
  deladd(){
    this.addbanck = false;
  }

}
