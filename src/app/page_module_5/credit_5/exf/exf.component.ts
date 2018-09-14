import {
    Component,
    OnInit,
    OnDestroy,
    AfterViewInit,
} from "@angular/core";
import {
    Router,
    ActivatedRoute,
} from "@angular/router";
import userModel from "../../../../status/user.model";
import {
    Base
} from "../../../../factory/base.model";

import { TransferService } from '../../../../factory/Transfer.Service';

@Component({
    selector: "app-exf",
    templateUrl: "./exf.component.html",
    styleUrls: ["./exf.component.scss"]
})
export class ExfComponent implements OnInit, OnDestroy, AfterViewInit {
    loadpage = false;
    public routeid;  // 当前彩票的路由ID
    public delay = true; // 选择金额框判断
    public boxshow = false; // 选择金额框显示判断
    public type = 1; // 控制 玩法
    public curinpt; //当前操作的金额输入框
    public selectbtnvalue = 0; //控制 一般 、快捷按钮数据
    public inputshow = true;  // 一般玩法下每个单元的input显示
    public newpoint = false; // 绑定提交时的最新赔率
    public BALL = {
        numb: 0,
        value: "",
        point: 0,
        step: 0,
        checked: false
    };
    public typedata = [{
            id: 1,
            name: "两面盘"
        },
        {
            id: 2,
            name: "特码"
        },
        {
            id: 3,
            name: "正码一"
        },
        {
            id: 4,
            name: "正码二"
        },
        {
            id: 5,
            name: "正码三"
        },
        {
            id: 6,
            name: "正码四"
        },
        {
            id: 7,
            name: "龙虎斗"
        },
        {
            id: 8,
            name: "全5中1"
        }
    ];
    public contenttoptitle3 = [, , , , , ];
    public setallmoney = {
        value: ""
    }; //绑定快捷金额
    // 活动选择框的位置
    public boxposition = {
        x: "",
        y: ""
    };

