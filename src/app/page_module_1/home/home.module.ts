import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../component/components.module';
/***********components***************/
import { HomeComponent } from './home.component';



const routes = [
    { path: '', component: HomeComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),CommonModule,ComponentsModule,FormsModule
    ],
    declarations: [HomeComponent,
    ],
    
})
export class HomeModule { }
