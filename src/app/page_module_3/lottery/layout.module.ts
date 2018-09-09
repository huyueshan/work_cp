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
            loadChildren: './lotcomponent_3/lottery.module#LotteryModule',
          },
        {
            path: "officialssc",
            loadChildren: '../official_3/ssc/ssc.module#SSCofficialModule',
          },
        {
            path: "officialffc",
            loadChildren: '../official_3/ffc/ffc.module#FFCofficialModule',
          },
          {
            path: 'creditssc',
            loadChildren: '../credit_3/ssc/ssc.module#SSCcreditModule',
        },  
          {
            path: 'creditffc',
            loadChildren: '../credit_3/ffc/ffc.module#FFCcreditModule',
        },  
          {
            path: 'creditpk10',
            loadChildren: '../credit_3/pk10/pk10.module#Pk10creditModule',
        },  
          {
            path: 'creditexf',
            loadChildren: '../credit_3/exf/exf.module#ExfcreditModule',
        },  
          {
            path: 'creditklc',
            loadChildren: '../credit_3/klc/klc.module#KlccreditModule',
        },  
        {
            path: 'creditkl',
            loadChildren: '../credit_3/gxk10/gxk10.module#Gxk10creditModule',
        },  
          {
            path: 'creditdpc',
            loadChildren: '../credit_3/dpc/dpc.module#DpccreditModule',
        },  
          {
            path: 'creditk3',
            loadChildren: '../credit_3/k3/k3.module#K3creditModule',
        },  
          {
            path: 'creditpcdd',
            loadChildren: '../credit_3/pcdd/pcdd.module#PcddcreditModule',
        },  
          {
            path: 'vrc',
            loadChildren: '../credit_3/vrc/vrc.module#VRCcreditModule',
        },  
        {
            path: "officialpk10",
            loadChildren: '../official_3/scc/scc.module#SCCofficialModule',
          },  
        {
            path: "officialklc",
            loadChildren: '../official_3/klc/klc.module#KLCofficialModule',
          },
        {
            path: "officialdpc",
            loadChildren: '../official_3/dpc/dpc.module#DPCofficialModule',
          },
        {
            path: "officialexf",
            loadChildren: '../official_3/exf/exf.module#EXFofficialModule',
          },
        {
            path: "officialk3",
            loadChildren: '../official_3/k3/k3.module#K3officialModule',
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
})
export class LayoutModule {}
