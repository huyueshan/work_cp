import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../component/components.module';
import { GroupviewComponent } from './groupview.component';

/***********components***************/

const routes = [
    { path: '', component: GroupviewComponent},
];

@NgModule({
    imports: [
        FormsModule,CommonModule,ComponentsModule, RouterModule.forChild(routes)
    ],
    declarations: [ GroupviewComponent ]
})
export class GroupviewModule { }
