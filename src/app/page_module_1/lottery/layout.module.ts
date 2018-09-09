import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../component/components.module";
/***********components***************/
import { LayoutComponent } from "./layout.component";

const routes:Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
        {
            path: "",
            loadChildren: './lotcomponent_1/lottery.module#LotteryModule',
          },
        {
            path: "officialssc",
            loadChildren: '../official_1/ssc/ssc.module#SSCofficialModule',
          },
        {
            path: "officialffc",
            loadChildren: '../official_1/ffc/ffc.module#FFCofficialModule',
          },
          {
            path: 'creditssc',
            loadChildren: '../credit_1/ssc/ssc.module#SSCcreditModule',
        },  
          {
            path: 'creditffc',
            loadChildren: '../credit_1/ffc/ffc.module#FFCcreditModule',
        },  
          {
            path: 'creditpk10',
            loadChildren: '../credit_1/pk10/pk10.module#Pk10creditModule',
        },  
          {
            path: 'creditexf',
            loadChildren: '../credit_1/exf/exf.module#ExfcreditModule',
        },  
          {
            path: 'creditklc',
            loadChildren: '../credit_1/klc/klc.module#KlccreditModule',
        },  
        {
            path: 'creditkl',
            loadChildren: '../credit_1/gxk10/gxk10.module#Gxk10creditModule',
        },  
          {
            path: 'creditdpc',
            loadChildren: '../credit_1/dpc/dpc.module#DpccreditModule',
        },  
          {
            path: 'creditk3',
            loadChildren: '../credit_1/k3/k3.module#K3creditModule',
        },  
          {
            path: 'creditpcdd',
            loadChildren: '../credit_1/pcdd/pcdd.module#PcddcreditModule',
        },  
          {
            path: 'vrc',
            loadChildren: '../credit_1/vrc/vrc.module#VRCcreditModule',
        },  
        {
            path: "officialpk10",
            loadChildren: '../official_1/scc/scc.module#SCCofficialModule',
          },  
        {
            path: "officialklc",
            loadChildren: '../official_1/klc/klc.module#KLCofficialModule',
          },
        {
            path: "officialdpc",
            loadChildren: '../official_1/dpc/dpc.module#DPCofficialModule',
          },
        {
            path: "officialexf",
            loadChildren: '../official_1/exf/exf.module#EXFofficialModule',
          },
        {
            path: "officialk3",
            loadChildren: '../official_1/k3/k3.module#K3officialModule',
          }
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ComponentsModule
  ],
  declarations: [
      LayoutComponent,
    ],
  providers:[],
})
export class LayoutModule {}
