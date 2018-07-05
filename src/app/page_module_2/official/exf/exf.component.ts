import { Component, OnInit } from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { RouterModule, Routes, Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";

import { Base } from '../../../../factory/base.model';
import { Api } from '../../../../factory/api.model';
import { formmod } from '../../../../factory/form';
import userModel from '../../../../status/user.model';
@Component({
    selector: 'EXFofficial',
    templateUrl: './exf.component.html',
    styleUrls: ['./exf.component.scss']
})

export class EXFofficialComponent implements OnInit {

	constructor(private route: ActivatedRoute,private httpClient:HttpClient,private router: Router) { }
	loadpage=false;
	public resultdata = [{'sta':'20180517014','num':'2 9 0 8 7'},{'sta':'20180517014','num':'2 9 0 8 7'} ,{'sta':'20180517014','num':'2 9 0 8 7'} , {'sta':'20180517014','num':'2 9 0 8 7'},{'sta':'20180517014','num':'2 9 0 8 7'} , {'sta':'20180517014','num':'2 9 0 8 7'},{'sta':'20180517014','num':'2 9 0 8 7'} ,{'sta':'20180517014','num':'2 9 0 8 7'}];
	public rankdata = [{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'}];
	multiple_input : any = {value:1};
	// public multiple_input = 1;
	public radom_input :any = {value:1};
	public multi_select = [10,50,100,500,1000,2000,5000,10000];
	public ul_hidden = true;
	public now_tips = '这是一个比较短的提示!';
	public tips_hidden = true;
	public riskvalue = -0.2;
// 拖拽数据
	public rangepercent = 0;
	public rangenum = 30033.33;
// 拖拽数据结束
	public now_tips_menu :any='1_1';
	public now_description = '';
	public hothidden = false;
	public nowPageId :any='';
	public nowitems :any={};
	public userInfo = {
		name:'赌神',
		balance:'9999.99',
		id:'007'

	};
	public other_rules = {
		reward_rule:'<div> 奖金计算说明：<p style="margin-left:1em;">非常规时时彩中奖后，根据中奖号码球号的奖金组，中奖奖金需要乘以球号的奖金组，如：</p><p style="margin-left:1em;line-height: 25px;padding:3px 0;">1、北京时时彩后三直选（1800奖金组）：下注321，开奖号码54321，其中3号球的奖金组为：1.014，2号球的奖金组为：0.984，1号球的奖金组为1.022；那么中奖后的实际奖金=1800*1.014*0.984*1.022=1835.509</p><p style="margin-left:1em;line-height: 25px;padding:3px 0;">2、若北京时时彩后三直选（1800奖金组）：下注246，开奖号码54246，其中2号球的奖金组为：0.984，4号球的奖金组为：0.976，6号球的奖金组为0.98；那么中奖后的实际奖金=1800*0.984*0.976*0.98=1694.117</P></div>'
	};
	public cpnav = {
	    prev:'20180517022',
	    prevball:[2,5,9,0,8],
	    next:'20180517023',
	    time:''
	};
	public now_lang :any=userModel.langpackage;
	public now_lang_type :any='zh';
//追号数据
	public lotdata = [
		{
			lot_num:'20181719',
			multiple:0,
			price:2,
			take_money:0,
			expire_time:'2018-06-11 15:19:30',
			checkon:false
		},
		{
			lot_num:'20181720',
			multiple:0,
			price:2,
			take_money:0,
			expire_time:'2018-06-11 15:19:30',
			checkon:false
		},
		{
			lot_num:'20181721',
			multiple:0,
			price:2,
			take_money:0,
			expire_time:'2018-06-11 15:19:30',
			checkon:false
		}
	]
	public typeoptiondata :any = [
      5,
      10,
      15,
      25,
      'all'
    ];
	// 复制追号数据
	public lotdata_now = $.extend(true, [], this.lotdata);
	// 追号配置
	public chase_config_ori :any = {
		multiple:1,
		chase_amount:5,
		select_amount:5,
		chase_rule:{
			number:1,
			multiple:2
		},
		multiple_option:1
	}
	public chase_number_config :any = $.extend(true, {}, this.chase_config_ori);
	//目前追号面板
	public c_now_panel :any = 'one'
	public chase_money :any = 0;
	public chase_amount :any = 0;
//追号数据结束
	public items_show = {
		'sdexf_ffc':{
			'tabitem':[this.now_lang.Lot_tab.ForT_str,this.now_lang.Lot_tab.Two_star_str,this.now_lang.Lot_tab.Thr_Inde_gall,this.now_lang.Lot_tab.Gall,this.now_lang.Lot_tab.Interestily,this.now_lang.Lot_tab.Choose_odd,this.now_lang.Lot_tab.Choose_eve,this.now_lang.Lot_tab.Dragon_tiger],    
			'reward_show':false,
			'name':this.now_lang.lot_type.sd_exf
		},
		'jxexf_ffc':{
			'tabitem':[this.now_lang.Lot_tab.ForT_str,this.now_lang.Lot_tab.Two_star_str,this.now_lang.Lot_tab.Thr_Inde_gall,this.now_lang.Lot_tab.Gall,this.now_lang.Lot_tab.Interestily,this.now_lang.Lot_tab.Choose_odd,this.now_lang.Lot_tab.Choose_eve,this.now_lang.Lot_tab.Dragon_tiger],
			'reward_show':false,
			'name':this.now_lang.lot_type.jx_exf
		},
		'hljexf_ffc':{
			'tabitem':[this.now_lang.Lot_tab.ForT_str,this.now_lang.Lot_tab.Two_star_str,this.now_lang.Lot_tab.Thr_Inde_gall,this.now_lang.Lot_tab.Gall,this.now_lang.Lot_tab.Interestily,this.now_lang.Lot_tab.Choose_odd,this.now_lang.Lot_tab.Choose_eve,this.now_lang.Lot_tab.Dragon_tiger],
			'reward_show':false,
			'name':this.now_lang.lot_type.hlj_exf
		},
		'jsexf_ffc':{
			'tabitem':[this.now_lang.Lot_tab.ForT_str,this.now_lang.Lot_tab.Two_star_str,this.now_lang.Lot_tab.Thr_Inde_gall,this.now_lang.Lot_tab.Gall,this.now_lang.Lot_tab.Interestily,this.now_lang.Lot_tab.Choose_odd,this.now_lang.Lot_tab.Choose_eve,this.now_lang.Lot_tab.Dragon_tiger],
			'reward_show':false,
			'name':this.now_lang.lot_type.js_exf
		},
		'shexf_ffc':{
			'tabitem':[this.now_lang.Lot_tab.ForT_str,this.now_lang.Lot_tab.Two_star_str,this.now_lang.Lot_tab.Thr_Inde_gall,this.now_lang.Lot_tab.Gall,this.now_lang.Lot_tab.Interestily,this.now_lang.Lot_tab.Choose_odd,this.now_lang.Lot_tab.Choose_eve,this.now_lang.Lot_tab.Dragon_tiger],
			'reward_show':false,
			'name':this.now_lang.lot_type.shh_exf
		},
		'xjexf_ffc':{
			'tabitem':[this.now_lang.Lot_tab.ForT_str,this.now_lang.Lot_tab.Two_star_str,this.now_lang.Lot_tab.Thr_Inde_gall,this.now_lang.Lot_tab.Gall,this.now_lang.Lot_tab.Interestily,this.now_lang.Lot_tab.Choose_odd,this.now_lang.Lot_tab.Choose_eve,this.now_lang.Lot_tab.Dragon_tiger],
			'reward_show':false,
			'name':this.now_lang.lot_type.xj_exf
		}



	}
	public curinpt = {value:''};
	//路由id
	public routid;
	public now_tab2click_num;
	// public rangevalue = rangevalue;
	//方形选球板
	public square_show = false;
	status = {
		menu_1:1,//一级tab默认项
		menu_2:1  //二级tab默认项
	}
	// 一级tab
	menu_1 = [
		{
			name:this.now_lang.Lot_tab.ForT_str,
			active:1
		},
		{
			name:this.now_lang.Lot_tab.Two_star_str,
			active:2
		},
		{
			name:this.now_lang.Lot_tab.Gall,
			active:3
		},
		{
			name:this.now_lang.Lot_tab.Thr_Inde_gall,
			active:4
		},
		{
			name:this.now_lang.Lot_tab.Interestily,
			active:5,
			square:true
		},
		{
			name:this.now_lang.Lot_tab.Choose_eve,
			active:6
		},
		{
			name:this.now_lang.Lot_tab.Choose_odd,
			active:7
		},
		
		{
			name:this.now_lang.Lot_tab.Dragon_tiger,
			active:8
		},
	];
	
	// 2级tab数据以及对应要显示的内容
	menu_2_data = [
		{
			title:this.now_lang.Lot_tab.ForT_str,
			menu:[{name:this.now_lang.Lot_tab.ForT_str_eve,index:1,arr:['dyw','dew','dsw']},{name:this.now_lang.Lot_tab.ForT_str_odd,index:2,isupload:true},{name:this.now_lang.Lot_tab.ForT_gro_eve,index:3,arr:['zx']},{name:this.now_lang.Lot_tab.ForT_gro_odd,index:4,isupload:true}],
			active:1
		},
		{
			title:this.now_lang.Lot_tab.Two_star_str,
			menu:[{name:this.now_lang.Lot_tab.ForTwo_str_eve,index:1,arr:['dyw','dew']},{name:this.now_lang.Lot_tab.ForTwo_str_odd,index:2,isupload:true },{name:this.now_lang.Lot_tab.BackTwo_gro_eve,index:3,arr:['zx']},{name:this.now_lang.Lot_tab.BackTwo_gro_odd,index:4,isupload:true}],
			active:2
		},
		{
			title:this.now_lang.Lot_tab.Thr_Inde_gall,
			menu:[{name:this.now_lang.Lot_tab.Thr_Inde_gall,index:1,arr:['qsw']}],
			active:4
		},
		{
			title:this.now_lang.Lot_tab.Gall,
			menu:[{name:this.now_lang.Lot_tab.Gall,index:1,arr:['dyw','dew','dsw','dsiw','dww']}],
			active:3
		},
		
		{
			title:this.now_lang.Lot_tab.Interestily,
			menu:[{name:this.now_lang.Lot_tab.Order_and_double,index:1,arr:['dds']},{name:this.now_lang.Lot_tab.Guess_mid,index:2,arr:['czw'] }],
			active:5
		},
		{
			title:this.now_lang.Lot_tab.Choose_odd,
			menu:[{name:this.now_lang.Lot_tab.Gall,index:1,arr:['dyw','dew','dsw','dsiw','dww']},{name:'定单双',index:2,arr:['dds']},{name:this.now_lang.Lot_tab.One_in_one,index:3,isupload:true},{name:this.now_lang.Lot_tab.Two_in_two,index:4,isupload:true },{name:this.now_lang.Lot_tab.Three_in_three,index:5,isupload:true},{name:this.now_lang.Lot_tab.Four_in_four,index:6,isupload:true},{name:this.now_lang.Lot_tab.Five_in_five,index:7,isupload:true},{name:this.now_lang.Lot_tab.Six_in_five,index:8,isupload:true},{name:this.now_lang.Lot_tab.Seven_in_five,index:9,isupload:true},{name:this.now_lang.Lot_tab.Eight_in_five,index:10,isupload:true}],
			active:6
		},
		{
			title:this.now_lang.Lot_tab.Choose_eve,
			menu:[{name:this.now_lang.Lot_tab.One_in_one,index:1,arr:['xyzy']},{name:this.now_lang.Lot_tab.Two_in_two,index:2,arr:['zeze'] },{name:this.now_lang.Lot_tab.Three_in_three,index:3,arr:['xszs']},{name:this.now_lang.Lot_tab.Four_in_four,index:4,arr:['xsizsi']},{name:this.now_lang.Lot_tab.Five_in_five,index:5,arr:['xwzw']},{name:this.now_lang.Lot_tab.Six_in_five,index:6,arr:['xlzw']},{name:this.now_lang.Lot_tab.Seven_in_five,index:7,arr:['xqzw']},{name:this.now_lang.Lot_tab.Eight_in_five,index:8,arr:['xbzw']}],
			active:7
		},
		{
			title:this.now_lang.Lot_tab.Dragon_tiger,
			menu:[{name:'后三一码不定胆',index:1,isupload:true},{name:'后二码不定胆',index:2,isupload:true },{name:'前三一码不定胆',index:3,isupload:true},{name:'前三二码不定胆',index:4,isupload:true}],
			active:8
		}
	]
	menu_2 = []; //存储当前一级导航对应的耳机导航
	ball_tab = {
		1:[this.now_lang.Ball_tab.All,this.now_lang.Ball_tab.Big,this.now_lang.Ball_tab.Small,this.now_lang.Ball_tab.Odd,this.now_lang.Ball_tab.Even,this.now_lang.Ball_tab.Clear],
		2:[this.now_lang.Ball_tab.All,this.now_lang.Ball_tab.Clear],
		3:[]

	};
	now_balllist = []; //当前号码列表
	
	// 所有号码的列表数据
	ball_data = {
		'dyw':{
			title:'第一位',
			ball:[1,2,3,4,5,6,7,8,9,10,11],
			tab:this.ball_tab[1],
			index:0
		},
		'dew':{
			title:'第二位',
			ball:[1,2,3,4,5,6,7,8,9,10,11],
			tab:this.ball_tab[1],
			index:1
		},
		'dsw':{
			title:'第三位',
			ball:[1,2,3,4,5,6,7,8,9,10,11],
			tab:this.ball_tab[1],
			index:9
		},
		'zx':{
			title:'组选',
			ball:[1,2,3,4,5,6,7,8,9,10,11],
			tab:this.ball_tab[1],
			index:9
		},
		'qsw':{
			title:'前三位',
			ball:[1,2,3,4,5,6,7,8,9,10,11],
			tab:this.ball_tab[1],
			index:9
		},
		'dsiw':{
			title:'第四位',
			ball:[1,2,3,4,5,6,7,8,9,10,11],
			tab:this.ball_tab[1],
			index:9
		},
		'dww':{
			title:'第五位',
			ball:[1,2,3,4,5,6,7,8,9,10,11],
			tab:this.ball_tab[1],
			index:9
		},
		'dds':{
			title:'定单双',
			ball:[{value:'5单0双',range:'',radix:'138.754'},{value:'4单1双',range:'',radix:'138.754'},{value:'3单2双',range:'',radix:'138.754'},{value:'2单3双',range:'',radix:'138.754'},{value:'1单4双',range:'',radix:'138.754'},{value:'0单5双',range:'',radix:'138.754'}],
			tab:this.ball_tab[2],
			index:9
		},
		'czw':{
			title:'猜中位',
			ball:[{value:3,range:'133-145',radix:'0.8976'},{value:4,range:'133-145',radix:'0.8976'},{value:5,range:'133-145',radix:'0.8976'},{value:6,range:'133-145',radix:'0.8976'},{value:7,range:'133-145',radix:'0.8976'},{value:8,range:'133-145',radix:'0.8976'}],
			tab:this.ball_tab[1],
			index:9
		},
		'xyzy':{
			title:'选一中一',
			ball:[1,2,3,4,5,6,7,8,9,10,11],
			tab:this.ball_tab[1],
			index:9
		},
		'xeze':{
			title:'选二中二',
			ball:[1,2,3,4,5,6,7,8,9,10,11],
			tab:this.ball_tab[1],
			index:9
		},
		'xszs':{
			title:'选三中三',
			ball:[1,2,3,4,5,6,7,8,9,10,11],
			tab:this.ball_tab[1],
			index:9
		},
		'xsizsi':{
			title:'选四中四',
			ball:[1,2,3,4,5,6,7,8,9,10,11],
			tab:this.ball_tab[1],
			index:9
		},
		'xwzw':{
			title:'选五中五',
			ball:[1,2,3,4,5,6,7,8,9,10,11],
			tab:this.ball_tab[1],
			index:9
		},
		'xlzw':{
			title:'选六中五',
			ball:[1,2,3,4,5,6,7,8,9,10,11],
			tab:this.ball_tab[1],
			index:9
		},
		'xqzw':{
			title:'选七中五',
			ball:[1,2,3,4,5,6,7,8,9,10,11],
			tab:this.ball_tab[1],
			index:9
		},
		'xbzw':{
			title:'选八中五',
			ball:[1,2,3,4,5,6,7,8,9,10,11],
			tab:this.ball_tab[1],
			index:9
		},

	};
//追号函数
	typeoptchange() {
		let that = this;
		if (that.chase_number_config.select_amount == 'all') {
			that.chase_number_config.chase_amount = that.lotdata_now.length;
		}else{
			that.chase_number_config.chase_amount = that.chase_number_config.select_amount;
		}
	}
	check_lot(item){
		console.log(item.checkon)
		let that = this;
		if (item.checkon) {
			if (item.multiple == 0) {
				item.multiple = that.chase_number_config.multiple;
				item.take_money = item.multiple*item.price;
			}

		}else{
			item.multiple = 0;
		}
		that.repanel_data()
	}
	// 生成计划
	produce_plan(){
		let that = this;
		let gap_number,gap_multiple,multiple,chase_amount;
		if (that.c_now_panel == 'two') {
			gap_number = that.chase_number_config.chase_rule.number;
			gap_multiple = that.chase_number_config.chase_rule.multiple;
			multiple = that.chase_number_config.multiple;
			chase_amount = that.chase_number_config.chase_amount;
			if(chase_amount>that.lotdata_now.length){
				chase_amount = that.lotdata_now.length;
			}
			for (var i = 0; i <= chase_amount-1; i++) {
				console.log((i)%gap_number)
				that.lotdata_now[i].checkon = true;
				that.lotdata_now[i].multiple = multiple;
				that.lotdata_now[i].take_money = multiple*that.lotdata_now[i].price;
				if ((i+1)%gap_number == 0) {
					multiple = multiple*gap_multiple;
				}; 

			};			
		}else{
			multiple = that.chase_number_config.multiple;
			chase_amount = that.chase_number_config.chase_amount;
			if(chase_amount>that.lotdata_now.length){
				chase_amount = that.lotdata_now.length;
			}
			for (var i = 0; i <= chase_amount-1; i++) {
				that.lotdata_now[i].checkon = true;
				that.lotdata_now[i].multiple = multiple;
				that.lotdata_now[i].take_money = multiple*that.lotdata_now[i].price;
			};
		}
		that.repanel_data()
	}
	//单个金钱计算
	get_takemon(item){
		let that = this;
		item.take_money = item.multiple*item.price;
		that.repanel_data()
	}
	// 总金钱总期数计算
	repanel_data(){
		let that = this;
		let amount = 0;
		let chase_amount = 0;
		for (var i = 0; i <= that.lotdata_now.length-1; i++) {
			amount = that.lotdata_now[i].multiple*that.lotdata_now[i].price+amount;
			if (that.lotdata_now[i].checkon) {
				chase_amount = chase_amount+1;
			};
		};
		that.chase_amount = chase_amount;
		if(that.chase_amount>that.lotdata_now.length){
			that.chase_amount = that.lotdata_now.length;
		}
		that.chase_money = amount;
	}
	//清空追号
	rechase_data(){
		let that = this;
		that.lotdata_now = $.extend(true, [], that.lotdata);
		that.repanel_data()
	}
	//清空追号所有数据
	rechase_dataall(){
		let that = this;
		that.lotdata_now = $.extend(true, [], that.lotdata);
		that.chase_number_config = $.extend(true, {}, that.chase_config_ori);
		that.repanel_data()
	}
	tab_chase(para,item_one,item_two){
		let that = this;
		that.rechase_dataall();
		that.c_now_panel = para;
		if (para == 'one') {
			$(item_one).addClass('active');
			$(item_two).removeClass('active');
			$('.one').addClass('active')
			$('.two').removeClass('active')
		}else if(para == 'two'){
			$(item_two).addClass('active');
			$(item_one).removeClass('active');
			$('.two').addClass('active')
			$('.one').removeClass('active')
		}
	}
	close_chase(){
		$('#layer2').find('.chase_container').removeClass('show_this');
		let that = this;
		that.rechase_dataall()
	}
	chase_number(){
		$('#layer2').find('.chase_container').addClass('show_this');
	}
//追号函数结束
	// 遗漏数据
	omitarr = {
		0:[],1:[],2:[],3:[],4:[]
	}
	// 所有要用到的号码
	match_tab = {
		0:{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9},
		1:{5:5,6:6,7:7,8:8,9:9},
		2:{0:0,1:1,2:2,3:3,4:4},
		3:{1:1,3:3,5:5,7:7,9:9},
		4:{0:0,2:2,4:4,6:6,8:8},
		5:{}
	};
	//所有的规则
	lot_rules = {
		'1_1':{
			description: "从第一位、第二位、第三位中至少各选择1个号码。",
			example: "如：第一位选择01，第二位选择02，第三位选择03，开奖号码顺序为01，02，03**，即为中奖。",
			rule: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。",
							
		},
		'1_2':{
			description: "手动输入号码，至少输入1个三位数号码组成一注。",
			example: "如：手动输入010203，开奖号码为是010203**，即为中奖。",
			rule: "手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。",
					
		},
		'1_3':{
			description: "从01-11中任意选择3个或3个以上号码。",
			example: "如：选择010203（展开为010203**，010302**，020103**，020301**，030102**，030201**），开奖号码为030102，即为中奖。",
			rule: "从01-11中共11个号码中选择3个号码，所选号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。",
					
		},
		'1_4':{
			description: "手动输入号码，至少输入1个三位数号码组成一注。",
			example: "如：手动输入010203（展开为010203**，010302**,020103**，020301**，030102**，030201**），开奖号码为010302**，即中奖。",
			rule: "手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。",
					
		},
		'2_1':{
			description: "从第一位、第二位中至少各选择1个号码。",
			example: "如：第一位选择01，第二位选择02，开奖号码0102***，即为中奖。",
			rule: "从01-11共11个号码中选择2个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即中奖。",
																	
		},
		'2_2':{
			description: "手动输入号码，至少输入1个两位数号码组成一注。",
			example: "如：手动输入0102，开奖号码为0102***，即为中奖。",
			rule: "手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即为中奖。",
					
		},
		'2_3':{
			description: "从01-11中任意选择2个或2个以上号码。",
			example: "如：选择0102（展开为0102***，0201***），开奖号码为0201***或0102***，即为中奖。",
			rule: "从01-11中共11个号码中选择2个号码，所选号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。",
					
		},
		'2_4':{
			description: "手动输入号码，至少输入1个两位数号码组成一注。",
			example: "如：手动输入0102（展开为0102***，0201***），开奖号码为0201***或0102***，即为中奖。",
			rule: "手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。",
					
		},
		'3_1':{
			description: "从第一位，第二位，第三位任意位置上任意选择1个或1个以上号码。",
			example: "第一位选择01，开奖号码为01****，即为中奖。第二位选择05，开奖号码为*05***，即为中奖。第三位选择07，开奖号码为**07**，即为中奖。",
			rule: "从第一位，第二位，第三位任意1个位置或多个位置上选择1个号码，所选号码与相同位置上的开奖号码一致，即为中奖。",
					
		},
		'4_1':{
			description: "从01-11中任意选择1个或1个以上号码。",
			example: "如：选择01，开奖号码为01****，*01***，**01**，即为中奖。",
			rule: "从01-11中共11个号码中选择1个号码，每注由1个号码组成，只要当期顺序摇出的第一位、第二位、第三位开奖号码中包含所选号码，即为中奖。",
					
		},
		'5_1':{
			description: "从不同的单双组合中任意选择1个或1个以上的组合。",
			example: "如：选择5单0双，开奖号码01，03，05，07，09五个单数，即为中奖。",
			rule: "从5种单双个数组合中选择1种组合，当期开奖号码的单双个数与所选单双组合一致，即为中奖。",
					
		},
		'5_2':{
			description: "从3-9中任意选择1个或1个以上数字。",
			example: "如：选择8，开奖号码为11，04，09，05，08，按开奖号码的数字大小排列为04，05，08，09，11，中间数08，即为中奖。",
			rule: "从3-9中选择1个号码进行购买，所选号码与5个开奖号码按照大小顺序排列后的第3个号码相同，即为中奖。",

		},
		'6_1':{
			description: "从01-11中任意选择1个或1个以上号码。",
			example: "如：选择05；开奖号码为0804110503，即为中奖",
			rule: "从01-11共11个号码中选择1个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。",
					
		},
		'6_2':{
			description: "从01-11中任意选择2个或2个以上号码。",
			example: "如：选择0504；开奖号码为0804110503，即为中奖。",
			rule: "从01-11共11个号码中选择2个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。",
					
		},
		'6_3':{
			description: "从01-11中任意选择3个或3个以上号码。",
			example: "如：选择050411；开奖号码为0804110503，即为中奖。",
			rule: "从01-11共11个号码中选择3个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。",
					
		},
		'6_4':{
			description: "从01-11中任意选择4个或4个以上号码。",
			example: "如：选择05040803；开奖号码为0804110503，即为中奖。",
			rule: "从01-11共11个号码中选择4个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。",
					
		},
		'6_5':{
			description: "从01-11中任意选择5个或5个以上号码。",
			example: "如：选择0504110308；开奖号码为0804110503，即为中奖",
			rule: "从01-11共11个号码中选择5个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。",
					
		},
		'6_6':{
			description: "从01-11中任意选择6个或6个以上号码。",
			example: "如：选择051004110308；开奖号码为0804110503，即为中奖",
			rule: "从01-11共11个号码中选择6个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。",
			
		},
		'6_7':{
			description: "从01-11中任意选择7个或7个以上号码。",
			example: "如：选择05041011030809；开奖号码为0804110503，即为中奖",
			rule: "从01-11共11个号码中选择7个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。",
					
		},
		'6_8':{
			description: "从01-11中任意选择8个或8个以上号码。",
			example: "如：选择05041011030809；开奖号码为0804110503，即为中奖",
			rule: "从01-11共11个号码中选择8个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。",

		},
		'7_1':{
			description: "手动输入号码，从01-11中任意输入1个号码组成一注。",
			example: "如：选择05；开奖号码为0804110503，即为中奖",
			rule: "从01-11中手动输入1个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。",
					
		},
		'7_2':{
			description: "手动输入号码，从01-11中任意输入2个号码组成一注。",
			example: "如：选择0504；开奖号码为0804110503，即为中奖。",
			rule: "从01-11中手动输入2个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。",
					
		},
		'7_3':{
			description: "手动输入号码，从01-11中任意输入3个号码组成一注。",
			example: "如：选择050411；开奖号码为0804110503，即为中奖。",
			rule: "从01-11中手动输入3个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。",
					
		},
		'7_4':{
			description: "手动输入号码，从01-11中任意输入4个号码组成一注。",
			example: "如：选择05040803；开奖号码为0804110503，即为中奖。",
			rule: "从01-11中手动输入4个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。",
					
		},
		'7_5':{
			description: "手动输入号码，从01-11中任意输入5个号码组成一注。",
			example: "如：选择0504110308；开奖号码为0804110503，即为中奖",
			rule: "从01-11中手动输入5个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。",
					
		},
		'7_6':{
			description: "手动输入号码，从01-11中任意输入6个号码组成一注。",
			example: "如：选择051004110308；开奖号码为0804110503，即为中奖",
			rule: "从01-11中手动输入6个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。",
					
		},
		'7_7':{
			description: "手动输入号码，从01-11中任意输入7个号码组成一注。",
			example: "如：选择05041011030809；开奖号码为0804110503，即为中奖",
			rule: "从01-11中手动输入7个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。",
					
		},
		'7_8':{
			description: "手动输入号码，从01-11中任意输入8个号码组成一注。",
			example: "如：选择0504110308100901；开奖号码为0804110503，即为中奖",
			rule: "从01-11中手动输入8个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。",
					
		}
	}
	now_matchtab = {};//用来存储选中的号
	now_matchball = {0:{},1:{},2:{},3:{},4:{},5:{}}; //选中的大小单双的tab
	ballindex = -1;
	up_ball = 1;
	ngOnInit(){
		let that = this
		//获取当前id
		this.getPageId();
		this.loadpage = userModel.platform;
		Base.DOM.title('重庆时时彩')
		this.now_lang_type=userModel.now_lang_type;
		that.status = {
			menu_1:1,
			menu_2:1
		}
		that.menu_2_data.map(function(res){
			if(res.active == that.status.menu_1){
				that.menu_2.push(res)
			}
		})
		this.balllist(['dyw','dew','dsw']);
		this.now_description = this.lot_rules[this.now_tips_menu]['description'];
		//路由控制
		this.route.params.subscribe(data => {
            this.getPageId();
        });
        // 注册拖拽
        this.drag_tag();
	}
	ngAfterViewInit(){
		this.inittab2();
	}

	// 通过id获取目前显示的项目配置文件
	getPageId(){
		let idarray = this.router.url.split("/");
		this.nowPageId = idarray[idarray.length-1]+'_ffc';
		this.nowitems = this.items_show[this.nowPageId];
	}
	inittab2(){
		let ulMax = $('.typetab').outerWidth();
		let liWidth = 0;
		$('.pointl').on('click',function(){
			$.each($('.tab_li'),function(i,n){
				liWidth = liWidth + $(n).outerWidth();
				if (liWidth>ulMax) {
					$(n).addClass('hide_it')
				}else{
					$(n).removeClass('hide_it')
				}
			});
			liWidth = 0;
		})
		$('.pointr').on('click',function(){
			$.each($('.tab_li'),function(i,n){
				liWidth = liWidth + $(n).outerWidth();
				if (liWidth<ulMax) {
					$(n).addClass('hide_it')
				}else{
					$(n).removeClass('hide_it')
				}
				
			});
			if (liWidth<ulMax) {
				$('.tab_li').removeClass('hide_it');
			}
			liWidth = 0
		})
		$.each($('.tab_li'),function(i,n){
			liWidth = liWidth + $(n).outerWidth();
			if (liWidth>ulMax) {
				$(n).addClass('hide_it')
			}
		});
		liWidth = 0;
	}
	//路由函数                      
	linkrouter(t){
	  this.router.navigate([t]);
	}
//拖拽变数
	// 滑块左侧递减事件
	rangevaluelessen() {
		let that = this;
	    $('#range_tag').css("left",0);
		that.rangepercent = 0.1
		that.rangenum = 30000

	}
	// 滑块左侧递加事件
	rangevalueadd() {
		let that = this;
	    $('#range_tag').css("left",70);
		that.rangepercent = 0
		that.rangenum = 30033.33
	}
	drag_tag(){
		let that = this;
		$('#range_tag').on('mousedown',function(e) {
			let distance_X;
			let orin_x = e.pageX || e.clientX + document.body.scrollLeft;
			let orin_left = parseInt($('#range_tag').css('left'));
			let now_left;
			$('body').on('mousemove',function(e){
				e = e || window.event;
				let now_x = e.pageX || e.clientX + document.body.scrollLeft;
				distance_X = now_x - orin_x;
				now_left = orin_left+distance_X;
				if(now_left<0){
					now_left = 0
				}else if(now_left>70){
					now_left = 70
				}
				$('#range_tag').css("left",now_left);
				if (now_left<=26) {
					that.rangepercent = 0.1
					that.rangenum = 30000
				}else{
					that.rangepercent = 0
					that.rangenum = 30033.33
				}
			})
			$('body').on('mouseup',function(){
				$('body').unbind();
			})
		})
		
	}
//拖拽变数结束
	// 时时彩一级导航切换
	tabmenu(data){
		let that = this;
		// 分离方形与圆形选球板
		console.log(data)
		if(data.square == true){
			this.square_show = true;
		}else{
			this.square_show = false;
		}
		that.now_tab2click_num = that.menu_2_data[data.active-1]['menu'][0].arr.length;

		that.inittab()
		if(data.href){
			that.router.navigateByUrl(data.href)
		}else{
			that.status.menu_1 = data.active
			that.status.menu_2 = 1
			that.menu_2 = []
			that.up_ball = 1
			that.menu_2_data.map(function(res){
				if(res.active == that.status.menu_1){
					that.menu_2.push(res)
				}
			})
			if(that.menu_2[0].menu[0].arr){
				that.balllist(that.menu_2[0].menu[0].arr)
			}else{
				that.up_ball = 2
			}
			
			that.currtabname = that.menu_2[0].menu[0].name;
			// 配置规则提示
			that.now_tips_menu = that.status.menu_1+'_'+that.status.menu_2;
			that.now_description = that.lot_rules[that.now_tips_menu]['description'];
			if(that.status.menu_1>8){
				that.hothidden = true;
			}else{
				that.hothidden = false;
			}
		}
	}
	
	// 时时彩二级导航切换
	currtabname = '五星复选'
	tabmenu2(data){
		let that = this;
		if(!data.isupload){
			that.now_tab2click_num = data.arr.length;
		}else{
			that.now_tab2click_num = 0;
		}
		that.inittab()
		that.currtabname = data.name
		that.status.menu_2 = data.index
		if(data.isupload){
			that.up_ball = 2
		}else{
			that.up_ball = 1
			this.balllist(data.arr)
		}
		that.now_tips_menu = that.status.menu_1+'_'+that.status.menu_2;
		that.now_description = that.lot_rules[that.now_tips_menu]['description'];
	}
	// 时时彩下注区左侧显示列表
	balllist(arr){
		let that = this
		that.now_balllist = []
		that.now_tab2click_num = arr.length;
		console.log(that.now_tab2click_num)
		for (var i = 1; i <= that.now_tab2click_num; i++) {
			that.now_matchtab[i-1] = {}
		};
		console.log(that.now_matchtab)
		arr.map(function(res){
			if(res == 'w' || res == 'q' || res == 'b' || res == 's' || res == 'g'){
				that.hothidden = false;
			}else{
				that.hothidden = true;
			}
			that.now_balllist.push(that.ball_data[res])
		})
		//判断加多少进去
		console.log(this.now_balllist);
		
		
	}
	
	// 选中号码
	choosetab(index,clickindex,val,that){
		this.now_matchball = {0:{},1:{},2:{},3:{},4:{},5:{}}
		this.match_tab = {
			0:{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9},
			1:{5:5,6:6,7:7,8:8,9:9},
			2:{0:0,1:1,2:2,3:3,4:4},
			3:{1:1,3:3,5:5,7:7,9:9},
			4:{0:0,2:2,4:4,6:6,8:8},
			5:{}
		};
		this.now_matchtab[index] = {}
		
		this.ballindex = index
		this.now_matchtab[index] = this.match_tab[clickindex]
		$(that).parent('.numright').find('li').removeClass('active');
		if(val == this.ball_tab[1][5]){
			this.now_matchball[clickindex] = ''
		}else{
			this.now_matchball[clickindex] = val
			$(that).addClass('active')
		}
	}
	
	//选中单个号码
	oneball(index,clickindex,val,that){
		if(this.now_matchtab[index][val]){
			this.now_matchtab[index][val]=''
		}else{
			this.now_matchtab[index][val] = val
		}
	}

	onesquare(index,clickindex,val,that){
		console.log(val)
		if(this.now_matchtab[index][val]){
			this.now_matchtab[index][val]=''
		}else{
			this.now_matchtab[index][val] = val
		}
	}
	
	// 每次点击需要初始化的事件
	inittab(){
		this.now_matchball = {0:{},1:{},2:{},3:{},4:{},5:{}}
		this.now_matchtab = {0:{},1:{},2:{},3:{},4:{},5:{},6:{},7:{},8:{},9:{}};
		this.omitarr = {0:[],1:[],2:[],3:[],4:[]}
		this.omitname = ''
		$('.numright').find('li').removeClass('active');
		
	}
	
	// 遗漏选择
	omitname = ''
	checkomit(obj,type){
		let that = this
		if($(obj).is(':checked')) {
			$("input:checkbox[name='ballcheck']").prop("checked",false)
			$(obj).prop("checked",true)

			if(type == 'yl'){
				that.omitarr = {
					0:['05','25','13','26','14','08','11','32','19','07'],
					1:['05','25','13','26','14','08','11','32','19','07'],
					2:['05','25','13','26','14','08','11','32','19','07'],
					3:['05','25','13','26','14','08','11','32','19','07'],
					4:['05','25','13','26','14','08','11','32','19','07']
				}
				that.omitname = '当前遗漏'
			}else{
				that.omitarr = {
					0:['09','25','13','26','14','08','11','32','19','07'],
					1:['09','25','13','26','14','08','11','32','19','07'],
					2:['09','25','13','26','14','08','11','32','19','07'],
					3:['09','25','13','26','14','08','11','32','19','07'],
					4:['09','25','13','26','14','08','11','32','19','07']
				}
				that.omitname = '当前冷热'
			}
		}else{
			that.omitarr = {0:[],1:[],2:[],3:[],4:[]}
		}
	}
	
	// 确认选号
	sureballlist :any=[]
	addball(arrob){
		let that = this
		let arr = []
		let obj:any={}
		if (that.square_show == true) {
			for(let j=0;j<that.now_tab2click_num;j++){
				arr = []

				for (let i in that.now_matchtab[j]) {
					console.log(i)
					if(i!=''){
						arr.push(that.now_matchtab[j][i]); //属性
					}
				}

				if(obj.ball){
					obj.ball = obj.ball+'|'+arr.join(',')
				}else{
					obj.ball = arr.join(',')
				}
			}
			obj.name=that.currtabname;
			console.log(obj.ball)
			that.sureballlist.push(obj.ball)
		}else{
			for(let j=0;j<5;j++){
				arr = []
				for (let i in that.now_matchtab[j]) {
					if(i!=''){
						arr.push(that.now_matchtab[j][i]); //属性
					}
				}
				if(obj.ball){
					obj.ball = obj.ball+'|'+arr.join(',')
				}else{
					obj.ball = arr.join(',')
				}
			}
			obj.name=that.currtabname;
			that.sureballlist.push(obj);
		}
		
		this.inittab()
	}

	
	// 删除号码
	delball(type,val){
		if(type=='clear'){
			this.sureballlist = []
		}{
			Base._.removeArr(val,this.sureballlist)
		}
	}
	
	// 随机选号号码
	mathball(arr){
		let that = this
		let math:any = []
		let redata:any = {}
		arr.map(function(res){
			res.menu.map(function(data){
				if(data.name == that.currtabname){
					math = data.arr
				}
			})
		})
		math.map(function(res){
			switch (res){
				case '120':
				redata.ball = Math.floor(0 + Math.random() * (9 - 0))+'|';
				break;
				default:
				if(redata.ball){
					redata.ball = redata.ball + Math.floor(0 + Math.random() * (9 - 0))+'|';
				}else{
					redata.ball = Math.floor(0 + Math.random() * (9 - 0))+'|';
				}
			}
		})
		let arrball = redata.ball.split('|')
		arrball.pop()
		redata.ball = arrball.join('|')
		redata.name=that.currtabname
		that.sureballlist.push(redata)
	}
	
	addrem(item){
		this.multiple_input.value = parseInt(this.multiple_input.value);
		this.radom_input.value = parseInt(this.radom_input.value);
		if (item=='multiple') {
			this.multiple_input.value = this.multiple_input.value+1;
		}else if(item=='radom'){
			this.radom_input.value = this.radom_input.value +1;
		}
		
	}
	minusrem(item){
		this.multiple_input.value = parseInt(this.multiple_input.value);
		this.radom_input.value = parseInt(this.radom_input.value);
		if (item=='multiple') {
			if (this.multiple_input.value>1) {
				this.multiple_input.value = this.multiple_input.value-1;
			}
		}else if(item=='radom'){
			if (this.radom_input.value>1) {
				this.radom_input.value = this.radom_input.value-1;
			}
		}
	}
	// 下拉框选择input值
	check_multi(item){
		this.multiple_input.value = item;
	}
	// 限制input输入格式
	regUpright(){
		if (this.multiple_input<0||this.multiple_input%1!=0||this.multiple_input === null) {
			this.multiple_input = parseInt(this.multiple_input.toString().replace(/\D/g,''))
			this.multiple_input = Math.abs(this.multiple_input);
			this.multiple_input = parseInt(this.multiple_input.toString());
			if(isNaN(this.multiple_input)){
				this.multiple_input = '';
			}
		}
	}

	changereg () {
        this.curinpt.value = this.curinpt.value.replace(/\D/g, "");
        // this.multiple_input.value = this.multiple_input.value.replace(/\D/g, "");
    }
    inmoneyfocus(item) {
    	if(item === 'multiple'){
			this.curinpt = this.multiple_input;
    	}else if(item === 'radom'){
    		this.curinpt = this.radom_input;
    	}
    }

	show_tips(item,em){
		if(item === 'reward_rule'){
			this.now_tips = this.other_rules[item];
		}else{
			this.now_tips = this.lot_rules[this.now_tips_menu][item];
		}
		
		em.classList.add("tipsshow");
	}
	hid_tips(item,em){
		em.classList.remove("tipsshow");
	}
	// inputurl隐藏显示
	toggle_ul(item){
		let self = this;
		this.inmoneyfocus(item)
		setTimeout(function(){
			self.ul_hidden = !self.ul_hidden;
		}, 200)
	}
	// 弹层1
	parseDom(arg) {
	　　 var objE = document.createElement("div");
	　　 objE.innerHTML = arg;
	　　 return objE.childNodes;
	};
	show_layer(param,nextrun){
		let msg = param.msg;
		let til = param.til;
		let self = this;
		let str = '<div class="cover_bg" #cover_bg></div><div id="layer_box" #layer><div class="top_til"><div class="til">'+til+'</div><div class="close">x</div></div><div class="content_box">'+msg+'</div><div class="confirm_box"><div class="confirm_btn">确定</div></div></div>';	
		let dom = $(this.parseDom(str))
		dom.find('.close').on('click',function(){
			self.hid_layer();
		}) 
		dom.find('.confirm_box').on('click',function(){
			nextrun();
		})
		$('#layer').append(dom);
		setTimeout(function(){
			dom.addClass('tobig')
		}, 10)
		window.onresize = function () {
			console.log('x')
		}
	}
	hid_layer(){
		document.getElementById("layer").innerHTML = '';
	}
}