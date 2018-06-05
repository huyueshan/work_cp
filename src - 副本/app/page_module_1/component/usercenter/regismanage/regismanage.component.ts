import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regismanage',
  templateUrl: './regismanage.component.html',
  styleUrls: ['./regismanage.component.scss']
})
export class RegismanageComponent implements OnInit {

  public formdata ={
    type:'代理',
    name:'',
    account:'',
    password1:'',
    password2:'',
    inform:'false',
    group:'配额奖金组',
    other:'',
  }
  constructor() { }

  ngOnInit() {
  }

}
