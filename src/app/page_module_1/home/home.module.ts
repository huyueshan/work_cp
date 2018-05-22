import { NgModule } from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
/***********components***************/
import { HomeComponent } from './home.component';
import { HeadComponent } from '../component/head.component';
const routes = [
    { path: '', component: HomeComponent },
];

@NgModule({
    imports: [
        SharkModule, RouterModule.forChild(routes),CommonModule
    ],
    declarations: [HomeComponent,HeadComponent]
})
export class HomeModule { }
