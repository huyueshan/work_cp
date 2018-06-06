import { NgModule } from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from "../component/components.module";
/***********components***************/
import { CreditComponent } from './credit.component';

const routes = [
    { path: '', component: CreditComponent },
    { path: 'credit', component: CreditComponent },
    { path: '**', component: CreditComponent },
];

@NgModule({
    imports: [
        SharkModule, RouterModule.forChild(routes),CommonModule,
        FormsModule,
        ComponentsModule,
    ],
    declarations: [CreditComponent ]
})
export class CreditModule {
	
	}