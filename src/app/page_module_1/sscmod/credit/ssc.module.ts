import { NgModule } from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
/***********components***************/
import { SSCofficialComponent } from './ssc.component';

const routes = [
    { path: 'creadit', component: SSCofficialComponent },
];

@NgModule({
    imports: [
        SharkModule, RouterModule.forChild(routes),CommonModule,
		FormsModule
    ],
    declarations: [SSCofficialComponent]
})
export class SSCofficialModule {
	
	}
