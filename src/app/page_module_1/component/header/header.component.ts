import { Component, OnInit,Input,OnDestroy} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { Base } from "../../../../factory/base.model";
import userModel from "../../../../status/user.model";


import { PageinitService } from '../../../../factory/Pageinit.Service';
import { TransferService } from '../../../../factory/Transfer.Service';

//语言测试
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit,OnDestroy {
    @Input() username :  {Type:any, default:'chen' }; // 用户名
    @Input() curpath :  ''; // 当前路由位置
    public pathdata = ['index','lottery','usercenter','Activity','Announncement','GameInformation','Mobile']
    public timedate;
    public time;
	public now_lang :any={};
    public now_lang_type :any='zh';
    public voiceshow = false; //设置显示声音盒子
    public voice=[
        {
            name:'全部音效',
            poleft:'0',
            checked: false,
        },
        {
            name:'按键音',
            poleft:'12px',
            checked: false,
        },
        {
            name:'播报音',
            poleft:'0',
            checked: false,
        },
        {
            name:'背景音乐',
            poleft:'0',
            checked: false,
        },
    ];
    
  constructor(private httpClient: HttpClient, private router: Router, private Pginit:PageinitService, public Transfer:TransferService) {}
	ngOnInit(){
        
        // http请求测试
            this.Pginit.READY({});

		this.now_lang=userModel.langpackage;
		this.now_lang_type=userModel.now_lang_type;
        this.timedate = setInterval(() => {
            this.time = new Date();
        }, 1000);

	}
    ngOnDestroy() {
        clearInterval(this.timedate);

        // 凡是引入了PageinitService 服务的页面都需要做下面异步操作
      clearInterval(this.Pginit.checkStatus);  // 清除Pageinit.Service 中的定时器  ！！！！！！！！！！！！！！！！！！！！！！！！
    }
    refresh_money(em,em2){
    	em.innerHTML = '- - - - - -';
    	em2.classList.add("active");
    	setTimeout(function(){
    		em.innerHTML = '99999.99'
    		em2.classList.remove("active");
    	}, 1000)
    }
    voiceclick(i){
        let vd = this.voice;
        if (i===0) {
            let value = !vd[0].checked;
            for (let q = 0; q < vd.length; q++) {
                vd[q].checked = value; 
            }
        }else{
            let n = 0;
            let value = !vd[i].checked;
            vd[i].checked = value;
            for (let q = 1; q < vd.length; q++) {
                if (vd[q].checked !== value) {
                    n++;
                }
            }
            vd[0].checked = value?((n>0)?vd[0].checked:value):((n>0)?value:vd[0].checked);
        }
    }
    voiceonoff(i){
        if (i===1) {
            this.voiceshow = true;
        }else{
            this.voiceshow = false;
        }
    }
    linkclick(i){
        Base.Store.set('indexitem',i,false);
        this.router.navigate(["/index"]);
    }

}
