import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../component/components.module";
/***********components***************/
import { SscComponent } from "./ssc.component";

const routes = [
  {
    path: "",
    redirectTo: "cq",
    pathMatch: 'full',
  },
  {
    path: ":id",
    component: SscComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ComponentsModule
  ],
  declarations: [SscComponent,]
})
export class SSCcreditModule {}
