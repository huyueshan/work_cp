import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../component/components.module";
/***********components***************/
import { FfccreditComponent } from "./ffc.component";

const routes = [
  {
    path: "",
    redirectTo: "bj",
    pathMatch: 'full',
  },
  {
    path: ":id",
    component: FfccreditComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ComponentsModule
  ],
  declarations: [FfccreditComponent,]
})
export class FFCcreditModule {}
