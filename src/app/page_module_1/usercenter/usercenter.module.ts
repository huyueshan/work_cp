// import { BrowserModule } from "@angular/platform-browser";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { SharkModule } from "@ntesmail/shark-angular2";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../component/components.module";
import { FormsModule } from "@angular/forms";
import { GoucaiqueryComponent } from "../component/goucaiquery/goucaiquery.component";
import { ZhuihaoqueryComponent } from "../component/zhuihaoquery/zhuihaoquery.component";

/***********components***************/
import { UsercenterComponent } from "./usercenter.component";

const routes = [
  {
    path: "",
    component: UsercenterComponent,
    children: [
      {
        path: "goucaiquery",

        component: GoucaiqueryComponent
      },
      {
        path: "Zhuihaoquery",

        component: ZhuihaoqueryComponent
      },
      {
        path: "",

        component: GoucaiqueryComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    SharkModule,
    RouterModule.forChild(routes),
    CommonModule,
    ComponentsModule,
    FormsModule
  ],
  declarations: [
    UsercenterComponent
  ]
})
export class UsercenterModule {}
