import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-regisgeneralize",
  templateUrl: "./regisgeneralize.component.html",
  styleUrls: ["./regisgeneralize.component.scss"]
})
export class RegisgeneralizeComponent implements OnInit {
  public btninfo = "推广链接";
  public infobox = false;
  public edit = false;
  public viewdata ;
  public editform = {
    type:'',
    status:'',
    rebates:'',
  }
  public formdata = {
    domainname: "本站",
    type: "会员",
    validate: "一天",
    money: "选择其他资金组"
  };
  // 遮罩层
  public shade = {
    w:0,
    h:0,
  };
  public pagination = {
    pagenumber: 10, // 每页显示数量
    page: 1, //当前页
    totalPage: 5, //最大页数
    gopage: false, //是否可以选页跳转
    segmentSize: 3, //最大显示页码标签数量
    startFrom: 1 //开始页从1计算
  };
  public hl = {
    firstpage: "首页",
    prevpage: "上一页",
    nextpage: "下一页",
    lastpage: "尾页",
    gopage: "跳转"
  };
  
  public regisdatalist = [
    {
      link: "www.good666.com/GR/ff2zlx0v",
      callnumb: "5",
      mannumb: "3",
      type: "会员",
      status: "永久有效",
      time: "2018-05-31  11:10:11",
      rebates:'0.071',
    },
    {
      link: "www.good666.com/GR/ff2zlx0v",
      callnumb: "5",
      mannumb: "3",
      type: "会员",
      status: "永久有效",
      time: "2018-05-31  11:10:11",
      rebates:'0.071',
    },
    {
      link: "www.good666.com/GR/ff2zlx0v",
      callnumb: "5",
      mannumb: "3",
      type: "会员",
      status: "永久有效",
      time: "2018-05-31  11:10:11",
      rebates:'0.071',
    },
    {
      link: "www.good666.com/GR/ff2zlx0v",
      callnumb: "5",
      mannumb: "3",
      type: "会员",
      status: "永久有效",
      time: "2018-05-31  11:10:11",
      rebates:'0.071',
    },
  ];
  constructor() {}

  ngOnInit() {}
  onPageChanged(e) {
    console.log(e.data.page);
  }
  show(data, t){
    this.viewdata = data;
    this.shade.w = document.body.clientWidth;
    this.shade.h = screen.height;
    if(t == 1){
      this.editform.type = data.type;
      this.editform.status = data.status;
      this.editform.rebates = data.rebates;
      this.edit = true;
    }
    this.infobox = true;
  }
  hide(){
    this.infobox = false;
    this.edit = false;
  }
  del(i){
    this.regisdatalist.splice(i, 1);
    let data = this.regisdatalist;
    this.regisdatalist = data;
  }
}
