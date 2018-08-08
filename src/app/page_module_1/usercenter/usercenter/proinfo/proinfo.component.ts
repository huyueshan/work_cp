import { Component, OnInit } from '@angular/core';
import userModel from '../../../../../status/user.model';

import { CPInfoService } from '../../../../cp-info.service';
@Component({
  selector: 'app-proinfo',
  templateUrl: './proinfo.component.html',
  styleUrls: ['./proinfo.component.scss']
})
export class ProinfoComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  public protype = '重庆时时彩【信】';
  public data = '';
  public data1 = '';
  constructor( private CPInfo: CPInfoService) { }

  ngOnInit() {
      this.data1 = this.CPInfo.get_type('ssc','guan');
      this.data = this.CPInfo.get_type('k3','guan');
  }

}
