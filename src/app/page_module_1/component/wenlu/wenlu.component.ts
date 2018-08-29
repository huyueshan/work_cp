import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Waybills } from "../../../../factory/Waybill";
require("../../../../styles/waybill/waybill_1.scss")

@Component({
  selector: 'app-wenlu',
  templateUrl: './wenlu.component.html',
  styleUrls: ['./wenlu.component.scss']
})
export class WenluComponent implements OnInit {
	@Input() gamedata: any;
    public bottabactive = 0; // 控制 底部问路tab标签变量
    public typeoption = "第一球"; //绑定 底部问路选择框数据
    public bottomtabdata:any;
    public bottomtabdata1 = [
      {
        name: "1vs2"
      },
      {
        name: "1vs3"
      },
      {
        name: "1vs4"
      },
      {
        name: "1vs5"
      },
      {
        name: "2vs3"
      },
      {
        name: "2vs4"
      },
      {
        name: "2vs5"
      },
      {
        name: "3vs4"
      },
      {
        name: "3vs5 "
      },
      {
        name: "4vs5"
      }
    ];
    public bottomtabdata2 = [
      {
        name: "球号"
      },
      {
        name: "单双"
      },
      {
        name: "大小"
      },
      {
        name: "总和单双"
      },
      {
        name: "总和大小"
      }
    ];
  
    public typeoptiondata = [
      "第一球",
      "第二球",
      "第三球",
      "第四球",
      "第五球",
      "龙虎斗"
    ];
    public tablebox1 = {
        name: "大路",
        width: "780px",
        evleft: 0,
        drag: false,
        left: "0px",
        data: []
      };
      public tablebox2 = {
        name: "盘珠路",
        width: "170px",
        evleft: 0,
        drag: false,
        left: "0px",
        data: []
      };
      public tablebox3 = {
        name: "大眼路",
        width: "170px",
        evleft: 0,
        drag: false,
        left: "0px",
        data: []
      };
      public tablebox4 = {
        name: "小路",
        width: "170px",
        evleft: 0,
        drag: false,
        left: "0px",
        data: []
      };
      public tablebox5 = {
        name: "曱甴路",
        width: "170px",
        evleft: 0,
        drag: false,
        left: "0px",
        data: []
      };
    
  

  constructor(private el: ElementRef,) { }
	waydata = ["8","2","0","0","5","4","7","1","8","2","4","2","7","2","0","0","7","7","8","6","0","1","6","7","9","7","8","1","8","5","1","3","5","4","9","4","6","2","2","7","8","6","7","9","6","5","7","3","2","2","2","3","7","6","4","7","5","4","8","5","1","2","4","9","0","3","1","7","6","9","2","5","9","6","6","1","9","1","7","5","1","5","5","7","4","2","4","9","0","6","4","8","4","9","8","4","5","1","5","5"];
		
  ngOnInit() {
	Waybills.Waybill({type:'haoma',waydata:this.waydata,isToradora:!0,gametype:this.gamedata.gametype,index:1,ele:$("#WAYBILL-BODY")});
    this.typeoptchange(); //初始问路tab数据；
  }

