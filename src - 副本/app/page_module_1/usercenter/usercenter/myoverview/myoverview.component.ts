import { Component, OnInit } from '@angular/core';
import { MYREPORT, userdef } from "../../../../../factory/usercent";

@Component({
  selector: 'app-myoverview',
  templateUrl: './myoverview.component.html',
  styleUrls: ['./myoverview.component.scss']
})
export class MyoverviewComponent implements OnInit {
  public querydata = {
    starttime: "",
    endtime: "",
  };
  constructor() {}
  ngOnInit() {
  }

}
