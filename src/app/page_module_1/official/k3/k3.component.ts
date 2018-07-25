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
    selector: 'K3official',
    templateUrl: './k3.component.html',
    styleUrls: ['./k3.component.scss']
})

export class K3officialComponent implements OnInit {

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


    totalinfo: any = {
        count: 0,
        sum: 0,
        amount: 0
    } //当前下注信息
    modelarr = [1, 10, 100, 1000] // 下注模式对应的要除以的金额

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
    public rangenum = 30033.33;
    // 拖拽数据结束
    public now_tips_menu: any = '1_1';
    public now_description = '';
    public hothidden = false;
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
    public lotdata = [{
            lot_num: '20181719',
            multiple: 0,
            price: 2,
            take_money: 0,
            expire_time: '2018-06-11 15:19:30',
            checkon: false
        },
        {
            lot_num: '20181720',
            multiple: 0,
            price: 2,
            take_money: 0,
            expire_time: '2018-06-11 15:19:30',
            checkon: false
        },
        {
            lot_num: '20181721',
            multiple: 0,
            price: 2,
            take_money: 0,
            expire_time: '2018-06-11 15:19:30',
            checkon: false
        }
    ]
    public typeoptiondata: any = [
        5,
        10,
        15,
        25,
        'all'
    ];
    // 复制追号数据
    public lotdata_now = $.extend(true, [], this.lotdata);
    // 追号配置
    public chase_config_ori: any = {
        multiple: 1,
        chase_amount: 5,
        select_amount: 5,
        chase_rule: {
            number: 1,
            multiple: 2
        },
        multiple_option: 1
    }
    public chase_number_config: any = $.extend(true, {}, this.chase_config_ori);
    //目前追号面板
    public c_now_panel: any = 'one'
    public chase_money: any = 0;
    public chase_amount: any = 0;
    //追号数据结束
    public items_show = {
        'jsk3_ffc': {
            'tabitem': [this.now_lang.Lot_tab.same_number, this.now_lang.Lot_tab.sum, this.now_lang.Lot_tab.thr_c, this.now_lang.Lot_tab.diff_number],
            'reward_show': false,
            'name': this.now_lang.lot_type.jsk3_ffc
        },
        'ahk3_ffc': {
            'tabitem': [this.now_lang.Lot_tab.same_number, this.now_lang.Lot_tab.sum, this.now_lang.Lot_tab.thr_c, this.now_lang.Lot_tab.diff_number],
            'reward_show': false,
            'name': this.now_lang.lot_type.ahk3_ffc
        },
        'hbk3_ffc': {
            'tabitem': [this.now_lang.Lot_tab.same_number, this.now_lang.Lot_tab.sum, this.now_lang.Lot_tab.thr_c, this.now_lang.Lot_tab.diff_number],
            'reward_show': false,
            'name': this.now_lang.lot_type.hbk3_ffc
        },
        'hnk3_ffc': {
            'tabitem': [this.now_lang.Lot_tab.same_number, this.now_lang.Lot_tab.sum, this.now_lang.Lot_tab.thr_c, this.now_lang.Lot_tab.diff_number],
            'reward_show': false,
            'name': this.now_lang.lot_type.hnk3_ffc
        },
        'hubk3_ffc': {
            'tabitem': [this.now_lang.Lot_tab.same_number, this.now_lang.Lot_tab.sum, this.now_lang.Lot_tab.thr_c, this.now_lang.Lot_tab.diff_number],
            'reward_show': false,
            'name': this.now_lang.lot_type.hubk3_ffc
        },
        'shks_ffc': {
            'tabitem': [this.now_lang.Lot_tab.same_number, this.now_lang.Lot_tab.sum, this.now_lang.Lot_tab.thr_c, this.now_lang.Lot_tab.diff_number],
            'reward_show': false,
            'name': this.now_lang.lot_type.shks_ffc
        },
        'bjk3_ffc': {
            'tabitem': [this.now_lang.Lot_tab.same_number, this.now_lang.Lot_tab.sum, this.now_lang.Lot_tab.thr_c, this.now_lang.Lot_tab.diff_number],
            'reward_show': false,
            'name': this.now_lang.lot_type.bjk3_ffc
        },
        'gxk3_ffc': {
            'tabitem': [this.now_lang.Lot_tab.same_number, this.now_lang.Lot_tab.sum, this.now_lang.Lot_tab.thr_c, this.now_lang.Lot_tab.diff_number],
            'reward_show': false,
            'name': this.now_lang.lot_type.gxk3_ffc
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
            name: this.now_lang.Lot_tab.same_number,
            active: 1,
            square: true
        },
        {
            name: this.now_lang.Lot_tab.sum,
            active: 2
        },
        {
            name: this.now_lang.Lot_tab.thr_c,
            active: 3
        },
        {
            name: this.now_lang.Lot_tab.diff_number,
            active: 4
        }
    ];

