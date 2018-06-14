import { NgModule } from "@angular/core";
import { SharkModule } from "@ntesmail/shark-angular2";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../component/components.module";
/***********components***************/
import { LotteryComponent } from "./lottery.component";

import { HttpInterceptorService } from '../Http.Service';

const routes = [
  {
    path: "",
    component: LotteryComponent
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
  declarations: [LotteryComponent,],
  providers:[HttpInterceptorService],
})
export class LotteryModule {}
