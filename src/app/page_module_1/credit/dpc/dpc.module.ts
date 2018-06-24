import { NgModule } from "@angular/core";
import { SharkModule } from "@ntesmail/shark-angular2";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../component/components.module";
/***********components***************/
import { DpcComponent } from "./dpc.component";

const routes = [
  {
    path: "",
    redirectTo: "fc3d",
    pathMatch: 'full',
  },
  {
    path: ":id",
    component: DpcComponent
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
  declarations: [DpcComponent,]
})
export class DpccreditModule {}
