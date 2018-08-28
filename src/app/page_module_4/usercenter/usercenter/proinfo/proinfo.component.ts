import { Component, OnInit } from '@angular/core';
import userModel from '../../../../../status/user.model';
@Component({
  selector: 'app-proinfo',
  templateUrl: './proinfo.component.html',
  styleUrls: ['./proinfo.component.scss']
})
export class ProinfoComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  public protype = '重庆时时彩【信】';
  constructor() { }

  ngOnInit() {
  }

}