    // 2级tab数据以及对应要显示的内容
    menu_2_data = [{
            title: this.now_lang.Lot_tab.Two_number,
            menu: [{
                name: this.now_lang.Lot_tab.Two_number_odd,
                index: 1,
                arr: ['th', 'bth'],
                format: ["n"],
                datarule: ['Rule_12', 1],
                square: true
            }, {
                name: this.now_lang.Lot_tab.Two_number_eve,
                index: 2,
                arr: ['etfx'],
                format: ["n"],
                datarule: ['Rule_12', 1],
                square: true
            }],
            active: 1,
            square: true
        },
        {
            title: this.now_lang.Lot_tab.Thr_number,
            menu: [{
                name: this.now_lang.Lot_tab.Thr_number_odd,
                index: 3,
                arr: ['stdx'],
                format: ["n"],
                datarule: ['Rule_12', 1],
            }, {
                name: this.now_lang.Lot_tab.Thr_number_eve,
                index: 4,
                arr: ['stfx'],
                format: ["n"],
                datarule: ['Rule_12', 1],
            }],
            active: 1
        },
        {
            title: this.now_lang.Lot_tab.sum,
            menu: [{
                name: this.now_lang.Lot_tab.sum,
                index: 1,
                arr: ['hz'],
                format: ["n"],
                datarule: ['Rule_12', 1],
            }],
            active: 2
        },
        {
            title: this.now_lang.Lot_tab.thr_c,
            menu: [{
                name: this.now_lang.Lot_tab.thr_c,
                index: 1,
                arr: ['slhtx'],
                format: ["n"],
                datarule: ['Rule_12', 1],
            }],
            active: 3
        },
        {
            title: this.now_lang.Lot_tab.diff_number,
            menu: [{
                name: this.now_lang.Lot_tab.Two_diff_num,
                index: 1,
                arr: ['ebth'],
                format: ["n"],
                datarule: ['Rule_12', 1],
            }, {
                name: this.now_lang.Lot_tab.Thr_diff_num,
                index: 2,
                arr: ['sbth'],
                format: ["n"],
                datarule: ['Rule_12', 1],
            }],
            active: 4
        }
    ]
    menu_2 = []; //存储当前一级导航对应的耳机导航
    ball_tab = {
        1: [this.now_lang.Ball_tab.All, this.now_lang.Ball_tab.Big, this.now_lang.Ball_tab.Small, this.now_lang.Ball_tab.Odd, this.now_lang.Ball_tab.Even, this.now_lang.Ball_tab.Clear],
        2: [this.now_lang.Ball_tab.All, this.now_lang.Ball_tab.Clear],
        3: []

    };
    now_balllist = []; //当前号码列表

