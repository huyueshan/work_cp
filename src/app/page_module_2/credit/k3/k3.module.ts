import { NgModule } from "@angular/core";
import { SharkModule } from "@ntesmail/shark-angular2";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../component/components.module";
/***********components***************/
import { K3Component } from "./k3.component";

const routes = [
  {
    path: "",
    redirectTo: "jsk3",
    pathMatch: 'full',
  },
  {
    path: ":id",
    component: K3Component
  },
];

@NgModule({
  imports: [
    SharkModule,
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ComponentsModule
  ],
  declarations: [K3Component,]
})
export class K3creditModule {}
