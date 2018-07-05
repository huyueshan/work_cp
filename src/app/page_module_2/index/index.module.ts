import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharkModule } from '@ntesmail/shark-angular2';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../component/components.module';

/***********components***************/
import { IndexComponent } from './index.component';


const routes = [
    { path: '', component: IndexComponent },
];

@NgModule({
    imports: [
        SharkModule, RouterModule.forChild(routes),CommonModule,ComponentsModule,FormsModule 
    ],
    declarations: [IndexComponent ]
})
export class IndexModule { }
