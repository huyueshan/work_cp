import { Component, OnInit,Input,OnDestroy } from '@angular/core';
import { Base } from './../../../../factory/base.model';
@Component({
  selector: 'app-credtop',
  templateUrl: './credtop.component.html',
  styleUrls: ['./credtop.component.scss']
})
export class CredtopComponent implements OnInit,OnDestroy {
  // @Input() otterynumber:number[];
public otterynumber = [2,9,0,8,7];
public previous = 20180517022;
public next = 20180517023;
public timedate=new Date();
public time;
  constructor() { }
  ngOnInit() {
    this.time = setInterval(()=>{
      this.timedate=new Date()
    },1000)
  }
  ngOnDestroy(){
    clearInterval(this.time)
  }

}
