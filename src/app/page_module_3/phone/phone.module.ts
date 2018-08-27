import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../component/components.module';

/***********components***************/
import { PhoneComponent } from './phone.component';


const routes = [
    { path: '', component: PhoneComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),CommonModule,ComponentsModule,FormsModule 
    ],
    declarations: [PhoneComponent ]
})
export class PhoneModule { }