    // 各项目赔率数据
    public POINt_data = {
        betdatab1_1: {
            data1: [{
                    name: "特大",
                    point: 1.796,
                    step: 0.156 / 7.8
                },
                {
                    name: "特小",
                    point: 1.796,
                    step: 0.156 / 7.8
                },
                {
                    name: "特单",
                    point: 1.796,
                    step: 0.156 / 7.8
                },
                {
                    name: "特双",
                    point: 1.796,
                    step: 0.156 / 7.8
                }
            ],
            data2: [{
                    name: "大",
                    point: 1.796,
                    step: 0.156 / 7.8
                },
                {
                    name: "小",
                    point: 1.796,
                    step: 0.156 / 7.8
                },
                {
                    name: "单",
                    point: 1.796,
                    step: 0.156 / 7.8
                },
                {
                    name: "双",
                    point: 1.796,
                    step: 0.156 / 7.8
                }
            ],

            data3: [{
                    name: "总大",
                    point: 1.783,
                    step: 0.033 / 7.8
                },
                {
                    name: "总小",
                    point: 1.783,
                    step: 0.033 / 7.8
                },
                {
                    name: "总单",
                    point: 1.759,
                    step: 0.153 / 7.8
                },
                {
                    name: "总双",
                    point: 1.812,
                    step: 0.159 / 7.8
                },
                {
                    name: "总尾大",
                    point: 1.796,
                    step: 0.156 / 7.8
                },
                {
                    name: "总尾小",
                    point: 1.796,
                    step: 0.156 / 7.8
                }
            ]
        },
        betdatab2_1: {
            data1: [{
                    numb: 1,
                    point: 9.898,
                    step: 0.857 / 7.8
                },
                {
                    numb: 2,
                    point: 9.898,
                    step: 0.857 / 7.8
                },
                {
                    numb: 3,
                    point: 9.898,
                    step: 0.857 / 7.8
                },
                {
                    numb: 4,
                    point: 9.898,
                    step: 0.857 / 7.8
                },
                {
                    numb: 5,
                    point: 9.898,
                    step: 0.857 / 7.8
                },
                {
                    numb: 6,
                    point: 9.898,
                    step: 0.857 / 7.8
                },
                {
                    numb: 7,
                    point: 9.898,
                    step: 0.857 / 7.8
                },
                {
                    numb: 8,
                    point: 9.898,
                    step: 0.857 / 7.8
                },
                {
                    numb: 9,
                    point: 9.898,
                    step: 0.857 / 7.8
                },
                {
                    numb: 10,
                    point: 9.898,
                    step: 0.857 / 7.8
                },
                {
                    numb: 11,
                    point: 9.898,
                    step: 0.857 / 7.8
                },
                {
                    numb: null,
                    point: 0,
                    step: 0
                }
            ],
            data2: [{
                    name: "上",
                    point: 3.086,
                    step: 0.857 / 7.8
                },
                {
                    name: "上下和",
                    point: 1.527,
                    step: 0.164 / 7.8
                },
                {
                    name: "下",
                    point: 3.086,
                    step: 0.857 / 7.8
                },
                {
                    name: "总单",
                    point: 1.759,
                    step: 0.153 / 7.8
                },
                {
                    name: "奇",
                    point: 3.086,
                    step: 0.857 / 7.8
                },
                {
                    name: "奇偶和",
                    point: 1.527,
                    step: 0.164 / 7.8
                },
                {
                    name: "偶",
                    point: 3.086,
                    step: 0.857 / 7.8
                },
                {
                    name: "总双",
                    point: 1.812,
                    step: 0.159 / 7.8
                },
                {
                    name: "特大",
                    point: 1.796,
                    step: 0.156 / 7.8
                },
                {
                    name: "特单",
                    point: 1.796,
                    step: 0.156 / 7.8
                },
                {
                    name: "总大",
                    point: 1.783,
                    step: 0.033 / 7.8
                },
                {
                    name: "总尾大",
                    point: 1.796,
                    step: 0.156 / 7.8
                },
                {
                    name: "特小",
                    point: 1.796,
                    step: 0.156 / 7.8
                },
                {
                    name: "特双",
                    point: 1.796,
                    step: 0.156 / 7.8
                },
                {
                    name: "总小",
                    point: 1.783,
                    step: 0.033 / 7.8
                },
                {
                    name: "总尾小",
                    point: 1.796,
                    step: 0.156 / 7.8
                }
            ]
        },
        zhengma: {
            data2: [{
                    name: "上",
                    point: 3.086,
                    step: 0.857 / 7.8
                },
                {
                    name: "上下和",
                    point: 1.527,
                    step: 0.164 / 7.8
                },
                {
                    name: "下",
                    point: 3.086,
                    step: 0.857 / 7.8
                },
                {
                    name: "总单",
                    point: 1.759,
                    step: 0.153 / 7.8
                },
                {
                    name: "奇",
                    point: 3.086,
                    step: 0.857 / 7.8
                },
                {
                    name: "奇偶和",
                    point: 1.527,
                    step: 0.164 / 7.8
                },
                {
                    name: "偶",
                    point: 3.086,
                    step: 0.857 / 7.8
                },
                {
                    name: "总双",
                    point: 1.812,
                    step: 0.159 / 7.8
                },
                {
                    name: "大",
                    point: 1.796,
                    step: 0.156 / 7.8
                },
                {
                    name: "单",
                    point: 1.796,
                    step: 0.156 / 7.8
                },
                {
                    name: "总大",
                    point: 1.783,
                    step: 0.033 / 7.8
                },
                {
                    name: "总尾大",
                    point: 1.796,
                    step: 0.156 / 7.8
                },
                {
                    name: "小",
                    point: 1.796,
                    step: 0.156 / 7.8
                },
                {
                    name: "双",
                    point: 1.796,
                    step: 0.156 / 7.8
                },
                {
                    name: "总小",
                    point: 1.783,
                    step: 0.033 / 7.8
                },
                {
                    name: "总尾小",
                    point: 1.796,
                    step: 0.156 / 7.8
                }
            ]
        },
        longhu: {
            long: {
                name: "龙",
                point: 1.796,
                step: 0.156 / 7.8
            },
            hu: {
                name: "虎",
                point: 1.796,
                step: 0.156 / 7.8
            }
        },
        bettatab8_1: [{
                numb: 1,
                point: 1.819,
                step: 0.172
            },
            {
                numb: 2,
                point: 1.819,
                step: 0.172
            },
            {
                numb: 3,
                point: 1.819,
                step: 0.172
            },
            {
                numb: 4,
                point: 1.819,
                step: 0.172
            },
            {
                numb: 5,
                point: 1.819,
                step: 0.172
            },
            {
                numb: 6,
                point: 1.819,
                step: 0.172
            },
            {
                numb: 7,
                point: 1.819,
                step: 0.172
            },
            {
                numb: 8,
                point: 1.819,
                step: 0.172
            },
            {
                numb: 9,
                point: 1.819,
                step: 0.172
            },
            {
                numb: 10,
                point: 1.819,
                step: 0.172
            },
            {
                numb: 11,
                point: 1.819,
                step: 0.172
            },
            {
                numb: null,
                point: 0,
                step: 0
            }
        ]
    };


