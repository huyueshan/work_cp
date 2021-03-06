

import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharkModule } from "@ntesmail/shark-angular2";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
/***********components***************/
import { ErrtipComponent } from './errtip/errtip.component';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SideComponent } from "./side/side.component";
import { CredtopComponent } from "./credtop/credtop.component";
import { CSiderComponent } from './sider/sider.component';
import { WenluComponent } from './wenlu/wenlu.component';
import { PupoutComponent } from './pupout/pupout.component';
import { PageComponent } from './page/page.component';
import { LanguageComponent } from "./language/language.component";

@NgModule({
  imports: [SharkModule, CommonModule, FormsModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideComponent,
    ErrtipComponent,
    CredtopComponent,
    CSiderComponent,
    WenluComponent,
    PupoutComponent,
    PageComponent,
    LanguageComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideComponent,
    ErrtipComponent,
    CredtopComponent,
    CSiderComponent,
    WenluComponent,
    PupoutComponent,
    PageComponent,
    LanguageComponent,
  ]
})
export class ComponentsModule {}
