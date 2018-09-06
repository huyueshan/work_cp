import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../component/components.module';
import { MoneyrecordComponent } from './moneyrecord.component';

/***********components***************/

const routes = [
    { path: '', component: MoneyrecordComponent},
];

@NgModule({
    imports: [
        FormsModule,CommonModule,ComponentsModule, RouterModule.forChild(routes)
    ],
    declarations: [ MoneyrecordComponent ]
})
export class MoneyrecordModule { }
