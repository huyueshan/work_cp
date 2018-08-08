import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharkModule } from '@ntesmail/shark-angular2';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../component/components.module';
import { ProinfoComponent } from './proinfo.component';


import { CPInfoService } from '../../../../cp-info.service';

/***********components***************/

const routes = [
    { path: '', component: ProinfoComponent},
];

@NgModule({
    imports: [
        SharkModule,FormsModule,CommonModule,ComponentsModule, RouterModule.forChild(routes)
    ],
    declarations: [ ProinfoComponent ],
    providers:[CPInfoService],
})
export class ProinfoModule { }
