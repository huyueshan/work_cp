import { NgModule } from "@angular/core";
import { SharkModule } from "@ntesmail/shark-angular2";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../component/components.module";
/***********components***************/
import { LayoutComponent } from "./layout.component";
import { HttpInterceptorService } from '../../Http.Service';

const routes:Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
        {
            path: "",
            loadChildren: './lotcomponent/lottery.module#LotteryModule',
          },
        {
            path: "officialssc",
            loadChildren: '../official/ssc/ssc.module#SSCofficialModule',
          },
        {
            path: "officialffc",
            loadChildren: '../official/ffc/ffc.module#FFCofficialModule',
          },
          {
            path: 'creditssc',
            loadChildren: '../credit/ssc/ssc.module#SSCcreditModule',
        },  
          {
            path: 'creditffc',
            loadChildren: '../credit/ffc/ffc.module#FFCcreditModule',
        },  
          {
            path: 'vrc',
            loadChildren: '../credit/vrc/vrc.module#VRCModule',
        },  

    ],
  },
];

@NgModule({
  imports: [
    SharkModule,
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ComponentsModule
  ],
  declarations: [
      LayoutComponent,
    ],
  providers:[HttpInterceptorService],
})
export class LayoutModule {}
