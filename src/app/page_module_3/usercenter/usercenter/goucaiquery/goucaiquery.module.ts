import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../component/components.module';
import { GoucaiqueryComponent } from './goucaiquery.component';

/***********components***************/

const routes = [
    { path: '', component: GoucaiqueryComponent},
];

@NgModule({
    imports: [
        FormsModule,CommonModule,ComponentsModule, RouterModule.forChild(routes)
    ],
    declarations: [ GoucaiqueryComponent ]
})
export class GoucaiqueryModule { }
