// import { BrowserModule } from "@angular/platform-browser";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { SharkModule } from "@ntesmail/shark-angular2";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../component/components.module";
import { FormsModule } from "@angular/forms";

/***********components***************/
import { UsercenterComponent } from "./usercenter.component";
import { GoucaiqueryComponent } from "./usercenter/goucaiquery/goucaiquery.component";
import { ZhuihaoqueryComponent } from "./usercenter/zhuihaoquery/zhuihaoquery.component";
import { AccountchangeComponent } from "./usercenter/accountchange/accountchange.component";
import { MyreportComponent } from "./usercenter/myreport/myreport.component";
import { MoneyrecordComponent } from "./usercenter/moneyrecord/moneyrecord.component";
import { DiscountinfoComponent } from "./usercenter/discountinfo/discountinfo.component";
import { MyoverviewComponent } from "./usercenter/myoverview/myoverview.component";
import { ProquotaComponent } from "./usercenter/proquota/proquota.component";
import { ProinfoComponent } from "./usercenter/proinfo/proinfo.component";
import { UserdataComponent } from "./usercenter/userdata/userdata.component";
import { SecurityComponent } from "./usercenter/security/security.component";
import { BankmanageComponent } from "./usercenter/bankmanage/bankmanage.component";
import { PronoteComponent } from "./usercenter/pronote/pronote.component";
import { WebnoteComponent } from "./usercenter/webnote/webnote.component";
import { RechargeComponent } from "./usercenter/recharge/recharge.component";
import { UserlistComponent } from "./usercenter/userlist/userlist.component";
import { RegismanageComponent } from "./usercenter/regismanage/regismanage.component";
import { RegisgeneralizeComponent } from "./usercenter/regisgeneralize/regisgeneralize.component";
import { GrouportComponent } from "./usercenter/grouport/grouport.component"
import { GroupviewComponent } from "./usercenter/groupview/groupview.component"
import { ProstatisticsComponent } from "./usercenter/prostatistics/prostatistics.component"
import { WithdrawdepositComponent } from "./usercenter/withdrawdeposit/withdrawdeposit.component"

const routes = [
  {
    path: "",
    component: UsercenterComponent,
    children: [
      {
        path: "goucaiquery",
        component: GoucaiqueryComponent
      },
      {
        path: "Zhuihaoquery",
        component: ZhuihaoqueryComponent
      },
      {
        path: "moneyrecord",
        component: MoneyrecordComponent
      },
      {
        path: "acchange",
        component: AccountchangeComponent
      },
      {
        path: "myreport",
        component: MyreportComponent
      },
      {
        path: "groupreport",
        component: GrouportComponent
      },
      {
        path: "discount",
        component: DiscountinfoComponent
      },
      {
        path: "myoverview",
        component: MyoverviewComponent
      },
      {
        path: "userdata",
        component: UserdataComponent
      },
      {
        path: "quota",
        component: ProquotaComponent
      },
      {
        path: "proinfo",
        component: ProinfoComponent
      },
      {
        path: "security",
        component: SecurityComponent
      },
      {
        path: "bankmanage",
        component: BankmanageComponent
      },
      {
        path: "pronote",
        component: PronoteComponent
      },
      {
        path: "webnote",
        component: WebnoteComponent 
      },
      {
        path: "recharge",
        component: RechargeComponent 
      },
      {
        path: "userlist",
        component: UserlistComponent 
      },
      {
        path: "regismanage",
        component: RegismanageComponent 
      },
      {
        path: "regisgenera",
        component: RegisgeneralizeComponent 
      },
      {
        path: "groupview",
        component: GroupviewComponent 
      },
      {
        path: "prostatistics",
        component: ProstatisticsComponent 
      },
      {
        path: "withdrawdeposit",
        component: WithdrawdepositComponent 
      },
      {
        path: "",
        redirectTo: 'withdrawdeposit',
        // component:RegisgeneralizeComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    SharkModule,
    RouterModule.forChild(routes),
    CommonModule,
    ComponentsModule,
    FormsModule
  ],
  declarations: [
    UsercenterComponent,
    GoucaiqueryComponent,
    ZhuihaoqueryComponent,
    AccountchangeComponent,
    MoneyrecordComponent,
    DiscountinfoComponent,
    MyreportComponent,
    MyoverviewComponent,
    ProquotaComponent,
    ProinfoComponent,
    UserdataComponent,
    SecurityComponent,
    BankmanageComponent,
    PronoteComponent,
    WebnoteComponent,
    RechargeComponent,
    UserlistComponent,
    RegismanageComponent,
    RegisgeneralizeComponent,
    GrouportComponent,
    GroupviewComponent,
    ProstatisticsComponent,
    WithdrawdepositComponent,
  ]
})
export class UsercenterModule {}