  typeoptchange() {
	  console.log(this.gamedata)
    if (this.typeoption === "龙虎斗") {
      this.bottomtabdata = this.bottomtabdata1;
    } else {
      this.bottomtabdata = this.bottomtabdata2;
    }
	if(this.bottabactive==0){
		this.waydata = ["8","2","0","0","5","4","7","1","8","2","4","2","7","2","0","0","7","7","8","6","0","1","6","7","9","7","8","1","8","5","1","3","5","4","9","4","6","2","2","7","8","6","7","9","6","5","7","3","2","2","2","3","7","6","4","7","5","4","8","5","1","2","4","9","0","3","1","7","6","9","2","5","9","6","6","1","9","1","7","5","1","5","5","7","4","2","4","9","0","6","4","8","4","9","8","4","5","1","5","5"];
		Waybills.Waybill({type:'haoma',waydata:this.waydata,isToradora:!0,gametype:this.gamedata.gametype,index:1,ele:$("#WAYBILL-BODY")});
	}else if(this.bottabactive==1){
		this.waydata = ["双","双","双","双","双","单","双","单","单","双","双","双","双","单","双","双","双","单","单","双","双","双","单","双","单","单","单","双","单","双","单","单","单","单","双","单","双","双","双","双","单","双","双","单","单","双","单","单","单","双","双","双","单","单","双","双","单","单","双","双","单","单","双","双","单","双","单","单","单","双","单","双","单","单","双","双","单","单","单","单","单","单","单","单","单","双","双","双","单","双","双","双","双","双","单","双","双","单","单","单"];
		Waybills.Waybill({type:'danshuang',waydata:this.waydata,isToradora:!0,gametype:'SSC',index:1,ele:$("#WAYBILL-BODY")});
	}else if(this.bottabactive==2){
		this.waydata = ["小","大","小","小","小","大","小","大","小","大","小","小","小","大","小","小","小","大","大","大","大","小","小","大","大","大","大","大","小","大","大","小","小","大","小","大","小","大","小","小","大","大","大","大","大","大","大","大","小","小","小","小","小","大","大","小","大","大","小","大","大","小","小","小","大","小","小","小","大","大","大","小","大","大","大","大","小","大","小","大","大","小","大","大","大","小","小","小","大","小","大","小","大","小","大","大","小","大","小","大"];
		Waybills.Waybill({type:'daxiao',waydata:this.waydata,isToradora:!0,gametype:this.gamedata.gametype,index:1,ele:$("#WAYBILL-BODY")});   
	}else{
		this.waydata = ["虎","龙","虎","龙","和","和","龙","虎","龙","龙","虎","虎","虎","龙","和","虎","龙","虎","和","和","龙","虎","虎","龙","和","虎","龙","龙","龙","虎","龙","龙","和","龙","虎","龙","龙","和","龙","虎","龙","龙","虎","虎","龙","虎","虎","龙","龙","龙","龙","龙","龙","虎","龙","龙","龙","和","和","虎","虎","虎","龙","和","龙","虎","虎","虎","虎","龙","虎","虎","虎","虎","龙","和","虎","龙","龙","龙","龙","龙","虎","龙","龙","虎","虎","虎","龙","虎","虎","虎","虎","虎","虎","龙","虎","和","龙","虎"]
		Waybills.Waybill({type:'daxiao',waydata:this.waydata,isToradora:!0,gametype:this.gamedata.gametype,index:1,ele:$("#WAYBILL-BODY")});
	}
	
  }
	changeWay(i){
		this.bottabactive = i;
		if(this.bottabactive==0){
			this.waydata = ["8","2","0","0","5","4","7","1","8","2","4","2","7","2","0","0","7","7","8","6","0","1","6","7","9","7","8","1","8","5","1","3","5","4","9","4","6","2","2","7","8","6","7","9","6","5","7","3","2","2","2","3","7","6","4","7","5","4","8","5","1","2","4","9","0","3","1","7","6","9","2","5","9","6","6","1","9","1","7","5","1","5","5","7","4","2","4","9","0","6","4","8","4","9","8","4","5","1","5","5"];
			Waybills.Waybill({type:'haoma',waydata:this.waydata,isToradora:!0,gametype:'SSC',index:1,ele:$("#WAYBILL-BODY")});
		}else if(this.bottabactive==1){
			this.waydata = ["双","双","双","双","双","单","双","单","单","双","双","双","双","单","双","双","双","单","单","双","双","双","单","双","单","单","单","双","单","双","单","单","单","单","双","单","双","双","双","双","单","双","双","单","单","双","单","单","单","双","双","双","单","单","双","双","单","单","双","双","单","单","双","双","单","双","单","单","单","双","单","双","单","单","双","双","单","单","单","单","单","单","单","单","单","双","双","双","单","双","双","双","双","双","单","双","双","单","单","单"];
			Waybills.Waybill({type:'danshuang',waydata:this.waydata,isToradora:!0,gametype:this.gamedata.gametype,index:1,ele:$("#WAYBILL-BODY")});
		}else if(this.bottabactive==2){
			this.waydata = ["小","大","小","小","小","大","小","大","小","大","小","小","小","大","小","小","小","大","大","大","大","小","小","大","大","大","大","大","小","大","大","小","小","大","小","大","小","大","小","小","大","大","大","大","大","大","大","大","小","小","小","小","小","大","大","小","大","大","小","大","大","小","小","小","大","小","小","小","大","大","大","小","大","大","大","大","小","大","小","大","大","小","大","大","大","小","小","小","大","小","大","小","大","小","大","大","小","大","小","大"];
			Waybills.Waybill({type:'daxiao',waydata:this.waydata,isToradora:!0,gametype:this.gamedata.gametype,index:1,ele:$("#WAYBILL-BODY")});
		}else{
			this.waydata = ["虎","龙","虎","龙","和","和","龙","虎","龙","龙","虎","虎","虎","龙","和","虎","龙","虎","和","和","龙","虎","虎","龙","和","虎","龙","龙","龙","虎","龙","龙","和","龙","虎","龙","龙","和","龙","虎","龙","龙","虎","虎","龙","虎","虎","龙","龙","龙","龙","龙","龙","虎","龙","龙","龙","和","和","虎","虎","虎","龙","和","龙","虎","虎","虎","虎","龙","虎","虎","虎","虎","龙","和","虎","龙","龙","龙","龙","龙","虎","龙","龙","虎","虎","虎","龙","虎","虎","虎","虎","虎","虎","龙","虎","和","龙","虎"]
			Waybills.Waybill({type:'daxiao',waydata:this.waydata,isToradora:!0,gametype:this.gamedata.gametype,index:1,ele:$("#WAYBILL-BODY")});
		}
	}
    // 底部问路拖拽事件
  // ev 事件对象 ， t 当前表格数据对象
  dragdown(ev, t) {
	  console.log(t)
    let _that = this;
    let d = _that[t];
    let e = ev || event;
    let str = "#" + t;
    let ele = this.el.nativeElement.querySelector(str);
    d.evleft = e.clientX - ele.offsetLeft;
    d.drag = true;
  }
  // ev 事件对象 ， t 当前表格数据对象
  dragmove(ev, t) {
    let _that = this;
    let d = _that[t];
    if (d.drag) {
      let e = ev || event;
      let str = "#" + t;
      let ele = this.el.nativeElement.querySelector(str);
      let n = e.clientX - d.evleft;
      let w = d.data[0].length * 16; //table的宽度，16为表格td的宽度
      let p = parseInt(d.width); // 包裹table元素的宽度；
      if (n > 0) {
        d.left = "0px";
      } else if (n < p - w) {
        d.left = p - w + "px";
      } else {
        d.left = n + "px";
      }
    }
  }
    //临时测试数据方法
    setwenludata() {
        let data = [];
        for (let i = 0; i < 6; i++) {
          data[i] = [];
          for (let q = 0; q < 60; q++) {
            data[i][q] = "";
          }
        }
        return data;
      }
    


}
