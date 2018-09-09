import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../component/components.module";
import { FormsModule } from "@angular/forms";
import { RouteguardService } from "../../../router/router.service";

/***********components***************/
import { UsercenterComponent } from "./usercenter.component";

export const routes: Routes = [
  {
    path: "",
    component: UsercenterComponent,
    children: [
      {
        path: "goucaiquery",
        loadChildren: './usercenter_2/goucaiquery/goucaiquery.module#GoucaiqueryModule',
		canActivate: [RouteguardService]
      },
      {
        path: "Zhuihaoquery",
		loadChildren: './usercenter_2/zhuihaoquery/zhuihaoquery.module#ZhuihaoqueryModule',
      },
      {
        path: "moneyrecord",
        loadChildren: './usercenter_2/moneyrecord/moneyrecord.module#MoneyrecordModule',
      },
      {
        path: "acchange",
        loadChildren: './usercenter_2/accountchange/accountchange.module#AccountchangeModule',
      },
      {
        path: "myreport",
        loadChildren: './usercenter_2/myreport/myreport.module#MyreportModule',
      },
      {
        path: "groupreport",
        loadChildren: './usercenter_2/grouport/grouport.module#GrouportModule',
      },
      {
        path: "discount",
        loadChildren: './usercenter_2/discountinfo/discountinfo.module#DiscountinfoModule',
      },
      {
        path: "myoverview",
        loadChildren: './usercenter_2/myoverview/myoverview.module#MyoverviewModule',
      },
      {
        path: "userdata",
        loadChildren: './usercenter_2/userdata/userdata.module#UserdataModule',
      },
      {
        path: "quota",
        loadChildren: './usercenter_2/proquota/proquota.module#ProquotaModule',
      },
      {
        path: "proinfo",
        loadChildren: './usercenter_2/proinfo/proinfo.module#ProinfoModule',
      },
      {
        path: "security",
        loadChildren: './usercenter_2/security/security.module#SecurityModule',
      },
      {
        path: "bankmanage",
        loadChildren: './usercenter_2/bankmanage/bankmanage.module#BankmanageModule',
      },
      {
        path: "pronote",
        loadChildren: './usercenter_2/pronote/pronote.module#PronoteModule',
      },
      {
        path: "webnote",
        loadChildren: './usercenter_2/webnote/webnote.module#WebnoteModule',
      },
      {
        path: "recharge",
        loadChildren: './usercenter_2/recharge/recharge.module#RechargeModule',
      },
      {
        path: "userlist",
        loadChildren: './usercenter_2/userlist/userlist.module#UserlistModule',
      },
      {
        path: "regismanage",
        loadChildren: './usercenter_2/regismanage/regismanage.module#RegismanageModule',
      },
      {
        path: "regisgenera",
        loadChildren: './usercenter_2/regisgeneralize/regisgeneralize.module#RegisgeneralizeModule',
      },
      {
        path: "groupview",
        loadChildren: './usercenter_2/groupview/groupview.module#GroupviewModule',
      },
      {
        path: "prostatistics",
        loadChildren: './usercenter_2/prostatistics/prostatistics.module#ProstatisticsModule',
      },
      {
        path: "withdrawdeposit",
        loadChildren: './usercenter_2/withdrawdeposit/withdrawdeposit.module#WithdrawdepositModule',
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
