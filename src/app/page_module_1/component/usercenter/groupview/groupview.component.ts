import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groupview',
  templateUrl: './groupview.component.html',
  styleUrls: ['./groupview.component.scss']
})
export class GroupviewComponent implements OnInit {
  public querydatelistindex = 0;
  public  drawradio = 0;
  

  public querydata = {
    starttime: "",
    endtime: "",
    username: ""
  };
  public drawdata;
  public drawdatalist = [
    {
      name:'充值',
      color: '#ff0000',
      data:[

      ],
    },
    {
      name:'提现',
      color: '#ff0000',
      data:[

      ],
    },
    {
      name:'投注',
      color: '#ff0000',
      data:[

      ],
    },
    {
      name:'返派奖',
      color: '#ff0000',
      data:[

      ],
    },
    {
      name:'代理返点',
      color: '#ff0000',
      data:[

      ],
    },
    {
      name:'新增人数',
      color: '#ff0000',
      data:[

      ],
    },
    {
      name:'活跃人数',
      color: '#ff0000',
      data:[

      ],
    },
  ];
  public querydatelist = [
    {
      text: "昨天",
      active: false
    },
    {
      text: "今天",
      active: false
    },
    {
      text: "上周",
      active: false
    },
    {
      text: "本周",
      active: false
    },
    {
      text: "上月",
      active: false
    },
    {
      text: "本月                                 ",
      active: false
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  setdrawdata(i){
    this.drawdata = this.drawdatalist[i].data;
    console.log(i);
  }

}
