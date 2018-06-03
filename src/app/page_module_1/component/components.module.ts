import { UsercenterComponent } from './../usercenter/usercenter.component';
import { userdef } from './../../../factory/usercent';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharkModule } from "@ntesmail/shark-angular2";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
/***********components***************/
import { LanguageComponent } from "../component/language/language.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { GoucaiqueryComponent } from "./usercenter/goucaiquery/goucaiquery.component";
import { ZhuihaoqueryComponent } from "./usercenter/zhuihaoquery/zhuihaoquery.component";
import { AccountchangeComponent } from "./usercenter/accountchange/accountchange.component";
import { MoneyrecordComponent } from "./usercenter/moneyrecord/moneyrecord.component";
import { DiscountinfoComponent } from "./usercenter/discountinfo/discountinfo.component";
import { MyreportComponent } from "./usercenter/myreport/myreport.component";
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

@NgModule({
  imports: [SharkModule, CommonModule, FormsModule],
  declarations: [
    LanguageComponent,
    HeaderComponent,
    FooterComponent,
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
  ],
  exports: [
    LanguageComponent,
    HeaderComponent,
    FooterComponent,
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
  ]
})
export class ComponentsModule {}
