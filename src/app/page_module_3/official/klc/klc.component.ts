import {
    Component,
    OnInit
} from '@angular/core';
import {
    SharkModule
} from '@ntesmail/shark-angular2';
import {
    ReactiveFormsModule
} from "@angular/forms";
import {
    HttpClient,
    HttpHeaders
} from '@angular/common/http';
import {
    RouterModule,
    Routes,
    Router,
    ActivatedRoute,
    Params,
    NavigationEnd
} from "@angular/router";

import {
    Base
} from '../../../../factory/base.model';
import {
    Api
} from '../../../../factory/api.model';
import {
    formmod
} from '../../../../factory/form';
import userModel from '../../../../status/user.model';
import {
    Utils
} from '../../../../factory/utils';
@Component({
    selector: 'klcofficial',
    templateUrl: './klc.component.html',
    styleUrls: ['./klc.component.scss']
})

export class KLCofficialComponent implements OnInit {


    public countabo: any = {
        count: 5,
        plan: 10
    }
    //模式
    public models: string[] = ['元', '角', '分', '厘'];
    public model: string = '0';
    public ballcurr: any = {} // 当前选中的球以及匹配状态
    public tabcurr: any = {} // 当前选中的tab信息
    public choosem_status = false // 当前选中的tab信息

    mathstatus = false // 随机按钮显示隐藏状态
    // 统计当前所有下注数据
    orderinfo: any = {
        "total": 0,
        "betcount": 0,
        'money': 0
    };
    abotitle: any = {
        "w": '万',
        "q": '千',
        "b": '百',
        "s": '十',
        "g": '个'
    };
    // 所有要用到的号码
    match_tab: any = {
        0: {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9
        },
        1: {},
        2: {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4
        },
        3: {
            1: 1,
            3: 3,
            5: 5,
            7: 7,
            9: 9
        },
        4: {
            0: 0,
            2: 2,
            4: 4,
            6: 6,
            8: 8
        },
        5: {}
    };
    totalinfo: any = {
        count: 0,
        sum: 0,
        amount: 0
    } //当前下注信息
    modelarr = [1, 10, 100, 1000] // 下注模式对应的要除以的金额

    // 传给弹窗组件数据
    public  popoutInfo={
        title:'string',
        msg:'string',
        event: false,
        show: false,
    }

    constructor(private route: ActivatedRoute, private httpClient: HttpClient, private router: Router) {}
    loadpage = false;
    public resultdata = [{
        'sta': '20180517014',
        'num': '2 9 0 8 7'
    }, {
        'sta': '20180517014',
        'num': '2 9 0 8 7'
    }, {
        'sta': '20180517014',
        'num': '2 9 0 8 7'
    }, {
        'sta': '20180517014',
        'num': '2 9 0 8 7'
    }, {
        'sta': '20180517014',
        'num': '2 9 0 8 7'
    }, {
        'sta': '20180517014',
        'num': '2 9 0 8 7'
    }, {
        'sta': '20180517014',
        'num': '2 9 0 8 7'
    }, {
        'sta': '20180517014',
        'num': '2 9 0 8 7'
    }];
    public rankdata = [{
        'name': '王刚',
        'type': '时时彩',
        'money': '9999'
    }, {
        'name': '王刚',
        'type': '时时彩',
        'money': '9999'
    }, {
        'name': '王刚',
        'type': '时时彩',
        'money': '9999'
    }, {
        'name': '王刚',
        'type': '时时彩',
        'money': '9999'
    }, {
        'name': '王刚',
        'type': '时时彩',
        'money': '9999'
    }, {
        'name': '王刚',
        'type': '时时彩',
        'money': '9999'
    }, {
        'name': '王刚',
        'type': '时时彩',
        'money': '9999'
    }];
    multiple_input: any = {
        value: 1
    };
    // public multiple_input = 1;
    public radom_input: any = {
        value: 1
    };
    public multi_select = [10, 50, 100, 500, 1000, 2000, 5000, 10000];
    public ul_hidden = true;
    public now_tips = '这是一个比较短的提示!';
    public tips_hidden = true;
    // 拖拽数据
    public rangepercent = 0;
    public rangenum = 180200;
    // 拖拽数据结束
    public now_tips_menu: any = '1_1';
    public now_description = '';
    public hothidden = true;
    public nowPageId: any = '';
    public nowitems: any = {};
    public userInfo = {
        name: '赌神',
        balance: '9999.99',
        id: '007'

    };
    public other_rules = {
        reward_rule: '<div> 奖金计算说明：<p style="margin-left:1em;">非常规时时彩中奖后，根据中奖号码球号的奖金组，中奖奖金需要乘以球号的奖金组，如：</p><p style="margin-left:1em;line-height: 25px;padding:3px 0;">1、北京时时彩后三直选（1800奖金组）：下注321，开奖号码54321，其中3号球的奖金组为：1.014，2号球的奖金组为：0.984，1号球的奖金组为1.022；那么中奖后的实际奖金=1800*1.014*0.984*1.022=1835.509</p><p style="margin-left:1em;line-height: 25px;padding:3px 0;">2、若北京时时彩后三直选（1800奖金组）：下注246，开奖号码54246，其中2号球的奖金组为：0.984，4号球的奖金组为：0.976，6号球的奖金组为0.98；那么中奖后的实际奖金=1800*0.984*0.976*0.98=1694.117</P></div>'
    };
    public cpnav = {
        style: "official",
        prev: '20180517022',
        prevball: [2, 5, 9, 0, 8],
        next: '20180517023',
        time: ''
    };
    // 语言
    public now_lang: any = userModel.langpackage;
    public now_lang_type: any = 'zh';
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




