import { NgModule } from "@angular/core";
import { SharkModule } from "@ntesmail/shark-angular2";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../component/components.module";
/***********components***************/
import { Gxk10Component } from "./gxk10.component";

const routes = [
  {
    path: "",
    redirectTo: "gxk10",
    pathMatch: 'full',
  },
  {
    path: ":id",
    component: Gxk10Component
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
  declarations: [Gxk10Component,]
})
export class Gxk10creditModule {}
