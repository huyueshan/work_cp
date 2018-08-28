import { NgModule } from "@angular/core";
import { SharkModule } from "@ntesmail/shark-angular2";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../component/components.module";
/***********components***************/
import { PcddComponent } from "./pcdd.component";

const routes = [
  {
    path: "",
    redirectTo: "xy28",
    pathMatch: 'full',
  },
  {
    path: ":id",
    component: PcddComponent
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
  declarations: [PcddComponent,]
})
export class PcddcreditModule {}
