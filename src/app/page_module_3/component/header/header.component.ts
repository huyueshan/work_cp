import { Component, OnInit,Input,OnDestroy, Type } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/observable';
import { Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";

import { Base } from "../../../../factory/base.model";
// import { Api } from "../../../../factory/api.model";
// import { formmod } from "../../../../factory/form";
import userModel from "../../../../status/user.model";
//语言测试
import languagepackage from '../../../../status/language';
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
    
  constructor(private httpClient: HttpClient, private router: Router) {}
	ngOnInit(){
		this.now_lang=userModel.langpackage;
		this.now_lang_type=userModel.now_lang_type;
        this.timedate = setInterval(() => {
            this.time = new Date();
        }, 1000);
	}
    ngOnDestroy() {
        clearInterval(this.timedate);
    }
    // now_lang_type = '';
    // lang_config = userModel.lang_config;
    // //语言部分函数
    // check_language(){
    //     if (Base.Store.get('now_lot_lang')==null) {
    //         Base.Store.set('now_lot_lang',this.lang_config.default_lan)
    //         let now_lot_lang = Base.Store.get('now_lot_lang');
    //         this.load_langpackge(now_lot_lang)
    //     }else{
    //         //这里手动改变语言后不做任何操作,但是同样调用引用语言包函数;
    //         let now_lot_lang = Base.Store.get('now_lot_lang');
    //         this.load_langpackge(now_lot_lang)
    //     }
    // }
    // load_langpackge(lang){
    // 	this.now_lang_type = lang;
    //     this.now_lang = languagepackage[lang];
    //     userModel.langpackage = this.now_lang;
    // }
    // change_language(lang){
    //    Base.Store.set('now_lot_lang',lang);
    //    this.load_langpackge(lang)
    //    location.reload()
    // }
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
