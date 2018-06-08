import { NgModule } from "@angular/core";
import { SharkModule } from "@ntesmail/shark-angular2";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../component/components.module";
/***********components***************/
import { CreditComponent } from "./credit.component";
import { Credtype3Component } from "./credcomponents/credtype3/credtype3.component";

const routes = [
  {
    path: "",
    component: CreditComponent,
    // children: [
    //   {
    //     path: "",
    //     component: Credtype3Component
    //   },
    //   {
    //     path: "credtype3",
    //     component: Credtype3Component
    //   },
    // ]
  }
];

@NgModule({
  imports: [
    SharkModule,
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ComponentsModule
  ],
  declarations: [CreditComponent, Credtype3Component]
})
export class CreditModule {}
