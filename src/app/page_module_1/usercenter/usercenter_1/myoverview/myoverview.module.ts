import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../component/components.module';
import { MyoverviewComponent } from './myoverview.component';

/***********components***************/

const routes = [
    { path: '', component: MyoverviewComponent},
];

@NgModule({
    imports: [
        FormsModule,CommonModule,ComponentsModule, RouterModule.forChild(routes)
    ],
    declarations: [ MyoverviewComponent ]
})
export class MyoverviewModule { }
