import { NgModule } from "@angular/core";
import { SharkModule } from "@ntesmail/shark-angular2";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from '../component/components.module';

/***********components***************/
import { UsercenterComponent } from "./usercenter.component";
// import { HeaderComponent } from "../component/header/header.component";
// import { FooterComponent } from "../component/footer/footer.component";

const routes = [{ path: "", component: UsercenterComponent }];

@NgModule({
  imports: [SharkModule, RouterModule.forChild(routes), CommonModule,ComponentsModule],
  declarations: [UsercenterComponent,
    //  HeaderComponent, 
    //  FooterComponent
    ]
})
export class UsercenterModule {}
