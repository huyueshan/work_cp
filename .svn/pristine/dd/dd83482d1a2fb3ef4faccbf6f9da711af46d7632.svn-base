import { Component, OnInit } from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { RouterModule, Routes, Router } from "@angular/router";

import { Base } from '../../../../factory/base.model';
import { Api } from '../../../../factory/api.model';
import { formmod } from '../../../../factory/form';
import userModel from '../../../../status/user.model';
@Component({
    selector: 'sscofficial',
    templateUrl: './ssc.component.html',
    styleUrls: ['./ssc.component.scss']
})

export class SSCofficialComponent implements OnInit {
	constructor(private httpClient:HttpClient,private router: Router) { }
	loadpage=false;
	public resultdata = [{'sta':'20180517014','num':'2 9 0 8 7'},{'sta':'20180517014','num':'2 9 0 8 7'} ,{'sta':'20180517014','num':'2 9 0 8 7'} , {'sta':'20180517014','num':'2 9 0 8 7'},{'sta':'20180517014','num':'2 9 0 8 7'} , {'sta':'20180517014','num':'2 9 0 8 7'},{'sta':'20180517014','num':'2 9 0 8 7'} ,{'sta':'20180517014','num':'2 9 0 8 7'}];
	public rankdata = [{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'}];
	public multiple_input = 1;
	public radom_input = 1;
	public multi_select = [10,50,100,500,1000,2000,5000,10000];
	public ul_hidden = true;
	public now_tips = '这是一个比较短的提示!';
	public now_tiparray = {
		'i1':'投注方案:12345,<br>开奖号码:12345,<br>即中一等奖。',
		'i2':'从万位,千位,百位,十位,个位,选一个五位数号码组成一注,所选号码与开奖号码顺序相同且一致则中奖',
		'i3':'这是一个比较短的提示',
	};
	public tips_hidden = true;
	now_lang={};
	status = {
		menu_1:1,
		menu_2:1
	}
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
			name:'龙虎',
			href:'#/'
		}
	];
	menu_2_data = [
		{
			title:'五星直选',
			menu:['五星复选','五星单式','五星组合'],
			active:1
		},
		{
			title:'五星组选',
			menu:['组选120','组选60','组选30','组选20','组选10','组选5'],
			active:1
		}
	]
	menu_2 = [];
	ngOnInit(){
		let that = this
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
	}
	// 时时彩一级导航切换
	tabmenu(data){
		let that = this
		if(data.href){
			that.router.navigateByUrl(data.href)
		}else{
			that.status.menu_1 = data.active
			that.menu_2 = []
			that.menu_2_data.map(function(res){
				if(res.active == that.status.menu_1){
					that.menu_2.push(res)
				}
			})
		}
	}
	// input加减函数
	addrem(item){
		if (item=='multiple') {
			this.multiple_input = this.multiple_input+1;
		}else if(item=='radom'){
			this.radom_input = this.radom_input+1;
		}
		
	}
	minusrem(item){
			if (item=='multiple') {
				if (this.multiple_input>1) {
					this.multiple_input = this.multiple_input-1;
				}
			}else if(item=='radom'){
				if (this.radom_input>1) {
					this.radom_input = this.radom_input-1;
				}
			}
	}
	// 下拉框选择input值
	check_multi(item){
		this.multiple_input = item;
	}
	// 限制input输入格式
	regUpright(){
		if (this.multiple_input<0||this.multiple_input%1!=0) {
			this.multiple_input = Math.abs(this.multiple_input)
			this.multiple_input = parseInt(this.multiple_input.toString())
		}
	}
	show_tips(item,em){
	
		this.now_tips = this.now_tiparray[item];
		em.classList.add("tipsshow");
		// this.tips_hidden=!this.tips_hidden;

	}
	hid_tips(item,em){
		em.classList.remove("tipsshow");
	}
	toggle_ul(e){
		let self = this;
		setTimeout(function(){
			self.ul_hidden = !self.ul_hidden;
		}, 200)
	}



}