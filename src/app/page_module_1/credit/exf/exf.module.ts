import { NgModule } from "@angular/core";
import { SharkModule } from "@ntesmail/shark-angular2";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../component/components.module";
/***********components***************/
import { ExfComponent } from "./exf.component";

const routes = [
  {
    path: "",
    redirectTo: "sdexf",
    pathMatch: 'full',
  },
  {
    path: ":id",
    component: ExfComponent
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
  declarations: [ExfComponent,]
})
export class ExfcreditModule {}
