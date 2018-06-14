import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groupview',
  templateUrl: './groupview.component.html',
  styleUrls: ['./groupview.component.scss']
})
export class GroupviewComponent implements OnInit {
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
      name: '充值',
      color: '#ff0000',
      data: [

      ],
    },
    {
      name: '提现',
      color: '#ff0000',
      data: [

      ],
    },
    {
      name: '投注',
      color: '#ff0000',
      data: [

      ],
    },
    {
      name: '返派奖',
      color: '#ff0000',
      data: [

      ],
    },
    {
      name: '代理返点',
      color: '#ff0000',
      data: [

      ],
    },
    {
      name: '新增人数',
      color: '#ff0000',
      data: [

      ],
    },
    {
      name: '活跃人数',
      color: '#ff0000',
      data: [

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
        data: ['充值', '提现', '投注', '返派奖', '代理返点','新增人数','活跃人数'],
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
          name: '充值',
          type: 'line',
          smooth: true, // 线条平滑
          stack: '总量',
          areaStyle: { normal: {} },
          data: [120, 132, 101, 434, 90, 230, 210]
        },
        {
          name: '提现',
          type: 'line',
          smooth: true,
          stack: '总量',
          areaStyle: { normal: {} },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '投注',
          type: 'line',
          smooth: true,
          stack: '总量',
          areaStyle: { normal: {} },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '返派奖',
          type: 'line',
          smooth: true,
          stack: '总量',
          areaStyle: { normal: {} },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '新增人数',
          type: 'line',
          smooth: true,
          stack: '总量',
          areaStyle: { normal: {} },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '活跃人数',
          type: 'line',
          smooth: true,
          stack: '总量',
          areaStyle: { normal: {} },
          data: [20, 32, 30, 34, 39, 33, 1]
        },
        {
          name: '代理返点',
          type: 'line',
          smooth: true,
          stack: '总量',
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
    console.log(i);
  }

}
