import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
/***********components***************/
import { ComponentsModule } from '../component/components.module';
import { AgainLoginComponent } from './AgainLogin.component';

const routes = [
    { path: '', component: AgainLoginComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ComponentsModule
    ],
    declarations: [AgainLoginComponent]
})
export class AgainLoginModule { }
