import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../component/components.module';
import { RegismanageComponent } from './regismanage.component';

/***********components***************/

const routes = [
    { path: '', component: RegismanageComponent},
];

@NgModule({
    imports: [
        FormsModule,CommonModule,ComponentsModule, RouterModule.forChild(routes)
    ],
    declarations: [ RegismanageComponent ]
})
export class RegismanageModule { }
