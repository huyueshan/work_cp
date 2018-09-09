import { NgModule } from "@angular/core";
import { SharkModule } from "@ntesmail/shark-angular2";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../component/components.module";
/***********components***************/
import { LayoutComponent } from "./layout.component";
import { RuleComponent } from './components/rule/rule.component';

const routes:Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
        {
            path: "",
            redirectTo: 'officialssc',
            pathMatch: 'full',
        },
        {
            path: "officialssc",
            loadChildren: '../official_2/ssc/ssc.module#SSCofficialModule',
          },
        {
            path: "officialffc",
            loadChildren: '../official_2/ffc/ffc.module#FFCofficialModule',
          },
          {
            path: 'creditssc',
            loadChildren: '../credit_2/ssc/ssc.module#SSCcreditModule',
        },  
          {
            path: 'creditffc',
            loadChildren: '../credit_2/ffc/ffc.module#FFCcreditModule',
        },  
          {
            path: 'creditpk10',
            loadChildren: '../credit_2/pk10/pk10.module#Pk10creditModule',
        },  
          {
            path: 'creditexf',
            loadChildren: '../credit_2/exf/exf.module#ExfcreditModule',
        },  
        {
            path: 'creditklc',
            loadChildren: '../credit_2/klc/klc.module#KlccreditModule',
        },  
        {
            path: 'creditkl',
            loadChildren: '../credit_2/gxk10/gxk10.module#Gxk10creditModule',
        },  
          {
            path: 'creditdpc',
            loadChildren: '../credit_2/dpc/dpc.module#DpccreditModule',
        },  
          {
            path: 'creditk3',
            loadChildren: '../credit_2/k3/k3.module#K3creditModule',
        },  
          {
            path: 'creditpcdd',
            loadChildren: '../credit_2/pcdd/pcdd.module#PcddcreditModule',
        },  
          {
            path: 'vrc',
            loadChildren: '../credit_2/vrc/vrc.module#VRCcreditModule',
        },  
        {
            path: "officialpk10",
            loadChildren: '../official_2/scc/scc.module#SCCofficialModule',
          },  
        {
            path: "officialklc",
            loadChildren: '../official_2/klc/klc.module#KLCofficialModule',
          },
        {
            path: "officialdpc",
            loadChildren: '../official_2/dpc/dpc.module#DPCofficialModule',
          },
        {
            path: "officialexf",
            loadChildren: '../official_2/exf/exf.module#EXFofficialModule',
          },
        {
            path: "officialk3",
            loadChildren: '../official_2/k3/k3.module#K3officialModule',
          }
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
      RuleComponent,
    ],
  providers:[],
})
export class LayoutModule {}
