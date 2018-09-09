import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../component/components.module';
import { BankmanageComponent } from './bankmanage.component';

/***********components***************/

const routes = [
    { path: '', component: BankmanageComponent},
];

@NgModule({
    imports: [
        FormsModule,CommonModule,ComponentsModule, RouterModule.forChild(routes)
    ],
    declarations: [ BankmanageComponent ]
})
export class BankmanageModule { }
