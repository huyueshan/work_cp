import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharkModule } from "@ntesmail/shark-angular2";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
/***********components***************/
import { ComponentsModule } from "../../component/components.module";
import { K3officialComponent } from './k3.component';

const routes = [
    { 
		path:':id',component: K3officialComponent
	},
	{
		path: "",
		redirectTo: 'tx'
	}
];

@NgModule({
    imports: [
        SharkModule,
		RouterModule.forChild(routes),
		CommonModule,
		FormsModule,
		ComponentsModule
    ],
    declarations: [K3officialComponent]
})
export class K3officialModule {
	
}
