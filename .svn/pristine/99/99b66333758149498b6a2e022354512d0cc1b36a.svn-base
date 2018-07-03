import { Component, OnInit , ViewChild } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import userModel from "../../../status/user.model";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"]
})
export class ResultComponent implements OnInit {
    loadpage = false;
   @ViewChild('canvas') canvas;
  public gamelist = [
    { gamename: "山东11选5[官]", id: "32" },
    { gamename: "香港⑥合彩[信]", id: "1" },
    { gamename: "广东快十[信]", id: "5" },
    { gamename: "广西快十[信]", id: "6" },
    { gamename: "重庆时时彩[信]", id: "7" },
    { gamename: "天津时时彩[信]", id: "9" },
    { gamename: "新疆时时彩[信]", id: "10" },
    { gamename: "重庆快十[信]", id: "13" },
    { gamename: "北京PK拾[信]", id: "15" },
    { gamename: "江苏快三[信]", id: "22" },
    { gamename: "重庆时时彩[官]", id: "26" },
    { gamename: "北京快乐8[官]", id: "28" },
    { gamename: "北京PK拾[官]", id: "29" },
    { gamename: "福彩3D[官]", id: "30" },
    { gamename: "江苏快三[官]", id: "39" },
    { gamename: "新疆时时彩[官]", id: "40" },
    { gamename: "天津时时彩[官]", id: "42" },
    { gamename: "排列三、五[官]", id: "44" },
    { gamename: "江西11选5[官]", id: "46" },
    { gamename: "黑龙江11选5[官]", id: "50" },
    { gamename: "韩式1.5分彩[官]", id: "51" },
    { gamename: "韩式1.5分彩[信]", id: "53" },
    { gamename: "黑龙江11选5[信]", id: "55" },
    { gamename: "江西11选5[信]", id: "56" },
    { gamename: "北京时时彩[官]", id: "57" },
    { gamename: "山东11选5[信]", id: "58" },
    { gamename: "北京时时彩[信]", id: "59" },
    { gamename: "台湾5分彩[信]", id: "60" },
    { gamename: "台湾5分彩[官]", id: "61" },
    { gamename: "台湾宾果[官]", id: "62" },
    { gamename: "加拿大3.5分[官]", id: "64" },
    { gamename: "加拿大3.5分[信]", id: "65" },
    { gamename: "加拿大快乐8[官]", id: "66" },
    { gamename: "澳洲快乐8[官]", id: "69" },
    { gamename: "斯洛伐克[官]", id: "70" },
    { gamename: "斯洛伐克5分[信]", id: "71" },
    { gamename: "斯洛伐克5分[官]", id: "72" },
    { gamename: "江苏11选5[信]", id: "73" },
    { gamename: "江苏11选5[官]", id: "74" },
    { gamename: "上海11选5[信]", id: "75" },
    { gamename: "上海11选5[官]", id: "76" },
    { gamename: "新疆11选5[信]", id: "77" },
    { gamename: "新疆11选5[官]", id: "78" },
    { gamename: "腾讯分分彩[信]", id: "79" },
    { gamename: "QQ分分彩[信]", id: "80" },
    { gamename: "腾讯分分彩[官]", id: "81" },
    { gamename: "QQ分分彩[官]", id: "82" },
    { gamename: "安徽快3[官]", id: "84" },
    { gamename: "安徽快3[信]", id: "85" },
    { gamename: "河北快3[信]", id: "87" },
    { gamename: "河北快3[官]", id: "88" },
    { gamename: "河南快3[信]", id: "97" },
    { gamename: "河南快3[官]", id: "98" },
    { gamename: "湖北快3[信]", id: "99" },
    { gamename: "湖北快3[官]", id: "100" },
    { gamename: "上海快3[信]", id: "101" },
    { gamename: "上海快3[官]", id: "102" },
    { gamename: "北京快3[信]", id: "103" },
    { gamename: "北京快3[官]", id: "104" },
    { gamename: "广西快3[信]", id: "105" },
    { gamename: "广西快3[官]", id: "106" },
    { gamename: "上海时时乐[官]", id: "107" },
    { gamename: "东京1.5分彩[信]", id: "108" },
    { gamename: "东京1.5分彩[官]", id: "109" },
    { gamename: "幸运飞艇[信]", id: "112" },
    { gamename: "幸运飞艇[官]", id: "113" },
    { gamename: "幸运28[信]", id: "114" },
    { gamename: "斯洛伐克28[信]", id: "115" },
    { gamename: "澳洲28[信]", id: "116" },
    { gamename: "加拿大28[信]", id: "117" },
    { gamename: "韩式28[信]", id: "118" },
    { gamename: "台湾28[信]", id: "119" },
    { gamename: "东京28[信]", id: "120" },
    { gamename: "极速分分彩[信]", id: "122" },
    { gamename: "极速分分彩[官]", id: "123" }
  ];
  public quergame = "山东11选5[官]";

  // 控制数据对象
  public view_paramet = {
    isshowline: true, // 是否连线
    ishaowen: true, // 是否号温
    isomission: false, // 是否遗漏分层背景
    isomissionshow: true, // 是否显示遗漏分层数据
    isdisdata: true, // 是否显示统计数据
    // isrepet: false, // 是否为连号
    isdouble: true, // 是否为重号
    issubline: true // 是否辅助线
    // linecolor: '#FF00FF', // 可设置连线颜色
  };
  public numbdata = [30, 50, 100, 200, 300, ];
  public numbdatactve = 0;
  constructor(private FormsModule: FormsModule) {}
  ngOnInit() {
    this.loadpage = userModel.platform;
  }
  numbclick(i){
    this.numbdatactve=i;
    this.canvas.pageinit(this.numbdata[i]);
  }
}
