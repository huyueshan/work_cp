import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../component/components.module";
/***********components***************/
import { VRcComponent } from "./vrc.component";

const routes = [
  {
    path: "",
    redirectTo: "bjl",
    pathMatch: 'full',
  },
  {
    path: ":id",
    component: VRcComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ComponentsModule
  ],
  declarations: [VRcComponent]
})
export class VRCcreditModule {}
