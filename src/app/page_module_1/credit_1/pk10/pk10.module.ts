import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../component/components.module";
/***********components***************/
import { Pk10Component } from "./pk10.component";

const routes = [
  {
    path: "",
    redirectTo: "bjpk",
    pathMatch: 'full',
  },
  {
    path: ":id",
    component: Pk10Component
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ComponentsModule
  ],
  declarations: [Pk10Component,]
})
export class Pk10creditModule {}
