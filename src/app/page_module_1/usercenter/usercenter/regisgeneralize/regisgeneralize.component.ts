import { Component, OnInit } from "@angular/core";
import userModel from '../../../../../status/user.model';
@Component({
  selector: "app-regisgeneralize",
  templateUrl: "./regisgeneralize.component.html",
  styleUrls: ["./regisgeneralize.component.scss"]
})
export class RegisgeneralizeComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  public btninfo = this.now_lang.User_center_c.Extension_link;
  public infobox = false;
  public edit = false;
  public viewdata ;
  public editform = {
    type:'',
    status:'',
    rebates:'',
  }
  public formdata = {
    domainname: this.now_lang.User_center_c.This_station,
    type: this.now_lang.User_center_c.Menber,
    validate: this.now_lang.User_center_c.One_day,
    money: this.now_lang.User_center_c.Choose_other_moneygro
  };
  // 遮罩层
  public shade = {
    w:0,
    h:0,
  };
  public pagination = {
    totalNum:20,  //总数据条数 
    pageSize: 5, // 每页显示数量
    curPage: 1, //当前页
    segmentSize: 5, //最大显示页码标签数量
    totalPage:4,// 最大页码数。
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

    // 分页组件点击页码事件，参数i为点击页码数
    getPageData(i) {
        //  此处请求数据
        console.log(i);
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
