import { NgModule } from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../component/components.module';
/***********components***************/
import { LoginComponent } from './login.component';

const routes = [
    { path: '', component: LoginComponent },
];

@NgModule({
    imports: [
        SharkModule, RouterModule.forChild(routes),CommonModule,
        FormsModule,
        CommonModule,
        ComponentsModule,
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }
