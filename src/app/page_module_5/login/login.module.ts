import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
/***********components***************/
import { LoginComponent } from './login.component';

const routes = [
    { path: '', component: LoginComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),CommonModule,
		FormsModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }
