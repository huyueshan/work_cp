import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharkModule } from "@ntesmail/shark-angular2";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
/***********components***************/
import { ComponentsModule } from "../../component/components.module";
import { SSCofficialComponent } from './ssc.component';

const routes = [
    { 
		path: 'cq', component: SSCofficialComponent,
		children:[
			{ path:':id',component: SSCofficialComponent}
		]
	},
	{
		path: "",
		redirectTo: 'cq'
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
    declarations: [SSCofficialComponent]
})
export class SSCofficialModule {
	
}
