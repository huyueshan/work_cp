import { Component, OnInit } from '@angular/core';
import userModel from '../../../../../status/user.model';
@Component({
  selector: 'app-groupview',
  templateUrl: './groupview.component.html',
  styleUrls: ['./groupview.component.scss']
})
export class GroupviewComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  public querydatelistindex = 0;
  public drawradio = 0;


  public querydata = {
    starttime: "",
    endtime: "",
    username: ""
  };
  public drawdata;
  public drawdatalist = [
    {
      name: this.now_lang.User_center_c.Inmoney,
      color: '#ff0000',
      data: [

      ],
    },
    {
      name: this.now_lang.User_center_c.Outmoney,
      color: '#ff0000',
      data: [

      ],
    },
    {
      name: this.now_lang.User_center_c.Bet,
      color: '#ff0000',
      data: [

      ],
    },
    {
      name: this.now_lang.User_center_c.Back_bonus1,
      color: '#ff0000',
      data: [

      ],
    },
    {
      name: this.now_lang.User_center_c.Agent_back,
      color: '#ff0000',
      data: [

      ],
    },
    {
      name: this.now_lang.User_center_c.New_add_men,
      color: '#ff0000',
      data: [

      ],
    },
    {
      name: this.now_lang.User_center_c.Activity_men,
      color: '#ff0000',
      data: [

      ],
    },
  ];
  public querydatelist = [
    {
      text: this.now_lang.User_center_c.Yestday,
      active: false
    },
    {
      text: this.now_lang.User_center_c.Today,
      active: false
    },
    {
      text: this.now_lang.User_center_c.Today,
      active: false
    },
    {
      text: this.now_lang.User_center_c.This_week,
      active: false
    },
    {
      text: this.now_lang.User_center_c.Last_moon,
      active: false
    },
    {
      text:  this.now_lang.User_center_c.This_moon,
      active: false
    }
  ];
  constructor() { }

  ngOnInit() {
    let echarts = require('echarts');
    let ele = document.getElementById('drawbox');
    let myChart = echarts.init(ele);
    let option = {
      title: {
        text: ''
        // text: '堆叠区域图'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        x: 'center',
        borderWidth: '1',
        data: [ this.now_lang.User_center_c.Inmoney,  this.now_lang.User_center_c.Outmoney, this.now_lang.User_center_c.Bet, this.now_lang.User_center_c.Back_bonus1, this.now_lang.User_center_c.Agent_back, this.now_lang.User_center_c.New_add_men,this.now_lang.User_center_c.Activity_men],
        selectedMode: 'single', // 每次只显示一条数据
      },
      toolbox: {
        feature: {
          // saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['00:00:00', '04:00:00', '08:00:00', '12:00:00', '16:00:00', '20:00:00', '24:00:00']
        }
      ],
      yAxis: [
        {
          type: 'value',
          // max: 800,
          // min: 0,
          scale: true,
          show: true,
          splitLine: {
            show: true
          },
        }
      ],
      series: [
        {
          name: this.now_lang.User_center_c.Inmoney,
          type: 'line',
          smooth: true, // 线条平滑
          stack: this.now_lang.User_center_c.Total,
          areaStyle: { normal: {} },
          data: [120, 132, 101, 434, 90, 230, 210]
        },
        {
          name: this.now_lang.User_center_c.Out_money,
          type: 'line',
          smooth: true,
          stack: this.now_lang.User_center_c.Total,
          areaStyle: { normal: {} },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: this.now_lang.User_center_c.Bet,
          type: 'line',
          smooth: true,
          stack: this.now_lang.User_center_c.Total,
          areaStyle: { normal: {} },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: this.now_lang.User_center_c.Back_bonus1,
          type: 'line',
          smooth: true,
          stack: this.now_lang.User_center_c.Total,
          areaStyle: { normal: {} },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: this.now_lang.User_center_c.New_add_men,
          type: 'line',
          smooth: true,
          stack: this.now_lang.User_center_c.Total,
          areaStyle: { normal: {} },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: this.now_lang.User_center_c.Activity_men,
          type: 'line',
          smooth: true,
          stack: this.now_lang.User_center_c.Total,
          areaStyle: { normal: {} },
          data: [20, 32, 30, 34, 39, 33, 1]
        },
        {
          name: this.now_lang.User_center_c.Agent_back,
          type: 'line',
          smooth: true,
          stack: this.now_lang.User_center_c.Total,
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: { normal: {} },
          data: [320, 232, 301, 334, 90, 30, 20]
        }
      ]
    };

    myChart.setOption(option);
  }
  setdrawdata(i) {
    this.drawdata = this.drawdatalist[i].data;
  }

}
