import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../component/components.module';
import { ZhuihaoqueryComponent } from './zhuihaoquery.component';

/***********components***************/

const routes = [
    { path: '', component: ZhuihaoqueryComponent},
];

@NgModule({
    imports: [
        FormsModule,CommonModule,ComponentsModule, RouterModule.forChild(routes)
    ],
    declarations: [ ZhuihaoqueryComponent ]
})
export class ZhuihaoqueryModule { }
