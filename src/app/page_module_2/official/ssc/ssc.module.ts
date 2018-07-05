import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
/***********components***************/
import { ComponentsModule } from "../../component/components.module";
import { SSCofficialComponent } from './ssc.component';

const routes = [
    { 
		path:':id',component: SSCofficialComponent
	},
	{
		path: "",
		redirectTo: 'cq'
	}
];

@NgModule({
    imports: [
		RouterModule.forChild(routes),
		CommonModule,
		FormsModule,
		ComponentsModule
    ],
    declarations: [SSCofficialComponent]
})
export class SSCofficialModule {
	
}
