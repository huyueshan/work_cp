import { NgModule } from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
/***********components***************/
import { IndexComponent } from './index.component';
import { LanguageComponent } from '../component/language/language.component';

// import { LanguageComponent } from '../component/language/language.component';

import { HeadComponent } from '../component/head.component';


const routes = [
    { path: '', component: IndexComponent },
];

@NgModule({
    imports: [
        SharkModule, RouterModule.forChild(routes),CommonModule
    ],
    declarations: [IndexComponent]
})
export class IndexModule { }
