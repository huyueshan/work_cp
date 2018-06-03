// import { BrowserModule } from "@angular/platform-browser";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { SharkModule } from "@ntesmail/shark-angular2";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../component/components.module";
import { FormsModule } from "@angular/forms";
import { GoucaiqueryComponent } from "../component/usercenter/goucaiquery/goucaiquery.component";
import { ZhuihaoqueryComponent } from "../component/usercenter/zhuihaoquery/zhuihaoquery.component";
import { AccountchangeComponent } from "../component/usercenter/accountchange/accountchange.component";
import { MyreportComponent } from "../component/usercenter/myreport/myreport.component";
import { MoneyrecordComponent } from "../component/usercenter/moneyrecord/moneyrecord.component";
import { DiscountinfoComponent } from "../component/usercenter/discountinfo/discountinfo.component";
import { MyoverviewComponent } from "../component/usercenter/myoverview/myoverview.component";
import { ProquotaComponent } from "../component/usercenter/proquota/proquota.component";
import { ProinfoComponent } from "../component/usercenter/proinfo/proinfo.component";
import { UserdataComponent } from "../component/usercenter/userdata/userdata.component";
import { SecurityComponent } from "../component/usercenter/security/security.component";
import { BankmanageComponent } from "../component/usercenter/bankmanage/bankmanage.component";
import { PronoteComponent } from "../component/usercenter/pronote/pronote.component";
import { WebnoteComponent } from "../component/usercenter/webnote/webnote.component";
import { RechargeComponent } from "../component/usercenter/recharge/recharge.component";
import { UserlistComponent } from "../component/usercenter/userlist/userlist.component";
import { RegismanageComponent } from "../component/usercenter/regismanage/regismanage.component";
import { RegisgeneralizeComponent } from "../component/usercenter/regisgeneralize/regisgeneralize.component";
import { GrouportComponent } from "../component/usercenter/grouport/grouport.component"

/***********components***************/
import { UsercenterComponent } from "./usercenter.component";

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
        path: "",
        redirectTo: 'groupreport',
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
    UsercenterComponent
  ]
})
export class UsercenterModule {}
