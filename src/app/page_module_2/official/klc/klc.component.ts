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
    selector: 'klcofficial',
    templateUrl: './klc.component.html',
    styleUrls: ['./klc.component.scss']
})

export class KLCofficialComponent implements OnInit {

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
	// 语言
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
		'bjkl8_ffc':{
			'tabitem':[this.now_lang.Lot_tab.any_choose,this.now_lang.Lot_tab.Interest],
			'reward_show':false,
			'name':this.now_lang.lot_type.bjkl8_klc
		},
		'twbg_ffc':{
			'tabitem':[this.now_lang.Lot_tab.any_choose,this.now_lang.Lot_tab.Interest],
			'reward_show':false,
			'name':this.now_lang.lot_type.twbg_klc
		},
		'jndkl8_ffc':{
			'tabitem':[this.now_lang.Lot_tab.any_choose,this.now_lang.Lot_tab.Interest,this.now_lang.Lot_tab.sum,this.now_lang.Lot_tab.pan],
			'reward_show':false,
			'name':this.now_lang.lot_type.jndkl8_klc
		},
		'azkl8_ffc':{
			'tabitem':[this.now_lang.Lot_tab.any_choose,this.now_lang.Lot_tab.Interest,this.now_lang.Lot_tab.sum,this.now_lang.Lot_tab.pan],
			'reward_show':false,
			'name':this.now_lang.lot_type.azkl8_klc
		},
		'slfk_ffc':{
			'tabitem':[this.now_lang.Lot_tab.any_choose,this.now_lang.Lot_tab.Interest,this.now_lang.Lot_tab.sum,this.now_lang.Lot_tab.pan],
			'reward_show':false,
			'name':this.now_lang.lot_type.slfk_klc
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
			name:this.now_lang.Lot_tab.any_choose,
			active:1
		},
		{
			name:this.now_lang.Lot_tab.Interest,
			active:2,
			square:true
		},
		{
			name:this.now_lang.Lot_tab.sum,
			active:3,
			square:true
		},
		{
			name:this.now_lang.Lot_tab.pan,
			active:4,
			square:true
		},

		

	];
	
	// 2级tab数据以及对应要显示的内容
	menu_2_data = [
		{
			title:this.now_lang.Lot_tab.any_choose,
			menu:[{name:this.now_lang.Lot_tab.choose_one,index:1,arr:['shang','xia']},{name:this.now_lang.Lot_tab.choose_two,index:2,arr:['shang','xia']},{name:this.now_lang.Lot_tab.choose_three,index:3,arr:['shang','xia']},{name:this.now_lang.Lot_tab.choose_four,index:4,arr:['shang','xia']},{name:this.now_lang.Lot_tab.choose_five,index:5,arr:['shang','xia']},{name:this.now_lang.Lot_tab.choose_six,index:6,arr:['shang','xia']},{name:this.now_lang.Lot_tab.choose_seven,index:7,arr:['shang','xia']}],
			active:1
		},
		{
			title:this.now_lang.Lot_tab.Interest,
			menu:[{name:this.now_lang.Lot_tab.sum_odd_eve,index:1,arr:['hzds']},{name:this.now_lang.Lot_tab.sum_big_sma,index:2,arr:['hzdx']},{name:this.now_lang.Lot_tab.up_down_pan,index:3,arr:['sxp']},{name:this.now_lang.Lot_tab.odd_eve_pan,index:4,arr:['jop']},{name:this.now_lang.Lot_tab.sum_bigs_odde,index:5,arr:['hzdxds']}],
			active:2
		},
		{
			title:this.now_lang.Lot_tab.sum,
			menu:[{name:this.now_lang.Lot_tab.sum_odd_eve,index:1,arr:['hzds']},{name:this.now_lang.Lot_tab.sum_big_sma,index:2,arr:['hzdx']},{name:this.now_lang.Lot_tab.sum_bigs_odde,index:3,arr:['hzdxds']}],
			active:3
		},
		{
			title:this.now_lang.Lot_tab.pan,
			menu:[{name:this.now_lang.Lot_tab.up_down_pan,index:1,arr:['sxp']},{name:this.now_lang.Lot_tab.odd_eve_pan,index:2,arr:['jop']}],
			active:4
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
		'shang':{
			title:'上',
			ball:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
			tab:this.ball_tab[3],
			index:4
		},
		'xia':{
			title:'下',
			ball:[41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
			tab:this.ball_tab[3],
			index:4
		},
		'hzds':{
			title:'和值单双',
			ball:[{value:'单'},{value:'双'}],
			tab:this.ball_tab[2],
			index:4
		},
		'hzdx':{
			title:'和值大小',
			ball:[{value:'大',range:'133-145',radix:'0.8976'},{value:'和',range:'133-145',radix:'0.8976'},{value:'小',range:'133-145',radix:'0.8976'}],
			tab:this.ball_tab[2],
			index:4
		},
		'sxp':{
			title:'上下盘',
			ball:[{value:'上',range:'上>下',radix:'0.8976'},{value:'中',range:'上=下',radix:'0.8976'},{value:'下',range:'上<下',radix:'0.8976'}],
			tab:this.ball_tab[2],
			index:4
		},
		'jop':{
			title:'奇偶盘',
			ball:[{value:'奇',range:'奇>偶',radix:'0.8976'},{value:'和',range:'奇=偶',radix:'0.8976'},{value:'偶',range:'奇<偶',radix:'0.8976'}],
			tab:this.ball_tab[2],
			index:4
		},
		'hzdxds':{
			title:'大小单双',
			ball:[{value:'大单'},{value:'大双'},{value:'小单'},{value:'小双'}],
			tab:this.ball_tab[2],
			index:4
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
			description: "从01-80中任选1个以上号码",
			example: "投注方案：01<br/>开奖号码：01 02 03 04 05 06 07 08 21 22<br/>　　　　　71 72 73 74 75 76 77 78 79 80<br/>中奖结果：中1个号码",
			rule: "从01-80中选择1个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。",
					
		},
		'1_2':{
			description: "从01-80中任选2个以上号码",
			example: "投注方案：01 02<br/>开奖号码：01 02 03 04 05 06 07 08 21 22<br/>　　　　　71 72 73 74 75 76 77 78 79 80<br/>中奖结果：中2个号码",
			rule: "从01-80中选择2个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。",
					
		},
		'1_3':{
			description: "从01-80中任选3个以上号码",
			example: "投注方案：01 02 03<br/>开奖号码：01 02 03 04 05 06 07 08 21 22<br/>　　　　　71 72 73 74 75 76 77 78 79 80<br/>中奖结果：中3个号码",
			rule: "从01-80中选择3个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。",
					
		},
		'1_4':{
			description: "从01-80中任选4个以上号码",
			example: "投注方案：01 02 03 04<br/>开奖号码：01 02 03 04 05 06 07 08 21 22<br/>　　　　　71 72 73 74 75 76 77 78 79 80<br/>中奖结果：中4个号码",
			rule: "从01-80中选择4个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。",
					
		},
		'1_5':{
			description: "从01-80中任选5个以上号码",
			example: "投注方案：01 02 03 04 05<br/>开奖号码：01 02 03 04 05 06 07 08 21 22<br/>　　　　　71 72 73 74 75 76 77 78 79 80<br/>中奖结果：中5个号码",
			rule: "从01-80中选择5个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。",
					
		},
		'1_6':{
			description: "从01-80中任选6个以上号码",
			example: "投注方案：01 02 03 04 05 06<br/>开奖号码：01 02 03 04 05 06 07 08 21 22<br/>　　　　　71 72 73 74 75 76 77 78 79 80<br/>中奖结果：中6个号码",
			rule: "从01-80中选择6个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。",
					
		},
		'1_7':{
			description: "从01-80中任选7个以上号码",
			example: "投注方案：01 02 03 04 05 06 07<br/>开奖号码：01 02 03 04 05 06 07 08 21 22<br/>　　　　　71 72 73 74 75 76 77 78 79 80<br/>中奖结果：中7个号码",
			rule: "从01-80中选择7个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。",
					
		},

		'2_1':{
			description: "猜20个开奖号码相加的总值是“单”或者“双”",
			example: "投注方案：“单”<br/>开奖的号码相加等于“355”<br/>中奖结果：“单”",
			rule: "20个开奖号码的总和值为奇数时中“单”，为偶数时中“双”。",
													
		},
		'2_2':{
			description: "猜20个开奖号码相加的总值“大”或者“和”或者“小”",
			example: "投注方案：“大”<br/>开奖的20个号码相加总值等于“820”<br/>中奖结果：“大”",
			rule: "选择20个开奖号码总和值的大小属性:小于810为小,等于810为和,大于810为大",
					
		},
		'2_3':{
			description: "选择20个开奖号码中包含上盘(01-40)与下盘(41-80)号码个数多少的关系",
			example: "投注方案：上盘<br/>开奖结果：20个开奖号码中，上盘(01-40)的号码个数大于下盘(41-80)的号码个数<br/>中奖名称：上盘",
			rule: "20个开奖号码中上盘（01-40）的号码个数大余下盘（41-80）的号码个数中“上”盘，下盘号码个数大于上盘号码个数中“下”盘，上，下盘的号码个数相等时为“中”盘。",
							
		},
		'2_4':{
			description: "选择20个开奖号码中包含奇偶号码个数多少的关系",
			example: "投注方案：“偶盘”<br/>开奖结果：20个开奖号码中，偶数号码个数大于奇数号码个数<br/>中奖名称：“偶盘”",
			rule: "20个开奖号码中奇数个数大于偶数个数中“奇”盘，偶数个数大于奇数个数中“偶”盘，两盘个数相等时中“和”盘。",
							
		},
		'2_5':{
			description: "选择20个开奖号码总和值的大小单双属性",
			example: "投注方案：和值“大•单”<br/>开奖结果：20个开奖号码的总和值为大(超过810)并且20个开奖号码的总和值为单数<br/>中奖名称：和值大小单双_“大•单”",
			rule: "选择20个开奖号码总和值的大小单双属性（和值811～1410为大,和值210~810为小）。",
									
		},
		'3_1':{
			description: "选择20个开奖号码总和值的单双属性",
			example: "投注方案：“单”<br/>开奖的号码相加等于“355”<br/>中奖结果：“单”",
			rule: "20个开奖号码的总和值为奇数时中“单”，为偶数时中“双”。",
											
		},
		'3_2':{
			description: "选择20个开奖号码总和值的大小属性",
			example: "投注方案：“大”<br/>开奖的20个号码相加总值等于“820”<br/>中奖结果：“大”",
			rule: "选择20个开奖号码总和值的大小属性:小于810为小,等于810为和,大于810为大",
													
		},
		'3_3':{
			description: "选择20个开奖号码总和值的大小单双属性",
			example: "投注方案：和值“大•单”<br/>开奖结果：20个开奖号码的总和值为大(超过810)并且20个开奖号码的总和值为单数<br/>中奖名称：和值大小单双_“大•单”",
			rule: "选择20个开奖号码总和值的大小单双属性（和值811～1410为大,和值210~810为小）。",
											
		},
		'4_1':{
			description: "选择20个开奖号码中包含上盘(01-40)与下盘(41-80)号码个数多少的关系",
			example: "投注方案：上盘<br/>开奖结果：20个开奖号码中，上盘(01-40)的号码个数大于下盘(41-80)的号码个数<br/>中奖名称：上盘",
			rule: "20个开奖号码中上盘（01-40）的号码个数大余下盘（41-80）的号码个数中“上”盘，下盘号码个数大于上盘号码个数中“下”盘，上下盘的号码个数相等时为“中”盘。",
													
		},
		'4_2':{
			description: "选择20个开奖号码中包含奇偶号码个数多少的关系",
			example: "投注方案：“偶盘”<br/>开奖结果：20个开奖号码中，偶数号码个数大于奇数号码个数<br/>中奖名称：“偶盘”",
			rule: "20个开奖号码中奇数个数大于偶数个数中“奇”盘，偶数个数大于奇数个数中“偶”盘，两盘个数相等时中“和”盘。",
													
		},
		
		
		
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
		this.balllist(['shang','xia']);
		this.now_description = this.lot_rules[this.now_tips_menu]['description'];
		//路由控制
		this.router.events
          .filter((event) => event instanceof NavigationEnd)
          .subscribe((event:NavigationEnd) => {
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