    public betdatab1_1 = [{
            title: "特码",
            data1: [{
                    name: "特大",
                    title: "大小",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "特小",
                    title: "大小",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "特单",
                    title: "单双",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "特双",
                    title: "单双",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: null,
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: null,
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                }
            ]
        },
        {
            title: "正码一",
            data1: this.setbigorsmall()
        },
        {
            title: "正码二",
            data1: this.setbigorsmall()
        },
        {
            title: "正码三",
            data1: this.setbigorsmall()
        },
        {
            title: "正码四",
            data1: this.setbigorsmall()
        },
        {
            title: "总和",
            data1: [{
                    name: "总大",
                    title: "大小",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "总小",
                    title: "大小",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "总单",
                    title: "单双",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "总双",
                    title: "单双",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "总尾大",
                    title: "尾大小",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "总尾小",
                    title: "尾大小",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                }
            ]
        }
    ];
    public betdatab2_1 = {
        data1: this.setball(),
        data2: [{
                name: "上",
                title: "上下",
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            {
                name: "上下和",
                title: "上下",
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            {
                name: "下",
                title: "上下",
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            {
                name: "总单",
                title: "总和单双",
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            {
                name: "奇",
                title: "奇偶",
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            {
                name: "奇偶和",
                title: "奇偶",
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            {
                name: "偶",
                title: "奇偶",
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            {
                name: "总双",
                title: "总和单双",
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            {
                name: "特大",
                title: "特码大小",
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            {
                name: "特单",
                title: "特码单双",
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            {
                name: "总大",
                title: "总和大小",
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            {
                name: "总尾大",
                title: "总尾大小",
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            {
                name: "特小",
                title: "特码大小",
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            {
                name: "特双",
                title: "特码单双",
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            {
                name: "总小",
                title: "总和大小",
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            {
                name: "总尾小",
                title: "总尾大小",
                value: "",
                point: 0,
                step: 0,
                checked: false
            }
        ]
    };
    public betdatab2_2 = [, , , , ];
    public zhengma = [
        this.setzhengma('一'),
        this.setzhengma('二'),
        this.setzhengma('三'),
        this.setzhengma('四')
    ];

    public betdatab7_1 = [{
            numb: 0,
            title: "正一VS正二",
            value1: {
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            value2: {
                value: "",
                point: 0,
                step: 0,
                checked: false
            }
        },
        {
            numb: 1,
            title: "正一VS正三",
            value1: {
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            value2: {
                value: "",
                point: 0,
                step: 0,
                checked: false
            }
        },
        {
            numb: 2,
            title: "正一VS正四",
            value1: {
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            value2: {
                value: "",
                point: 0,
                step: 0,
                checked: false
            }
        },
        {
            numb: 3,
            title: "正一VS特码",
            value1: {
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            value2: {
                value: "",
                point: 0,
                step: 0,
                checked: false
            }
        },
        {
            numb: 4,
            title: "正二VS正三",
            value1: {
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            value2: {
                value: "",
                point: 0,
                step: 0,
                checked: false
            }
        },
        {
            numb: 5,
            title: "正二VS正四",
            value1: {
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            value2: {
                value: "",
                point: 0,
                step: 0,
                checked: false
            }
        },
        {
            numb: 6,
            title: "正二VS特码",
            value1: {
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            value2: {
                value: "",
                point: 0,
                step: 0,
                checked: false
            }
        },
        {
            numb: 7,
            title: "正三VS正四",
            value1: {
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            value2: {
                value: "",
                point: 0,
                step: 0,
                checked: false
            }
        },
        {
            numb: 8,
            title: "正三VS特码",
            value1: {
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            value2: {
                value: "",
                point: 0,
                step: 0,
                checked: false
            }
        },
        {
            numb: 9,
            title: "正四VS特码",
            value1: {
                value: "",
                point: 0,
                step: 0,
                checked: false
            },
            value2: {
                value: "",
                point: 0,
                step: 0,
                checked: false
            }
        }
    ];
    public bettatab8_1 = this.setball();


    // =弹窗对话框数据
    public popup = {
        // 遮罩层
        shade: {
            show: false,
            w: 0,
            h: 0
        },
        // 提交框
        sub: {
            show: false,
            drag: false,
            dragleft: 0,
            dragtop: 0,
            left: 10,
            top: 10,
            scale: false,
            data: []
        }
    };
    public subdata = [];
    public submoney = 0;
    public subob = {
        channel: "",
        type: "",
        id: "20180808",
        ball: "-",
        number: "-",
        point: "-",
        money: "-"
    };


    // 传给问路组件的数据
    public gamedata: any = {
        gametype: 'EXF'
    }
    // 传给头部彩票导航组件的数据
    public cpnav = {
        style: "credit",
        prev: "20180517022",
        prevball: [2, 5, 9, 0, 8],
        next: "20180517023",
        time: ""
    };
    // 传给弹窗组件数据
    public popoutInfo = {
        title: "string",
        msg: "string",
        event: false,
        show: false
    };



    constructor(
        private router: Router,
        private route: ActivatedRoute,public transfer: TransferService
    ) {}
    ngOnInit() {
        this.loadpage = userModel.platform;

        this.popup.shade.w = screen.width;
        this.popup.shade.h = screen.height;

        this.route.params.subscribe(data => {
            this.type = 1;
            if (this.selectbtnvalue === 0) {
                this.reset();
            }
            this.tabclick(0);
            this.routeid = data.id;
            this.subob.channel = "11选5 - " + this.routeid;
        });

        // 官方玩法跳转龙虎页面
        if (this.transfer.cur_tolonghu) {
            this.type = 7;
            this.transfer.cur_tolonghu = false;
        } 

        // 设置各投注项目赔率
        this.POINT();
    }
    ngAfterViewInit() {}
    ngOnDestroy() {}



    // 设置赔率
    POINT() {
        let _that = this;
        let p = _that.POINt_data;
        for (let q = 0; q < _that.betdatab1_1.length; q++) {
            if (q === 0) {
                for (let j = 0; j < _that.betdatab1_1[q].data1.length; j++) {
                    _that.setpoint(
                        p.betdatab1_1.data1,
                        _that.betdatab1_1[q].data1[j],
                        "name"
                    );
                }
            } else if (q === _that.betdatab1_1.length - 1) {
                for (let j = 0; j < _that.betdatab1_1[q].data1.length; j++) {
                    _that.setpoint(
                        p.betdatab1_1.data3,
                        _that.betdatab1_1[q].data1[j],
                        "name"
                    );
                }
            } else {
                for (let j = 0; j < _that.betdatab1_1[q].data1.length; j++) {
                    _that.setpoint(
                        p.betdatab1_1.data2,
                        _that.betdatab1_1[q].data1[j],
                        "name"
                    );
                }
            }
        }
        for (let q = 0; q < _that.betdatab2_1.data1.length; q++) {
            _that.setpoint(p.betdatab2_1.data1, _that.betdatab2_1.data1[q], "numb");
        }
        for (let q = 0; q < _that.betdatab2_1.data2.length; q++) {
            _that.setpoint(p.betdatab2_1.data2, _that.betdatab2_1.data2[q], "name");
        }
        for (let i = 0; i < 4; i++) {
            let d = _that.zhengma[i];
            for (let q = 0; q < d.data1.length; q++) {
                _that.setpoint(p.betdatab2_1.data1, d.data1[q], "numb");
            }
            for (let q = 0; q < d.data2.length; q++) {
                _that.setpoint(p.zhengma.data2, d.data2[q], "name");
            }
        }
        for (let q = 0; q < _that.betdatab7_1.length; q++) {
            _that.betdatab7_1[q].value1.point = p.longhu.long.point;
            _that.betdatab7_1[q].value1.step = p.longhu.long.step;
            _that.betdatab7_1[q].value2.point = p.longhu.hu.point;
            _that.betdatab7_1[q].value2.step = p.longhu.hu.step;
        }
        for (let q = 0; q < _that.bettatab8_1.length; q++) {
            _that.setpoint(p.bettatab8_1, _that.bettatab8_1[q], "numb");
        }
    }

    setpoint(data, d, name) {
        if (d[name] !== null) {
            for (let t = 0; t < data.length; t++) {
                if (String(data[t][name]) === String(d[name])) {
                    d.point = data[t].point;
                    d.step = data[t].step;
                    return;
                }
            }
        }
    }



    // 滑块左侧递减事件
    rangevaluelessen() {
        if (this.transfer.user_rangevalue > 0) {
            this.transfer.user_rangevalue -= this.transfer.user_rastep;
        }
    }
    // 滑块左侧递加事件
    rangevalueadd() {
        if (this.transfer.user_rangevalue < this.transfer.user_odds) {
            this.transfer.user_rangevalue += this.transfer.user_rastep;
        }
    }
    // 切换玩法事件 /整合/龙虎斗/全五中一
    togtype(i) {
        if (this.type !== i) {
            this.reset();
            this.type = i;
        }
    }
    // 切换一般 /快捷 事件
    tabclick(i) {
        if (this.selectbtnvalue === i) {
            return;
        }
        if (i === 0) {
            this.selectbtnvalue = 0;
            this.inputshow = true;
            this.reset();
        }
        if (i === 1) {
            this.selectbtnvalue = 1;
            this.inputshow = false;
            this.reset();
        }
        if (i === 2) {
            this.transfer.Credit_setnumb = true;
        }
    }



    close() {
        let p = this.popup;
        p.shade.show = false;
        p.sub.show = false;
        // p.note.show = false;
    }
    // 提交窗口触发事件 d为提交数据
    SUB(d) {
        let p = this.popup;
        this.subdata = d;
        this.setfixed(p.sub, 800, 470);
        p.sub.scale = false;
        p.sub.show = true;
        p.shade.show = true;
        setTimeout(() => {
            p.sub.scale = true;
        }, 10);
    }
    setfixed(t, w, h) {
        let WIDTH = document.body.clientWidth;
        let HEIGHT = document.body.clientHeight;
        t.left = (WIDTH - w) / 2 < 0 ? 0 : (WIDTH - w) / 2;
        t.top = (HEIGHT - h) / 2 < 10 ? 10 : (HEIGHT - h) / 2;
    }
    // 弹窗拖动事件
    popmousedown(e, p) {
        let _that = this;
        let t = _that.popup[p];
        let ev = e || event;
        t.drag = true;
        t.dragleft = ev.clientX - t.left;
        t.dragtop = ev.clientY - t.top;
    }
    popmouseup(e, p) {
        let _that = this;
        let t = _that.popup[p];
        t.drag = false;
    }
    popmousmove(e, p) {
        let _that = this;
        let t = _that.popup[p];
        if (t.drag) {
            let ev = e || event;
            t.left = ev.clientX - t.dragleft;
            t.top = ev.clientY - t.dragtop;
        }
    }





    // 输入框获取焦点事件
    inmoneyfoc(e, i) {
        this.curinpt = i;
        this.setposition(e);
    }

    //页面输入框焦点离开后隐藏金额选择框方法
    inmoneyblur() {
        // 必须延迟，不然点击不到选择框
        setTimeout(() => {
            if (!this.delay) {
                this.boxshow = false;
            }
        }, 200);
    }
    // 获取选择框显示位置方法
    setposition(e) {
        this.delay = true;
        let box = this.boxposition;
        box.x = e.target.offsetLeft - 4 + "px";
        if (this.curinpt == this.setallmoney) {
            box.y = e.target.offsetTop + 30 + "px";
        } else {
            box.y = e.target.offsetTop + 22 + "px";
        }
        // 延迟是避免切换输入框后 显示的选择框被延迟的离开焦点事件影响又隐藏
        setTimeout(() => {
            this.boxshow = true;
            this.delay = false;
        }, 200);
    }
    // 选择框点击选项方法，赋值给当前操作的输入框
    optinclick(i) {
        if (this.curinpt === this.setallmoney) {
            let v = i;
            this.amend(v, true);
        }
        this.curinpt.value = i;
        this.boxshow = false;
    }




    // 重置当前页面所有的输入框
    reset() {
        let v = "";
        this.amend(v);
        this.setallmoney.value = "";
    }
    // 快捷选项下的输入框值改变后的方法，
    allchange() {
        let v = this.setallmoney.value;
        this.amend(v, true);
    }

    // 设置全部数据金额
    amend(v, bol = false) {
        if (this.type === 8) {
            let d = this.bettatab8_1;
            this.setvalue(d, v, bol);
        }
        if (this.type === 7) {
            let d = this.betdatab7_1;
            for (let q = 0; q < d.length; q++) {
                d[q].value1.value = this.selectbtnvalue === 1 ? (d[q].value1.checked ? v : "") : v;
                d[q].value2.value = this.selectbtnvalue === 1 ? (d[q].value2.checked ? v : "") : v;
                d[q].value1.checked = bol ? d[q].value1.checked : false;
                d[q].value2.checked = bol ? d[q].value2.checked : false;
            }
        }
        if (
            this.type === 3 ||
            this.type === 4 ||
            this.type === 5 ||
            this.type === 6
        ) {
            let n = this.type - 3;
            let d = this.zhengma[n].data1;
            let b = this.zhengma[n].data2;
            this.setvalue(d, v, bol);
            this.setvalue(b, v, bol);
        }
        if (this.type === 2) {
            let d = this.betdatab2_1;
            this.setvalue(d.data1, v, bol);
            this.setvalue(d.data2, v, bol);
        }
        if (this.type == 1) {
            let d = this.betdatab1_1;
            for (let w = 0; w < d.length; w++) {
                this.setvalue(d[w].data1, v, bol);
            }
        }
    }

    // 设置单元数据金额
    setvalue(d, v, bol) {
        if (d) {
            for (let q = 0; q < d.length; q++) {
                if (d[q] instanceof Array) {
                    for (let w = 0; w < d[q].length; w++) {
                        if (d[q][w].numb !== null && d[q][w].name !== null) {
                            d[q][w].value = this.selectbtnvalue === 1 ? (d[q][w].checked ? v : "") : v;
                            d[q][w].checked = bol ? d[q][w].checked : false;
                        }
                    }
                } else {
                    if (d[q].numb !== null && d[q].name !== null) {
                        d[q].value = this.selectbtnvalue === 1 ? (d[q].checked ? v : "") : v;
                        d[q].checked = bol ? d[q].checked : false;
                    }
                }
            }
        }
    }

    rapid(item) {
        if (item.numb === null || item.name === null) {
            return;
        }
        if (this.selectbtnvalue === 1) {
            item.checked = !item.checked
            item.value = item.checked ? this.setallmoney.value : "";
        }
    }

    // 限制输入框只能输入数字
    changereg() {
        let v = this.curinpt;
        v.value = v.value.toString().replace(/\D/g, "");
        if (Number(v.value) === 0 && v.value !== "") {
            v.value = 0;
        }
        if (Number(v.value) > 0) {
            v.value = Number(v.value);
        }
    }





    // 确认提交按钮事件
    sub() {
        let data = [];
        if (this.type == 8) {
            let d = this.bettatab8_1;
            let title = this.typedata[this.type - 1].name;
            this.setsubdata(d, data, title);
        }
        if (this.type == 7) {
            let d = this.betdatab7_1;
            for (let i = 0; i < d.length; i++) {
                if (Number(d[i].value1.value) > 0) {
                    let l = data.length;
                    data[l] = Object.assign({}, this.subob);
                    data[l].type = this.typedata[this.type - 1].name;
                    data[l].ball = d[i].title;
                    data[l].number = "龙";
                    data[l].point = parseFloat(
                        (d[i].value1.point + d[i].value1.step * this.transfer.user_rangevalue).toFixed(3)
                    );
                    data[l].money = d[i].value1.value;
                }
                if (Number(d[i].value2.value) > 0) {
                    let l = data.length;
                    data[l] = Object.assign({}, this.subob);
                    (data[l].type = this.typedata[this.type - 1].name),
                    (data[l].ball = d[i].title);
                    data[l].number = "虎";
                    data[l].point = parseFloat(
                        (d[i].value2.point + d[i].value2.step * this.transfer.user_rangevalue).toFixed(3)
                    );
                    data[l].money = d[i].value2.value;
                }
            }
        }
        if (
            this.type === 2 ||
            this.type === 3 ||
            this.type === 4 ||
            this.type === 5 ||
            this.type === 6
        ) {
            let d;
            let b;
            if (this.type === 2) {
                d = this.betdatab2_1.data1;
                b = this.betdatab2_1.data2;
            } else {
                d = this.zhengma[this.type - 3].data1;
                b = this.zhengma[this.type - 3].data2;
            }
            let title = this.typedata[this.type - 1].name;
            this.setsubdata(d, data, title);
            this.setsubdata(b, data, title);
        }
        if (this.type === 1) {
            let point = (1.8 + (0.156 / 7.8) * this.transfer.user_rangevalue).toFixed(3);
            let d = this.betdatab1_1;
            for (let i = 0; i < d.length; i++) {
                let d1 = d[i].data1;
                let title = this.typedata[this.type - 1].name + " - " + d[i].title;
                this.setsubdata(d1, data, title);
            }
        }
        if (data.length > 0) {
            this.submoney = 0;
            for (let i = 0; i < data.length; i++) {
                this.submoney += Number(data[i].money);
            }
            this.SUB(data);
            return false;
        } else {
            // ===此处提示完成投注内容提示
            if (this.selectbtnvalue === 1) {
                if (this.setallmoney.value === "") {
                    this.POPNOTE({
                        msg: '请填写下注金额！'
                    });
                } else {
                    this.POPNOTE({
                        msg: '请选择号码！'
                    });
                }
            } else {
                this.POPNOTE({
                    msg: '请完成投注内容！'
                });
            }
            return false;
        }
    }

    //设置单元数据提交
    setsubdata(d, data, str) {
        for (let q = 0; q < d.length; q++) {
            if (d[q].numb !== null && d[q].name !== null) {
                if (Number(d[q].value) > 0) {
                    let l = data.length;
                    data[l] = Object.assign({}, this.subob);
                    if (d[q].numb !== undefined) {
                        data[l].number = d[q].numb.toString();
                    }
                    if (d[q].name !== undefined) {
                        data[l].ball = d[q].name;
                    }
                    data[l].type = str;
                    data[l].point = parseFloat(
                        (d[q].point + d[q].step * this.transfer.user_rangevalue).toFixed(3)
                    );
                    data[l].money = d[q].value;
                }
            }
        }
    }
    submit() {
        this.close();
        this.reset();
        this.POPNOTE({
            msg: "提交订单成功！"
        });
        setTimeout(() => {
            this.close();
        }, 2000);
    }

    linkrouter(t) {
        this.router.navigate([t]);
    }
    routlink() {
        let str;
        this.route.params.subscribe(data => (str = data.id));
        this.router.navigate(["/lottery/officialexf", str]);
    }





    // 设置整合 球的数据
    setball() {
        let data = [];
        for (let q = 1; q < 12; q++) {
            let o = Object.assign({}, this.BALL);
            o.numb = q;
            data.push(o);
        }
        data[data.length] = {
            numb: null,
            value: "",
            point: 0,
            step: 0,
            checked: false
        };
        return data;
    }
    // 设置空球数据
    setempty() {
        let data = [];
        for (let i = 0; i < 10; i++) {
            let o = Object.assign({}, this.BALL);
            o.numb = null;
            data.push(o);
        }
        return data;
    }
    setbigorsmall() {
        let data = [];
        let d = ["大", "小", "单", "双", null, null];
        for (let i = 0; i < d.length; i++) {
            data[i] = {
                name: d[i],
                title: i < 2 ? '大小' : (i < 4 ? '单双' : ''),
                value: "",
                point: 0,
                step: 0,
                checked: false
            };
        }
        return data;
    }
    // 设置正码数据
    setzhengma(n) {
        let data = {
            data1: this.setball(),
            data2: [{
                    name: "上",
                    title: "上下",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "上下和",
                    title: "上下",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "下",
                    title: "上下",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "总单",
                    title: "总和单双",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "奇",
                    title: "奇偶",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "奇偶和",
                    title: "奇偶",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "偶",
                    title: "奇偶",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "总双",
                    title: "总和单双",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "大",
                    title: `正码${n}大小`,
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "单",
                    title: `正码${n}单双`,
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "总大",
                    title: "总和大小",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "总尾大",
                    title: "总尾大小",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "小",
                    title: `正码${n}大小`,
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "双",
                    title: `正码${n}单双`,
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "总小",
                    title: "总和大小",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                },
                {
                    name: "总尾小",
                    title: "总尾大小",
                    value: "",
                    point: 0,
                    step: 0,
                    checked: false
                }
            ]
        };
        return data;
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
            title: '操作提示', //title不传值默认为 ‘操作提示’
            msg: ' ',
            event: false,
            show: true,
        }
        if (typeof fn === 'function') {
            this.NOTARIZE = fn;
            o.event = true;
        } else {
            this.NOTARIZE = () => {
                return
            };
        }
        this.popoutInfo = Object.assign({}, o, data);
    }
}