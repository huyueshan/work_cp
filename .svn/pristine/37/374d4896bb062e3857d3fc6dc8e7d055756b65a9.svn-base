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
    selector: 'dpcofficial',
    templateUrl: './dpc.component.html',
    styleUrls: ['./dpc.component.scss']
})

export class DPCofficialComponent implements OnInit {

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
	public rangepercent = 0;
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
	public items_show = {
		'fc3d_ffc':{
			'tabitem':['三码','不定胆','二码','定位胆','大小单双'],    
			'reward_show':false
		},
		'pl35_ffc':{
			'tabitem':['五星','前四','后四','后三码','前三码','中三码','二码','定位胆','不定胆','大小单双','趣味','任选二','任选三','任选四'],             
			'reward_show':false
		},
		'shssl_ffc':{
			'tabitem':['三码','不定胆','二码','定位胆','大小单双'],
			'reward_show':false
		}
	}
	public curinpt = {value:''};
	//路由id
	public routid;
	public now_tab2click_num;
	// public rangevalue = rangevalue;
	//方形选球板
	public square_show = false;
	now_lang :any={};
	status = {
		menu_1:1,//一级tab默认项
		menu_2:1  //二级tab默认项
	}
	// 一级tab
	menu_1 = [
		{
			name:'五星',
			active:1
		},
		{
			name:'前四',
			active:2
		},
		{
			name:'后四',
			active:3
		},
		{
			name:'后三码',
			active:4
		},
		{
			name:'前三码',
			active:5
		},
		{
			name:'中三码',
			active:6
		},
		{
			name:'二码',
			active:7
		},
		{
			name:'定位胆',
			active:8
		},
		{
			name:'不定胆',
			active:9
		},
		{
			name:'大小单双',
			active:10
		},
		{
			name:'趣味',
			active:11
		},
		{
			name:'任选二',
			active:12
		},
		{
			name:'任选三',
			active:13
		},
		{
			name:'任选四',
			active:14
		}
	];
	
	// 2级tab数据以及对应要显示的内容
	menu_2_data = [
		{
			title:'五星直选',
			menu:[{name:'五星复选',index:1,arr:['w','q','b','s','g']},{name:'五星单式',index:2,isupload:true},{name:'五星组合',index:3,arr:['w','q','b','s','g']}],
			active:1
		},
		{
			title:'五星组选',
			menu:[{name:'组选120',index:4,arr:['120']},{name:'组选60',index:5,arr:['2ch','dh']},{name:'组选30',index:6,arr:['2ch','dh']},{name:'组选20',index:7,arr:['3ch','dh']},{name:'组选10',index:8,arr:['3ch','2ch']},{name:'组选5',index:9,arr:['4ch','dh']}],
			active:1
		},
		{
			title:'前四直选',
			menu:[{name:'前四复式',index:1,arr:['w','q','b','s']},{name:'前四单式',index:2,isupload:true},{name:'前四组合',index:3,arr:['w','q','b','s']}],
			active:2
		},
		{
			title:'前四组选',
			menu:[{name:'前四组选24',index:4,arr:['24']},{name:'前四组选12',index:5,arr:['2ch','dh']},{name:'前四组选6',index:6,arr:['2ch']},{name:'前四组选4',index:7,arr:['3ch','dh']}],
			active:2
		},
		{
			title:'后四直选',
			menu:[{name:'后四复式',index:1,arr:['q','b','s','g']},{name:'后四单式',index:2,isupload:true},{name:'后四组合',index:3,arr:['q','b','s','g']}],
			active:3
		},
		{
			title:'后四组选',
			menu:[{name:'后四组选24',index:4,arr:['24']},{name:'后四组选12',index:5,arr:['2ch','dh']},{name:'后四组选6',index:6,arr:['2ch']},{name:'后四组选4',index:7,arr:['3ch','dh']}],
			active:3
		},
		{
			title:'后三直选',
			menu:[{name:'后三直选复式',index:1,arr:['b','s','g']},{name:'后三直选单式',index:2,isupload:true},{name:'后三直选和值',index:3,arr:['hz']}],
			active:4
		},
		{
			title:'后三组选',
			menu:[{name:'后三组三',index:4,arr:['zu3']},{name:'后三组六',index:5,arr:['zu6']},{name:'后三混合组选',index:6,isupload:true},{name:'后三组选和值',index:7,arr:['hz']}],
			active:4
		},
		{
			title:'前三直选',
			menu:[{name:'前三直选复式',index:1,arr:['w','q','b']},{name:'前三直选单式',index:2,isupload:true},{name:'前三直选和值',index:3,arr:['hz']}],
			active:5
		},
		{
			title:'前三组选',
			menu:[{name:'前三组三',index:4,arr:['zu3']},{name:'前三组六',index:5,arr:['zu6']},{name:'前三混合组选',index:6,isupload:true},{name:'前三组选和值',index:7,arr:['hz']}],
			active:5
		},
		{
			title:'中三直选',
			menu:[{name:'中三直选复式',index:1,arr:['q','b','s']},{name:'中三直选单式',index:2,isupload:true},{name:'中三直选和值',index:3,arr:['hz']}],
			active:6
		},
		{
			title:'中三组选',
			menu:[{name:'中三组三',index:4,arr:['zu3']},{name:'中三组六',index:5,arr:['zu6']},{name:'中三混合组选',index:6,isupload:true},{name:'中三组选和值',index:7,arr:['hz26']}],
			active:6
		},
		{
			title:'二星直选',
			menu:[{name:'后二直选(复式)',index:1,arr:['s','g']},{name:'后二直选(单式)',index:2,isupload:true},{name:'前二直选(复试)',index:3,arr:['w','q']},{name:'前二直选(单式)',index:4,isupload:true},{name:'后二直选(和值)',index:5,arr:['hz18']},{name:'前二直选(和值)',index:6,arr:['hz18']}],
			active:7
		},
		{
			title:'二星组选',
			menu:[{name:'后二组选(复式)',index:7,arr:['zx9']},{name:'后二组选(单式)',index:8,isupload:true},{name:'前二组选(复试)',index:9,arr:['zx9']},{name:'前二组选(单式)',index:10,isupload:true},{name:'后二组选(和值)',index:11,arr:['hz17']},{name:'前二组选(和值)',index:12,arr:['hz17'] }],
			active:7
		},
		{
			title:'定位胆',
			menu:[{name:'定位胆',index:1,arr:['w','q','b','s','g']}],
			active:8
		},
		{
			title:'三星不定胆',
			menu:[{name:'后三一码不定胆',index:1,arr:['bdd9']},{name:'后二码不定胆',index:2,arr:['bdd9'] },{name:'前三一码不定胆',index:3,arr:['bdd9']},{name:'前三二码不定胆',index:4,arr:['bdd9']}],
			active:9
		},
		{
			title:'大小单双',
			menu:[{name:'前二大小单双',index:1,arr:['dsw','dsq']},{name:'后二大小单双',index:2,arr:['dsw','dsq']}],
			active:10
		},
		{
			title:'特殊',
			menu:[{name:'一帆风顺',index:1,arr:['yffs']},{name:'好事成双',index:2,arr:['hscs']},{name:'三星报喜',index:3,arr:['sxbx']},{name:'四季发财',index:4,arr:['sjfc']}],
			active:11
		},
		{
			title:'任二直选',
			menu:[{name:'任二直选复式',index:1,arr:['w','q','b','s','g']},{name:'任二直选单式',index:2,isupload:true},{name:'任二直选和值',index:3,arr:['hz18']}],
			active:12
		},
		{
			title:'任二组选',
			menu:[{name:'任二组选复式',index:4,arr:['zx9']},{name:'任二组选单式',index:5,isupload:true},{name:'任二组选和值',index:6,arr:['hz17']}],
			active:12
		},
		{
			title:'任三直选',
			menu:[{name:'任三直选单式',index:1,isupload:true},{name:'任三直选复式',index:2,arr:['w','q','b','s','g']},{name:'任三直选和值',index:3,arr:['hz']}],
			active:13
		},
		{
			title:'任三组选',
			menu:[{name:'任三组三',index:4,arr:['zu3']},{name:'任三组六',index:5,arr:['zu6']},{name:'任三混合组选',index:6,isupload:true},{name:'任三组三和值',index:7,arr:['hz26']}],
			active:13
		},
		{
			title:'任四直选',
			menu:[{name:'任四直选单式',index:1,isupload:true},{name:'任四直选复式',index:2,arr:['w','q','b','s','g']}],
			active:14
		},
		{
			title:'任四组选',
			menu:[{name:'组选24',index:3,arr:['dh']},{name:'组选12',index:4,arr:['dh','2ch']},{name:'组选6',index:5,arr:['2ch']},{name:'组选4',index:6,arr:['3ch','dh']}],
			active:14
		}
	]
	menu_2 = []; //存储当前一级导航对应的耳机导航
	ball_tab = {
		1:['全','大','小','单','双','清'],
		2:['全','清'],
		3:[]

	};
	now_balllist = []; //当前号码列表
	
	// 所有号码的列表数据
	ball_data = {
		'w':{
			title:'万位',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:0
		},
		'q':{
			title:'千位',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:1
		},
		'b':{
			title:'百位',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:2
		},
		's':{
			title:'十位',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:3
		},
		'g':{
			title:'个位',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:4
		},
		'24':{
			title:'组选24',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:5
		},
		'zx9':{
			title:'组选',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:5
		},
		'2ch':{
			title:'二重号',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:6
		},
		'dh':{
			title:'单号',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:7
		},
		'120':{
			title:'组选120',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:8
		},
		'4ch':{
			title:'四重号',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:9
		},
		'3ch':{
			title:'三重号',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:9
		},
		'hz':{
			title:'直选和值',
			ball:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],
			tab:this.ball_tab[1],
			index:9
		},
		'hz26':{
			title:'组选和值',
			ball:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
			tab:this.ball_tab[1],
			index:9
		},
		'zu3':{
			title:'组三',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:9
		},
		'zu6':{
			title:'组六',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:9
		},
		'hz18':{
			title:'和值',
			ball:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
			tab:this.ball_tab[1],
			index:9
		},
		'hz17':{
			title:'和值',
			ball:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
			tab:this.ball_tab[1],
			index:9
		},
		'bdd9':{
			title:'后三一码不定胆',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:9
		},
		'dsw':{
			title:'万位',
			ball:['大','小','单','双'],
			tab:this.ball_tab[1],
			index:9
		},
		'dsq':{
			title:'千位',
			ball:['大','小','单','双'],
			tab:this.ball_tab[1],
			index:9
		},
		'yffs':{
			title:'一帆风顺',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:9
		},
		'hscs':{
			title:'好事成双',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:9
		},
		'sxbx':{
			title:'三星报喜',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:9
		},
		'sjfc':{
			title:'四季发财',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:9
		}
	};
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
			description: "从万位、千位、百位、十位、个位中选择一个5位数号码组成一注。",
			example: "投注方案：23456；<br>开奖号码：23456，<br>即中五星直选。",
			rule: "从万位、千位、百位、十位、个位中选择一个5位数号码组成一注，所选号码与开奖号码全部相同，且顺序一致，即为中奖。"
		},
		'1_2':{
			description: "手动输入号码，至少输入1个五位数号码组成一注。",
			example: "投注方案：23456； 开奖号码：23456，即中五星直选一等奖",
			rule: "手动输入一个5位数号码组成一注，所选号码的万位、千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。"
		},
		'1_3':{
			description: "从个、十、百、千、万位各选一个号码组成五注。",
			example: "五星组合示例，如购买：4+5+6+7+8，该票共5元，由以下5注：45678(五星)、5678(四星)、678(三星)、78(二星)、8(一星)构成。开奖号码：45678，即可中五星、四星、三星、二星、一星的一等奖各1注。 ",
			rule: "从万位、千位、百位、十位、个位中至少各选一个号码组成1-5星的组合，共五注，所选号码的个位与开奖号码相同，则中1个5等奖；所选号码的个位、十位与开奖号码相同，则中1个5等奖以及1个4等奖，依此类推，最高可中5个奖，五星奖金90000元，四星奖金9000元，三星奖金900元，二星奖金90元，一星奖金9元。"
		},
		'1_4':{
			description: "从0-9中选择5个号码组成一注。",
			example: "投注方案：02568，开奖号码的五个数字只要包含0、2、5、6、8，即可中五星组选120一等奖。",
			rule: "从0-9中任意选择5个号码组成一注，所选号码与开奖号码的万位、千位、百位、十位、个位相同，顺序不限，即为中奖。"		
		},
		'1_5':{
			description: "从“二重号”选择一个号码，“单号”中选择三个号码组成一注。",
			example: "投注方案：二重号：8，单号：0、2、5，只要开奖的5个数字包括 0、2、5、8、8，即可中五星组选60一等奖。",
			rule: "选择1个二重号码和3个单号号码组成一注，所选的单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。"
		},
		'1_6':{
			description: "从“二重号”选择两个号码，“单号”中选择一个号码组成一注。",
			example: "投注方案：二重号：2、8，单号：0，只要开奖的5个数字包括 0、2、2、8、8，即可中五星组选30一等奖。",
			rule: "选择2个二重号和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选的2个二重号码分别在开奖号码中出现了2次，即为中奖。"
		},
		'1_7':{
			description: "从“三重号”选择一个号码，“单号”中选择两个号码组成一注。",
			example: "投注方案：三重号：8，单号：0、2，只要开奖的5个数字包括 0、2、8、8、8，即可中五星组选20一等奖。",
			rule: "选择1个三重号码和2个单号号码组成一注，所选的单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。"
		},
		'1_8':{
			description: "从“三重号”选择一个号码，“二重号”中选择一个号码组成一注。",
			example: "投注方案：三重号：8，二重号：2，只要开奖的5个数字包括 2、2、8、8、8，即可中五星组选10一等奖。",
			rule: "选择1个三重号码和1个二重号码，所选三重号码在开奖号码中出现3次，并且所选二重号码在开奖号码中出现了2次，即为中奖。"
		},
		'1_9':{
			description: "从“四重号”选择一个号码，“单号”中选择一个号码组成一注。",
			example: "投注方案：四重号：8，单号：2，只要开奖的5个数字包括 2、8、8、8、8，即可中五星组选5一等奖。",
			rule: "选择1个四重号码和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选四重号码在开奖号码中出现了4次，即为中奖。"
		},
		'2_1':{
			description: "从万位、千位、百位、十位中至少各选择一个号码组成一注。",
			example: "投注方案：3456，开奖号码：3456，即中四星直选。",
			rule: "从万位、千位、百位、十位中选择一个4位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。",
													
		},
		'2_2':{
			description: "从万位、千位、百位、十位中至少各选择一个号码组成一注。",
			example: "投注方案：3456，开奖号码：3456，即中四星直选。",
			rule: "从万位、千位、百位、十位中选择一个4位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。",
		},
		'2_3':{
			description: "在万位、千位、百位、十位任意位置上任意选择1个或1个以上号码。",
			example: "如：四星组合示例，如购买：5+6+7+8，该票共4元，由以下4注：5678(四星)、678(三星)、78(二星)、8(一星)构成。开奖号码：5678，即可中四星、三星、二星、一星各1注。",
			rule: "从万位、千位、百位、十位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖，四星奖金9000元，三星奖金900元，二星奖金90元，一星奖金9元。",
		},
		'2_4':{
			description: "从0-9中选择4个号码组成一注。",
			example: "投注方案：0568，开奖号码的四个数字只要包含0、5、6、8，即可中四星组选24一等奖。",
			rule: "从0-9中任意选择4个号码组成一注，所选号码与开奖号码的万位、千位、百位、十位相同，且顺序不限，即为中奖。",
		},
		'2_5':{
			description: "从“二重号”选择一个号码，“单号”中选择两个号码组成一注。",
			example: "投注方案：二重号：8，单号：0、6，只要开奖的四个数字包括 0、6、8、8，即可中四星组选12一等奖。",
			rule: "选择1个二重号码和2个单号号码组成一注，所选单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。",
		},
		'2_6':{
			description: "从“二重号”选择两个号码组成一注。",
			example: "投注方案：二重号：6、8，只要开奖的四个数字从小到大排列为 6、6、8、8，即可中四星组选6。",
			rule: "选择2个二重号码组成一注，所选的2个二重号码在开奖号码中分别出现了2次，即为中奖。",
		},
		'2_7':{
			description: "从“三重号”选择一个号码，“单号”中选择一个号码组成一注。",
			example: "投注方案：三重号：8，单号：2，只要开奖的四个数字从小到大排列为 2、8、8、8，即可中四星组选4。",
			rule: "选择1个三重号码和1个单号号码组成一注，所选单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。",
		},
		'3_1':{
			description: "从千位、百位、十位、个位中至少各选择一个号码组成一注。",
			example: "投注方案：3456，开奖号码：3456，即中四星直选。",
			rule: "从千位、百位、十位、个位中选择一个4位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。",
		},
		'3_2':{
			description: "手动输入号码，至少输入1个四位数号码组成一注。",
			example: "投注方案：手动输入3456；开奖号码：3456，即中四星直选。",
			rule: "手动输入一个4位数号码组成一注，所选号码的千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。",
		},
		'3_3':{
			description: "在千位、百位、十位、个位任意位置上任意选择1个或1个以上号码。",
			example: "如：四星组合示例，如购买：5+6+7+8，该票共4元，由以下4注：5678(四星)、678(三星)、78(二星)、8(一星)构成。开奖号码：5678，即可中四星、三星、二星、一星各1注。",
			rule: "从千位、百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖，四星奖金9000元，三星奖金900元，二星奖金90元，一星奖金9元。",
		},
		'3_4':{
			description: "从0-9中选择4个号码组成一注。",
			example: "投注方案：0568，开奖号码的四个数字只要包含0、5、6、8，即可中四星组选24一等奖。",
			rule: "从0-9中任意选择4个号码组成一注，所选号码与开奖号码的千位、百位、十位、个位相同，且顺序不限，即为中奖。",
		},
		'3_5':{
			description: "从“二重号”选择一个号码，“单号”中选择两个号码组成一注。",
			example: "投注方案：二重号：8，单号：0、6，只要开奖的四个数字包括 0、6、8、8，即可中四星组选12一等奖。",
			rule: "选择1个二重号码和2个单号号码组成一注，所选单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。",
		},
		'3_6':{
			description: "从“二重号”选择两个号码组成一注。",
			example: "投注方案：二重号：6、8，只要开奖的四个数字从小到大排列为 6、6、8、8，即可中四星组选6。",
			rule: "选择2个二重号码组成一注，所选的2个二重号码在开奖号码中分别出现了2次，即为中奖。",
		},
		'3_7':{
			description: "从“三重号”选择一个号码，“单号”中选择一个号码组成一注。",
			example: "投注方案：三重号：8，单号：2，只要开奖的四个数字从小到大排列为 2、8、8、8，即可中四星组选4。",
			rule: "选择1个三重号码和1个单号号码组成一注，所选单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。",
		},
		'4_1':{
			description: "从个、十、百位各选一个号码组成一注。",
			example: "投注方案：345；<br>开奖号码：345，<br>即中后三直选一等奖",
			rule: "从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码后3位相同，且顺序一致，即为中奖。",
		},
		'4_2':{
			description: "手动输入号码，至少输入1个三位数号码组成一注。",
			example: "投注方案：345； 开奖号码：345，即中后三直选一等奖",
			rule: "手动输入一个3位数号码组成一注，所选号码的百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。",
		},
		'4_3':{
			description: "从0-27中任意选择1个或1个以上号码。",
			example: "投注方案：和值1；开奖号码后三位：001,010,100,即中后三直选和值一等奖",
			rule: "所选数值等于开奖号码的百位、十位、个位三个数字相加之和，即为中奖。",
		},
		'4_4':{
			description: "从0-9中任意选择2个或2个以上号码。",
			example: "投注方案：5,8,8；开奖号码后三位：1个5，2个8 (顺序不限)，即中后三组选三一等奖。",
			rule: "从0-9中选择2个数字组成两注，所选号码与开奖号码的百位、十位、个位相同，且顺序不限，即为中奖。",
		},
		'4_5':{
			description: "从0-9中任意选择3个或3个以上号码。",
			example: "投注方案：2,5,8；开奖号码后三位：1个2、1个5、1个8 (顺序不限)，即中后三组选六一等奖。",
			rule: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。",
		},
		'4_6':{
			description: "手动输入号码，至少输入1个三位数号码。",
			example: "投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码后三位包括：(1)0,0,1，顺序不限，即中得组三一等奖；或者(2)1,2,3，顺序不限，即中得组六一等奖。",
			rule: "键盘手动输入购买号码，3个数字为一注，开奖号码的百位、十位、个位符合后三组三或组六均为中奖，单倍奖金组三300元，组六150元。",
																																																			
		},
		'4_7':{
			description: "从1-26中选择1个号码。",
			example: "投注方案：和值3；开奖号码后三位：(1)开出003号码，顺序不限，即中后三组选三一等奖；(2)开出012号码，顺序不限，即中后三组选六一等奖",
			rule: "所选数值等于开奖号码百位、十位、个位三个数字相加之和，即为中奖，单倍奖金组三300元，组六150元",
		},
		'5_1':{
			description: "从万、千、百位各选一个号码组成一注。",
			example: "投注方案：345； 开奖号码：345，即中前三直选一等奖",
			rule: "从万位、千位、百位中选择一个3位数号码组成一注，所选号码与开奖号码的前3位相同，且顺序一致，即为中奖。",
		},
		'5_2':{
			description: "手动输入号码，至少输入1个三位数号码组成一注。",
			example: "投注方案：345； 开奖号码：345，即中前三直选一等奖",
			rule: "手动输入一个3位数号码组成一注，所选号码的万位、千位、百位与开奖号码相同，且顺序一致，即为中奖。",
		},
		'5_3':{
			description: "从0-27中任意选择1个或1个以上号码。",
			example: "投注方案：和值1；开奖号码前三位：001,010,100,即中前三直选和值一等奖",
			rule: "所选数值等于开奖号码的万位、千位、百位三个数字相加之和，即为中奖。",
		},
		'5_4':{
			description: "从0-9中任意选择2个或2个以上号码。",
			example: "投注方案：5,8,8；开奖号码前三位：1个5，2个8 (顺序不限)，即中前三组选三一等奖。",
			rule: "从0-9中选择2个数字组成两注，所选号码与开奖号码的万位、千位、百位相同，且顺序不限，即为中奖。",
		},
		'5_5':{
			description: "从0-9中任意选择3个或3个以上号码。",
			example: "投注方案：2,5,8；开奖号码前三位：1个2、1个5、1个8 (顺序不限)，即中前三组选六一等奖。",
			rule: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。",
		},
		'5_6':{
			description: "手动输入号码，至少输入1个三位数号码。",
			example: "投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码前三位包括：(1)0,0,1，顺序不限，即中得组三一等奖；或者(2)1,2,3，顺序不限，即中得组六一等奖。",
			rule: "键盘手动输入购买号码，3个数字为一注，开奖号码的万位、千位、百位符合前三组三或组六均为中奖，单注奖金组三300元，组六150元。",
		},
		'5_7':{
			description: "从1-26中任意选择1个以上号码。",
			example: "投注方案：和值3；<br>开奖号码前三位：<br>(1)开出003号码，顺序不限，即中前三组选三一等奖；<br>(2)开出012号码，顺序不限，即中前三组选六一等奖",
			rule: "所选数值等于开奖号码万位、千位、百位三个数字相加之和，即为中奖单倍奖金组三300元，组六150元。",
		},
		'6_1':{
			description: "从千、百、十位各选一个号码组成一注。",
			example: "投注方案：千位选择1，百位选择2，十位选择3，开奖号码为是*123*，即为中奖",
			rule: "从千位、百位、十位中选择一个3位数号码组成一注，所选号码与开奖号码的中间3位相同，且顺序一致，即为中奖。",
		},
		'6_2':{
			description: "手动输入号码，至少输入1个三位数号码组成一注。",
			example: "投注方案：手动输入123，开奖号码为是*123*，即为中奖",
			rule: "手动输入一个3位数号码组成一注，所选号码的千位、百位、十位与开奖号码相同，且顺序一致，即为中奖。",
		},
		'6_3':{
			description: "从0-27中任意选择1个或1个以上号码。",
			example: "投注方案：选择6，开奖号码为*123*、*141*、*114*、*006*、*060*等任意一个和值为6的结果，即为中奖。",
			rule: "所选数值等于开奖号码的千位、百位、十位三个数字相加之和，即为中奖。",
		},
		'6_4':{
			description: "从0-9中任意选择2个或2个以上号码。",
			example: "投注方案：5,8,8；开奖号码中间三位：1个5，2个8 (顺序不限)，即中中三组选三一等奖。",
			rule: "从0-9中选择2个数字组成两注，所选号码与开奖号码的千位、百位、十位相同，且顺序不限，即为中奖。",
		},
		'6_5':{
			description: "从0-9中任意选择3个或3个以上号码。",
			example: "投注方案：2,5,8；开奖号码中间三位：1个2、1个5、1个8 (顺序不限)，即中中三组选六一等奖。",
			rule: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖。",
		},
		'6_6':{
			description: "手动输入号码，至少输入1个三位数号码。",
			example: "投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码中间三位包括：(1)0,0,1，顺序不限，即中得组三一等奖；或者(2)1,2,3，顺序不限，即中得组六一等奖。",
			rule: "键盘手动输入购买号码，3个数字为一注，开奖号码的千位、百位、十位符合中三组三或组六均为中奖，单倍奖金组三300元，组六150元。",
		},
		'6_7':{
			description: "从1-26中选择1个和值。",
			example: "投注方案：和值3；开奖号码中间三位：(1)开出003号码，顺序不限，即中中三组选三一等奖；(2)开出012号码，顺序不限，即中中三组选六一等奖",
			rule: "所选数值等于开奖号码千位、百位、十位三个数字相加之和，即为中奖单倍奖金组三300元，组六150元。",
		},
		'7_1':{
			description: "从十、个位各选一个号码组成一注。",
			example: "投注方案：58；开奖号码后二位：58，即中后二直选一等奖",
			rule: "从十位和个位上至少各选1个号码，所选号码与开奖号码的十位、个位相同，且顺序一致，即为中奖。",
		},
		'7_2':{
			description: "手动输入号码，至少输入1个两位数号码。",
			example: "投注方案：58；开奖号码后二位：58，即中后二直选一等奖",
			rule: "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，且顺序一致，即为中奖。",
		},
		'7_3':{
			description: "从万、千位各选一个号码组成一注。",
			example: "投注方案：58；开奖号码前二位：58，即中前二直选一等奖。",
			rule: "从万位和千位上至少各选1个号码，所选号码与开奖号码的万位、千位相同，且顺序一致，即为中奖。",
		},
		'7_4':{
			description: "手动输入号码，至少输入1个两位数号码。",
			example: "投注方案：58；开奖号码前二位：58，即中前二直选一等奖。",
			rule: "手动输入一个2位数号码组成一注，所选号码的万位、千位与开奖号码相同，且顺序一致，即为中奖。",
		},
		'7_5':{
			description: "从0-18中任意选择1个或1个以上的和值号码。",
			example: "投注方案：和值1；开奖号码后二位：01,10，即中后二直选。",
			rule: "所选数值等于开奖号码的十位、个位二个数字相加之和，即为中奖。",
		},
		'7_6':{
			description: "从0-18中任意选择1个或1个以上的和值号码。",
			example: "投注方案：和值1；开奖号码前二位：01,10，即中前二直选。",
			rule: "所选数值等于开奖号码的万位、千位二个数字相加之和，即为中奖。",
		},
		'7_7':{
			description: "从0-9中任意选择2个或2个以上号码。",
			example: "投注方案：5,8；开奖号码后二位：1个5，1个8 (顺序不限)，即中后二组选一等奖。",
			rule: "从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同，顺序不限，即中奖。",
		},
		'7_8':{
			description: "手动输入号码，至少输入1个两位数号码。",
			example: "投注方案：5,8；开奖号码后二位：1个5，1个8 (顺序不限)，即中后二组选一等奖。",
			rule: "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，顺序不限，即为中奖。",
		},
		'7_9':{
			description: "从0-9中任意选择2个或2个以上号码。",
			example: "投注方案：5,8；开奖号码前二位：1个5，1个8 (顺序不限)，即中前二组选一等奖。",
			rule: "从0-9中选2个号码组成一注，所选号码与开奖号码的万位、千位相同，顺序不限，即中奖。",
		},
		'7_10':{
			description: "手动输入号码，至少输入1个两位数号码。",
			example: "投注方案：5,8；开奖号码前二位：1个5，1个8 (顺序不限)，即中前二组选一等奖。",
			rule: "手动输入一个2位数号码组成一注，所选号码的万位、千位与开奖号码相同，顺序不限，即为中奖。",
		},
		'7_11':{
			description: "从1-17中任意选择1个或1个以上的和值号码。",
			example: "投注方案：和值1；开奖号码后二位：10或01(顺序不限，不含对子号)，即中后二组选。",
			rule: "所选数值等于开奖号码的十位、个位二个数字相加之和（不含对子号），即为中奖。",
		},
		'7_12':{
			description: "从1-17中任意选择1个或1个以上号码。",
			example: "投注方案：和值1；开奖号码前二位：10或01 (顺序不限，不含对子号)，即中前二组选。",
			rule: "所选数值等于开奖号码的万位、千位二个数字相加之和（不含对子号），即为中奖。",
		},
		'8_1':{
			description: "在万位，千位，百位，十位，个位任意位置上任意选择1个或1个以上号码。",
			example: "投注万位号码1，开奖号码万位是1，即中定位胆万位一等奖。",
			rule: "从万位、千位、百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。",
		},
		'9_1':{
			description: "从0-9中任意选择1个以上号码。",
			example: "投注方案：1；开奖号码后三位：至少出现1个1，即中后三一码不定位一等奖。",
			rule: "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的百位、十位、个位中包含所选号码，即为中奖。",
		},
		'9_2':{
			description: "从0-9中任意选择2个以上号码。",
			example: "投注方案：1,2；开奖号码后三位：至少出现1和2各1个，即中后三二码不定位一等奖。",
			rule: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的百位、十位、个位中同时包含所选的2个号码，即为中奖。",
																																																																																																															
		},
		'9_3':{
			description: "从0-9中任意选择1个以上号码。",
			example: "投注方案：1；开奖号码前三位：至少出现1个1，即中前三一码不定位一等奖。",
			rule: "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的万位、千位、百位中包含所选号码，即为中奖。",
		},
		'9_4':{
			description: "从0-9中任意选择2个以上号码。",
			example: "投注方案：1,2；开奖号码前三位：至少出现1和2各1个，即中前三二码不定位一等奖。",
			rule: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的万位、千位、百位中同时包含所选的2个号码，即为中奖。",
		},
		'10_1':{
			description: "从十位、个位中的“大、小、单、双”中至少各选一个组成一注。",
			example: "投注方案：大单；开奖号码十位与个位：大单，即中后二大小单双一等奖。",
			rule: "对十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。",
		},
		'10_2':{
			description: "从万位、千位中的“大、小、单、双”中至少各选一个组成一注。",
			example: "投注方案：小双；开奖号码万位与千位：小双，即中前二大小单双一等奖。",
			rule: "对万位和千位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。",
		},
		'11_1':{
			description: "从0-9中任意选择1个以上号码。",
			example: "投注方案：8；开奖号码：至少出现1个8，即中一帆风顺。",
			rule: "从0-9中任意选择1个号码组成一注，只要开奖号码的万位、千位、百位、十位、个位中包含所选号码，即为中奖。",
		},
		'11_2':{
			description: "从0-9中任意选择1个以上的二重号码。",
			example: "投注方案：8；开奖号码：至少出现2个8，即中好事成双。",
			rule: "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现2次，即为中奖。",
		},
		'11_3':{
			description: "从0-9中任意选择1个以上的三重号码。",
			example: "投注方案：8；开奖号码：至少出现3个8，即中三星报喜。",
			rule: "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现3次，即为中奖。",
		},
		'11_4':{
			description: "从0-9中任意选择1个以上的四重号码。",
			example: "投注方案：8；开奖号码：至少出现4个8，即中四季发财。",
			rule: "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现4次，即为中奖。",
		},
		'12_1':{
			description: "从万位、千位、百位、十位、个位中至少两位上各选1个号码组成1注。",
			example: "投注方案：万位1，百位2；<br>开奖号码：13245，<br>即中任选二直选一等奖",
			rule: "从任意两个以上的位置中选择一个号码，所选号码与开奖号码对应位置出现的号码相同，且顺序一致，即为中奖。",
		},
		'12_2':{
			description: "手动输入号码，至少输入1个两位数号码。",
			example: "投注方案：58；开奖号码后二位：58，即中后二直选一等奖",
			rule: "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，且顺序一致，即为中奖。",
		},
		'12_3':{
			description: "从0-18中任意选择1个或1个以上的和值号码。",
			example: "投注方案：选择十位、个位，购买和值1；开奖号码后二位：01,10，即中后二直选。",
			rule: "所选数值等于开奖号码的所选位数相加之和，即为中奖。",
		},
		'12_4':{
			description: "从0-9中任意选择2个或2个以上号码。",
			example: "投注方案：万位5,百8；开奖号码位5*8**或者8*5** (顺序不限)，即中任选二组选一等奖。",
			rule: "从0-9中选2个号码组成一注，所选号码出现在开奖号的对应位上，顺序不限，即中奖。",
		},
		'12_5':{
			description: "手动输入号码，至少输入1个两位数号码。",
			example: "投注方案：十位、个位选择号码5,8；开奖号码后二位：1个5，1个8 (顺序不限)，即中后二组选一等奖。",
			rule: "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，顺序不限，即为中奖。",
		},
		'12_6':{
			description: "从1-17中任意选择1个或1个以上的和值号码。",
			example: "投注方案：和值1；开奖号码后二位：10或01(顺序不限，不含对子号)，即中后二组选。",
			rule: "所选数值等于开奖号码的十位、个位二个数字相加之和（不含对子号），即为中奖。",
		},
		'13_1':{
			description: "手动输入号码，至少输入1个三位数号码组成一注。",
			example: "投注方案：万位、千位、百位345，开奖号码345**，即中任选三直选一等奖",
			rule: "所选位置和所选号码与开奖号码的位置相同,且顺序一致,即为中奖。",
		},
		'13_2':{
			description: "从万位、千位、百位、十位、个位中至少三位上各选1个号码组成1注。",
			example: "投注方案：万位1，千位2，百位3；<br>开奖号码：12345，<br>即中任选三直选一等奖",
			rule: "从任意三个以上的位置中选择一个号码，所选号码与开奖号码对应位置出现的号码相同，且顺序一致，即为中奖。",
		},
		'13_3':{
			description: "从0-27中任意选择1个或1个以上号码。",
			example: "投注方案：选择百位、十位、个位和值1；开奖号码后三位：001,010,100,即中任选三直选一等奖",
			rule: "所选数值等于开奖号码的指定三位的三个数字相加之和，即为中奖。",
		},
		'13_4':{
			description: "从0-9中任意选择2个或2个以上号码。",
			example: "投注方案：5,8,8；开奖号码所选的相对应的三位：1个5，2个8 (顺序不限)，即任选三组选三一等奖。",
			rule: "从0-9中选择2个数字组成两注，所选号码与开奖号码的所选择的位相同，且顺序不限，即为中奖。",
		},
		'13_5':{
			description: "从0-9中任意选择3个或3个以上号码。",
			example: "投注方案：2,5,8；开奖号码所选的指定三位：1个2、1个5、1个8 (顺序不限)，即中任选三组选六一等奖。",
			rule: "从0-9中选3个号码组成一注，所选号码出现在开奖号的对应位上，顺序不限，即中奖。",
		},
		'13_6':{
			description: "手动输入号码，至少输入1个三位数号码。",
			example: "投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码指定位包括：(1)0,0,1，顺序不限，即中得任选三一等奖；或者(2)1,2,3，顺序不限，即中得组六一等奖。",
			rule: "键盘手动输入购买号码，3个数字为一注，开奖号码的指定位符合组三或组六均为中奖，单注奖金组三600元，组六300元。",
		},
		'13_7':{
			description: "从1-26中任意选择1个以上号码。",
			example: "投注方案：和值3；<br>开奖号码指定三位：<br>(1)开出003号码，顺序不限，即中任选三组选三一等奖；<br>(2)开出012号码，顺序不限，即中任选三组选六一等奖",
			rule: "所选数值等于开奖号码万位、千位、百位三个数字相加之和，即为中奖单倍奖金组三600元组六300元。",
		},
		'14_1':{
			description: "手动输入号码，至少输入1个四位数号码组成一注。",
			example: "投注方案：勾选位置万位、千位、十位、个位，输入号码1524； 开奖号码：15*24，即中任四直选。",
			rule: "从万位、千位、百位、十位、个位中任意勾选四个位置，手动输入一个四位数号码组成一注，所选4个位置上的开奖号码与输入号码完全相同，且顺序一致，即为中奖。",
		},
		'14_2':{
			description: "从万位、千位、百位、十位、个位中至少四位上各选1个号码组成1注。",
			example: "投注方案：万位1、千位5、百位0、十位2； 开奖号码：1502*，即中任四直选。",
			rule: "从万位、千位、百位、十位、个位中任意选择四个位置，在这四个位上至少各选1个号码组成一注，所选4个位置上的开奖号码与所选号码完全相同，且顺序一致，即为中奖。",
		},
		'14_3':{
			description: "从单号中选4个号组成一注。",
			example: "投注方案：勾选位置万位、千位、十位、个位，选择号码1234； 开奖号码：12*34 或 13*24，均中任四组选24。",
			rule: "从万位、千位、百位、十位、个位中任意勾选四个位置，然后从0-9中选择四个号码组成一注，所选4个位置的开奖号码与所选号码一致，顺序不限，即为中奖。",
		},
		'14_4':{
			description: "从二重号中选1个号，单号中选2个号组成一注。",
			example: "投注方案：勾选位置万位、千位、十位、个位，选择二重号：8，单号：0、6； 开奖号码：88*06 或 08*68，均中任四组选12。",
			rule: "从万位、千位、百位、十位、个位中任意勾选四个位置，然后选择1个二重号码和2个单号号码组成一注，所选4个位置的开奖号码中包含与所选号码，且所选二重号码在所选4个位置的开奖号码中出现了2次，即为中奖。",
		},
		'14_5':{
			description: "从二重号中选择2个号组成一注。",
			example: "投注方案：勾选位置万位、千位、十位、个位，选择二重号：6、8； 开奖号码：66*88 或 68*68，均中任四组选6。",
			rule: "从万位、千位、百位、十位、个位中任意勾选四个位置，然后从0-9中选择2个二重号组成一注，所选4个位置的开奖号码与所选号码一致，并且所选的2个二重号码在所选4个位置的开奖号码中分别出现了2次，顺序不限，即为中奖。",
		},
		'14_6':{
			description: "从三重号选1个号，单号中选1个号组成一注。",
			example: "投注方案：勾选位置万位、千位、十位、个位，选择三重号：8，单号：0； 开奖号码：88*80 或 80*88，均中任四组选4。",
			rule: "从万位、千位、百位、十位、个位中任意勾选四个位置，然后从0-9中选择1个三重号和1个单号组成一注，所选4个位置的开奖号码与所选号码一致，并且所选三重号码在所选4个位置的开奖号码中出现了3次，顺序不限，即为中奖。",

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
		this.now_lang=userModel.langpackage;
		that.status = {
			menu_1:1,
			menu_2:1
		}
		that.menu_2_data.map(function(res){
			if(res.active == that.status.menu_1){
				that.menu_2.push(res)
			}
		})
		this.balllist(['w','q','b','s','g']);
		this.now_description = this.lot_rules[this.now_tips_menu]['description'];
		//路由控制
		this.route.params.subscribe(data => {
            this.getPageId();
        });
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
	// 滑块左侧递减事件
	rangevaluelessen() {
	  if (this.rangepercent > 0) {
	    this.rangepercent -= 1;
	  }
	}
	// 滑块左侧递加事件
	rangevalueadd() {
	  if (this.rangepercent < 30) {
	    this.rangepercent += 1;
	  }
	}
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