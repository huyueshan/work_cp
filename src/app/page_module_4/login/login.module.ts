import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharkModule } from '@ntesmail/shark-angular2';
import { FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../component/components.module';
/***********components***************/
import { LoginComponent } from './login.component';

const routes = [
    { path: '', component: LoginComponent },
];

@NgModule({
    imports: [
        SharkModule, RouterModule.forChild(routes),CommonModule,
		FormsModule,ComponentsModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }
