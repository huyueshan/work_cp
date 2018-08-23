

import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
/***********components***************/
import { ErrtipComponent } from './errtip/errtip.component';
import { HeaderComponent } from "./header/header.component";
import { CredtopComponent } from "./credtop/credtop.component";
import { CSiderComponent } from './sider/sider.component';
import { WenluComponent } from './wenlu/wenlu.component';
import { PupoutComponent } from './pupout/pupout.component';
import { PageComponent } from './page/page.component';
import { LanguageComponent } from "./language/language.component";
import { RuleComponent } from './credtop/rule/rule.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    HeaderComponent,
    ErrtipComponent,
    CredtopComponent,
    CSiderComponent,
    WenluComponent,
    PupoutComponent,
    PageComponent,
    LanguageComponent,
    RuleComponent,
    RegisterComponent,
    LoginComponent,
  ],
  exports: [
    HeaderComponent,
    ErrtipComponent,
    CredtopComponent,
    CSiderComponent,
    WenluComponent,
    PupoutComponent,
    PageComponent,
    LanguageComponent,
    RegisterComponent,
    LoginComponent,
  ]
})
export class ComponentsModule {}
