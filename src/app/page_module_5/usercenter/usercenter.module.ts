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
        loadChildren: './usercenter_5/goucaiquery/goucaiquery.module#GoucaiqueryModule',
		canActivate: [RouteguardService]
      },
      {
        path: "Zhuihaoquery",
		loadChildren: './usercenter_5/zhuihaoquery/zhuihaoquery.module#ZhuihaoqueryModule',
      },
      {
        path: "moneyrecord",
        loadChildren: './usercenter_5/moneyrecord/moneyrecord.module#MoneyrecordModule',
      },
      {
        path: "acchange",
        loadChildren: './usercenter_5/accountchange/accountchange.module#AccountchangeModule',
      },
      {
        path: "myreport",
        loadChildren: './usercenter_5/myreport/myreport.module#MyreportModule',
      },
      {
        path: "groupreport",
        loadChildren: './usercenter_5/grouport/grouport.module#GrouportModule',
      },
      {
        path: "discount",
        loadChildren: './usercenter_5/discountinfo/discountinfo.module#DiscountinfoModule',
      },
      {
        path: "myoverview",
        loadChildren: './usercenter_5/myoverview/myoverview.module#MyoverviewModule',
      },
      {
        path: "userdata",
        loadChildren: './usercenter_5/userdata/userdata.module#UserdataModule',
      },
      {
        path: "quota",
        loadChildren: './usercenter_5/proquota/proquota.module#ProquotaModule',
      },
      {
        path: "proinfo",
        loadChildren: './usercenter_5/proinfo/proinfo.module#ProinfoModule',
      },
      {
        path: "security",
        loadChildren: './usercenter_5/security/security.module#SecurityModule',
      },
      {
        path: "bankmanage",
        loadChildren: './usercenter_5/bankmanage/bankmanage.module#BankmanageModule',
      },
      {
        path: "pronote",
        loadChildren: './usercenter_5/pronote/pronote.module#PronoteModule',
      },
      {
        path: "webnote",
        loadChildren: './usercenter_5/webnote/webnote.module#WebnoteModule',
      },
      {
        path: "recharge",
        loadChildren: './usercenter_5/recharge/recharge.module#RechargeModule',
      },
      {
        path: "userlist",
        loadChildren: './usercenter_5/userlist/userlist.module#UserlistModule',
      },
      {
        path: "regismanage",
        loadChildren: './usercenter_5/regismanage/regismanage.module#RegismanageModule',
      },
      {
        path: "regisgenera",
        loadChildren: './usercenter_5/regisgeneralize/regisgeneralize.module#RegisgeneralizeModule',
      },
      {
        path: "groupview",
        loadChildren: './usercenter_5/groupview/groupview.module#GroupviewModule',
      },
      {
        path: "prostatistics",
        loadChildren: './usercenter_5/prostatistics/prostatistics.module#ProstatisticsModule',
      },
      {
        path: "withdrawdeposit",
        loadChildren: './usercenter_5/withdrawdeposit/withdrawdeposit.module#WithdrawdepositModule',
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
