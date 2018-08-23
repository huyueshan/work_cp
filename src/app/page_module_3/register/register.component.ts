import { Component, OnInit, ElementRef } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-registers",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  constructor(
    private el: ElementRef,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {}

}
