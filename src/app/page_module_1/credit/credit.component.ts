import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit,OnDestroy {
// public date = new Date();
// public time;
  constructor() { }

  ngOnInit() {
    // this.time = setInterval(()=>{
    //   this.date = new Date();
    //   console.log('dfe')
    // },1000);
  }
  ngOnDestroy(){
    // clearInterval(this.time)
  }

}
