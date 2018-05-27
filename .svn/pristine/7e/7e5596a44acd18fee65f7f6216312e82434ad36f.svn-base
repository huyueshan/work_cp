import { NgModule } from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../component/components.module';
/***********components***************/
import { IndexComponent } from './index.component';


const routes = [
    { path: '', component: IndexComponent },
];

@NgModule({
    imports: [
        SharkModule, RouterModule.forChild(routes),CommonModule,ComponentsModule 
    ],
    declarations: [IndexComponent,  ]
})
export class IndexModule { }
