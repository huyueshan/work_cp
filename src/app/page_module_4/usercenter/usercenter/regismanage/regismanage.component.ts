import { Component, OnInit } from '@angular/core';
import userModel from '../../../../../status/user.model';
@Component({
  selector: 'app-regismanage',
  templateUrl: './regismanage.component.html',
  styleUrls: ['./regismanage.component.scss']
})
export class RegismanageComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  public formdata ={
    type:this.now_lang.User_center_c.Agent,
    name:'',
    account:'',
    password1:'',
    password2:'',
    inform:'false',
    group:this.now_lang.User_center_c.Quota_bonus_group,
    other:'',
  }
  constructor() { }

  ngOnInit() {
  }

}