    // 所有号码的列表数据
    ball_data = {
        'th': {
            title: '同号',
            ball: [{
                value: 0
            }, {
                value: 1
            }, {
                value: 2
            }, {
                value: 3
            }, {
                value: 4
            }, {
                value: 5
            }],
            tab: this.ball_tab[3],
            index: 0,
            match: {
                0: '11',
                1: '22',
                2: '33',
                3: '44',
                4: '55',
                5: '66',
            },
            square: true
        },
        'bth': {
            title: '不同号',
            ball: [{
                value: 0
            }, {
                value: 1
            }, {
                value: 2
            }, {
                value: 3
            }, {
                value: 4
            }, {
                value: 5
            }, ],
            tab: this.ball_tab[3],
            index: 0,
            match: {
                0: '1',
                1: '2',
                2: '3',
                3: '4',
                4: '5',
                5: '6',
            },
            square: true
        },
        'etfx': {
            title: '二同复选',
            ball: [{
                value: 0
            }, {
                value: 1
            }, {
                value: 2
            }, {
                value: 3
            }, {
                value: 4
            }, {
                value: 5
            }],
            tab: this.ball_tab[3],
            index: 0,
            match: {
                0: '11',
                1: '22',
                2: '33',
                3: '44',
                4: '55',
                5: '66',
            },
            square: true
        },
        'stdx': {
            title: '三同单选',
            ball: [{
                value: 0
            }, {
                value: 1
            }, {
                value: 2
            }, {
                value: 3
            }, {
                value: 4
            }, {
                value: 5
            }],
            tab: this.ball_tab[3],
            index: 0,
            match: {
                0: '111',
                1: '222',
                2: '333',
                3: '444',
                4: '555',
                5: '666',
            },
            square: true
        },
        'stfx': {
            title: '三同复选',
            ball: [{
                value: 0
            }],
            tab: this.ball_tab[3],
            index: 0,
            match: {
                0: '三同通选',
            },
            square: true
        },
        'hz': {
            title: '和值',
            ball: [{
                value: 0
            }, {
                value: 1
            }, {
                value: 2
            }, {
                value: 3
            }, {
                value: 4
            }, {
                value: 5
            }, {
                value: 6
            }, {
                value: 7
            }, {
                value: 8,
                radix: '138.754'
            }, {
                value: 9,
                radix: '138.754'
            }, {
                value: 10,
                radix: '138.754'
            }, {
                value: 11,
                radix: '138.754'
            }, {
                value: 12,
                radix: '138.754'
            }, {
                value: 13,
                radix: '138.754'
            }, {
                value: 14,
                radix: '138.754'
            }, {
                value: 15,
                radix: '138.754'
            }],
            tab: this.ball_tab[1],
            index: 0,
            match: {
                0: '3',
                1: '4',
                2: '5',
                3: '6',
                4: '7',
                5: '8',
                6: '9',
                7: '10',
                8: '18',
                9: '17',
                10: '16',
                11: '15',
                12: '14',
                13: '13',
                14: '12',
                15: '11',
            },
            square: true,
            square_dot: true
        },
        'slhtx': {
            title: '三连号',
            ball: [{
                value: 0
            }],
            tab: this.ball_tab[3],
            index: 0,
            match: {
                0: '三连号通选',
            },
            square: true
        },
        'ebth': {
            title: '标准',
            ball: [{
                value: 0
            }, {
                value: 1
            }, {
                value: 2
            }, {
                value: 3
            }, {
                value: 4
            }, {
                value: 5
            }, ],
            tab: this.ball_tab[3],
            index: 0,
            match: {
                0: '1',
                1: '2',
                2: '3',
                3: '4',
                4: '5',
                5: '6',
            },
            square: true
        },
        'sbth': {
            title: '三不同号',
            ball: [{
                value: 0
            }, {
                value: 1
            }, {
                value: 2
            }, {
                value: 3
            }, {
                value: 4
            }, {
                value: 5
            }, ],
            tab: this.ball_tab[3],
            index: 0,
            match: {
                0: '1',
                1: '2',
                2: '3',
                3: '4',
                4: '5',
                5: '6',
            },
            square: true
        }
    };
    //追号函数
    typeoptchange() {
        let that = this;
        if (that.chase_number_config.select_amount == 'all') {
            that.chase_number_config.chase_amount = that.lotdata_now.length;
        } else {
            that.chase_number_config.chase_amount = that.chase_number_config.select_amount;
        }
    }
    check_lot(item) {
        console.log(item.checkon)
        let that = this;
        if (item.checkon) {
            if (item.multiple == 0) {
                item.multiple = that.chase_number_config.multiple;
                item.take_money = item.multiple * item.price;
            }

        } else {
            item.multiple = 0;
        }
        that.repanel_data()
    }
    // 生成计划
    produce_plan() {
        let that = this;
        let gap_number, gap_multiple, multiple, chase_amount;
        if (that.c_now_panel == 'two') {
            gap_number = that.chase_number_config.chase_rule.number;
            gap_multiple = that.chase_number_config.chase_rule.multiple;
            multiple = that.chase_number_config.multiple;
            chase_amount = that.chase_number_config.chase_amount;
            if (chase_amount > that.lotdata_now.length) {
                chase_amount = that.lotdata_now.length;
            }
            for (var i = 0; i <= chase_amount - 1; i++) {
                console.log((i) % gap_number)
                that.lotdata_now[i].checkon = true;
                that.lotdata_now[i].multiple = multiple;
                that.lotdata_now[i].take_money = multiple * that.lotdata_now[i].price;
                if ((i + 1) % gap_number == 0) {
                    multiple = multiple * gap_multiple;
                };

            };
        } else {
            multiple = that.chase_number_config.multiple;
            chase_amount = that.chase_number_config.chase_amount;
            if (chase_amount > that.lotdata_now.length) {
                chase_amount = that.lotdata_now.length;
            }
            for (var i = 0; i <= chase_amount - 1; i++) {
                that.lotdata_now[i].checkon = true;
                that.lotdata_now[i].multiple = multiple;
                that.lotdata_now[i].take_money = multiple * that.lotdata_now[i].price;
            };
        }
        that.repanel_data()
    }
    //单个金钱计算
    get_takemon(item) {
        let that = this;
        item.take_money = item.multiple * item.price;
        that.repanel_data()
    }
    // 总金钱总期数计算
    repanel_data() {
        let that = this;
        let amount = 0;
        let chase_amount = 0;
        for (var i = 0; i <= that.lotdata_now.length - 1; i++) {
            amount = that.lotdata_now[i].multiple * that.lotdata_now[i].price + amount;
            if (that.lotdata_now[i].checkon) {
                chase_amount = chase_amount + 1;
            };
        };
        that.chase_amount = chase_amount;
        if (that.chase_amount > that.lotdata_now.length) {
            that.chase_amount = that.lotdata_now.length;
        }
        that.chase_money = amount;
    }
    //清空追号
    rechase_data() {
        let that = this;
        that.lotdata_now = $.extend(true, [], that.lotdata);
        that.repanel_data()
    }
    //清空追号所有数据
    rechase_dataall() {
        let that = this;
        that.lotdata_now = $.extend(true, [], that.lotdata);
        that.chase_number_config = $.extend(true, {}, that.chase_config_ori);
        that.repanel_data()
    }
    tab_chase(para, item_one, item_two) {
        let that = this;
        that.rechase_dataall();
        that.c_now_panel = para;
        if (para == 'one') {
            $(item_one).addClass('active');
            $(item_two).removeClass('active');
            $('.one').addClass('active')
            $('.two').removeClass('active')
        } else if (para == 'two') {
            $(item_two).addClass('active');
            $(item_one).removeClass('active');
            $('.two').addClass('active')
            $('.one').removeClass('active')
        }
    }
    close_chase() {
        $('#layer2').find('.chase_container').removeClass('show_this');
        let that = this;
        that.rechase_dataall()
    }
    chase_number() {
        $('#layer2').find('.chase_container').addClass('show_this');
    }
    //追号函数结束
    // 遗漏数据
    omitarr = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: []
    }
    // 所有要用到的号码
    match_tab = {
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
        1: {
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9
        },
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
    //所有的规则
    lot_rules = {
        '1_1': {
            description: "对三个号码中两个指定的相同号码和一个指定的不同号码进行投注。",
            example: "投注方案：同号11，不同号2；开奖号码：112，即中二同号单选。",
            rule: "选择1对相同号码和1个不同号码投注，选号与奖号相同（顺序不限），即中奖。",

        },
        '1_2': {
            description: "对三个号码中两个指定的相同号码和一个任意号码进行投注。",
            example: "投注方案：11；开奖号码：112，即中二同号复选。",
            rule: "从11～66中任选1个或多个号码，选号与奖号（包含11～66，不限顺序）相同，即中奖。",

        },
        '1_3': {
            description: "从所有相同的三个号码（111、222、…、666）中任意选择一组号码进行投注。",
            example: "投注方案：111；开奖号码：111，即中三同号单选。",
            rule: "对相同的三个号码（111、222、333、444、555、666）中的任意一个进行投注，所选号码开出即中奖。",

        },
        '1_4': {
            description: "对所有相同的三个号码（111、222、…、666）进行投注。",
            example: "投注方案：三同号通选；开奖号码：111，即中三同号通选。",
            rule: "对所有相同的三个号码（111、222、333、444、555、666）进行投注，任意号码开出即中奖。",

        },
        '2_1': {
            description: "从3-18中任意选择1个或1个以上号码。",
            example: "投注方案：5；开奖号码：113，即中和值。",
            rule: "至少选择1个和值（3个号码之和）进行投注，所选和值与开奖的3个号码的和值相同即中奖。",

        },
        '3_1': {
            description: "对所有三个相连的号码（仅限：123、234、345、456）进行投注。",
            example: "投注方案：三连号通选；开奖号码：456，即中三连号通选。",
            rule: "对所有3个相连的号码（123、234、345、456）进行投注，任意号码开出即中奖。",

        },
        '4_1': {
            description: "对三个号码中两个指定的不同号码和一个任意号码进行投注。",
            example: "投注方案：12；开奖号码：123，即中二不同号。",
            rule: "从1～6中任选2个或多个号码，所选号码与开奖号码任意2个号码相同，即中奖。",

        },
        '4_2': {
            description: "对三个各不相同的号码进行投注。",
            example: "投注方案：123；开奖号码：123，即中三不同号。",
            rule: "从1～6中任选3个或多个号码，所选号码与开奖号码的3个号码相同即中奖。",

        }
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
        Base.DOM.title('快三')
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
        this.balllist(['th', 'bth']);
        this.now_description = this.lot_rules[this.now_tips_menu]['description'];
        this.tabmenu(this.menu_1[0]);
        //路由控制
        this.route.params.subscribe(data => {
            this.getPageId();
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
        that.rangenum =  180000
        this.countbet(this.ballcurr.totalbet)

    }
    // 滑块左侧递加事件
    rangevalueadd() {
        let that = this;
        $('#range_tag').css("left", 70);
        that.rangepercent = 0
        that.rangenum = 180200
        this.countbet(this.ballcurr.totalbet)
    }
    // 自带钩子监听
    ngDoCheck() {
        if (this.totalinfo.sum > 0 && this.rangenum != (this.totalinfo.amount + this.totalinfo.sum) / parseFloat(this.multiple_input.value)) {
            this.countbet(this.ballcurr.totalbet)
        }
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
                } else if (now_left > 70) {
                    now_left = 70
                }
                $('#range_tag').css("left", now_left);
                if (now_left <= 26) {
                    that.rangepercent = 0.1
                    that.rangenum = 30000
                } else {
                    that.rangepercent = 0
                    that.rangenum = 30033.33
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

        that.now_tab2click_num = that.menu_2_data[data.active - 1]['menu'][0].arr.length;
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
            console.log(data)
            // 配置规则提示
            that.now_tips_menu = that.status.menu_1 + '_' + that.status.menu_2;
            that.now_description = that.lot_rules[that.now_tips_menu]['description'];
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
        } else {
            that.up_ball = 1
            this.balllist(data.arr)
        }
        that.now_tips_menu = that.status.menu_1 + '_' + that.status.menu_2;
        that.now_description = that.lot_rules[that.now_tips_menu]['description'];
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
                that.hothidden = false;
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
        // this.match_tab = {
        //     0: {
        //         0: 0,
        //         1: 1,
        //         2: 2,
        //         3: 3,
        //         4: 4,
        //         5: 5,
        //         6: 6,
        //         7: 7,
        //         8: 8,
        //         9: 9
        //     },
        //     1: {
        //         5: 5,
        //         6: 6,
        //         7: 7,
        //         8: 8,
        //         9: 9
        //     },
        //     2: {
        //         0: 0,
        //         1: 1,
        //         2: 2,
        //         3: 3,
        //         4: 4
        //     },
        //     3: {
        //         1: 1,
        //         3: 3,
        //         5: 5,
        //         7: 7,
        //         9: 9
        //     },
        //     4: {
        //         0: 0,
        //         2: 2,
        //         4: 4,
        //         6: 6,
        //         8: 8
        //     },
        //     5: {}
        // };
        let carr = ['hz', ];
        this.match_tab = this.setmatch_tab(this.match_tab, this.ball_data[this.tabcurr.arr[0]].ball.length)
        this.now_matchtab[index] = {}

        this.ballindex = index
        this.now_matchtab[index] = this.match_tab[clickindex]
        $(that).parent('.numright').find('li').removeClass('active');
        if (Base._.hasArr(this.tabcurr.arr[0], carr)) {
            if (val == this.ball_tab[1][5]) {
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
            let O = Object.assign({},self.tabcurr);
            O.arr=["k3"];
            self.ballcurr = Utils.Matchrule[self.tabcurr.datarule[0]]( self.now_matchtab, O );
            console.log(self.now_matchtab,  self.tabcurr);
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

    // onesquare(index, clickindex, val, that) {
    //     if (this.now_matchtab[index][val]) {
    //         this.now_matchtab[index][val] = ''
    //     } else {
    //         this.now_matchtab[index][val] = val
    //     }
    // }

    // 改变金额模式
    modelchange(count) {
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
            9: {}
        };
        this.omitarr = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: []
        }
        this.omitname = ''
        $('.numright').find('li').removeClass('active');

    }

    // 遗漏选择
    omitname = ''
    checkomit(obj, type) {
        let that = this
        if ($(obj).is(':checked')) {
            $("input:checkbox[name='ballcheck']").prop("checked", false)
            $(obj).prop("checked", true)

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
        } else {
            that.omitarr = {
                0: [],
                1: [],
                2: [],
                3: [],
                4: []
            }
        }
    }

    // 确认选号
    sureballlist: any = []
    addball(arrob, type) {
        let that = this
        if (!type) {
            that.show_layer({
                'msg': '号码选择不完整，请重新选择',
                'til': '操作提示'
            }, '')
            return
        }
        console.log(arrob)
        console.log(that.ballcurr.ball)
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

    // 随机选号号码
    mathball(arr) {
        let that = this
        let math: any = []
        let redata: any = {}
        arr.map(function (res) {
            res.menu.map(function (data) {
                if (data.name == that.currtabname) {
                    math = data.arr
                }
            })
        })
        math.map(function (res) {
            switch (res) {
                case '120':
                    redata.ball = Math.floor(0 + Math.random() * (9 - 0)) + '|';
                    break;
                default:
                    if (redata.ball) {
                        redata.ball = redata.ball + Math.floor(0 + Math.random() * (9 - 0)) + '|';
                    } else {
                        redata.ball = Math.floor(0 + Math.random() * (9 - 0)) + '|';
                    }
            }
        })
        let arrball = redata.ball.split('|')
        arrball.pop()
        redata.ball = arrball.join('|')
        redata.name = that.currtabname
        that.sureballlist.push(redata)
    }

    addrem(item) {
        this.multiple_input.value = parseInt(this.multiple_input.value);
        this.radom_input.value = parseInt(this.radom_input.value);
        if (item == 'multiple') {
            this.multiple_input.value = this.multiple_input.value + 1;
            this.countbet(this.ballcurr.totalbet)
        } else if (item == 'radom') {
            this.radom_input.value = this.radom_input.value + 1;
        }
    }
    minusrem(item) {
        this.multiple_input.value = parseInt(this.multiple_input.value);
        this.radom_input.value = parseInt(this.radom_input.value);
        if (item == 'multiple') {
            if (this.multiple_input.value > 1) {
                this.multiple_input.value = this.multiple_input.value - 1;
                this.countbet(this.ballcurr.totalbet)
            }
        } else if (item == 'radom') {
            if (this.radom_input.value > 1) {
                this.radom_input.value = this.radom_input.value - 1;
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
    // 弹层1
    parseDom(arg) {　　
        var objE = document.createElement("div");　　
        objE.innerHTML = arg;　　
        return objE.childNodes;
    };
    show_layer(param, nextrun) {
        let msg = param.msg;
        let til = param.til;
        let self = this;
        let str = '<div class="cover_bg" #cover_bg></div><div id="layer_box" #layer><div class="top_til"><div class="til">' + til + '</div><div class="close">x</div></div><div class="content_box">' + msg + '</div><div class="confirm_box"><div class="confirm_btn">确定</div></div></div>';
        let dom = $(this.parseDom(str))
        dom.find('.close').on('click', function () {
            self.hid_layer();
        })
        dom.find('.confirm_box').on('click', function () {
            nextrun();
        })
        $('#layer').append(dom);
        setTimeout(function () {
            dom.addClass('tobig')
        }, 10)
        window.onresize = function () {
            console.log('x')
        }
    }
    hid_layer() {
        document.getElementById("layer").innerHTML = '';
    }
}