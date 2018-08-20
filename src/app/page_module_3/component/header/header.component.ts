import { Component, OnInit,Input,OnDestroy,AfterViewInit, ElementRef,} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";

import { Base } from "../../../../factory/base.model";
import userModel from "../../../../status/user.model";
//语言测试
import languagepackage from '../../../../status/language';
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit,OnDestroy,AfterViewInit {
    @Input() username? :  {Type:any, default:'chen' }; // 用户名
    @Input() curpath? :string ='index'; // 当前路由位置
    public pathdata = ['index','lottery','usercenter','Activity','Announncement','GameInformation','cpinfo','Mobile']
    public now_lang :any=userModel.langpackage;
    public now_lang_type :any='zh';
    public navdata = [
      {
        text: this.now_lang.index.Index,
        bgpositiony: -10,
        isover: false,
        link: "#/index"
      },
      {
        text: this.now_lang.index.Lot_lobby,
        bgpositiony: -114,
        isover: false,
        link: "#/lottery"
      },
      {
        text: this.now_lang.index.User_center,
        bgpositiony: -218,
        isover: false,
        link: "#/usercenter"
      },
      {
        text: this.now_lang.index.Discount,
        bgpositiony: -322,
        isover: false,
        link: "#/usercenter/discount"
      },
      {
        text: this.now_lang.index.Notice,
        bgpositiony: -10,
        isover: false,
        link: "#/usercenter/webnote"
      },
      {
        text: this.now_lang.index.Lot_info,
        bgpositiony: -114,
        isover: false,
        link: "#/usercenter/proinfo"
      },
      {
        text: this.now_lang.index.Pho_bet,
        bgpositiony: -218,
        isover: false,
        link: "",
      },
    ];
      public lineinfo = {
          width:'60px',
          left:'0px',
      }
      public langdata = {
          show: false,
          data:['中文','English','한국어',],
          curlang:'中文',
      }
    
  constructor(private httpClient: HttpClient, private router: Router,private el: ElementRef) {}
	ngOnInit(){
		this.now_lang=userModel.langpackage;
        this.now_lang_type=userModel.now_lang_type;
        
	}
    ngAfterViewInit() {

        setTimeout(() => {
            let n = this.pathdata.indexOf(this.curpath);
            const ele = this.el.nativeElement.querySelectorAll("#nav li");
            let w = ele[n].offsetWidth + 'px';
            let l = ele[n].offsetLeft + 'px';
            let o = {
                width:w,
                left:l,
            };
            this.lineinfo = Object.assign({},o);
        }, 50);
        
    }
    ngOnDestroy() {
    }
    
  navclick(event,i){
    let el = event||window.event
    let e = el.target||el.srcElement;
    let o = {
        width:e.offsetWidth + 'px',
        left:e.offsetLeft + 'px',
    };
    this.lineinfo = Object.assign({},o);
  }

  langclick(i){
    this.langdata.curlang = this.langdata.data[i];
  }

}
