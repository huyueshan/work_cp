import { Component, OnInit } from "@angular/core";
import { SharkModule } from "@ntesmail/shark-angular2";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Base } from "../../../../factory/base.model";
import { Api } from "../../../../factory/api.model";
import { formmod } from "../../../../factory/form";
import userModel from "../../../../status/user.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
  }
}
