import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../component/components.module';

/***********components***************/
import { ActivityComponent } from './activity.component';


const routes = [
    { path: '', component: ActivityComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),CommonModule,ComponentsModule,FormsModule 
    ],
    declarations: [ActivityComponent ]
})
export class ActivityModule { }
