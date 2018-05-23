import { NgModule } from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
/***********components***************/
import { SSCcreditComponent } from './ssc.component';

const routes = [
    { path: '', component: SSCofficialComponent },
];

@NgModule({
    imports: [
        SharkModule, RouterModule.forChild(routes),CommonModule,
		FormsModule
    ],
    declarations: [SSCcreditComponent]
})
export class SSCcreditModule { }
