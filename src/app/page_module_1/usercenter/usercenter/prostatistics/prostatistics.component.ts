import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prostatistics',
  templateUrl: './prostatistics.component.html',
  styleUrls: ['./prostatistics.component.scss']
})
export class ProstatisticsComponent implements OnInit {

  public querydata = {
    username: "",
    starttime: "",
    endtime: "",
    iswrap: true
  };
  public outdata = [];
  public currentsort = '';
  public takedata = [
    {
      type: '新疆时时彩【信】',
      numbtou: 5888,
      celltou: 252,
      money: 520,
      bonus: 410,
      rebates: 101,
      fitorloss: 22,
    },
    {
      type: '天津时时彩【信】',
      numbtou: 82788,
      celltou: 222,
      money: 2210,
      bonus: 410,
      rebates: 110,
      fitorloss: 2772,
    },
    {
      type: '广西快十【信】',
      numbtou: 88018,
      celltou: 122,
      money: 250,
      bonus: 4350,
      rebates: 1350,
      fitorloss: 235,
    },
    {
      type: '广东快十【信】',
      numbtou: 8488,
      celltou: 422,
      money: 2350,
      bonus: 430,
      rebates: 1086,
      fitorloss: 278,
    },
    {
      type: '香港六合彩【信】',
      numbtou: 87888,
      celltou: 68722,
      money: 2077,
      bonus: 47680,
      rebates: 1450,
      fitorloss: 268,
    },
    {
      type: 'QQ分分彩【官】',
      numbtou: 868788,
      celltou: 422,
      money: 245680,
      bonus: 40485,
      rebates: 1480,
      fitorloss: 2,
    },
    {
      type: '江西11选5【官】',
      numbtou: 88458,
      celltou: 2452,
      money: 208,
      bonus: 4480,
      rebates: 108,
      fitorloss: 4862,
    },
    {
      type: '北京PK拾【官】',
      numbtou: 848688,
      celltou: 223,
      money: 2340,
      bonus: 4380,
      rebates: 103,
      fitorloss: 42,
    },
    {
      type: '重庆时时彩【官】',
      numbtou: 848688,
      celltou: 48922,
      money: 2970,
      bonus: 4790,
      rebates: 710,
      fitorloss: 2798,
    },
    {
      type: '重庆时时彩【信】',
      numbtou: 87888,
      celltou: 2782,
      money: 2790,
      bonus: 4450,
      rebates: 170,
      fitorloss: 2,
    },
    {
      type: '江西11选5【官】',
      numbtou: 878688,
      celltou: 27862,
      money: 20786,
      bonus: 440,
      rebates: 710,
      fitorloss: 2,
    },
    {
      type: '北京PK拾【官】',
      numbtou: 8838,
      celltou: 2482,
      money: 2048,
      bonus: 404,
      rebates: 10846,
      fitorloss: 452,
    },
    {
      type: '重庆时时彩【官】',
      numbtou: 88868,
      celltou: 22,
      money: 24580,
      bonus: 440,
      rebates: 1480,
      fitorloss: 27,
    },
    {
      type: '重庆时时彩【信】',
      numbtou: 8878788,
      celltou: 242,
      money: 2078,
      bonus: 40786,
      rebates: 1480,
      fitorloss: 442,
    },
  ];
  constructor() {}

  ngOnInit() {
    this.outdata = this.takedata;
  }
  add(t){
    let d = 0;
    for (let i = 0; i < this.takedata.length; i++) {
      d += this.takedata[i][t]
    }
    return d;
  }
  sortclick(t){
    if (this.currentsort == t) {
      let d = this.outdata.reverse();
      this.outdata = d;
    }else{
      this.currentsort = t;
      this.obsort(t);
    }

  }
  obsort(t){
    this.outdata = this.takedata.sort((a,b)=>{
      return a[t] - b[t]
    })
  }

}


