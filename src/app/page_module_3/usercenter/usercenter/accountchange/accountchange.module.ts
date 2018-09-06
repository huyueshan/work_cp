import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../component/components.module';
import { AccountchangeComponent } from './accountchange.component';

/***********components***************/

const routes = [
    { path: '', component: AccountchangeComponent},
];

@NgModule({
    imports: [
        FormsModule,CommonModule,ComponentsModule, RouterModule.forChild(routes)
    ],
    declarations: [ AccountchangeComponent ]
})
export class AccountchangeModule { }
