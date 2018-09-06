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
        loadChildren: './usercenter/goucaiquery/goucaiquery.module#GoucaiqueryModule',
      },
      {
        path: "Zhuihaoquery",
    loadChildren: './usercenter/zhuihaoquery/zhuihaoquery.module#ZhuihaoqueryModule',
      },
      {
        path: "moneyrecord",
        loadChildren: './usercenter/moneyrecord/moneyrecord.module#MoneyrecordModule',
      },
      {
        path: "acchange",
        loadChildren: './usercenter/accountchange/accountchange.module#AccountchangeModule',
      },
      {
        path: "myreport",
        loadChildren: './usercenter/myreport/myreport.module#MyreportModule',
      },
      {
        path: "groupreport",
        loadChildren: './usercenter/grouport/grouport.module#GrouportModule',
      },
      {
        path: "discount",
        loadChildren: './usercenter/discountinfo/discountinfo.module#DiscountinfoModule',
      },
      {
        path: "myoverview",
        loadChildren: './usercenter/myoverview/myoverview.module#MyoverviewModule',
      },
      {
        path: "userdata",
        loadChildren: './usercenter/userdata/userdata.module#UserdataModule',
      },
      {
        path: "quota",
        loadChildren: './usercenter/proquota/proquota.module#ProquotaModule',
      },
      {
        path: "proinfo",
        loadChildren: './usercenter/proinfo/proinfo.module#ProinfoModule',
      },
      {
        path: "security",
        loadChildren: './usercenter/security/security.module#SecurityModule',
      },
      {
        path: "bankmanage",
        loadChildren: './usercenter/bankmanage/bankmanage.module#BankmanageModule',
      },
      {
        path: "pronote",
        loadChildren: './usercenter/pronote/pronote.module#PronoteModule',
      },
      {
        path: "webnote",
        loadChildren: './usercenter/webnote/webnote.module#WebnoteModule',
      },
      {
        path: "recharge",
        loadChildren: './usercenter/recharge/recharge.module#RechargeModule',
      },
      {
        path: "userlist",
        loadChildren: './usercenter/userlist/userlist.module#UserlistModule',
      },
      {
        path: "regismanage",
        loadChildren: './usercenter/regismanage/regismanage.module#RegismanageModule',
      },
      {
        path: "regisgenera",
        loadChildren: './usercenter/regisgeneralize/regisgeneralize.module#RegisgeneralizeModule',
      },
      {
        path: "groupview",
        loadChildren: './usercenter/groupview/groupview.module#GroupviewModule',
      },
      {
        path: "prostatistics",
        loadChildren: './usercenter/prostatistics/prostatistics.module#ProstatisticsModule',
      },
      {
        path: "withdrawdeposit",
        loadChildren: './usercenter/withdrawdeposit/withdrawdeposit.module#WithdrawdepositModule',
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
