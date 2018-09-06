import { Component, OnInit, ViewChild } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
    RouterModule,
    Routes,
    Router,
    ActivatedRoute,
    Params,
    NavigationEnd
} from "@angular/router";

import { Base } from "../../../../factory/base.model";
import { Api } from "../../../../factory/api.model";
import { formmod } from "../../../../factory/form";
import userModel from "../../../../status/user.model";
import { Utils } from "../../../../factory/utils";
@Component({
  selector: "sccofficial",
  templateUrl: "./scc.component.html",
  styleUrls: ["./scc.component.scss"]
})
export class SCCofficialComponent implements OnInit {
  // 传给弹窗组件数据
  public popoutInfo = {
    title: "string",
    msg: "string",
    event: false,
    show: false
  };

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router
  ) {}
  loadpage = false;
  public resultdata = [
    {
      sta: "20180517014",
      num: "2 9 0 8 7"
    },
    {
      sta: "20180517014",
      num: "2 9 0 8 7"
    },
    {
      sta: "20180517014",
      num: "2 9 0 8 7"
    },
    {
      sta: "20180517014",
      num: "2 9 0 8 7"
    },
    {
      sta: "20180517014",
      num: "2 9 0 8 7"
    },
    {
      sta: "20180517014",
      num: "2 9 0 8 7"
    },
    {
      sta: "20180517014",
      num: "2 9 0 8 7"
    },
    {
      sta: "20180517014",
      num: "2 9 0 8 7"
    }
  ];
  public rankdata = [
    {
      name: "王刚",
      type: "时时彩",
      money: "9999"
    },
    {
      name: "王刚",
      type: "时时彩",
      money: "9999"
    },
    {
      name: "王刚",
      type: "时时彩",
      money: "9999"
    },
    {
      name: "王刚",
      type: "时时彩",
      money: "9999"
    },
    {
      name: "王刚",
      type: "时时彩",
      money: "9999"
    },
    {
      name: "王刚",
      type: "时时彩",
      money: "9999"
    },
    {
      name: "王刚",
      type: "时时彩",
      money: "9999"
    }
  ];
  multiple_input: any = {
    value: 1
  };
  // public multiple_input = 1;
  public radom_input: any = {
    value: 1
  };
  public multi_select = [10, 50, 100, 500, 1000, 2000, 5000, 10000];
  public ul_hidden = true;
  public now_tips = "这是一个比较短的提示!";
  public tips_hidden = true;
  // public riskvalue = -0.2;
  // 拖拽数据
  public rangepercent = 0;
  public rangenum = 180200;
  // 拖拽数据结束
  public now_tips_menu: any = "1_1";
  public now_description = "";
  public hothidden = false;
  public nowPageId: any = "";
  public nowitems: any = {};
  public now_tab1 :any='';
  public now_tab2 :any='';
  public userInfo = {
    name: "赌神",
    balance: "9999.99",
    id: "007"
  };
  public other_rules = {
    reward_rule:
      '<div> 奖金计算说明：<p style="margin-left:1em;">非常规时时彩中奖后，根据中奖号码球号的奖金组，中奖奖金需要乘以球号的奖金组，如：</p><p style="margin-left:1em;line-height: 25px;padding:3px 0;">1、北京时时彩后三直选（1800奖金组）：下注321，开奖号码54321，其中3号球的奖金组为：1.014，2号球的奖金组为：0.984，1号球的奖金组为1.022；那么中奖后的实际奖金=1800*1.014*0.984*1.022=1835.509</p><p style="margin-left:1em;line-height: 25px;padding:3px 0;">2、若北京时时彩后三直选（1800奖金组）：下注246，开奖号码54246，其中2号球的奖金组为：0.984，4号球的奖金组为：0.976，6号球的奖金组为0.98；那么中奖后的实际奖金=1800*0.984*0.976*0.98=1694.117</P></div>'
  };
  public cpnav = {
    style: "official",
    prev: "20180517022",
    prevball: [2, 5, 9, 0, 8],
    next: "20180517023",
    time: ""
  };
  public now_lang: any = userModel.langpackage;
  public now_lang_type: any = "zh";
  //追号数据
  public lotdata = [
    {
      lot_num: "20181719",
      multiple: 0,
      price: 2,
      take_money: 0,
      expire_time: "2018-06-11 15:19:30",
      checkon: false
    },
    {
      lot_num: "20181720",
      multiple: 0,
      price: 2,
      take_money: 0,
      expire_time: "2018-06-11 15:19:30",
      checkon: false
    },
    {
      lot_num: "20181721",
      multiple: 0,
      price: 2,
      take_money: 0,
      expire_time: "2018-06-11 15:19:30",
      checkon: false
    }
  ];
  //追号提交数据
  public lotdata_submit :any = [];

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
  public Open_stop :any = false
  public Win_stop :any = false
  public chase_number_config :any = $.extend(true, {}, this.chase_config_ori);
  //目前追号面板
  public c_now_panel :any = 'one'
  public chase_money :any = 0;
  public chase_amount :any = 0;
  //追号数据结束
	// 新增数据
	public history_list :any = 
	[
        {
        	number:'888888888888888888888',
        	play_type:'三生万物',
        	issues:'1234243234',
        	time:'2018-10-10 10:10:10',
        	balls:'01|02|03|04|05',
        	multiple_model:'1倍/元',
        	all_amount:'10金额',
        	bonus:'121212',
        	status:'已派奖'
        },
        {
        	number:'888888888888888888888',
        	play_type:'三生万物',
        	issues:'1234243234',
        	time:'2018-10-10 10:10:10',
        	balls:'01|02|03|04|05',
        	multiple_model:'1倍/元',
        	all_amount:'10金额',
        	bonus:'121212',
        	status:'已派奖'
        },
        {
        	number:'888888888888888888888',
        	play_type:'三生万物',
        	issues:'1234243234',
        	time:'2018-10-10 10:10:10',
        	balls:'01|02|03|04|05',
        	multiple_model:'1倍/元',
        	all_amount:'10金额',
        	bonus:'121212',
        	status:'已派奖'
        },
        {
        	number:'888888888888888888888',
        	play_type:'三生万物',
        	issues:'1234243234',
        	time:'2018-10-10 10:10:10',
        	balls:'01|02|03|04|05',
        	multiple_model:'1倍/元',
        	all_amount:'10金额',
        	bonus:'121212',
        	status:'已派奖'
        },
        {
        	number:'888888888888888888888',
        	play_type:'三生万物',
        	issues:'1234243234',
        	time:'2018-10-10 10:10:10',
        	balls:'01|02|03|04|05',
        	multiple_model:'1倍/元',
        	all_amount:'10金额',
        	bonus:'121212',
        	status:'已派奖'
        },
        {
        	number:'888888888888888888888',
        	play_type:'三生万物',
        	issues:'1234243234',
        	time:'2018-10-10 10:10:10',
        	balls:'01|02|03|04|05',
        	multiple_model:'1倍/元',
        	all_amount:'10金额',
        	bonus:'121212',
        	status:'已派奖'
        },
        
    ];
  //此彩种细分彩种配置
  public items_show = {
    bjpk_scc: {
      tabitem: [
        this.now_lang.Lot_tab.guess_cha,
        this.now_lang.Lot_tab.guess_12,
        this.now_lang.Lot_tab.guess_123,
        this.now_lang.Lot_tab.guess_1234,
        this.now_lang.Lot_tab.guess_12345,
        this.now_lang.Lot_tab.Gall,
        this.now_lang.Lot_tab.Dragon_tiger
      ],
      reward_show: false,
      name: this.now_lang.lot_type.bj_pk10
    },
    xyft_scc: {
      tabitem: [
        this.now_lang.Lot_tab.guess_cha,
        this.now_lang.Lot_tab.guess_12,
        this.now_lang.Lot_tab.guess_123,
        this.now_lang.Lot_tab.guess_1234,
        this.now_lang.Lot_tab.guess_12345,
        this.now_lang.Lot_tab.Gall,
        this.now_lang.Lot_tab.Dragon_tiger
      ],
      reward_show: false,
      name: this.now_lang.lot_type.xyft_pk10
    }
  };
  //此彩种细分彩种配置结束
  public curinpt = {
    value: ""
  };
  //路由id
  public routid;
  public now_tab2click_num;
  public hid_tab;
  // public rangevalue = rangevalue;
  status = {
    menu_1: 1, //一级tab默认项
    menu_2: 1 //二级tab默认项
  };
  // 一级tab
  menu_1 = [
    {
      name: this.now_lang.Lot_tab.guess_cha,
      active: 1
    },
    {
      name: this.now_lang.Lot_tab.guess_12,
      active: 2
    },
    {
      name: this.now_lang.Lot_tab.guess_123,
      active: 3
    },
    {
      name: this.now_lang.Lot_tab.guess_1234,
      active: 4
    },
    {
      name: this.now_lang.Lot_tab.guess_12345,
      active: 5
    },
    {
      name: this.now_lang.Lot_tab.Gall,
      active: 6
    },
    {
      name: this.now_lang.Lot_tab.Dragon_tiger,
      href: 'lottery/creditssc/cq',
      active: 7
    }
  ];

  // 2级tab数据以及对应要显示的内容
  menu_2_data = [
    {
      title: this.now_lang.Lot_tab.guess_cha,
      menu: [
        {
          name: this.now_lang.Lot_tab.guess_cha,
          index: 1,
          arr: ["cgj"],
          format: ["n"],
          datarule: ["Rule_3", 1],
          addzero: true,
          hot:true
        }
      ],
      active: 1
    },
    {
      title: this.now_lang.Lot_tab.guess_12,
      menu: [
        {
          name: this.now_lang.Lot_tab.guess_12_odd,
          index: 1,
          arr: ["cgj", "cyj"],
          format: ["n|n"],
          datarule: ["Rule_11", 1],
          addzero: true,
          hot:true
        },
        {
          name: this.now_lang.Lot_tab.guess_12_even,
          index: 2,
          arr: ["cgj", "cyj"],
          isupload: true,
          format: ["n|n"],
          datarule: ["Rule_d3", 2],
          addzero: true
        }
      ],
      active: 2
    },
    {
      title: this.now_lang.Lot_tab.guess_123,
      menu: [
        {
          name: this.now_lang.Lot_tab.guess_123_odd,
          index: 1,
          arr: ["cgj", "cyj", "cjj"],
          format: ["n|n|n"],
          datarule: ["Rule_11", 1],
          addzero: true,
          hot:true
        },
        {
          name: this.now_lang.Lot_tab.guess_123_even,
          index: 2,
          arr: ["cgj", "cyj", "cjj"],
          isupload: true,
          format: ["n|n|n"],
          datarule: ["Rule_d3", 3],
          addzero: true
        }
      ],
      active: 3
    },
    {
      title: this.now_lang.Lot_tab.guess_1234,
      menu: [
        {
          name: this.now_lang.Lot_tab.guess_1234_odd,
          index: 1,
          arr: ["dy", "de", "ds", "dsi"],
          format: ["n|n|n|n"],
          datarule: ["Rule_11", 1],
          addzero: true,
          hot:true
        },
        {
          name: this.now_lang.Lot_tab.guess_1234_even,
          index: 2,
          arr: ["cgj", "cyj", "cjj"],
          isupload: true,
          format: ["n|n|n|n"],
          datarule: ["Rule_d3", 4],
          addzero: true
        }
      ],
      active: 4
    },
    {
      title: this.now_lang.Lot_tab.guess_12345,
      menu: [
        {
          name: this.now_lang.Lot_tab.guess_12345_odd,
          index: 1,
          arr: ["dy", "de", "ds", "dsi", "dw"],
          format: ["n|n|n|n|n"],
          datarule: ["Rule_11", 1],
          addzero: true,
          hot:true
        },
        {
          name: this.now_lang.Lot_tab.guess_12345_even,
          index: 2,
          arr: ["dy", "de", "ds", "dsi", "dw"],
          isupload: true,
          format: ["n|n|n|n|n"],
          datarule: ["Rule_d3", 5],
          addzero: true
        }
      ],
      active: 5
    },
    {
      title: this.now_lang.Lot_tab.Gall,
      menu: [
        {
          name: this.now_lang.Lot_tab.Gall,
          index: 1,
          arr: ["dy", "de", "ds", "dsi", "dw", "dl", "dq", "db", "dj", "dshi"],
          format: ["n"],
          datarule: ["Rule_6", 10],
          addzero: true,
          hot:true
        }
      ],
      active: 6
    }
  ];
 
  menu_2 = []; //存储当前一级导航对应的耳机导航
  ball_tab = {
    1: [
      this.now_lang.Ball_tab.All,
      this.now_lang.Ball_tab.Big,
      this.now_lang.Ball_tab.Small,
      this.now_lang.Ball_tab.Odd,
      this.now_lang.Ball_tab.Even,
      this.now_lang.Ball_tab.Clear
    ],
    2: [this.now_lang.Ball_tab.All, this.now_lang.Ball_tab.Clear],
    3: [],
    4: ["全", "清"]
  };
  now_balllist = []; //当前号码列表
  // 所有号码的列表数据
  ball_data = {
    cgj: {
      title: "猜冠军",
      ball: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tab: this.ball_tab[1],
      index: 4
    },
    cyj: {
      title: "猜亚军",
      ball: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tab: this.ball_tab[1],
      index: 4
    },
    cjj: {
      title: "猜季军",
      ball: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tab: this.ball_tab[1],
      index: 4
    },
    dy: {
      title: "第一",
      ball: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tab: this.ball_tab[1],
      index: 4
    },
    de: {
      title: "第二",
      ball: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tab: this.ball_tab[1],
      index: 4
    },
    ds: {
      title: "第三",
      ball: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tab: this.ball_tab[1],
      index: 4
    },
    dsi: {
      title: "第四",
      ball: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tab: this.ball_tab[1],
      index: 4
    },
    dw: {
      title: "第五",
      ball: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tab: this.ball_tab[1],
      index: 4
    },
    dl: {
      title: "第六",
      ball: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tab: this.ball_tab[1],
      index: 4
    },
    dq: {
      title: "第七",
      ball: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tab: this.ball_tab[1],
      index: 4
    },
    db: {
      title: "第八",
      ball: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tab: this.ball_tab[1],
      index: 4
    },
    dj: {
      title: "第九",
      ball: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tab: this.ball_tab[1],
      index: 4
    },
    dshi: {
      title: "第十",
      ball: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tab: this.ball_tab[1],
      index: 4
    }
  };
  // 追号函数
  typeoptchange() {
    let that = this;
    if (that.chase_number_config.select_amount == 'all') {
      that.chase_number_config.chase_amount = that.lotdata_now.length;
    }else{
      that.chase_number_config.chase_amount = that.chase_number_config.select_amount;
    }
  }
  check_lot(item){
    let that = this;
    if (item.checkon) {
      if (item.multiple == 0) {
        item.multiple = that.chase_number_config.multiple;
        item.take_money = item.multiple*item.price/that.modelarr[that.model]*that.sureballlist.length;
      }

    }else{
      item.multiple = 0;
      item.take_money = 0;
    }
    that.repanel_data()
  }
  // 生成计划
  produce_plan(){
    let that = this;
    that.lotdata_now = $.extend(true, [], that.lotdata);
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
        that.lotdata_now[i].take_money = multiple*that.lotdata_now[i].price/that.modelarr[that.model]*that.sureballlist.length;
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
        that.lotdata_now[i].take_money = multiple*that.lotdata_now[i].price/that.modelarr[that.model]*that.sureballlist.length;
      };
    }
    that.repanel_data()
  }
  //单个金钱计算
  get_takemon(item,e){
    let that = this;
    if (item.multiple == 0) {
      item.checkon = false;
    }else{
      item.checkon = true;
    }
    item.take_money = item.multiple*item.price/that.modelarr[that.model]*that.sureballlist.length;
    that.repanel_data()
  }
    changeregnum(e) {
        let v = e.target;
        v.value = v.value.replace(/\D/g, "");
        if (Number(v.value) === 0 && v.value !== "") {
            v.value = 0;
        }
        if (Number(v.value) > 0) {
            v.value = Number(v.value);
        }
    }
  // 总金钱总期数计算
  repanel_data(){
    let that = this;
    let amount = 0;
    let chase_amount = 0;
    for (var i = 0; i <= that.lotdata_now.length-1; i++) {
      for (var k = 0; k <= that.sureballlist.length-1; k++) {
        amount = that.lotdata_now[i].multiple*that.lotdata_now[i].price/that.modelarr[that.model]+amount;
      }
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
  //提交追号
  submit_chase(){
    let that = this;
    //清空
    that.lotdata_submit = [];
    for (var i = 0; i <= that.lotdata_now.length-1; i++) {
      console.log(that.lotdata_now[i].checkon != false)
      if (that.lotdata_now[i].checkon != false) {
        for (var k = 0; k <= that.sureballlist.length-1; k++) {
            let rechase :any= {};
            rechase.Open_stop = that.Open_stop;
            rechase.Win_stop = that.Win_stop;
            rechase.multiple = that.lotdata_now[i].multiple;
            rechase.model = that.model;
            rechase.count = 1;
            rechase.sum = (2*rechase.multiple) /that.modelarr[rechase.model]
            rechase.amount = that.totalinfo.amount;
            rechase.ball = that.sureballlist[k].ball;
            rechase.name = that.sureballlist[k].name;
            rechase.issue = that.lotdata_now[i].lot_num;
            that.lotdata_submit.push(rechase)
        }
      };
    }
    console.log(that.lotdata_submit)
    if(!that.lotdata_submit[0]){
            that.POPNOTE({msg:'请选择追号期数'});
      return
    }else{
      that.POPNOTE({msg:`您确定追号${that.lotdata_now.length}期么? 总投入${that.chase_money}元。`},that.betnow);
      return
    }
    
    
  }
  betnow(){
    // 在此处提交追号所有号码
  }
  close_chase(){
    $('#layer3').find('.chase_container').removeClass('show_this');
    let that = this;
    that.rechase_dataall()
  }
  chase_number(){
    let that = this;
    if (!that.sureballlist[0]) {
      that.POPNOTE({msg:'注单列表为空，请先下注！或者随机1注',btn:'随机一注'},that.radomshowchase);
      return false
    };
    that.showchase();
    
    }  
  show_chasenumber(param,nextrun){
    let msg = param.msg;
    let til = param.til;
    let self = this;
    let str = ''; 
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
  
    radomshowchase(){
      this.mathball(this.menu_2);
      $('#layer3').find('.chase_container').addClass('show_this');
    }
    showchase(){
      $('#layer3').find('.chase_container').addClass('show_this');
    }
  hid_layer(){
    document.getElementById("layer").innerHTML = '';
  }
  parseDom(arg) {
　　 var objE = document.createElement("div");
　　 objE.innerHTML = arg;
　　 return objE.childNodes;
  };
//追号函数结束
  // 遗漏数据
  omitarr = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: []
  };
  // 所有要用到的号码
  match_tab = {
    0: {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10
    },
    1: {
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10
    },
    2: {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5
    },
    3: {
      1: 1,
      3: 3,
      5: 5,
      7: 7,
      9: 9
    },
    4: {
      2: 2,
      4: 4,
      6: 6,
      8: 8,
      10: 10
    },
    5: {}
  };
  //所有的规则
  lot_rules = {
    "1_1": {
      description: "从01-10中任意选择1个或1个以上号码",
      example: "投注方案：01<br>开奖号码第一位：01<br>即中猜冠军",
      rule: "开奖号码的首位出现在所选号码中，即为中奖"
    },
    "2_1": {
      description: "从01-10中选择两个号码组成一注号码",
      example:
        "投注方案：01 02<br>开奖号码：01 02 03 04 05 06 07 08 09 10<br>即中猜前二。",
      rule: "如果开奖号码的前两位和所选号码一致，并位置正确，即为中奖"
    },
    "2_2": {
      description: "手动输入号码，并由2个号码组成一注。",
      example:
        "投注方案：0102； 开奖号码：01,02,03,04,05,06,07,08,09,10，即中猜前二",
      rule:
        "手动输入01-10中的2个不重复的号码组成一注，所填号码与当期顺序摇出的10个号码中的前2个号码相同，且顺序一致，即中奖。"
    },
    "3_1": {
      description: "从01-10中选择三个号码组成一注号码",
      example:
        "投注方案：01 02 03<br>开奖号码：01 02 03 04 05 06 07 08 09 10<br>即中猜前三。",
      rule: "如果开奖号码的前三位和所选号码一致，并位置正确，即为中奖"
    },
    "3_2": {
      description: "手动输入号码，并由3个号码组成一注。",
      example:
        "投注方案：010203； 开奖号码：01,02,03,04,05,06,07,08,09,10，即中猜前三",
      rule:
        "手动输入01-10中的3个不重复的号码组成一注，所填号码与当期顺序摇出的10个号码中的前3个号码相同，且顺序一致，即中奖。"
    },
    "4_1": {
      description: "从01-10中选择四个号码组成一注号码",
      example:
        "投注方案：01 02 03 04<br>开奖号码：01 02 03 04 05 06 07 08 09 10<br>即中猜前四。",
      rule: "如果开奖号码的前四位和所选号码一致，并位置正确，即为中奖"
    },
    "4_2": {
      description: "手动输入号码，并由4个号码组成一注。",
      example:
        "投注方案：01020304； 开奖号码：01,02,03,04,05,06,07,08,09,10，即中猜前四",
      rule:
        "手动输入01-10中的4个不重复的号码组成一注，所填号码与当期顺序摇出的10个号码中的前4个号码相同，且顺序一致，即中奖。"
    },
    "5_1": {
      description: "从01-10中选择五个号码组成一注号码",
      example:
        "投注方案：01 02 03 04 05<br>开奖号码：01 02 03 04 05 06 07 08 09 10<br>即中猜前五。",
      rule: "如果开奖号码的前五位和所选号码一致，并位置正确，即为中奖"
    },
    "5_2": {
      description: "手动输入号码，并由5个号码组成一注。",
      example:
        "投注方案：0102030405； 开奖号码：01,02,03,04,05,06,07,08,09,10，即中猜前五",
      rule:
        "手动输入01-10中的5个不重复的号码组成一注，所填号码与当期顺序摇出的10个号码中的前5个号码相同，且顺序一致，即中奖。"
    },
    "6_1": {
      description: "从第一到第十名任意位置上选择1个或一个以上号码。",
      example: "投注方案：第一名 1<br/>开奖号码：第一名 1，即中奖定位胆第一。",
      rule:
        "从第一到第十名任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。"
    }
  };
  now_matchtab = {}; //用来存储选中的号
  now_matchball = {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {}
  }; //选中的大小单双的tab
  ballindex = -1;
  up_ball = 1;
  ngOnInit() {
    let that = this;
    //获取当前id
    this.getPageId();
    this.check_have_credit();
    this.loadpage = userModel.platform;
    Base.DOM.title("北京PK10");
    this.now_lang_type = userModel.now_lang_type;
    that.status = {
      menu_1: 1,
      menu_2: 1
    };
    that.menu_2_data.map(function(res) {
      if (res.active == that.status.menu_1) {
        that.menu_2.push(res);
      }
    });
    this.balllist(["cgj"]);
    this.now_description = this.lot_rules[this.now_tips_menu]["description"];
    //路由控制
    this.route.params.subscribe(data => {
      this.getPageId();
      this.check_have_credit();
      that.status = {
        menu_1: 1,
        menu_2: 1
      };
      this.balllist(["cgj"]);
      this.now_description = this.lot_rules[this.now_tips_menu]["description"];
      this.tabmenu(this.menu_1[0]);
      this.delball("clear", "");
    });
    // 注册拖拽
    this.drag_tag();
    this.tabmenu(this.menu_1[0]);
  }
  ngAfterViewInit() {
    this.inittab2();
  }
  check_have_credit() {
    console.log(this.nowPageId);
    if (this.nowPageId == "xyft_ffc") {
      this.hid_tab = true;
    } else {
      this.hid_tab = false;
    }
  }
  // 通过id获取目前显示的项目配置文件
    public url_str :any = {
        'now_til':'_scc',
        'bjpk_scc':'bjpk_scc',
        'xyft_scc':'xyft_scc'
    };
    getPageId(){
        let that = this;
        let idarray = this.router.url.split("/");
        that.nowPageId = idarray[idarray.length-1]+that.url_str.now_til;
        if (that.url_str[that.nowPageId]) {
            that.nowPageId = that.url_str[that.nowPageId];
            that.nowitems = that.items_show[that.nowPageId];
        }else{
            console.error('url_str错误!');
        }
    }
  inittab2() {
    let ulMax = $(".typetab").outerWidth();
    let liWidth = 0;
    let toolong = 0;
    let allliWidth = 0;
    $.each($(".tab_li"), function(i, n) {
      allliWidth = allliWidth + $(n).outerWidth();
    });
    $(".pointl").on("click", function() {
      //做个过长处理
      if (allliWidth > ulMax * 2 && toolong >= 0) {
        toolong = toolong - 1;
      } else {
        ulMax = $(".typetab").outerWidth();
      }
      if (toolong < 1) {
        $.each($(".tab_li"), function(i, n) {
          liWidth = liWidth + $(n).outerWidth();
          if (liWidth < ulMax) {
            $(n).removeClass("hide_it");
          }
          if (liWidth > ulMax) {
            $(n).addClass("hide_it");
          }
        });
      } else if (toolong >= 1) {
        $.each($(".tab_li"), function(i, n) {
          liWidth = liWidth + $(n).outerWidth();
          if (liWidth >= ulMax && liWidth <= ulMax * 2) {
            $(n).removeClass("hide_it");
          }
          if (liWidth >= ulMax * 2) {
            $(n).addClass("hide_it");
          }
        });
      } else {
        $.each($(".tab_li"), function(i, n) {
          liWidth = liWidth + $(n).outerWidth();
          if (liWidth > ulMax) {
            $(n).addClass("hide_it");
          } else {
            $(n).removeClass("hide_it");
          }
        });
      }
      if (liWidth < ulMax) {
      }
      liWidth = 0;
    });
    $(".pointr").on("click", function() {
      //做个过长处理
      if (allliWidth > ulMax * 2 && toolong < 2) {
        toolong = toolong + 1;
      } else {
        ulMax = $(".typetab").outerWidth();
      }
      if (toolong == 1) {
        $.each($(".tab_li"), function(i, n) {
          liWidth = liWidth + $(n).outerWidth();
          if (liWidth < ulMax) {
            $(n).addClass("hide_it");
          }
          if (liWidth > ulMax && liWidth < ulMax * 2) {
            $(n).removeClass("hide_it");
          }
        });
      } else if (toolong >= 2) {
        $.each($(".tab_li"), function(i, n) {
          liWidth = liWidth + $(n).outerWidth();
          if (liWidth < ulMax * 2) {
            $(n).addClass("hide_it");
          }
          if (liWidth > ulMax * 2) {
            $(n).removeClass("hide_it");
          }
        });
      } else {
        $.each($(".tab_li"), function(i, n) {
          console.log(liWidth);
          console.log(ulMax);
          liWidth = liWidth + $(n).outerWidth();
          if (liWidth < ulMax) {
            $(n).addClass("hide_it");
          } else {
            $(n).removeClass("hide_it");
          }
        });
      }

      if (liWidth < ulMax) {
        $(".tab_li").removeClass("hide_it");
      }
      liWidth = 0;
    });
    $.each($(".tab_li"), function(i, n) {
      liWidth = liWidth + $(n).outerWidth();
      if (liWidth > ulMax) {
        $(n).addClass("hide_it");
      }
    });
    liWidth = 0;
  }
  //路由函数
  linkrouter(t) {
    this.router.navigate([t]);
  }

  routlink() {
    let str;
    this.route.params.subscribe(data => (str = data.id));
    this.router.navigate(["/lottery/creditpk10", str]);
  }
  //拖拽变数
  // 滑块左侧递减事件
  rangevaluelessen() {
    let that = this;
    $("#range_tag").css("left", 0);
    that.rangepercent = 0.1;
    that.rangenum = 180000;
    this.countbet(this.ballcurr.totalbet);
  }
  // 滑块左侧递加事件
  rangevalueadd() {
    let that = this;
    $("#range_tag").css("left", 70);
    that.rangepercent = 0;
    that.rangenum = 180200;
    this.countbet(this.ballcurr.totalbet);
  }
  // 自带钩子监听
  ngDoCheck() {
  }
  drag_tag() {
    let that = this;
    $("#range_tag").on("mousedown", function(e) {
      let distance_X;
      let orin_x = e.pageX || e.clientX + document.body.scrollLeft;
      let orin_left = parseInt($("#range_tag").css("left"));
      let now_left;
      $("body").on("mousemove", function(e) {
        e = e || window.event;
        let now_x = e.pageX || e.clientX + document.body.scrollLeft;
        distance_X = now_x - orin_x;
        now_left = orin_left + distance_X;
        if (now_left < 0) {
          now_left = 0;
        } else if (now_left > 70) {
          now_left = 70;
        }
        $("#range_tag").css("left", now_left);
        if (now_left <= 26) {
          that.rangepercent = 0.1;
          that.rangenum = 30000;
        } else {
          that.rangepercent = 0;
          that.rangenum = 30033.33;
        }
      });
      $("body").on("mouseup", function() {
        $("body").unbind();
      });
    });
  }
  //拖拽变数结束
  // 时时彩一级导航切换
  tabmenu(data) {
    let that = this;
    if (data.href) {
      that.router.navigateByUrl(data.href);
    } else {
      that.now_tab2click_num =
      that.menu_2_data[data.active - 1]["menu"][0].arr.length;
      that.inittab();
      that.status.menu_1 = data.active;
      that.status.menu_2 = 1;
      that.menu_2 = [];
      that.up_ball = 1;
      that.menu_2_data.map(function(res) {
        if (res.active == that.status.menu_1) {
          that.menu_2.push(res);
        }
      });
      that.tabcurr = that.menu_2[0].menu[0];
      if (that.menu_2[0].menu[0].arr) {
        that.balllist(that.menu_2[0].menu[0].arr);
      } else {
        that.up_ball = 2;
      }
      that.currtabname = that.menu_2[0].menu[0].name;

      // 配置规则提示
      that.now_tips_menu = that.status.menu_1 + "_" + that.status.menu_2;
      that.now_description = that.lot_rules[that.now_tips_menu]["description"];
      if (that.status.menu_1 > 8) {
        that.hothidden = true;
      } else {
        that.hothidden = false;
      }
    }
    if (this.tabcurr.isupload) {
      this.up_ball = 2;
    }
  }

  // 时时彩二级导航切换
  currtabname = "";
  tabmenu2(data) {
    let that = this;
    if (!data.isupload) {
      that.now_tab2click_num = data.arr.length;
    } else {
      that.now_tab2click_num = 0;
    }
    that.inittab();
    that.currtabname = data.name;
    that.tabcurr = data;
    that.status.menu_2 = data.index;
    if (data.isupload) {
      that.up_ball = 2;
    } else {
      that.up_ball = 1;
      this.balllist(data.arr);
    }
    that.now_tips_menu = that.status.menu_1 + "_" + that.status.menu_2;
    that.now_description = that.lot_rules[that.now_tips_menu]["description"];

    //读取tab
    that.now_tab2 = data.name;
  }
  // 时时彩下注区左侧显示列表
  balllist(arr) {
    let that = this;
    that.now_balllist = [];
    that.now_tab2click_num = arr.length;
    for (var i = 1; i <= that.now_tab2click_num; i++) {
      that.now_matchtab[i - 1] = {};
    }
    //判断加多少进去
    that.now_balllist = [];
    arr.map(function(res) {
      if (that.tabcurr.choose) {
        that.hothidden = false;
      } else {
        that.hothidden = true;
      }
      that.now_balllist.push(that.ball_data[res]);
    });
  }

  //模式
  models: string[] = ["元", "角", "分", "厘"];
  model: string = "0";

  public ballcurr: any = {}; // 当前选中的球以及匹配状态
  public tabcurr: any = {}; // 当前选中的tab信息
  public choosem_status = false; // 当前选中的tab信息
  // 选中号码
  choosetab(index, clickindex, val, that) {
    this.now_matchball = {
      0: {},
      1: {},
      2: {},
      3: {},
      4: {},
      5: {}
    };
    this.match_tab = {
      0: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10
      },
      1: {
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10
      },
      2: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5
      },
      3: {
        1: 1,
        3: 3,
        5: 5,
        7: 7,
        9: 9
      },
      4: {
        2: 2,
        4: 4,
        6: 6,
        8: 8,
        10: 10
      },
      5: {}
    };
    this.now_matchtab[index] = {};

    this.ballindex = index;
    this.now_matchtab[index] = this.match_tab[clickindex];
    $(that)
      .parent(".numright")
      .find("li")
      .removeClass("active");
    if (val == this.ball_tab[1][5]) {
      this.now_matchball[clickindex] = "";
    } else {
      this.now_matchball[clickindex] = val;
      $(that).addClass("active");
    }
    let self = this;
    self.ballcurr = Utils.Matchrule[self.tabcurr.datarule[0]](
      self.now_matchtab,
      self.tabcurr
    );
    if (self.ballcurr.status) {
      self.countbet(self.ballcurr.totalbet);
    } else {
      self.totalinfo = {
        count: 0,
        sum: 0,
        amount: 0
      };
    }
  }

  //选中单个号码
  oneball(index, clickindex, val, id) {
    if (this.now_matchtab[index][val] == 0) {
      if ($(id).hasClass("active")) {
        $(id).removeClass("active");
        this.now_matchtab[index][val] = "";
      } else {
        this.now_matchtab[index][val] = val;
        $(id).addClass("active");
      }
    } else {
      if (this.now_matchtab[index][val]) {
        this.now_matchtab[index][val] = "";
      } else {
        this.now_matchtab[index][val] = val;
      }
    }
    let self = this;
    console.log(self.now_matchtab, self.tabcurr);
    self.ballcurr = Utils.Matchrule[self.tabcurr.datarule[0]](
      self.now_matchtab,
      self.tabcurr
    );
    console.log(self.ballcurr);
    if (self.ballcurr.status) {
      self.countbet(self.ballcurr.totalbet);
    } else {
      self.totalinfo = {
        count: 0,
        sum: 0,
        amount: 0
      };
    }
  }

  totalinfo: any = {
    count: 0,
    sum: 0,
    amount: 0
  }; //当前下注信息
  modelarr = [1, 10, 100, 1000]; // 下注模式对应的要除以的金额
  // 导入txt
  filestatus = true;
  @ViewChild("uploadFile")
  uploadFile: any;
  curtextstr = "";
  filetxt(e, id, that) {
    let val,
      self = this;
    if (e.target.files[0]) {
      const file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        val = this.result.replace("data:text/plain;base64,", "");
        var base = new Utils.algorithm.Base64();
        val = base.decode(this.result.replace("data:text/plain;base64,", ""));
        $("#" + id).val(val);
        let str = Utils.algorithm.getNum(val);
        self.curtextstr = str;
        self.filedata(str, "");
        self.uploadFile.nativeElement.value = "";
      };
    }
  }
  //清空导入数据
  clearfile(id) {
    $("#" + id).val(null);
  }
  //删除重复号
  delnum(id) {
    this.filteresult("fileReader", "del");
  }
  //输入框内容改变
  textball(id) {
    let str = Utils.algorithm.getNum($("#" + id).val());
    this.filedata(str, "");
  }
  public filterstatus = false
  // 处理输入框的数据
  filedata(str, type) {
    let self = this;
    self.ballcurr = Utils.Matchrule[self.tabcurr.datarule[0]](
      str,
      self.tabcurr
    );

    if (self.ballcurr.status) {
      if (type && type == "sure") {
        if (self.tabcurr.datarule[0] == "Rule_d2") {
          self.countbet(self.ballcurr.totalbet);
        } else {
          self.countbet(self.ballcurr.allarr.length);
        }
      } else {
        self.countbet(self.ballcurr.totalbet);
      }
    } else {
      self.totalinfo = {
        count: 0,
        sum: 0,
        amount: 0
      };
    }
  this.filterstatus = false
  }

  // 处理过滤结果
  filteresult(id, type) {
    if ($("#" + id).val() == "") {
      this.POPNOTE({ msg: "您还没有输入号码" });
      return;
    }
    let self = this,
      rep = 0,
      nob = 0,
      ball = "",
      con = "",
      val = "";
    let str = Utils.algorithm.getNum($("#" + id).val());
    self.filedata(str, "sure");
    self.ballcurr.totalbet = self.ballcurr.allarr.length;
    let obj = self.ballcurr;
    if (obj.repball.length > 0) {
      for (var i = 0; i < obj.repball.length; i++) {
        ball = ball + obj.repball[i][0] + "，";
      }
    }
    if (obj.noball.length > 0) {
      for (var i = 0; i < obj.noball.length; i++) {
        ball = ball + obj.noball[i] + "，";
      }
    }
    // ball = obj.noball.length>0?ball+obj.noball[0]:ball
    rep = obj.repball.length;
    nob = obj.noball.length;
    if (obj.allarr.length > 0) {
      for (var i = 0; i < obj.allarr.length; i++) {
        val =
          i < obj.allarr.length - 1
            ? val + obj.allarr[i][0].split(",").join("") + "，"
            : val + obj.allarr[i][0].split(",").join("");
      }
    }
  this.filterstatus = true
    if (type == "del") {
      $("#" + id).val(val);
      if (rep == 0 && nob == 0) {
        self.POPNOTE({ msg: "没有重复号码" });
      } else {
        con =
          "已经为您过滤了" +
          rep +
          "个重复号，" +
          nob +
          "个无效号，过滤内容为：" +
          ball;
        self.POPNOTE({ msg: con });
      }
    } else {
            if (rep != 0 || nob != 0) {
                $('#' + id).val(val)
                con = '将要自动过滤' + rep + '个重复号，' + nob + '个无效号，过滤内容为：' + ball
                self.POPNOTE({msg:con},self.qdfunc);
            } else {
        if(self.filterstatus){
          self.addball(self.menu_2,self.ballcurr.status)
          $('#' + id).val(null)
        }
            }
        }
  }
  qdfunc(){
    this.addball(this.menu_2,this.ballcurr.status)
  }

  // 计算当前点击投注信息
  countbet(totalbet) {
    if (!totalbet) {
        return
    }
    let sum, amount;
    sum = (this.multiple_input.value * totalbet * 2) / this.modelarr[this.model];
    amount = Math.round((((this.rangenum / this.modelarr[this.model]) * this.multiple_input.value) - sum) * 100) / 100
    this.totalinfo = {
        count: totalbet,
        sum: sum,
        amount: amount
    }
}

  // 改变金额模式
  modelchange(count) {
    if (this.totalinfo.sum == 0) {
      return;
    }
    let sum;
    sum = (this.multiple_input.value * count * 2) / this.modelarr[this.model];
    this.totalinfo.sum = sum;
    this.totalinfo.amount = 180000 / this.modelarr[this.model] - sum;
  }

  // 每次点击需要初始化的事件
  inittab() {
    this.now_matchball = {
      0: {},
      1: {},
      2: {},
      3: {},
      4: {},
      5: {}
    };
    this.now_matchtab = {
      0: {},
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
      6: {},
      7: {},
      8: {},
      9: {},
      10: {}
    };
    this.omitarr = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: []
    };
    this.omitname = "";
    this.ballcurr = {};
    $(".numright")
      .find("li")
      .removeClass("active");
    this.totalinfo = {
      count: 0,
      sum: 0,
      amount: 0
    };
    $("#fileReader").val(null);
  }

  // 遗漏选择
  omitname = "";
  checkomit(obj, type) {
    let that = this;
    if ($(obj).is(":checked")) {
      $("input:checkbox[name='ballcheck']").prop("checked", false);
      $(obj).prop("checked", true);

      if (type == "yl") {
        that.omitarr = {
          0: ["05", "25", "13", "26", "14", "08", "11", "32", "19", "07"],
          1: ["05", "25", "13", "26", "14", "08", "11", "32", "19", "07"],
          2: ["05", "25", "13", "26", "14", "08", "11", "32", "19", "07"],
          3: ["05", "25", "13", "26", "14", "08", "11", "32", "19", "07"],
          4: ["05", "25", "13", "26", "14", "08", "11", "32", "19", "07"]
        };
        that.omitname = "当前遗漏";
      } else {
        that.omitarr = {
          0: ["09", "25", "13", "26", "14", "08", "11", "32", "19", "07"],
          1: ["09", "25", "13", "26", "14", "08", "11", "32", "19", "07"],
          2: ["09", "25", "13", "26", "14", "08", "11", "32", "19", "07"],
          3: ["09", "25", "13", "26", "14", "08", "11", "32", "19", "07"],
          4: ["09", "25", "13", "26", "14", "08", "11", "32", "19", "07"]
        };
        that.omitname = "当前冷热";
      }
    } else {
      that.omitarr = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: []
      };
    }
  }
  abotitle: any = {
    w: "万",
    q: "千",
    b: "百",
    s: "十",
    g: "个"
  };
  // 确认选号
  sureballlist: any = [];
  addball(arrob, type) {
    let that = this;
    if (!type) {
      that.POPNOTE({ msg: "号码选择不完整，请重新选择" });
      return;
    }
    let arr = [];
    if (that.tabcurr.isupload) {
    if(!that.filterstatus){
      that.filteresult('fileReader', '');
      return
    }
  }
    if (that.tabcurr.choose) {
      var _selfs;
      var _arr = [];
      var _indexs = [];
      var _where = 0;
      var _total = [];
      var arrc = new Array();
      $("#fiveabso input:checkbox:checked").each(function(i) {
        arrc[i] = $(this).val();
      });
      for (var i = 0; i < that.tabcurr.datarule[1]; i++) {
        _indexs.push(i);
      }
      _arr = arrc;
      _selfs = new Array(that.tabcurr.datarule[1]);
      Utils.algorithm.plzh(_selfs, _arr, _indexs, _total, _where);
      for (var i = 0; i < that.ballcurr.ball.length; i++) {
        if (that.ballcurr.ball[i] != "") {
          for (var j = 0; j < _total.length; j++) {
            let obj: any = {};
            obj.ball = that.ballcurr.ball[i];
            obj.name = that.currtabname;
            for (var k = 0; k < that.tabcurr.datarule[1]; k++) {
              obj.name = obj.name + that.abotitle[_total[j][k]];
            }
            obj.multiple = that.multiple_input.value;
            obj.model = that.model;
            obj.count = that.totalinfo.count / _total.length;
            obj.sum = that.totalinfo.sum / _total.length;
            obj.amount = that.totalinfo.amount;
            that.sureballlist.push(obj);
          }
        }
      }
    } else {
      for (var i = 0; i < that.ballcurr.ball.length; i++) {
        if (that.ballcurr.ball[i] != "") {
          let obj: any = {};
          obj.ball = that.ballcurr.ball[i];
          obj.name =
            arrob[0].menu[0].datarule[0] == "Rule_6"
              ? that.currtabname + that.ball_data[that.tabcurr.arr[i]].title
              : that.currtabname;
          obj.multiple = that.multiple_input.value;
          obj.model = that.model;
          obj.count =
            arrob[0].menu[0].datarule[0] == "Rule_6"
              ? that.ballcurr.allarr[i].length
              : that.totalinfo.count;
          obj.sum =
            arrob[0].menu[0].datarule[0] == "Rule_6"
              ? (that.ballcurr.allarr[i].length / that.ballcurr.totalbet) *
                that.totalinfo.sum
              : that.totalinfo.sum;
          obj.amount = that.totalinfo.amount;
          that.sureballlist.push(obj);
        }
      }
    }
    that.allbet(that.sureballlist);
    this.inittab();
  }

  // 统计当前所有下注数据
  orderinfo: any = {
    total: 0,
    betcount: 0,
    money: 0
  };
  allbet(data) {
    let self = this;
    let betcount = 0,
      sum = 0;
    for (let i = 0; i < data.length; i++) {
      betcount = betcount + data[i].count;
      sum = Utils.algorithm.add(sum, parseFloat(data[i].sum));
    }
    self.orderinfo.total = data.length;
    self.orderinfo.betcount = betcount;
    self.orderinfo.money = parseFloat(sum.toFixed(3));
  }

  // 删除号码
  delball(type, val) {
    if (type == "clear") {
      this.sureballlist = [];
    }
    {
      Base._.removeArr(val, this.sureballlist);
    }
    this.allbet(this.sureballlist);
  }
  // 确认投注
  affirm() {
    if (this.sureballlist.length < 1) {
      this.POPNOTE({ msg: "没有投注内容！" });
    } else {
      this.POPNOTE({ msg: "投注成功！" });
      this.delball("clear", "");
    }
  }

  // 随机选号号码
  mathball(arr) {
    let that = this;
    let obj: any = {};
    if (that.radom_input.value == 0) {
      that.POPNOTE({ msg: "随机注数不能小于1" });
      return;
    }
    arr.map(function(res) {
      res.menu.map(function(data) {
        if (data.index == that.status.menu_2) {
          obj = data;
        }
      });
    });
    console.log(obj);
    let m = Utils.algorithm.RandomArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1);
    for (let i = 0; i < that.radom_input.value; i++) {
      let redata: any = {};
      redata.ball = Utils.Randomrule_1(obj);
      redata.name =
        arr[0].menu[0].datarule[0] == "Rule_6"
          ? that.currtabname + that.ball_data[that.tabcurr.arr[m[0]]].title
          : that.currtabname;
      redata.multiple = that.multiple_input.value;
      redata.model = that.model;
      redata.count = 1;
      redata.sum = (2 * redata.multiple) / that.modelarr[redata.model];
      redata.amount = that.totalinfo.amount;
      that.sureballlist.push(redata);
      that.orderinfo.total = that.sureballlist.length;
      that.orderinfo.betcount = that.orderinfo.betcount + redata.count;
      that.orderinfo.money = Utils.algorithm.add(
        that.orderinfo.money.toFixed(2),
        redata.sum
      );
    }
  }


  addrem(item){
    //倍数锁
    if (this.lock_multible) {
        return false
    };
    this.multiple_input.value = parseInt(this.multiple_input.value);
    this.radom_input.value = parseInt(this.radom_input.value);
    if (item=='multiple') {
        this.multiple_input.value = this.multiple_input.value+1;
        this.countbet(this.ballcurr.totalbet)
    }else if(item=='radom'){
        this.radom_input.value = this.radom_input.value +1;
    }
    
}
minusrem(item){
    if (this.lock_multible) {
        return false
    };
    this.multiple_input.value = parseInt(this.multiple_input.value);
    this.radom_input.value = parseInt(this.radom_input.value);
    if (item=='multiple') {
        if (this.multiple_input.value>1) {
            this.multiple_input.value = this.multiple_input.value-1;
            this.countbet(this.ballcurr.totalbet)
        }
    }else if(item=='radom'){
        if (this.radom_input.value>1) {
            this.radom_input.value = this.radom_input.value-1;
        }
    }
}
  // 下拉框选择input值
  check_multi(item) {
    this.multiple_input.value = item;
    if (this.totalinfo.count > 0) {
      this.countbet(this.ballcurr.totalbet);
    }
  }
  // 限制input输入格式
  regUpright() {
    if (
      this.multiple_input < 0 ||
      this.multiple_input % 1 != 0 ||
      this.multiple_input === null
    ) {
      this.multiple_input = parseInt(
        this.multiple_input.toString().replace(/\D/g, "")
      );
      this.multiple_input = Math.abs(this.multiple_input);
      this.multiple_input = parseInt(this.multiple_input.toString());
      if (isNaN(this.multiple_input)) {
        this.multiple_input = "";
      }
    }
  }

  changereg() {
    let self = this;
    this.curinpt.value = this.curinpt.value.replace(/\D/g, "");
    this.curinpt.value = this.curinpt.value == "" ? "1" : this.curinpt.value;

    if (this.totalinfo.count > 0) {
      self.countbet(self.ballcurr.totalbet);
    }
  }
  inmoneyfocus(item) {
    if (item === "multiple") {
      this.curinpt = this.multiple_input;
    } else if (item === "radom") {
      this.curinpt = this.radom_input;
    }
  }

  show_tips(item, em) {
    if (item === "reward_rule") {
      this.now_tips = this.other_rules[item];
    } else {
      this.now_tips = this.lot_rules[this.now_tips_menu][item];
    }
    em.classList.add("tipsshow");
  }
  hid_tips(item, em) {
    em.classList.remove("tipsshow");
  }
  // inputurl隐藏显示
  toggle_ul(item) {
    let self = this;
    this.inmoneyfocus(item);
    setTimeout(function() {
      self.ul_hidden = !self.ul_hidden;
    }, 200);
  }

  // 绑定给弹窗组件的事件；
  NOTARIZE() {
    return;
  }
  // 弹窗关闭事件 可以自定义命名
  closePopouot(e) {
    this.popoutInfo.show = false;
  }

  // 弹窗显示事件 data为对象 fn传一个方法时点击确认时触发
  POPNOTE(data, fn = null) {
    let o = {
      title: "操作提示", //title不传值默认为 ‘操作提示’
      msg: " ",
      event: false,
      show: true
    };
    if (typeof fn === "function") {
      this.NOTARIZE = fn;
      o.event = true;
    } else {
      this.NOTARIZE = () => {
        return;
      };
    }
    this.popoutInfo = Object.assign({}, o, data);
  }
    // 锁定倍数
	public lock_multible :any=false;
	lock_multiple(item){
		let now_btn = $(item.target);
		console.log($(item.target).hasClass('switch_btn'));
		if (!$(item.target).hasClass('switch_btn')) {
			now_btn = $(item.target).parent();
		}
		if(now_btn.hasClass('on')){
			this.lock_multible = false;
			$('#testinput').removeAttr('disabled');
		}else{
			this.lock_multible = true;
			$('#testinput').attr({disabled: 'disabled'});
		}

	}
}