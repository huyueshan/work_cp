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
    selector: "app-gxk10",
    templateUrl: "./gxk10.component.html",
    styleUrls: ["./gxk10.component.scss"]
})
export class Gxk10Component implements OnInit, OnDestroy, AfterViewInit {
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
    public newpoint = false; // 绑定提交时的最新赔率
    public BALL = {
        numb: 0,
        value: "",
        red: false,
        blue: false,
        green: false,
        checked: false,
        point: 0,
        step: 0,
    };
    public typedata = [
        {
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
    public contenttoptitle3 = [, , , , , , ];
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
                    name: "特单",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "特双",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "特尾大",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "特尾小",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "特大",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "特小",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "合单",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "合双",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
            ],
            data2: [{
                    name: "单",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "双",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "尾大",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "尾小",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
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
                    name: "合单",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "合双",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
            ],
            data3: [{
                    name: "总单",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "总双",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "总尾大",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "总尾小",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "总大",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "总小",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
            ],

        },
        betdatab2_1: {
            data1: [{
                    numb: 1,
                    point: 18,
                    step: 1.56 / 7.8
                },
                {
                    numb: 2,
                    point: 18,
                    step: 1.56 / 7.8
                },
                {
                    numb: 3,
                    point: 18,
                    step: 1.56 / 7.8
                },
                {
                    numb: 4,
                    point: 18,
                    step: 1.56 / 7.8
                },
                {
                    numb: 5,
                    point: 18,
                    step: 1.56 / 7.8
                },
                {
                    numb: 6,
                    point: 18,
                    step: 1.56 / 7.8
                },
                {
                    numb: 7,
                    point: 18,
                    step: 1.56 / 7.8
                },
                {
                    numb: 8,
                    point: 18,
                    step: 1.56 / 7.8
                },
                {
                    numb: 9,
                    point: 18,
                    step: 1.56 / 7.8
                },
                {
                    numb: 10,
                    point: 18,
                    step: 1.56 / 7.8
                },
                {
                    numb: 11,
                    point: 18,
                    step: 1.56 / 7.8
                },
                {
                    numb: 12,
                    point: 18,
                    step: 1.56 / 7.8
                },
                {
                    numb: 13,
                    point: 18,
                    step: 1.56 / 7.8
                },
                {
                    numb: 14,
                    point: 18,
                    step: 1.56 / 7.8
                },
                {
                    numb: 15,
                    point: 18,
                    step: 1.56 / 7.8
                },
                {
                    numb: 16,
                    point: 18,
                    step: 1.56 / 7.8
                },
                {
                    numb: 17,
                    point: 18,
                    step: 1.56 / 7.8
                },
                {
                    numb: 18,
                    point: 18,
                    step: 1.56 / 7.8
                },
                {
                    numb: 19,
                    point: 18,
                    step: 1.56 / 7.8
                },
                {
                    numb: 20,
                    point: 18,
                    step: 1.56 / 7.8
                },
                {
                    numb: 21,
                    point: 18,
                    step: 1.56 / 7.8
                },
            ],
            data2: [{
                    name: "红波",
                    value: "",
                    point: 2.354,
                    step: 0.234 / 7.8
                },
                {
                    name: "蓝波",
                    value: "",
                    point: 2.354,
                    step: 0.234 / 7.8
                },
                {
                    name: "绿波",
                    value: "",
                    point: 2.354,
                    step: 0.234 / 7.8
                },
                {
                    name: "上",
                    point: 2.547,
                    step: 0.24 / 7.8
                },
                {
                    name: "上下和",
                    point: 2.365,
                    step: 0.223 / 7.8
                },
                {
                    name: "下",
                    point: 2.547,
                    step: 0.24 / 7.8
                },
                {
                    name: "奇",
                    point: 2.547,
                    step: 0.24 / 7.8
                },
                {
                    name: "奇偶和",
                    point: 2.365,
                    step: 0.223 / 7.8
                },
                {
                    name: "偶",
                    point: 2.547,
                    step: 0.24 / 7.8
                },
                {
                    name: "特单",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "特双",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "特大",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "特小",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "特尾大",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "特尾小",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "总单",
                    point: 1.802,
                    step: 0.157 / 7.8
                },
                {
                    name: "总双",
                    point: 1.796,
                    step: 0.155 / 7.8
                },
                {
                    name: "总大",
                    point: 1.794,
                    step: 0.103 / 7.8
                },
                {
                    name: "总小",
                    point: 1.794,
                    step: 0.103 / 7.8
                },
                {
                    name: "总尾大",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "总尾小",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "福",
                    value: "",
                    point: 3.172,
                    step: 0.312 / 7.8
                },
                {
                    name: "禄",
                    value: "",
                    point: 3.172,
                    step: 0.312 / 7.8
                },
                {
                    name: "寿",
                    value: "",
                    point: 3.172,
                    step: 0.312 / 7.8
                },
                {
                    name: "喜",
                    value: "",
                    point: 3.172,
                    step: 0.312 / 7.8
                },
                {
                    name: "合单",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "合双",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
            ]

        },
        zhengma: {
            data2: [{
                    name: "红波",
                    value: "",
                    point: 2.354,
                    step: 0.234 / 7.8
                },
                {
                    name: "蓝波",
                    value: "",
                    point: 2.354,
                    step: 0.234 / 7.8
                },
                {
                    name: "绿波",
                    value: "",
                    point: 2.354,
                    step: 0.234 / 7.8
                },
                {
                    name: "上",
                    point: 2.547,
                    step: 0.24 / 7.8
                },
                {
                    name: "上下和",
                    point: 2.365,
                    step: 0.223 / 7.8
                },
                {
                    name: "下",
                    point: 2.547,
                    step: 0.24 / 7.8
                },
                {
                    name: "奇",
                    point: 2.547,
                    step: 0.24 / 7.8
                },
                {
                    name: "奇偶和",
                    point: 2.365,
                    step: 0.223 / 7.8
                },
                {
                    name: "偶",
                    point: 2.547,
                    step: 0.24 / 7.8
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
                },
                {
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
                    name: "尾大",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "尾小",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "总单",
                    point: 1.802,
                    step: 0.157 / 7.8
                },
                {
                    name: "总双",
                    point: 1.796,
                    step: 0.155 / 7.8
                },
                {
                    name: "总大",
                    point: 1.794,
                    step: 0.103 / 7.8
                },
                {
                    name: "总小",
                    point: 1.794,
                    step: 0.103 / 7.8
                },
                {
                    name: "总尾大",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "总尾小",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "福",
                    value: "",
                    point: 3.172,
                    step: 0.312 / 7.8
                },
                {
                    name: "禄",
                    value: "",
                    point: 3.172,
                    step: 0.312 / 7.8
                },
                {
                    name: "寿",
                    value: "",
                    point: 3.172,
                    step: 0.312 / 7.8
                },
                {
                    name: "喜",
                    value: "",
                    point: 3.172,
                    step: 0.312 / 7.8
                },
                {
                    name: "合单",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
                {
                    name: "合双",
                    point: 1.8,
                    step: 0.156 / 7.8
                },
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
                point: 2.095,
                step: 0.195
            },
            {
                numb: 2,
                point: 2.095,
                step: 0.195
            },
            {
                numb: 3,
                point: 2.095,
                step: 0.195
            },
            {
                numb: 4,
                point: 2.095,
                step: 0.195
            },
            {
                numb: 5,
                point: 2.095,
                step: 0.195
            },
            {
                numb: 6,
                point: 2.095,
                step: 0.195
            },
            {
                numb: 7,
                point: 2.095,
                step: 0.195
            },
            {
                numb: 8,
                point: 2.095,
                step: 0.195
            },
            {
                numb: 9,
                point: 2.095,
                step: 0.195
            },
            {
                numb: 10,
                point: 2.095,
                step: 0.195
            },
            {
                numb: 11,
                point: 2.095,
                step: 0.195
            },
            {
                numb: 12,
                point: 2.095,
                step: 0.195
            },
            {
                numb: 13,
                point: 2.095,
                step: 0.195
            },
            {
                numb: 14,
                point: 2.095,
                step: 0.195
            },
            {
                numb: 15,
                point: 2.095,
                step: 0.195
            },
            {
                numb: 16,
                point: 2.095,
                step: 0.195
            },
            {
                numb: 17,
                point: 2.095,
                step: 0.195
            },
            {
                numb: 18,
                point: 2.095,
                step: 0.195
            },
            {
                numb: 19,
                point: 2.095,
                step: 0.195
            },
            {
                numb: 20,
                point: 2.095,
                step: 0.195
            },
            {
                numb: 21,
                point: 2.095,
                step: 0.195
            },
        ]
    };

    // 中间快速选择数据
    public kuaitoudata = {
        value: "",
        data1: [{
                name: "红",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.numb % 3 === 1;
                    });
                    return d;
                }
            },
            {
                name: "蓝",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.numb % 3 === 2;
                    });
                    return d;
                }
            },
            {
                name: "绿",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.numb % 3 === 0;
                    });
                    return d;
                }
            }
        ],
        data2: [{
                name: "单",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.numb % 2 === 1;
                    });
                    return d;
                }
            },
            {
                name: "双",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.numb % 2 === 0;
                    });
                    return d;
                }
            },
            {
                name: "大",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.numb >= 11;
                    });
                    return d;
                }
            },
            {
                name: "小",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.numb < 11;
                    });
                    return d;
                }
            },
            {
                name: "合单",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        let arr = String(x.numb).split("");
                        let sum = 0;
                        for (let i = 0; i < arr.length; i++) {
                            sum += Number(arr[i]);
                        }
                        return sum % 2 === 1;
                    });
                    return d;
                }
            },
            {
                name: "合双",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        let arr = String(x.numb).split("");
                        let sum = 0;
                        for (let i = 0; i < arr.length; i++) {
                            sum += Number(arr[i]);
                        }
                        return sum % 2 === 0;
                    });
                    return d;
                }
            }
        ],
        data3: [{
                name: "0头",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        let a = String(x.numb).split("");
                        return a.length === 1;
                    });
                    return d;
                }
            },
            {
                name: "1头",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        let a = String(x.numb).split("");
                        return a.length > 1 && Number(a[0]) === 1;
                    });
                    return d;
                }
            },
            {
                name: "2头",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        let a = String(x.numb).split("");
                        return a.length > 1 && Number(a[0]) === 2;
                    });
                    return d;
                }
            },
            {
                name: "0尾",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        let a = String(x.numb).split("");
                        let len = a.length - 1;
                        return Number(a[len]) === 0;
                    });
                    return d;
                }
            },
            {
                name: "1尾",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        let a = String(x.numb).split("");
                        let len = a.length - 1;
                        return Number(a[len]) === 1;
                    });
                    return d;
                }
            },
            {
                name: "2尾",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        let a = String(x.numb).split("");
                        let len = a.length - 1;
                        return Number(a[len]) === 2;
                    });
                    return d;
                }
            },
            {
                name: "3尾",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        let a = String(x.numb).split("");
                        let len = a.length - 1;
                        return Number(a[len]) === 3;
                    });
                    return d;
                }
            },
            {
                name: "4尾",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        let a = String(x.numb).split("");
                        let len = a.length - 1;
                        return Number(a[len]) === 4;
                    });
                    return d;
                }
            },
            {
                name: "5尾",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        let a = String(x.numb).split("");
                        let len = a.length - 1;
                        return Number(a[len]) === 5;
                    });
                    return d;
                }
            },
            {
                name: "6尾",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        let a = String(x.numb).split("");
                        let len = a.length - 1;
                        return Number(a[len]) === 6;
                    });
                    return d;
                }
            },
            {
                name: "7尾",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        let a = String(x.numb).split("");
                        let len = a.length - 1;
                        return Number(a[len]) === 7;
                    });
                    return d;
                }
            },
            {
                name: "8尾",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        let a = String(x.numb).split("");
                        let len = a.length - 1;
                        return Number(a[len]) === 8;
                    });
                    return d;
                }
            },
            {
                name: "9尾",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        let a = String(x.numb).split("");
                        let len = a.length - 1;
                        return Number(a[len]) === 9;
                    });
                    return d;
                }
            }
        ]
    };
    public betdatab1_1 = [{
            title: "特码",
            data1: [{
                    name: "特单",
                    title:"特码Y单双",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "特双",
                    title:"特码Y单双",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "特尾大",
                    title:"特码Y尾大小",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "特尾小",
                    title:"特码Y尾大小",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "特大",
                    title:"特码Y大小",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "特小",
                    title:"特码Y大小",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "合单",
                    title:"特码Y合数单双",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "合双",
                    title:"特码Y合数单双",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                }
            ]
        },
        {
            title: "正码一",
            data1: this.setbigorsmall('一')
        },
        {
            title: "正码二",
            data1: this.setbigorsmall('二')
        },
        {
            title: "正码三",
            data1: this.setbigorsmall('三')
        },
        {
            title: "正码四",
            data1: this.setbigorsmall('四')
        },
        {
            title: "总和",
            data1: [{
                    name: "总单",
                    title:"Y总和单双",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "总双",
                    title:"Y总和单双",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "总尾大",
                    title:"Y总尾大小",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "总尾小",
                    title:"Y总尾大小",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "总大",
                    title:"Y总和大小",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "总小",
                    title:"Y总和大小",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: null,
                    title:"",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: null,
                    title:"",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                }
            ]
        }
    ];
    public betdatab2_1 = {
        data1: this.setball(),
        data2: [
            {
                name: "红波",
                title: "特码色波",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "蓝波",
                title: "特码色波",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "绿波",
                title: "特码色波",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: null,
                title:"",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: null,
                title:"",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: null,
                title:"",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "上",
                title:"上下",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "上下和",
                title:"上下",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "下",
                title:"上下",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "奇",
                title:"奇偶",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "奇偶和",
                title:"奇偶",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "偶",
                title:"奇偶",
                value: "",
                point: 0,
                step: 0,checked:false,
            }
        ],
        data3: [{
                name: "特单",
                title:"特码Y单双",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "特双",
                title:"特码Y单双",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "特大",
                title:"特码Y大小",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "特小",
                title:"特码Y大小",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "特尾大",
                title:"特码Y尾大小",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "特尾小",
                title:"特码Y尾大小",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "总单",
                title:"Y总和单双",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "总双",
                title:"Y总和单双",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "总大",
                title:"Y总和大小",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "总小",
                title:"Y总和大小",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "总尾大",
                title:"Y总尾大小",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "总尾小",
                title:"Y总尾大小",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "福",
                title:"特码Y四喜",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "禄",
                title:"特码Y四喜",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "寿",
                title:"特码Y四喜",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "喜",
                title:"特码Y四喜",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "合单",
                title:"特码Y合数单双",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "合双",
                title:"特码Y合数单双",
                value: "",
                point: 0,
                step: 0,checked:false,
            }
        ]
    };
    public betdatab2_2 = [, , , , , , ];
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
                step: 0,checked:false,
            },
            value2: {
                value: "",
                point: 0,
                step: 0,checked:false,
            }
        },
        {
            numb: 1,
            title: "正一VS正三",
            value1: {
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            value2: {
                value: "",
                point: 0,
                step: 0,checked:false,
            }
        },
        {
            numb: 2,
            title: "正一VS正四",
            value1: {
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            value2: {
                value: "",
                point: 0,
                step: 0,checked:false,
            }
        },
        {
            numb: 3,
            title: "正一VS特码",
            value1: {
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            value2: {
                value: "",
                point: 0,
                step: 0,checked:false,
            }
        },
        {
            numb: 4,
            title: "正二VS正三",
            value1: {
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            value2: {
                value: "",
                point: 0,
                step: 0,checked:false,
            }
        },
        {
            numb: 5,
            title: "正二VS正四",
            value1: {
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            value2: {
                value: "",
                point: 0,
                step: 0,checked:false,
            }
        },
        {
            numb: 6,
            title: "正二VS特码",
            value1: {
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            value2: {
                value: "",
                point: 0,
                step: 0,checked:false,
            }
        },
        {
            numb: 7,
            title: "正三VS正四",
            value1: {
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            value2: {
                value: "",
                point: 0,
                step: 0,checked:false,
            }
        },
        {
            numb: 8,
            title: "正三VS特码",
            value1: {
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            value2: {
                value: "",
                point: 0,
                step: 0,checked:false,
            }
        },
        {
            numb: 9,
            title: "正四VS特码",
            value1: {
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            value2: {
                value: "",
                point: 0,
                step: 0,checked:false,
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
        channel: "",
        type: "",
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
        // 跳转官方路由设置
        this.route.params.subscribe(data => {
            this.type = 1;
            if (this.selectbtnvalue===0) {
                this.reset();
            }
            this.tabclick(0);
            this.routeid = data.id;
            this.subob.channel = "快乐彩 - " + this.routeid;
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
        for (let q = 0; q < _that.betdatab1_1.length; q++) {
            if (q === 0) {
                for (let j = 0; j < _that.betdatab1_1[q].data1.length; j++) {
                    _that.setpoint(p.betdatab1_1.data1, _that.betdatab1_1[q].data1[j], "name")
                }
            } else if (q === _that.betdatab1_1.length - 1) {
                for (let j = 0; j < _that.betdatab1_1[q].data1.length; j++) {
                    _that.setpoint(p.betdatab1_1.data3, _that.betdatab1_1[q].data1[j], "name")
                }
            } else {
                for (let j = 0; j < _that.betdatab1_1[q].data1.length; j++) {
                    _that.setpoint(p.betdatab1_1.data2, _that.betdatab1_1[q].data1[j], "name")
                }
            }
        }
        for (let q = 0; q < _that.betdatab2_1.data1.length; q++) {
            _that.setpoint(p.betdatab2_1.data1, _that.betdatab2_1.data1[q], "numb")
        }
        for (let q = 0; q < _that.betdatab2_1.data2.length; q++) {
            _that.setpoint(p.betdatab2_1.data2, _that.betdatab2_1.data2[q], "name")
        }
        for (let q = 0; q < _that.betdatab2_1.data3.length; q++) {
            _that.setpoint(p.betdatab2_1.data2, _that.betdatab2_1.data3[q], "name")
        }
        for (let i = 0; i < 4; i++) {
            let d = _that.zhengma[i];
            for (let q = 0; q < d.data1.length; q++) {
                _that.setpoint(p.betdatab2_1.data1, d.data1[q], "numb")
            }
            for (let q = 0; q < d.data2.length; q++) {
                _that.setpoint(p.zhengma.data2, d.data2[q], "name")
            }
            for (let q = 0; q < d.data3.length; q++) {
                _that.setpoint(p.zhengma.data2, d.data3[q], "name")
            }
        }
        for (let q = 0; q < _that.betdatab7_1.length; q++) {
            _that.betdatab7_1[q].value1.point = p.longhu.long.point;
            _that.betdatab7_1[q].value1.step = p.longhu.long.step;
            _that.betdatab7_1[q].value2.point = p.longhu.hu.point;
            _that.betdatab7_1[q].value2.step = p.longhu.hu.step;
        }
        for (let q = 0; q < _that.bettatab8_1.length; q++) {
            _that.setpoint(p.bettatab8_1, _that.bettatab8_1[q], "numb")
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
        let s = this.boxvalid ? "快捷金额已开启" : "快捷金额已禁用";
        this.POPNOTE({msg:s});
        // setTimeout(() => {
        //     this.popup.note.show = false;
        // }, 2000);
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
            this.ktclick('rest', 0);
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
        }
        Base.Store.set("selmoeny", d, true);
        this.selmoeny = d;
        this.POPNOTE({msg:'保存成功！'});
        // setTimeout(() => {
        //     this.close();
        // }, 2000);
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
            box.y = e.target.offsetTop + 36 + "px";
        } else if (this.curinpt === this.kuaitoudata) {
            box.y = e.target.offsetTop + 28 + "px";
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
            this.amend(v,true);
        }
        this.curinpt.value = i;
        this.boxshow = false;
    }
    // 重置当前页面所有的输入框
    reset() {
        let v = "";
        this.amend(v);
        this.setallmoney.value = "";
        this.kuaitoudata.value = "";
        for (let q = 1; q < 4; q++) {
            let str = 'data'+q
            for (let i = 0; i < this.kuaitoudata[str].length; i++) {
                this.kuaitoudata[str][i].checked = false;
            }
        }
    }
    // 快捷选项下的输入框值改变后的方法，
    allchange() {
        let v = this.setallmoney.value;
        this.amend(v,true);
    }
    amend(v, bol=false) {
        if (this.type === 8) {
            let d = this.bettatab8_1;
            this.setvalue(d, v, bol);
        }
        if (this.type === 7) {
            let d = this.betdatab7_1;
            for (let q = 0; q < d.length; q++) {
                d[q].value1.value = this.selectbtnvalue===1?(d[q].value1.checked?v:""):v;
                d[q].value2.value = this.selectbtnvalue===1?(d[q].value2.checked?v:""):v;
                d[q].value1.checked = bol?d[q].value1.checked:false;
                d[q].value2.checked = bol?d[q].value2.checked:false;
            }
        }
        if (this.type > 2 && this.type < 7) {
            let n = this.type - 3;
            let d = this.zhengma[n].data1;
            let b = this.zhengma[n].data2;
            let c = this.zhengma[n].data3;
            this.setvalue(d, v, bol);
            this.setvalue(b, v, bol);
            this.setvalue(c, v, bol);
        }
        if (this.type === 2) {
            let d = this.betdatab2_1;
            this.setvalue(d.data1, v, bol);
            this.setvalue(d.data2, v, bol);
            this.setvalue(d.data3, v, bol);
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
                        (d[i].value1.point + d[i].value1.step * this.rangevalue).toFixed(3)
                    );
                    data[l].money = d[i].value1.value;
                }
                if (Number(d[i].value2.value) > 0) {
                    let l = data.length;
                    data[l] = Object.assign({}, this.subob);
                    data[l].type = this.typedata[this.type - 1].name;
                    data[l].ball = d[i].title;
                    data[l].number = "虎";
                    data[l].point = parseFloat(
                        (d[i].value2.point + d[i].value2.step * this.rangevalue).toFixed(3)
                    );
                    data[l].money = d[i].value2.value;
                }
            }
        }
        if (this.type > 1 && this.type < 7) {
            let d;
            let b;
            let c;
            if (this.type === 2) {
                d = this.betdatab2_1.data1;
                b = this.betdatab2_1.data2;
                c = this.betdatab2_1.data3;
            } else {
                d = this.zhengma[this.type - 3].data1;
                b = this.zhengma[this.type - 3].data2;
                c = this.zhengma[this.type - 3].data3;
            }
            let title = this.typedata[this.type - 1].name;
            this.setsubdata(d, data, title);
            this.setsubdata(b, data, title);
            this.setsubdata(c, data, title);
        }
        if (this.type === 1) {
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

    // 快速投注点击和提交事件
    ktclick(t, n) {
        if (this.type < 2 || this.type > 6) {
            return;
        };
        let d = this.kuaitoudata;
        let data;
        if (this.type === 2) {
            data = this.betdatab2_1.data1;
        } else {
            data = this.zhengma[this.type - 3].data1;
        }
        if (t === "rest") {
            d.value = "";
            for (let i = 0; i < data.length; i++) {
                data[i].checked = false;
                data[i].value = "";
            }
            for (let i = 0; i < d.data1.length; i++) {
                d.data1[i].checked = false;
            }
            for (let i = 0; i < d.data2.length; i++) {
                d.data2[i].checked = false;
            }
            for (let i = 0; i < d.data3.length; i++) {
                d.data3[i].checked = false;
            }

        } else {
            d[t][n].checked = !d[t][n].checked;
            let arr = d[t][n].fn(data);
            for (let i = 0; i < arr.length; i++) {
                let l;
                if (arr[i].numb !== null) {
                    l = arr[i].numb - 1;
                    if (d[t][n].checked) {
                        data[l].checked = true;
                    } else {
                        data[l].checked = false;
                    }
                }
            }
        }
    }
    ktsub() {
        if (Number(this.kuaitoudata.value) <= 0) {
            this.POPNOTE({msg:'请填写投注金额！'});
            return;
        }
        let data,n=0;
        if (this.type === 2) {
            data = this.betdatab2_1.data1;
        } else {
            data = this.zhengma[this.type - 3].data1;
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i].checked) {
                n++;
                data[i].value = this.kuaitoudata.value;
            }
        }
        if (n===0) {
            this.POPNOTE({msg:'请选择选项！'})
        }else{
            for (let i = 0; i < data.length; i++) {
                data[i].checked = false;
            }
            for (let i = 1; i < 4; i++) {
                let str = 'data'+i;
                for (let q = 0; q < this.kuaitoudata[str].length; q++) {
                    this.kuaitoudata[str][q].checked= false;
                }
            }
        }
    }

    // 设置整合 球的数据
    setball() {
        let data = [];
        for (let q = 1; q <= 24; q++) {
            let o = Object.assign({}, this.BALL);
            if (q > 21) {
                o.numb = null;
            } else {
                o.numb = q;
                q % 3 === 1 ?
                    (o.red = true) :
                    q % 3 === 2 ?
                    (o.blue = true) :
                    (o.green = true);
            }
            data.push(o);
        }
        return data;
    }
    setbigorsmall(n) {
        let data = [];
        let d = ["单", "双", "尾大", "尾小", "大", "小", "合单", "合双"];
        for (let i = 0; i < d.length; i++) {
            data[i] = {
                name: d[i],
                title: i<2?`正码${n}Y单双`:(i<4?`正码${n}Y尾大小`:(i<6?`正码${n}Y大小`:`正码${n}Y合数单双`)),
                value: "",
                point: 0,
                step: 0,checked:false,
            };
        }
        return data;
    }
    // 设置正码数据
    setzhengma(n) {
        let d = {
            data1: this.setball(),
            data2: [{
                    name: "红波",
                    title: `正码${n}色波`,
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "蓝波",
                    title: `正码${n}色波`,
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "绿波",
                    title: `正码${n}色波`,
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: null,
                    title: '',
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: null,
                    title: '',
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: null,
                    title: '',
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "上",
                    title:"上下",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "上下和",
                    title:"上下",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "下",
                    title:"上下",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "奇",
                    title:"奇偶",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "奇偶和",
                    title:"奇偶",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "偶",
                    title:"奇偶",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                }
            ],
            data3: [{
                    name: "单",
                    title: `正码${n}Y单双`,
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "双",
                    title: `正码${n}Y单双`,
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "大",
                    title: `正码${n}Y大小`,
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "小",
                    title: `正码${n}Y大小`,
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "尾大",
                    title: `正码${n}Y尾大小`,
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "尾小",
                    title: `正码${n}Y尾大小`,
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "总单",
                    title:"Y总和单双",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "总双",
                    title:"Y总和单双",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "总大",
                    title:"Y总和大小",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "总小",
                    title:"Y总和大小",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "总尾大",
                    title:"Y总尾大小",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "总尾小",
                    title:"Y总尾大小",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "福",
                    title: `正码${n}Y四喜`,
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "禄",
                    title: `正码${n}Y四喜`,
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "寿",
                    title: `正码${n}Y四喜`,
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "喜",
                    title: `正码${n}Y四喜`,
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "合单",
                    title: `正码${n}Y合数单双`,
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "合双",
                    title: `正码${n}Y合数单双`,
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                }
            ]
        };
        let data = Object.assign({}, d);
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