    public items_show = {
        'bjkl8_ffc': {
            'tabitem': [this.now_lang.Lot_tab.any_choose, this.now_lang.Lot_tab.Interest],
            'reward_show': false,
            'name': this.now_lang.lot_type.bjkl8_klc
        },
        'twbg_ffc': {
            'tabitem': [this.now_lang.Lot_tab.any_choose, this.now_lang.Lot_tab.Interest],
            'reward_show': false,
            'name': this.now_lang.lot_type.twbg_klc
        },
        'jndkl8_ffc': {
            'tabitem': [this.now_lang.Lot_tab.any_choose, this.now_lang.Lot_tab.Interest, this.now_lang.Lot_tab.sum, this.now_lang.Lot_tab.pan],
            'reward_show': false,
            'name': this.now_lang.lot_type.jndkl8_klc
        },
        'azkl8_ffc': {
            'tabitem': [this.now_lang.Lot_tab.any_choose, this.now_lang.Lot_tab.Interest, this.now_lang.Lot_tab.sum, this.now_lang.Lot_tab.pan],
            'reward_show': false,
            'name': this.now_lang.lot_type.azkl8_klc
        },
        'slfk_ffc': {
            'tabitem': [this.now_lang.Lot_tab.any_choose, this.now_lang.Lot_tab.Interest, this.now_lang.Lot_tab.sum, this.now_lang.Lot_tab.pan],
            'reward_show': false,
            'name': this.now_lang.lot_type.slfk_klc
        }
    }
    public curinpt = {
        value: ''
    };
    //路由id
    public routid;
    public now_tab2click_num;
    // public rangevalue = rangevalue;
    //方形选球板
    public square_show = false;

    status = {
        menu_1: 1, //一级tab默认项
        menu_2: 1 //二级tab默认项
    }
    // 一级tab
    menu_1 = [{
            name: this.now_lang.Lot_tab.any_choose,
            active: 1
        },
        {
            name: this.now_lang.Lot_tab.Interest,
            active: 2,
            square: true
        },
        {
            name: this.now_lang.Lot_tab.sum,
            active: 3,
            square: true
        },
        {
            name: this.now_lang.Lot_tab.pan,
            active: 4,
            square: true
        },



    ];

    // 2级tab数据以及对应要显示的内容
    menu_2_data = [{
            title: this.now_lang.Lot_tab.any_choose,
            menu: [{
                name: this.now_lang.Lot_tab.choose_one,
                index: 1,
                arr: ['shang', 'xia'],
                format: ["n"],
                datarule: ['Rule_13', 1],
                addzero: true
            }, {
                name: this.now_lang.Lot_tab.choose_two,
                index: 2,
                arr: ['shang', 'xia'],
                format: ["n"],
                datarule: ['Rule_13', 2],
                addzero: true
            }, {
                name: this.now_lang.Lot_tab.choose_three,
                index: 3,
                arr: ['shang', 'xia'],
                format: ["n"],
                datarule: ['Rule_13', 3],
                addzero: true
            }, {
                name: this.now_lang.Lot_tab.choose_four,
                index: 4,
                arr: ['shang', 'xia'],
                format: ["n"],
                datarule: ['Rule_13', 4],
                addzero: true
            }, {
                name: this.now_lang.Lot_tab.choose_five,
                index: 5,
                arr: ['shang', 'xia'],
                format: ["n"],
                datarule: ['Rule_13', 5],
                addzero: true
            }, {
                name: this.now_lang.Lot_tab.choose_six,
                index: 6,
                arr: ['shang', 'xia'],
                format: ["n"],
                datarule: ['Rule_13', 6],
                addzero: true
            }, {
                name: this.now_lang.Lot_tab.choose_seven,
                index: 7,
                arr: ['shang', 'xia'],
                format: ["n"],
                datarule: ['Rule_13', 7],
                addzero: true
            }],
            active: 1
        },
        {
            title: this.now_lang.Lot_tab.Interest,
            menu: [{
                name: this.now_lang.Lot_tab.sum_odd_eve,
                index: 1,
                arr: ['hzds'],
                format: ["n"],
                datarule: ['Rule_12', 1],
            }, {
                name: this.now_lang.Lot_tab.sum_big_sma,
                index: 2,
                arr: ['hzdx'],
                format: ["n"],
                datarule: ['Rule_12', 1]
            }, {
                name: this.now_lang.Lot_tab.up_down_pan,
                index: 3,
                arr: ['sxp'],
                format: ["n"],
                datarule: ['Rule_12', 1]
            }, {
                name: this.now_lang.Lot_tab.odd_eve_pan,
                index: 4,
                arr: ['jop'],
                format: ["n"],
                datarule: ['Rule_12', 1]
            }, {
                name: this.now_lang.Lot_tab.sum_bigs_odde,
                index: 5,
                arr: ['hzdxds'],
                format: ["n"],
                datarule: ['Rule_12', 1]
            }],
            active: 2
        },
        {
            title: this.now_lang.Lot_tab.sum,
            menu: [{
                name: this.now_lang.Lot_tab.sum_odd_eve,
                index: 1,
                arr: ['hzds'],
                format: ["n"],
                datarule: ['Rule_12', 1]
            }, {
                name: this.now_lang.Lot_tab.sum_big_sma,
                index: 2,
                arr: ['hzdx'],
                format: ["n"],
                datarule: ['Rule_12', 1]
            }, {
                name: this.now_lang.Lot_tab.sum_bigs_odde,
                index: 3,
                arr: ['hzdxds'],
                format: ["n"],
                datarule: ['Rule_12', 1]
            }],
            active: 3
        },
        {
            title: this.now_lang.Lot_tab.pan,
            menu: [{
                name: this.now_lang.Lot_tab.up_down_pan,
                index: 1,
                arr: ['sxp'],
                format: ["n"],
                datarule: ['Rule_12', 1]
            }, {
                name: this.now_lang.Lot_tab.odd_eve_pan,
                index: 2,
                arr: ['jop'],
                format: ["n"],
                datarule: ['Rule_12', 1]
            }],
            active: 4
        }

    ]
    menu_2 = []; //存储当前一级导航对应的耳机导航
    ball_tab = {
        1: [this.now_lang.Ball_tab.All, this.now_lang.Ball_tab.Big, this.now_lang.Ball_tab.Small, this.now_lang.Ball_tab.Odd, this.now_lang.Ball_tab.Even, this.now_lang.Ball_tab.Clear],
        2: [this.now_lang.Ball_tab.All, this.now_lang.Ball_tab.Clear],
        3: [],
        4: ['全', '清'],

    };
    now_balllist = []; //当前号码列表

