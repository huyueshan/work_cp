import {
    Component,
    OnInit,
    OnDestroy,
    AfterViewInit,
    ViewChild,
    ElementRef
} from "@angular/core";
import {
    Router,
    Route,
    ActivatedRoute,
    Params,
    NavigationEnd
} from "@angular/router";
import userModel from "../../../../status/user.model";
import {
    Base
} from "../../../../factory/base.model";
// import "rxjs/add/operator/filter";

@Component({
    selector: "app-pk10",
    templateUrl: "./pk10.component.html",
    styleUrls: ["./pk10.component.scss"]
})
export class Pk10Component implements OnInit, OnDestroy, AfterViewInit {
    loadpage = false;
    public cpnav = {
        style: "credit",
        prev: "20180517022",
        prevball: [2, 5, 9, 0, 8],
        next: "20180517023",
        time: ""
    };
    public odds = 7.8; // 赔率
    public rastep = 7.8; // 滑动条步长
    public rangevalue = 7.8; //绑定滑动条数据
    public delay = true; // 选择金额框判断
    public boxshow = false; // 选择金额框显示判断
    public boxvalid = true; // 选择金额框禁用判断
    public type = 1; // 控制 玩法
    public curinpt; //当前操作的金额输入框
    public selectbtnvalue = 0; //控制 一般 、快捷按钮数据
    public inputshow = true;
    public btolast = 0; //控制 前中后选择
    public selmoeny = [100, 200, 500, 1000, 5000]; // 活动选择金额框数据
    public routeid;
    public kxtip = false; // 快选金额保存提示显示控制
    public kxtipstr; // 快选金额提示信息
    public newpoint = false; // 绑定提交时的最新赔率
    public BALL = {
        numb: 0,
        value: "",
        point: 0,
        step: 0,checked:false,
    };
    public BALL2 = {
        name: "",
        value: "",
        point: 0,
        step: 0,checked:false,
    };
    public typedata = [{
            id: 1,
            name: "整合"
        },
        {
            id: 2,
            name: "第1-10名"
        },
        {
            id: 3,
            name: "冠亚和值"
        },
        {
            id: 4,
            name: "冠亚组合"
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
        betdata1: {
            data1: [{
                    name: "冠亚大",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "冠亚小",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "冠亚单",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "冠亚双",
                    point: 1.8,
                    step: 0.156 / 7.8
                }
            ],
            data2: [{
                    name: "大",
                    point: 1.8,
                    step: 0.02
                },
                {
                    name: "小",
                    point: 1.8,
                    step: 0.02
                },
                {
                    name: "单",
                    point: 1.8,
                    step: 0.02
                },
                {
                    name: "双",
                    point: 1.8,
                    step: 0.02
                }
            ],
            data3: [{
                    name: "1v10龙:",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "2v9龙:",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "3v8龙:",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "4v7龙:",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "5v6龙:",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "1v10虎:",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "2v9虎:",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "3v8虎:",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "4v7虎:",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "5v6虎:",
                    point: 1.8,
                    step: 0.156 / 7.8
                }
            ]
        },
        betdata2: {
            data1: [{
                    numb: 1,
                    point: 9,
                    step: 0.1
                },
                {
                    numb: 2,
                    point: 9,
                    step: 0.1
                },
                {
                    numb: 3,
                    point: 9,
                    step: 0.1
                },
                {
                    numb: 4,
                    point: 9,
                    step: 0.1
                },
                {
                    numb: 5,
                    point: 9,
                    step: 0.1
                },
                {
                    numb: 6,
                    point: 9,
                    step: 0.1
                },
                {
                    numb: 7,
                    point: 9,
                    step: 0.1
                },
                {
                    numb: 8,
                    point: 9,
                    step: 0.1
                },
                {
                    numb: 9,
                    point: 9,
                    step: 0.1
                },
                {
                    numb: 10,
                    point: 9,
                    step: 0.1
                }
            ]
        },
        betdata3: {
            data1: [{
                    numb: 3,
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    numb: 4,
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    numb: 5,
                    point: 22.005,
                    step: 1.755 / 7.8
                },
                {
                    numb: 6,
                    point: 22.005,
                    step: 1.755 / 7.8
                },
                {
                    numb: 7,
                    point: 13.5,
                    step: 1.17 / 7.8
                },
                {
                    numb: 8,
                    point: 13.5,
                    step: 1.17 / 7.8
                },
                {
                    numb: 9,
                    point: 10.125,
                    step: 0.877 / 7.8
                },
                {
                    numb: 10,
                    point: 10.125,
                    step: 0.877 / 7.8
                },
                {
                    numb: 11,
                    point: 8.1,
                    step: 0.685 / 7.8
                },
                {
                    numb: 12,
                    point: 10.125,
                    step: 0.877 / 7.8
                },
                {
                    numb: 13,
                    point: 10.125,
                    step: 0.877 / 7.8
                },
                {
                    numb: 14,
                    point: 13.5,
                    step: 1.17 / 7.8
                },
                {
                    numb: 15,
                    point: 13.5,
                    step: 1.17 / 7.8
                },
                {
                    numb: 16,
                    point: 20.25,
                    step: 1.755 / 7.8
                },
                {
                    numb: 17,
                    point: 20.25,
                    step: 1.755 / 7.8
                },
                {
                    numb: 18,
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    numb: 19,
                    point: 40.5,
                    step: 3.51 / 7.8
                }
            ],
            data2: [{
                    name: "大",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "小",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "单",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "双",
                    point: 1.8,
                    step: 0.156 / 7.8
                }
            ]
        },
        betdata4: {
            data1: [{
                    name: "1-2",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "1-3",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "1-4",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "1-5",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "1-6",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "1-7",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "1-8",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "1-9",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "1-10",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "2-3",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "2-4",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "2-5",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "2-6",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "2-7",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "2-8",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "2-9",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "2-10",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "3-4",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "3-5",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "3-6",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "3-7",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "3-8",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "3-9",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "3-10",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "4-5",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "4-6",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "4-7",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "4-8",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "4-9",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "4-10",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "5-6",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "5-7",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "5-8",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "5-9",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "5-10",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "6-7",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "6-8",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "6-9",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "6-10",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "7-8",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "7-9",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "7-10",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "8-9",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "8-10",
                    point: 40.5,
                    step: 3.51 / 7.8
                },
                {
                    name: "9-10",
                    point: 40.5,
                    step: 3.51 / 7.8
                }
            ]
        }
    };
    public pkdata1_1 = [
        {
            name: "冠亚大",
            title: "冠亚和值大小",
            value: "",
            point: 0,
            step: 0,checked:false,
        },
        {
            name: "冠亚小",
            title: "冠亚和值大小",
            value: "",
            point: 0,
            step: 0,checked:false,
        },
        {
            name: "冠亚单",
            title: "冠亚和值单双",
            value: "",
            point: 0,
            step: 0,checked:false,
        },
        {
            name: "冠亚双",
            title: "冠亚和值单双",
            value: "",
            point: 0,
            step: 0,checked:false,
        }
    ];

    public betdatam = [
        {
            title: "冠军",
            data1: this.setbigorsmall()
        },
        {
            title: "亚军",
            data1: this.setbigorsmall()
        },
        {
            title: "第三名",
            data1: this.setbigorsmall()
        },
        {
            title: "第四名",
            data1: this.setbigorsmall()
        },
        {
            title: "第五名",
            data1: this.setbigorsmall()
        },
        {
            title: "第六名",
            data1: this.setbigorsmall()
        },
        {
            title: "第七名",
            data1: this.setbigorsmall()
        },
        {
            title: "第八名",
            data1: this.setbigorsmall()
        },
        {
            title: "第九名",
            data1: this.setbigorsmall()
        },
        {
            title: "第十名",
            data1: this.setbigorsmall()
        }
    ];
    public pkdata1_3 = [{
            name: "1v10龙:",
            title: "冠军VS第十名：龙",
            value: "",
            point: 0,
            step: 0,checked:false,
        },
        {
            name: "2v9龙:",
            title: "亚军VS第九名：龙",
            value: "",
            point: 0,
            step: 0,checked:false,
        },
        {
            name: "3v8龙:",
            title: "第三名VS第八名：龙",
            value: "",
            point: 0,
            step: 0,checked:false,
        },
        {
            name: "4v7龙:",
            title: "第四名VS第七名：龙",
            value: "",
            point: 0,
            step: 0,checked:false,
        },
        {
            name: "5v6龙:",
            title: "第五名VS第六名：龙",
            value: "",
            point: 0,
            step: 0,checked:false,
        },
        {
            name: "1v10虎:",
            title: "冠军VS第十名：虎",
            value: "",
            point: 0,
            step: 0,checked:false,
        },
        {
            name: "2v9虎:",
            title: "亚军VS第九名：虎",
            value: "",
            point: 0,
            step: 0,checked:false,
        },
        {
            name: "3v8虎:",
            title: "第三名VS第八名：虎",
            value: "",
            point: 0,
            step: 0,checked:false,
        },
        {
            name: "4v7虎:",
            title: "第四名VS第七名：虎",
            value: "",
            point: 0,
            step: 0,checked:false,
        },
        {
            name: "5v6虎:",
            title: "第五名VS第六名：虎",
            value: "",
            point: 0,
            step: 0,checked:false,
        }
    ];
    public betdata2_1 = [
        {
            title: "冠军",
            data: this.setball()
        },
        {
            title: "亚军",
            data: this.setball()
        },
        {
            title: "第三名",
            data: this.setball()
        },
        {
            title: "第四名",
            data: this.setball()
        },
        {
            title: "第五名",
            data: this.setball()
        },
        {
            title: "第六名",
            data: this.setball()
        },
        {
            title: "第七名",
            data: this.setball()
        },
        {
            title: "第八名",
            data: this.setball()
        },
        {
            title: "第九名",
            data: this.setball()
        },
        {
            title: "第十名",
            data: this.setball()
        }
    ];
    public betdata3_1 = [
        [{
                numb: 3,
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: 4,
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: 5,
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: 6,
                value: "",
                point: 0,
                step: 0,checked:false,
            }
        ],
        [{
                numb: 7,
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: 8,
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: 9,
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: 10,
                value: "",
                point: 0,
                step: 0,checked:false,
            }
        ],
        [{
                numb: 11,
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: 12,
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: 13,
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: 14,
                value: "",
                point: 0,
                step: 0,checked:false,
            }
        ],
        [{
                numb: 15,
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: 16,
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: 17,
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: 18,
                value: "",
                point: 0,
                step: 0,checked:false,
            }
        ],
        [
            {
                numb: 19,
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: null,
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: null,
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: null,
                value: "",
                point: 0,
                step: 0,checked:false,
            },
        ]
    ];
    public betdata3_2 = [{
            name: "大",
            title: "大小",
            value: "",
            point: 0,
            step: 0,checked:false,
        },
        {
            name: "小",
            title: "大小",
            value: "",
            point: 0,
            step: 0,checked:false,
        },
        {
            name: "单",
            title: "单双",
            value: "",
            point: 0,
            step: 0,checked:false,
        },
        {
            name: "双",
            title: "单双",
            value: "",
            point: 0,
            step: 0,checked:false,
        },
        {
            name: null,
            title: "",
            value: "",
            point: 0,
            step: 0,checked:false,
        }
    ];
    public betdata4_1 = this.setvs();

    // =弹窗对话框数据

    public popup = {
        // 遮罩层
        shade: {
            show: false,
            w: 0,
            h: 0
        },
        // 设置快捷金额
        setnumb: {
            show: false,
            drag: false,
            dragleft: 0,
            dragtop: 0,
            value: "",
            left: 200,
            top: 50,
            scale: false,
            data: []
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
    public notetip = [];
    public subdata = [];
    public submoney = 0;
    public subob = {
        channel: "pk10",
        type: "-",
        id: "20180808",
        ball: "-",
        number: "-",
        point: "-",
        money: "-"
    };
    // 传给弹窗组件数据
    public  popoutInfo={
        title:'string',
        msg:'string',
        event: false,
        show: false,
    }
    constructor(
        private el: ElementRef,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.loadpage = userModel.platform;

        if (!Base.Store.get("selmoeny")) {
            Base.Store.set("selmoeny", this.selmoeny, true);
        } else {
            let arr = JSON.parse(JSON.stringify(Base.Store.get("selmoeny")));
            this.selmoeny = arr;
        }

        this.popup.shade.w = screen.width;
        this.popup.shade.h = screen.height;

        this.route.params.subscribe(data => {
            this.type = 1;
            if (this.selectbtnvalue===0) {
                this.reset();
            }
            this.tabclick(0);
            this.routeid = data.id;
            this.subob.channel = "PK10 - " + this.routeid;
        });
        // 设置各投注项目赔率
        this.POINT();
    }
    ngAfterViewInit() {}
    ngOnDestroy() {}
    // 设置赔率
    POINT() {
        let _that = this;
        let p = _that.POINt_data;
        let d4 = this.betdata4_1;
        for (let q = 0; q < d4.length; q++) {
            this.setpoint(p.betdata4.data1, d4[q], "name");
        }
        let d3 = this.betdata3_1;
        let d3b = this.betdata3_2;
        for (let q = 0; q < d3.length; q++) {
            for (let j = 0; j < d3[q].length; j++) {
                this.setpoint(p.betdata3.data1, d3[q][j], "numb");
            }
        }
        for (let q = 0; q < d3b.length; q++) {
            this.setpoint(p.betdata3.data2, d3b[q], "name");
        }
        let d2 = this.betdata2_1;
        for (let q = 0; q < d2.length; q++) {
            for (let j = 0; j < d2.length; j++) {
                this.setpoint(p.betdata2.data1, d2[q].data[j], "numb");
            }
        }
        let d1a = this.pkdata1_1;
        for (let q = 0; q < d1a.length; q++) {
            this.setpoint(p.betdata1.data1, d1a[q], "name");
        }
        let d1b = this.betdatam;
        for (let w = 0; w < d1b.length; w++) {
            for (let j = 0; j < d1b[w].data1.length; j++) {
                this.setpoint(p.betdata1.data2, d1b[w].data1[j], "name");
            }
        }
        let d1c = this.pkdata1_3;
        for (let q = 0; q < d1c.length; q++) {
            this.setpoint(p.betdata1.data3, d1c[q], "name");
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

    // 禁用快选活动框事件
    setboxvalid() {
        this.boxvalid = !this.boxvalid;
        this.kxtipstr = this.boxvalid ? "快捷金额已开启" : "快捷金额已禁用";
        this.kxtip = true ;
        setTimeout(() => {
            this.kxtip = false ;
        }, 2000);
    }
    // 滑块左侧递减事件
    rangevaluelessen() {
        if (this.rangevalue > 0) {
            this.rangevalue -= this.rastep;
        }
    }
    // 滑块左侧递加事件
    rangevalueadd() {
        if (this.rangevalue < this.odds) {
            this.rangevalue += this.rastep;
        }
    }
    // 切换玩法事件 /整合/龙虎斗/全五中一
    togtype(i) {
        if (this.type!==i) {
            this.reset();
            this.type = i;
        }
    }
    // 切换一般 /快捷 事件
    tabclick(i) {
        if (this.selectbtnvalue===i) {
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
            let p = this.popup;
            let d = this.popup.setnumb.data;
            for (let i = 0; i < this.selmoeny.length; i++) {
                d[i] = {
                    value: this.selmoeny[i]
                };
            }
            this.SETM();
        }
    }
    //====快选金额事件开始=============
    savenum() {
        let d = [];
        let p = this.popup.setnumb.data;
        for (let i = 0; i < p.length; i++) {
            d.push(Number(p[i].value));
        };
        d.sort((a,b)=>{return a-b});
        Base.Store.set("selmoeny", d, true);
        this.selmoeny = d;
        this.kxtipstr = '保存成功！'
        this.kxtip = true ;
        setTimeout(() => {
            this.kxtip = false ;
        }, 2000);
    }
    numbdel() {
        this.popup.setnumb.value = "";
    }
    setnumbdel(i) {
        let p = this.popup;
        p.setnumb.data.splice(i, 1);
    }
    addnumb() {
        let p = this.popup;
        let n = Number(p.setnumb.value);
        if (n > 0) {
            let l = p.setnumb.data.length;
            p.setnumb.data[l] = {
                value: n
            };
        }
        p.setnumb.value = "";
    }
    changeregset(i) {
        let p = this.popup;
        if (i === -1) {
            p.setnumb.value = p.setnumb.value.replace(/\D/g, "");
        } else {
            p.setnumb.data[i].value = p.setnumb.data[i].value.replace(/\D/g, "");
        }
    }
    //====快选金额事件end=============
    // 提示信息窗口关闭事件
    close() {
        let p = this.popup;
        p.setnumb.show = false;
        p.shade.show = false;
        p.sub.show = false;
    }
    // 提示信息窗口触发事件 index为提示信息notetip的index或者直接传字符串
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
    // 设置快捷金额窗口
    SETM() {
        let p = this.popup;
        this.setfixed(p.setnumb, 260, 410);
        p.setnumb.scale = false;
        p.setnumb.show = true;
        p.shade.show = true;
        setTimeout(() => {
            p.setnumb.scale = true;
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
            box.y = e.target.offsetTop + 40 + "px";
        } else {
            box.y = e.target.offsetTop + 30 + "px";
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
            this.amend(i,true);
        }
        this.curinpt.value = i;
        this.boxshow = false;
    }
    // 重置当前页面所有的输入框
    reset() {
        this.amend("");
        this.setallmoney.value = "";
    }
    // 快捷选项下的输入框值改变后的方法，
    allchange() {
        let v = this.setallmoney.value;
        this.amend(v,true);
    }

    amend(v, bol=false) {
        if (this.type === 4) {
            let d = this.betdata4_1;
            this.setvalue(d, v, bol);
        }
        if (this.type == 3) {
            let d = this.betdata3_1;
            let b = this.betdata3_2;
            this.setvalue(d, v, bol);
            this.setvalue(b, v, bol);
        }
        if (this.type == 2) {
            let d = this.betdata2_1;
            for (let q = 0; q < d.length; q++) {
                this.setvalue(d[q].data, v, bol);
            }
        }
        if (this.type == 1) {
            let d = this.betdatam;
            for (let w = 0; w < d.length; w++) {
                this.setvalue(d[w].data1, v, bol);
            }
            this.setvalue(this.pkdata1_1, v, bol);
            this.setvalue(this.pkdata1_3, v, bol);
        }
    }

    // 设置单元数据金额
    setvalue(d, v,bol) {
        if (d) {
            for (let q = 0; q < d.length; q++) {
                if (d[q] instanceof Array) {
                    for (let w = 0; w < d[q].length; w++) {
                        if (d[q][w].numb !== null && d[q][w].name !== null) {
                            d[q][w].value = this.selectbtnvalue===1?(d[q][w].checked?v:""):v;
                            d[q][w].checked = bol?d[q][w].checked:false;
                        }
                    }
                } else {
                    if (d[q].numb !== null && d[q].name !== null) {
                        d[q].value = this.selectbtnvalue===1?(d[q].checked?v:""):v;
                        d[q].checked = bol?d[q].checked:false;
                    }
                }
            }
        }
    }
    
    rapid(item){
        if(item.numb===null||item.name===null){
            return;
        }
        if(this.selectbtnvalue===1){
            item.checked = !item.checked
            item.value = item.checked?this.setallmoney.value:"";
        }
    }

    // 限制输入框只能输入数字
    changereg() {
        let v = this.curinpt;
        v.value = v.value.replace(/\D/g, "");
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
        if (this.type == 4) {
            let d = this.betdata4_1;
            let title = this.typedata[this.type - 1].name;
            this.setsubdata(d, data, title);
        }
        if (this.type == 3) {
            let d = this.betdata3_1;
            let d2 = this.betdata3_2;
            let title = this.typedata[this.type - 1].name;
            for (let i = 0; i < d.length; i++) {
                this.setsubdata(d[i], data, title);
            }
            this.setsubdata(d2, data, title);
        }
        if (this.type == 2) {
            let d = this.betdata2_1;
            for (let i = 0; i < d.length; i++) {
                let title = this.typedata[this.type - 1].name + " - " + d[i].title;
                this.setsubdata(d[i].data, data, title);
            }
        }
        if (this.type == 1) {
            let p = this.pkdata1_1;
            let d = this.betdatam;
            let k = this.pkdata1_3;
            let title = this.typedata[this.type - 1].name + " - 冠、亚军和";
            this.setsubdata(p, data, title);
            for (let i = 0; i < d.length; i++) {
                let d1 = d[i].data1;
                let title = this.typedata[this.type - 1].name + " - " + d[i].title;
                this.setsubdata(d1, data, title);
            }
            title = this.typedata[this.type - 1].name;
            this.setsubdata(k, data, title);
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
                if (this.setallmoney.value==="") {
                    this.POPNOTE({msg:'请填写下注金额！'});
                }else{
                    this.POPNOTE({msg:'请选择号码！'});
                }
            }else{
                this.POPNOTE({msg:'请完成投注内容！'});
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
                        (d[q].point + d[q].step * this.rangevalue).toFixed(3)
                    );
                    data[l].money = d[q].value;
                }
            }
        }
    }
    submit() {
        this.close();
        this.reset();
        this.POPNOTE({msg:'提交订单成功！'});
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
        this.router.navigate(["/lottery/officialpk10", str]);
    }

    // 设置整合 球的数据
    setball() {
        let data = [];
        for (let q = 1; q <= 10; q++) {
            let o = Object.assign({}, this.BALL);
            o.numb = q;
            data.push(o);
        }
        return data;
    }
    setbigorsmall() {
        let data = [];
        let d = ["大", "小", "单", "双"];
        for (let i = 0; i < d.length; i++) {
            data[i] = {
                name: d[i],
                title: i<2?'大小':'单双',
                value: "",
                point: 0,
                step: 0,checked:false,
            };
        }
        return data;
    }
    setvs() {
        let data = [];
        for (let q = 1; q <= 10; q++) {
            for (let w = q + 1; w <= 10; w++) {
                let o = Object.assign({}, this.BALL2);
                o.name = q + "-" + w;
                data.push(o);
            }
        }
        return data;
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
}