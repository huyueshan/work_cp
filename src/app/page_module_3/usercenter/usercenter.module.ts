import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../component/components.module";
import { FormsModule } from "@angular/forms";

/***********components***************/
import { UsercenterComponent } from "./usercenter.component";

export const routes: Routes = [
  {
    path: "",
    component: UsercenterComponent,
    children: [
      {
        path: "goucaiquery",
        loadChildren: './usercenter_3/goucaiquery/goucaiquery.module#GoucaiqueryModule',
      },
      {
        path: "Zhuihaoquery",
    loadChildren: './usercenter_3/zhuihaoquery/zhuihaoquery.module#ZhuihaoqueryModule',
      },
      {
        path: "moneyrecord",
        loadChildren: './usercenter_3/moneyrecord/moneyrecord.module#MoneyrecordModule',
      },
      {
        path: "acchange",
        loadChildren: './usercenter_3/accountchange/accountchange.module#AccountchangeModule',
      },
      {
        path: "myreport",
        loadChildren: './usercenter_3/myreport/myreport.module#MyreportModule',
      },
      {
        path: "groupreport",
        loadChildren: './usercenter_3/grouport/grouport.module#GrouportModule',
      },
      {
        path: "discount",
        loadChildren: './usercenter_3/discountinfo/discountinfo.module#DiscountinfoModule',
      },
      {
        path: "myoverview",
        loadChildren: './usercenter_3/myoverview/myoverview.module#MyoverviewModule',
      },
      {
        path: "userdata",
        loadChildren: './usercenter_3/userdata/userdata.module#UserdataModule',
      },
      {
        path: "quota",
        loadChildren: './usercenter_3/proquota/proquota.module#ProquotaModule',
      },
      {
        path: "proinfo",
        loadChildren: './usercenter_3/proinfo/proinfo.module#ProinfoModule',
      },
      {
        path: "security",
        loadChildren: './usercenter_3/security/security.module#SecurityModule',
      },
      {
        path: "bankmanage",
        loadChildren: './usercenter_3/bankmanage/bankmanage.module#BankmanageModule',
      },
      {
        path: "pronote",
        loadChildren: './usercenter_3/pronote/pronote.module#PronoteModule',
      },
      {
        path: "webnote",
        loadChildren: './usercenter_3/webnote/webnote.module#WebnoteModule',
      },
      {
        path: "recharge",
        loadChildren: './usercenter_3/recharge/recharge.module#RechargeModule',
      },
      {
        path: "userlist",
        loadChildren: './usercenter_3/userlist/userlist.module#UserlistModule',
      },
      {
        path: "regismanage",
        loadChildren: './usercenter_3/regismanage/regismanage.module#RegismanageModule',
      },
      {
        path: "regisgenera",
        loadChildren: './usercenter_3/regisgeneralize/regisgeneralize.module#RegisgeneralizeModule',
      },
      {
        path: "groupview",
        loadChildren: './usercenter_3/groupview/groupview.module#GroupviewModule',
      },
      {
        path: "prostatistics",
        loadChildren: './usercenter_3/prostatistics/prostatistics.module#ProstatisticsModule',
      },
      {
        path: "withdrawdeposit",
        loadChildren: './usercenter_3/withdrawdeposit/withdrawdeposit.module#WithdrawdepositModule',
      },
      {
        path: "",
        redirectTo: 'goucaiquery',
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ComponentsModule,
    FormsModule,
  ],
  declarations: [
    UsercenterComponent,
  ]
})
export class UsercenterModule {}