    // 所有号码的列表数据
    ball_data = {
        'shang': {
            title: '上',
            ball: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
            tab: this.ball_tab[3],
            index: 4
        },
        'xia': {
            title: '下',
            ball: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
            tab: this.ball_tab[3],
            index: 4
        },
        'hzds': {
            title: '和值单双',
            ball: [{
                value: 0
            }, {
                value: 1
            }],
            tab: this.ball_tab[4],
            index: 4,
            match: {
                0: '单',
                1: '双',
            },
        },
        'hzdx': {
            title: '和值大小',
            ball: [{
                value: 0,
                range: '133-145',
                radix: '0.8976'
            }, {
                value: 1,
                range: '133-145',
                radix: '0.8976'
            }, {
                value: 2,
                range: '133-145',
                radix: '0.8976'
            }],
            tab: this.ball_tab[4],
            index: 4,
            match: {
                0: '大',
                1: '和',
                2: '小',
            },
        },
        'sxp': {
            title: '上下盘',
            ball: [{
                value: 0,
                range: '上>下',
                radix: '0.8976'
            }, {
                value: 1,
                range: '上=下',
                radix: '0.8976'
            }, {
                value: 2,
                range: '上<下',
                radix: '0.8976'
            }],
            tab: this.ball_tab[4],
            index: 4,
            match: {
                0: '上',
                1: '中',
                2: '下',
            },
        },
        'jop': {
            title: '奇偶盘',
            ball: [{
                value: 0,
                range: '奇>偶',
                radix: '0.8976'
            }, {
                value: 1,
                range: '奇=偶',
                radix: '0.8976'
            }, {
                value: 2,
                range: '奇<偶',
                radix: '0.8976'
            }],
            tab: this.ball_tab[4],
            index: 4,
            match: {
                0: '奇',
                1: '和',
                2: '偶',
            },
        },
        'hzdxds': {
            title: '大小单双',
            ball: [{
                value: 0
            }, {
                value: 1
            }, {
                value: 2
            }, {
                value: 3
            }],
            tab: this.ball_tab[4],
            index: 4,
            match: {
                0: '大单',
                1: '大双',
                2: '小单',
                3: '小双',
            },
        },


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
        console.log(item.checkon)
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
        console.log(that.lotdata_now)
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
        let that = this;
        console.log(that.lotdata_submit)
        // 在此处提交追号所有号码
    }
    close_chase(){
        $('#layer3_c').find('.chase_container').removeClass('show_this');
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
        $('#layer3_c').find('.chase_container').addClass('show_this');
    }
    showchase(){
        $('#layer3_c').find('.chase_container').addClass('show_this');
    }
    hid_layer(){
        document.getElementById("layer").innerHTML = '';
    }
    // 弹层1
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
    }
    //所有的规则
    lot_rules = {
        '1_1': {
            description: "从01-80中任选1个以上号码",
            example: "投注方案：01<br/>开奖号码：01 02 03 04 05 06 07 08 21 22<br/>　　　　　71 72 73 74 75 76 77 78 79 80<br/>中奖结果：中1个号码",
            rule: "从01-80中选择1个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。",

        },
        '1_2': {
            description: "从01-80中任选2个以上号码",
            example: "投注方案：01 02<br/>开奖号码：01 02 03 04 05 06 07 08 21 22<br/>　　　　　71 72 73 74 75 76 77 78 79 80<br/>中奖结果：中2个号码",
            rule: "从01-80中选择2个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。",

        },
        '1_3': {
            description: "从01-80中任选3个以上号码",
            example: "投注方案：01 02 03<br/>开奖号码：01 02 03 04 05 06 07 08 21 22<br/>　　　　　71 72 73 74 75 76 77 78 79 80<br/>中奖结果：中3个号码",
            rule: "从01-80中选择3个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。",

        },
        '1_4': {
            description: "从01-80中任选4个以上号码",
            example: "投注方案：01 02 03 04<br/>开奖号码：01 02 03 04 05 06 07 08 21 22<br/>　　　　　71 72 73 74 75 76 77 78 79 80<br/>中奖结果：中4个号码",
            rule: "从01-80中选择4个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。",

        },
        '1_5': {
            description: "从01-80中任选5个以上号码",
            example: "投注方案：01 02 03 04 05<br/>开奖号码：01 02 03 04 05 06 07 08 21 22<br/>　　　　　71 72 73 74 75 76 77 78 79 80<br/>中奖结果：中5个号码",
            rule: "从01-80中选择5个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。",

        },
        '1_6': {
            description: "从01-80中任选6个以上号码",
            example: "投注方案：01 02 03 04 05 06<br/>开奖号码：01 02 03 04 05 06 07 08 21 22<br/>　　　　　71 72 73 74 75 76 77 78 79 80<br/>中奖结果：中6个号码",
            rule: "从01-80中选择6个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。",

        },
        '1_7': {
            description: "从01-80中任选7个以上号码",
            example: "投注方案：01 02 03 04 05 06 07<br/>开奖号码：01 02 03 04 05 06 07 08 21 22<br/>　　　　　71 72 73 74 75 76 77 78 79 80<br/>中奖结果：中7个号码",
            rule: "从01-80中选择7个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。",

        },

        '2_1': {
            description: "猜20个开奖号码相加的总值是“单”或者“双”",
            example: "投注方案：“单”<br/>开奖的号码相加等于“355”<br/>中奖结果：“单”",
            rule: "20个开奖号码的总和值为奇数时中“单”，为偶数时中“双”。",

        },
        '2_2': {
            description: "猜20个开奖号码相加的总值“大”或者“和”或者“小”",
            example: "投注方案：“大”<br/>开奖的20个号码相加总值等于“820”<br/>中奖结果：“大”",
            rule: "选择20个开奖号码总和值的大小属性:小于810为小,等于810为和,大于810为大",

        },
        '2_3': {
            description: "选择20个开奖号码中包含上盘(01-40)与下盘(41-80)号码个数多少的关系",
            example: "投注方案：上盘<br/>开奖结果：20个开奖号码中，上盘(01-40)的号码个数大于下盘(41-80)的号码个数<br/>中奖名称：上盘",
            rule: "20个开奖号码中上盘（01-40）的号码个数大余下盘（41-80）的号码个数中“上”盘，下盘号码个数大于上盘号码个数中“下”盘，上，下盘的号码个数相等时为“中”盘。",

        },
        '2_4': {
            description: "选择20个开奖号码中包含奇偶号码个数多少的关系",
            example: "投注方案：“偶盘”<br/>开奖结果：20个开奖号码中，偶数号码个数大于奇数号码个数<br/>中奖名称：“偶盘”",
            rule: "20个开奖号码中奇数个数大于偶数个数中“奇”盘，偶数个数大于奇数个数中“偶”盘，两盘个数相等时中“和”盘。",

        },
        '2_5': {
            description: "选择20个开奖号码总和值的大小单双属性",
            example: "投注方案：和值“大•单”<br/>开奖结果：20个开奖号码的总和值为大(超过810)并且20个开奖号码的总和值为单数<br/>中奖名称：和值大小单双_“大•单”",
            rule: "选择20个开奖号码总和值的大小单双属性（和值811～1410为大,和值210~810为小）。",

        },
        '3_1': {
            description: "选择20个开奖号码总和值的单双属性",
            example: "投注方案：“单”<br/>开奖的号码相加等于“355”<br/>中奖结果：“单”",
            rule: "20个开奖号码的总和值为奇数时中“单”，为偶数时中“双”。",

        },
        '3_2': {
            description: "选择20个开奖号码总和值的大小属性",
            example: "投注方案：“大”<br/>开奖的20个号码相加总值等于“820”<br/>中奖结果：“大”",
            rule: "选择20个开奖号码总和值的大小属性:小于810为小,等于810为和,大于810为大",

        },
        '3_3': {
            description: "选择20个开奖号码总和值的大小单双属性",
            example: "投注方案：和值“大•单”<br/>开奖结果：20个开奖号码的总和值为大(超过810)并且20个开奖号码的总和值为单数<br/>中奖名称：和值大小单双_“大•单”",
            rule: "选择20个开奖号码总和值的大小单双属性（和值811～1410为大,和值210~810为小）。",

        },
        '4_1': {
            description: "选择20个开奖号码中包含上盘(01-40)与下盘(41-80)号码个数多少的关系",
            example: "投注方案：上盘<br/>开奖结果：20个开奖号码中，上盘(01-40)的号码个数大于下盘(41-80)的号码个数<br/>中奖名称：上盘",
            rule: "20个开奖号码中上盘（01-40）的号码个数大余下盘（41-80）的号码个数中“上”盘，下盘号码个数大于上盘号码个数中“下”盘，上下盘的号码个数相等时为“中”盘。",

        },
        '4_2': {
            description: "选择20个开奖号码中包含奇偶号码个数多少的关系",
            example: "投注方案：“偶盘”<br/>开奖结果：20个开奖号码中，偶数号码个数大于奇数号码个数<br/>中奖名称：“偶盘”",
            rule: "20个开奖号码中奇数个数大于偶数个数中“奇”盘，偶数个数大于奇数个数中“偶”盘，两盘个数相等时中“和”盘。",

        },



    }
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
        let that = this
        //获取当前id
        this.getPageId();
        this.loadpage = userModel.platform;
        Base.DOM.title('快乐彩')
        this.now_lang_type = userModel.now_lang_type;
        that.status = {
            menu_1: 1,
            menu_2: 1
        }
        that.menu_2_data.map(function (res) {
            if (res.active == that.status.menu_1) {
                that.menu_2.push(res)
            }
        })
        this.balllist(['shang', 'xia']);
        this.now_description = this.lot_rules[this.now_tips_menu]['description'];
        this.tabmenu(this.menu_1[0])
        //路由控制
        this.route.params.subscribe(data => {
            // 切换路由后重置投注内容
            this.routid = data.id;
            this.getPageId();
            this.status = {
                menu_1: 1,
                menu_2: 1
            };
            this.now_description = this.lot_rules[this.now_tips_menu]['description'];
            this.tabmenu(this.menu_1[0]);
            this.delball('clear', '');
        });
        // 注册拖拽
        this.drag_tag();
    }
    ngAfterViewInit() {
    }
    // 通过id获取目前显示的项目配置文件
    getPageId() {

        let idarray = this.router.url.split("/");
        this.nowPageId = idarray[idarray.length - 1] + '_ffc';
        this.nowitems = this.items_show[this.nowPageId];
    }

    //路由函数                      
    linkrouter(t) {
        this.router.navigate([t]);
    }
    routlink(){
        let str ;
        this.route.params.subscribe(data=>str=data.id);
        this.router.navigate(['/lottery/creditklc', str]);
      }
    // 计算当前点击投注信息
    countbet(totalbet) {
        if (!totalbet) {
            return;
        }
        let sum, amount;
        sum =
            (this.multiple_input.value * totalbet * 2) / this.modelarr[this.model];
        amount =
            Math.round(
                ((this.rangenum / this.modelarr[this.model]) *
                    this.multiple_input.value -
                    sum) *
                100
            ) / 100;
        this.totalinfo = {
            count: totalbet,
            sum: sum,
            amount: amount
        };
    }

    //拖拽变数
    // 滑块左侧递减事件
    rangevaluelessen() {
        let that = this;
        $('#range_tag').css("left", 0);
        that.rangepercent = 0.1
        that.rangenum = 180000
        this.countbet(this.ballcurr.totalbet)
    }
    // 自带钩子监听
    ngDoCheck() {
        if (this.totalinfo.sum > 0 && this.rangenum != (this.totalinfo.amount + this.totalinfo.sum) / parseFloat(this.multiple_input.value)) {
            this.countbet(this.ballcurr.totalbet)
        }
    }
    // 滑块左侧递加事件
    rangevalueadd() {
        let that = this;
        $('#range_tag').css("left", 62);
        that.rangepercent = 0
        that.rangenum = 180200
        this.countbet(this.ballcurr.totalbet)
    }
    drag_tag() {
        let that = this;
        $('#range_tag').on('mousedown', function (e) {
            let distance_X;
            let orin_x = e.pageX || e.clientX + document.body.scrollLeft;
            let orin_left = parseInt($('#range_tag').css('left'));
            let now_left;
            $('body').on('mousemove', function (e) {
                e = e || window.event;
                let now_x = e.pageX || e.clientX + document.body.scrollLeft;
                distance_X = now_x - orin_x;
                now_left = orin_left + distance_X;
                if (now_left < 0) {
                    now_left = 0
                } else if (now_left > 62) {
                    now_left = 62
                }
                $('#range_tag').css("left", now_left);
                if (now_left <= 26) {
                    that.rangepercent = 0.1
                    that.rangenum = 180000
                } else {
                    that.rangepercent = 0
                    that.rangenum = 180200
                }
            })
            $('body').on('mouseup', function () {
                $('body').unbind();
            })
        })

    }
    //拖拽变数结束
    // 时时彩一级导航切换
    tabmenu(data) {
        let that = this;
        // 分离方形与圆形选球板
        if (data.square == true) {
            this.square_show = true;
        } else {
            this.square_show = false;
        }
        that.inittab()
        if (data.href) {
            that.router.navigateByUrl(data.href)
        } else {
            that.status.menu_1 = data.active
            that.status.menu_2 = 1
            that.menu_2 = []
            that.up_ball = 1
            that.menu_2_data.map(function (res) {
                if (res.active == that.status.menu_1) {
                    that.menu_2.push(res)
                }
            });
            that.tabcurr = that.menu_2[0].menu[0];
            if (that.menu_2[0].menu[0].arr) {
                that.balllist(that.menu_2[0].menu[0].arr)
            } else {
                that.up_ball = 2
            }

            that.currtabname = that.menu_2[0].menu[0].name;
            // 配置规则提示
            that.now_tips_menu = that.status.menu_1 + '_' + that.status.menu_2;
            that.now_description = that.lot_rules[that.now_tips_menu]['description'];
            if (that.status.menu_1 > 8) {
                that.hothidden = true;
            } else {
                that.hothidden = true;
            }
        }
        if (this.tabcurr.isupload) {
            this.up_ball = 2;
        }
        if (this.tabcurr.datarule[0] == 'Rule_12') {
            this.mathstatus = true
        } else {
            this.mathstatus = false
        }
    }

    // 时时彩二级导航切换
    currtabname = ''
    tabmenu2(data) {
        let that = this;
        if (!data.isupload) {
            that.now_tab2click_num = data.arr.length;
        } else {
            that.now_tab2click_num = 0;
        }
        that.inittab()
        that.currtabname = data.name
        that.tabcurr = data
        that.status.menu_2 = data.index
        if (data.isupload) {
            that.up_ball = 2
            that.hothidden = true;
        } else {
            that.up_ball = 1
            this.balllist(data.arr)
            that.hothidden = true;
        }
        that.now_tips_menu = that.status.menu_1 + '_' + that.status.menu_2;
        that.now_description = that.lot_rules[that.now_tips_menu]['description'];
        if (this.tabcurr.datarule[0] == 'Rule_12') {
            this.mathstatus = true
        } else {
            this.mathstatus = false
        }
    }
    // 时时彩下注区左侧显示列表
    balllist(arr) {
        let that = this
        that.now_balllist = []
        that.now_tab2click_num = arr.length;
        for (var i = 1; i <= that.now_tab2click_num; i++) {
            that.now_matchtab[i - 1] = {}
        };
        //判断加多少进去
        that.now_balllist = []
        arr.map(function (res) {
            if (that.tabcurr.choose) {
                that.hothidden = true;
            } else {
                that.hothidden = true;
            }
            that.now_balllist.push(that.ball_data[res])
        })
    }
    setmatch_tab(data, n) {
        data[0] = {};
        data[1] = {};
        for (let i = 0; i < n; i++) {
            data[0][i] = i;
        }
        return data;
    }

    // 选中号码
    choosetab(index, clickindex, val, that) {
        this.now_matchball = {
            0: {},
            1: {},
            2: {},
            3: {},
            4: {},
            5: {}
        }
        let carr = ["hzds", "hzdx", "sxp", "jop", "hzdxds", ];
        this.match_tab = this.setmatch_tab(this.match_tab, this.ball_data[this.tabcurr.arr[0]].ball.length)
        this.now_matchtab[index] = {}
        this.ballindex = index
        this.now_matchtab[index] = this.match_tab[clickindex];
        $(that).parent('.numright').find('li').removeClass('active');
        if (Base._.hasArr(this.tabcurr.arr[0], carr)) {
            if (val == this.ball_tab[4][1]) {
                this.now_matchball[clickindex] = "";
            } else {
                this.now_matchball[clickindex] = val;
                $(that).addClass("active");
            }
        } else {
            if (val == this.ball_tab[1][5]) {
                this.now_matchball[clickindex] = "";
            } else {
                this.now_matchball[clickindex] = val;
                $(that).addClass("active");
            }
        }
        let self = this;
        if (self.tabcurr.choose) {
            var arr = new Array();
            $("#fiveabso input:checkbox:checked").each(function (i) {
                arr[i] = $(this).val();
            });
            self.ballcurr = Utils.Matchrule[self.tabcurr.datarule[0]](
                self.now_matchtab,
                self.tabcurr,
                arr
            );
        } else {
            self.ballcurr = Utils.Matchrule[self.tabcurr.datarule[0]](
                self.now_matchtab,
                self.tabcurr
            );
        }
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
                $(id).removeClass('active');
                this.now_matchtab[index][val] = ''
            } else {
                this.now_matchtab[index][val] = val
                $(id).addClass('active');
            }
        } else {
            if (this.now_matchtab[index][val]) {
                this.now_matchtab[index][val] = ''
            } else {
                this.now_matchtab[index][val] = val;
            }
        }
        let self = this;
        if (this.square_show) {
            if (self.tabcurr.choose) {
                var arr = new Array();
                $("#fiveabso input:checkbox:checked").each(function (i) {
                    arr[i] = $(this).val();
                });
                self.ballcurr = Utils.Matchrule[self.tabcurr.datarule[0]](
                    self.now_matchtab,
                    self.tabcurr,
                    arr
                );
            } else {
                self.ballcurr = Utils.Matchrule[self.tabcurr.datarule[0]](
                    self.now_matchtab,
                    self.tabcurr
                );
            }
            if (self.ballcurr.status) {
                self.countbet(self.ballcurr.totalbet);
            } else {
                self.totalinfo = {
                    count: 0,
                    sum: 0,
                    amount: 0
                };
            }
        } else {
            if (this.status.menu_2 > 1 && this.ballcurr.allarr && this.ballcurr.allarr[0].length >= 8) {
                this.POPNOTE({msg:'最多只能选8个！'});
                $(id).removeClass('active');
                this.now_matchtab[index][val] = '';
                return
            }
            self.ballcurr = Utils.Matchrule[self.tabcurr.datarule[0]](self.now_matchtab, self.tabcurr);
            if (self.ballcurr.status) {
                self.countbet(self.ballcurr.totalbet);
            } else {
                self.totalinfo = {
                    count: 0,
                    sum: 0,
                    amount: 0
                }
            }
        }
    }

    // 改变金额模式
    modelchange(count,i) {
        this.model = i;
        if (this.totalinfo.sum == 0) {
            return
        }
        let sum;
        sum = (this.multiple_input.value * count * 2) / this.modelarr[this.model]
        this.totalinfo.sum = sum;
        this.totalinfo.amount = (180000 / this.modelarr[this.model]) - sum;
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
        }
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
        }
        this.omitname = ''
        this.ballcurr = {}
        $('.numright').find('li').removeClass('active');
        this.totalinfo = {
            count: 0,
            sum: 0,
            amount: 0
        }
        $('#fileReader').val(null);
    }

    // 遗漏选择
    omitname = ''
    checkomit(obj, type) {
        let that = this
            if (type == 'yl') {
                that.omitarr = {
                    0: ['05', '25', '13', '26', '14', '08', '11', '32', '19', '07'],
                    1: ['05', '25', '13', '26', '14', '08', '11', '32', '19', '07'],
                    2: ['05', '25', '13', '26', '14', '08', '11', '32', '19', '07'],
                    3: ['05', '25', '13', '26', '14', '08', '11', '32', '19', '07'],
                    4: ['05', '25', '13', '26', '14', '08', '11', '32', '19', '07']
                }
                that.omitname = '当前遗漏'
            } else {
                that.omitarr = {
                    0: ['09', '25', '13', '26', '14', '08', '11', '32', '19', '07'],
                    1: ['09', '25', '13', '26', '14', '08', '11', '32', '19', '07'],
                    2: ['09', '25', '13', '26', '14', '08', '11', '32', '19', '07'],
                    3: ['09', '25', '13', '26', '14', '08', '11', '32', '19', '07'],
                    4: ['09', '25', '13', '26', '14', '08', '11', '32', '19', '07']
                }
                that.omitname = '当前冷热'
            }
        
    }

    // 确认选号arrob
    sureballlist: any = []
    addball(arrob, type) {
        let that = this
        if (!type) {
            that.POPNOTE({msg:'号码选择不完整，请重新选择'});
            return
        }
        if (that.tabcurr.choose) {
            var _selfs;
            var _arr = [];
            var _indexs = [];
            var _where = 0;
            var _total = [];
            var arrc = new Array();
            $("#fiveabso input:checkbox:checked").each(function (i) {
                arrc[i] = $(this).val();
            });
            for (var i = 0; i < that.tabcurr.datarule[1]; i++) {
                _indexs.push(i)
            }
            _arr = arrc
            _selfs = new Array(that.tabcurr.datarule[1])
            Utils.algorithm.plzh(_selfs, _arr, _indexs, _total, _where);
            for (var i = 0; i < that.ballcurr.ball.length; i++) {
                if (that.ballcurr.ball[i] != '') {
                    for (var j = 0; j < _total.length; j++) {
                        let obj: any = {}
                        obj.ball = that.ballcurr.ball[i]
                        obj.name = that.currtabname
                        for (var k = 0; k < that.tabcurr.datarule[1]; k++) {
                            obj.name = obj.name + that.abotitle[_total[j][k]]
                        }
                        obj.multiple = that.multiple_input.value
                        obj.model = that.model
                        obj.count = that.totalinfo.count / _total.length
                        obj.sum = that.totalinfo.sum / _total.length
                        obj.amount = that.totalinfo.amount
                        that.sureballlist.push(obj)
                    }
                }
            }
        } else {
            for (var i = 0; i < that.ballcurr.ball.length; i++) {
                if (that.ballcurr.ball[i] != '') {
                    let obj: any = {}
                    if (that.tabcurr.addzero) {
                        obj.ball = that.ballcurr.ball[i]
                    } else {
                        obj.ball = that.tabcurr.datarule[0] == 'Rule_12' ? that.ball_data[that.tabcurr.arr[0]].match[that.ballcurr.ball[i]] : that.ballcurr.ball[i]
                    }
                    obj.name = that.tabcurr.datarule[0] == 'Rule_6' ? that.currtabname + that.ball_data[that.tabcurr.arr[i]].title : that.currtabname
                    obj.multiple = that.multiple_input.value
                    obj.model = that.model
                    obj.count = that.tabcurr.datarule[0] == 'Rule_6' || that.tabcurr.datarule[0] == 'Rule_12' ? that.ballcurr.allarr[i].length : that.totalinfo.count
                    obj.sum = that.tabcurr.datarule[0] == 'Rule_6' || that.tabcurr.datarule[0] == 'Rule_12' ? (that.ballcurr.allarr[i].length / that.ballcurr.totalbet) * that.totalinfo.sum : that.totalinfo.sum
                    obj.amount = that.totalinfo.amount
                    that.sureballlist.push(obj)
                }
            }

        }
        that.allbet(that.sureballlist)
        this.inittab()
    }
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
        self.orderinfo.money = sum;
    }

    // 删除号码
    delball(type, val) {
        if (type == 'clear') {
            this.sureballlist = []
        } {
            Base._.removeArr(val, this.sureballlist)
        }
    }
	// 确认投注
	affirm(){
        if (this.sureballlist.length<1) {
            this.POPNOTE({msg:'没有投注内容！'});
        }else{
            this.POPNOTE({msg:'投注成功！'});
            this.delball('clear','');
        }
    }
    // 创建开奖数据  len为开奖球数，
    setballdata(len) {
        let data = [];
        let s = new Set();
        for (let q = 0; q < len; q = s.size) {
            let a = Math.ceil(Math.random() * 80);
            s.add(a);
        }
        data = Array.from(s);
        for (let i = 0; i < data.length; i++) {
            data[i] = data[i] < 10 ? '0' + data[i] : '' + data[i];
        }
        return data;
    }

    // 随机选号号码
    mathball(arr) {
        let that = this;
        for (let i = 0; i < that.radom_input.value; i++) {
            let obj: any = {}
            obj.ball = this.setballdata(that.status.menu_2).join(",");
            obj.name = that.currtabname
            obj.multiple = that.multiple_input.value;
            obj.model = that.model;
            obj.count = 1;
            obj.sum = (2 * that.multiple_input.value) / that.modelarr[that.model];
            obj.amount = that.totalinfo.amount
            that.sureballlist.push(obj);
            that.allbet(that.sureballlist);
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
            this.countbet(this.ballcurr.totalbet)
        }
    }
    // 限制input输入格式
    regUpright() {
        if (this.multiple_input < 0 || this.multiple_input % 1 != 0 || this.multiple_input === null) {
            this.multiple_input = parseInt(this.multiple_input.toString().replace(/\D/g, ''))
            this.multiple_input = Math.abs(this.multiple_input);
            this.multiple_input = parseInt(this.multiple_input.toString());
            if (isNaN(this.multiple_input)) {
                this.multiple_input = '';
            }
        }
    }

    changereg() {
        let self = this
        this.curinpt.value = this.curinpt.value.replace(/\D/g, "");
        this.curinpt.value = this.curinpt.value == '' ? '1' : this.curinpt.value

        if (this.totalinfo.count > 0) {
            self.countbet(self.ballcurr.totalbet)
        }
    }
    inmoneyfocus(item) {
        if (item === 'multiple') {
            this.curinpt = this.multiple_input;
        } else if (item === 'radom') {
            this.curinpt = this.radom_input;
        }
    }

    show_tips(item, em) {
        if (item === 'reward_rule') {
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
        this.inmoneyfocus(item)
        setTimeout(function () {
            self.ul_hidden = !self.ul_hidden;
        }, 200)
    }
    // 绑定给弹窗组件的事件；
    NOTARIZE(){
        return
    }
    // 弹窗关闭事件 可以自定义命名
    closePopouot(e){
        this.popoutInfo.show = false;
    }

    // 弹窗显示事件 data为对象 fn传一个方法时点击确认时触发
    POPNOTE(data,fn=null){
        let o = {
            title:'操作提示',   //title不传值默认为 ‘操作提示’
            msg:' ',
            event: false,
            show: true,
        }
        if (typeof fn === 'function') {
            this.NOTARIZE = fn;
            o.event = true;
        }else{
            this.NOTARIZE = ()=>{return};
        }
        this.popoutInfo = Object.assign({},o,data);
    }
    // 锁定倍数
  public lock_multible :any=false;
  lock_multiple(i){
      if(i){
          this.lock_multible = false;
          $('#testinput').removeAttr('disabled');
      }else{
          this.lock_multible = true;
          $('#testinput').attr({disabled: 'disabled'});
      }

  }
}