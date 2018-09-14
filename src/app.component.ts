import { Component, OnInit, HostListener } from '@angular/core';
import { TransferService } from './factory/Transfer.Service';

@Component({
    selector: 'general',
    template: `
        <router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit {
    
  @HostListener('window:storage',['$event']) onStorage(e){
      // storage事件，storage保存的数据有改变后重新初始TransferService 服务数据
    this.transfer.initdata();
  }
    constructor(public transfer:TransferService) {}
    ngOnInit(){
        // 初始 TransferService 服务数据
        this.transfer.initdata();
    }

};