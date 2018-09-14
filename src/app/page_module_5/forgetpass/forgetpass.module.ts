import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
/***********components***************/
import { ComponentsModule } from "../component/components.module";
import { ForgetpassComponent } from './forgetpass.component';

const routes = [
    { path: '', component: ForgetpassComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),CommonModule,
		FormsModule,
		ComponentsModule
    ],
    declarations: [ForgetpassComponent]
})
export class ForgetpassModule { }
