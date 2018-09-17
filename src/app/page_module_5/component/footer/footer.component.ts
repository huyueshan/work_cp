import { Component, OnInit } from '@angular/core';
import userModel from '../../../../status/user.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';


  constructor() { }
  ngOnInit() {
    this.now_lang_type=userModel.now_lang_type;
  }
  

}
