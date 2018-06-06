import { UsercenterComponent } from './../usercenter/usercenter.component';
import { userdef } from './../../../factory/usercent';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharkModule } from "@ntesmail/shark-angular2";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
/***********components***************/
import { LanguageComponent } from "../component/language/language.component";
import { ErrtipComponent } from './errtip/errtip.component';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SideComponent } from "./side/side.component";
import { CredtopComponent } from "./credtop/credtop.component";

@NgModule({
  imports: [SharkModule, CommonModule, FormsModule],
  declarations: [
    LanguageComponent,
    HeaderComponent,
    FooterComponent,
    SideComponent,
    ErrtipComponent,
    CredtopComponent,
  ],
  exports: [
    LanguageComponent,
    HeaderComponent,
    FooterComponent,
    SideComponent,
    ErrtipComponent,
    CredtopComponent,
  ]
})
export class ComponentsModule {}
