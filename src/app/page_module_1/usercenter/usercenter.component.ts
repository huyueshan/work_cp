import { Component, OnInit } from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-usercenter',
  templateUrl: './usercenter.component.html',
  styleUrls: ['./usercenter.component.scss']
})
export class UsercenterComponent implements OnInit {
  public currentfristitem:string ='投注记录';
  public currentitem:string ='购彩查询';
  public currentactive = 0;
  public usersidedata = [
    {
      title:'投注记录',
      isover: false,
      isactive:false,
      // itemactivenmb:-1,
      items:[
        {
          text:'购彩查询',
          link:'/usercenter/goucaiquery',
        },
        {
          text:'追号查询',
          link:'/usercenter/Zhuihaoquery',
        }
      ]
    },
    {
      title:'投注记录1',
      isover: false,
      isactive:false,
      // itemactivenmb:-1,
      items:[
        {
          text:'购彩查询1',
          link:''
        },
        {
          text:'追号查询1',
          link:''
        }
      ]
    },
    {
      title:'投注记录2',
      isover: false,
      isactive:false,
      // itemactivenmb:-1,
      items:[
        {
          text:'购彩查询2',
          link:'',
        },
        {
          text:'追号查询2',
          link:'',
        }
      ]
    },
    
  ];
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  itemboxclick(i){
    if (this.currentactive == i) {
      this.currentactive = -1;
      
    }else{

      this.currentactive = i;
    }
    // let act = this.usersidedata[i];
    // act.isactive = !act.isactive;
    // if(!act.isactive){
    //   act.itemactivenmb = -1;
    // }
  }
  itemclick(f,t,L){
    this.currentfristitem = f;
    this.currentitem = t;
    this.router.navigate([L]);
  }

}
