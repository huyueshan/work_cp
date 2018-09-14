import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../component/components.module";
/***********components***************/
import { KlcComponent } from "./klc.component";

const routes = [
  {
    path: "",
    redirectTo: "bjkl8",
    pathMatch: 'full',
  },
  {
    path: ":id",
    component: KlcComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ComponentsModule
  ],
  declarations: [KlcComponent,]
})
export class KlccreditModule {}
