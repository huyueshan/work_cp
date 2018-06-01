// import { BrowserModule } from "@angular/platform-browser";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { SharkModule } from "@ntesmail/shark-angular2";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../component/components.module";
import { FormsModule } from "@angular/forms";
import { GoucaiqueryComponent } from "../component/goucaiquery/goucaiquery.component";
import { ZhuihaoqueryComponent } from "../component/zhuihaoquery/zhuihaoquery.component";
import { AccountchangeComponent } from "../component/accountchange/accountchange.component";
import { MyreportComponent } from "../component/myreport/myreport.component";
import { MoneyrecordComponent } from "../component/moneyrecord/moneyrecord.component";
import { DiscountinfoComponent } from "../component/discountinfo/discountinfo.component";
import { MyoverviewComponent } from "../component/myoverview/myoverview.component";
import { ProquotaComponent } from "../component/proquota/proquota.component";
import { ProinfoComponent } from "../component/proinfo/proinfo.component";
import { UserdataComponent } from "../component/userdata/userdata.component";
import { SecurityComponent } from "../component/security/security.component";
import { BankmanageComponent } from "../component/bankmanage/bankmanage.component";
import { PronoteComponent } from "../component/pronote/pronote.component";
import { WebnoteComponent } from "../component/webnote/webnote.component";
import { RechargeComponent } from "../component/recharge/recharge.component";
import { UserlistComponent } from "../component/userlist/userlist.component";
import { RegismanageComponent } from "../component/regismanage/regismanage.component";
import { RegisgeneralizeComponent } from "../component/regisgeneralize/regisgeneralize.component";

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
        component:RegisgeneralizeComponent
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
