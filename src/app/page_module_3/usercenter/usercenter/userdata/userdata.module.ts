import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../component/components.module';
import { UserdataComponent } from './userdata.component';

/***********components***************/

const routes = [
    { path: '', component: UserdataComponent},
];

@NgModule({
    imports: [
        FormsModule,CommonModule,ComponentsModule, RouterModule.forChild(routes)
    ],
    declarations: [ UserdataComponent ]
})
export class UserdataModule { }
