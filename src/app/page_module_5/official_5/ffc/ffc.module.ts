import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
/***********components***************/
import { ComponentsModule } from "../../component/components.module";
import { FFCofficialComponent } from './ffc.component';

const routes = [
    { 
		path:':id',component: FFCofficialComponent
	},
	{
		path: "",
		redirectTo: 'tx'
	}
];

@NgModule({
    imports: [
		RouterModule.forChild(routes),
		CommonModule,
		FormsModule,
		ComponentsModule
    ],
    declarations: [FFCofficialComponent]
})
export class FFCofficialModule {
	
}
