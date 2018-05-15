import { Injectable } from '@angular/core';
import { Resolve, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from '../app/page_module_1/home/home.component';


@Injectable()
export class ResolveService implements Resolve<HomeComponent>{

　　resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): HomeComponent | Observable<HomeComponent> | Promise<HomeComponent>{
　　　　console.log(new HomeComponent());
 
　　　　return new HomeComponent();
　　}
}