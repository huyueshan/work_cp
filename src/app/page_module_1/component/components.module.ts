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
import { GoucaiqueryComponent } from "./goucaiquery/goucaiquery.component";
import { ZhuihaoqueryComponent } from "./zhuihaoquery/zhuihaoquery.component";
import { AccountchangeComponent } from "./accountchange/accountchange.component";
import { MoneyrecordComponent } from "./moneyrecord/moneyrecord.component";
import { DiscountinfoComponent } from "./discountinfo/discountinfo.component";
import { MyreportComponent } from "./myreport/myreport.component";
import { MyoverviewComponent } from "./myoverview/myoverview.component";
import { ProquotaComponent } from "./proquota/proquota.component";
import { ProinfoComponent } from "./proinfo/proinfo.component";
import { UserdataComponent } from "./userdata/userdata.component";
import { SecurityComponent } from "./security/security.component";
import { BankmanageComponent } from "./bankmanage/bankmanage.component";

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
  ]
})
export class ComponentsModule {}
