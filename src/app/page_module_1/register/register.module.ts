import { NgModule } from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
/***********components***************/
import { RegisterComponent } from './register.component';
import { ErrtipComponent } from '../component/errtip/errtip.component';

const routes = [
    { path: '', component: RegisterComponent},
];

@NgModule({
    imports: [
        SharkModule,FormsModule, RouterModule.forChild(routes)
    ],
    declarations: [RegisterComponent,ErrtipComponent]
})
export class RegisterModule { }
