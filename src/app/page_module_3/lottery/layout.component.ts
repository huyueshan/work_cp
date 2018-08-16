import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import userModel from "../../../status/user.model";
import { HttpInterceptorService } from '../../Http.Service';

import { HttpClient,HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs';
import 'rxjs'

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  loadpage = false;
  constructor(private router: Router, private hserve: HttpInterceptorService,private http:HttpClient) {}

  ngOnInit() {
    this.now_lang_type=userModel.now_lang_type;
    this.loadpage = userModel.platform;
    }
}
