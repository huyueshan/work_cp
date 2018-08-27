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
import { formmod } from '../../../../factory/form';
import "rxjs/add/operator/filter";
import {
    retry
} from "rxjs/operator/retry";

@Component({
    selector: "app-dpc",
    templateUrl: "./dpc.component.html",
    styleUrls: ["./dpc.component.scss"]
})
export class DpcComponent implements OnInit, OnDestroy, AfterViewInit {
    loadpage = false;
    public cpnav = {
        style: "credit",
        prev: "20180517022",
        prevball: [2, 5, 9, 0, 8],
        next: "20180517023",
        time: ""
    };
    public routeid;
    public rastep = 7.8; // 滑动条步长
    public odds = 7.8; // 赔率
    public rangevalue = 7.8; //绑定滑动条数据
    public delay = true; // 选择金额框判断
    public boxshow = false; // 选择金额框显示判断
    public boxvalid = true; // 选择金额框禁用判断
    public type = 1; // 控制 玩法
    public curinpt; //当前操作的金额输入框
    public year = ""; //当前年的生肖
    public setallmoney = {
        value: ""
    }; //绑定快捷金额

    public selectbtnvalue = 0; //控制 一般 、快捷按钮数据
    public inputshow = true;
    public allinput = false;
    public btolast = 0; //控制 前中后选择
    public selmoeny = [100, 200, 500, 1000, 5000]; // 活动选择金额框数据
    public kxtip = false; // 快选金额保存提示显示控制
    public kxtipstr; // 快选金额提示信息
    public newpoint = false; // 绑定提交时的最新赔率
    public kuaitoutab = 0; //控制快速投注和键盘下注
    public kuaitoudata = {
        value: "",
        data1: this.setquanball(),
        data2: [
            {
                name: "大",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.numb >= 25;
                    });
                    return d;
                }
            },
            {
                name: "小",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.numb < 25;
                    });
                    return d;
                }
            },
            {
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
            },
            {
                name: "大单",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.numb >= 25 && x.numb % 2 === 1;
                    });
                    return d;
                }
            },
            {
                name: "小单",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.numb < 25 && x.numb % 2 === 0;
                    });
                    return d;
                }
            },
            {
                name: "大双",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.numb >= 25 && x.numb % 2 === 0;
                    });
                    return d;
                }
            },
            {
                name: "小双",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.numb < 25 && x.numb % 2 === 1;
                    });
                    return d;
                }
            },
            {
                name: "家禽",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.poultry;
                    });
                    return d;
                }
            },
            {
                name: "野兽",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.wild;
                    });
                    return d;
                }
            },
            {
                name: "鼠",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.shengxiao === "鼠";
                    });
                    return d;
                }
            },
            {
                name: "牛",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.shengxiao === "牛";
                    });
                    return d;
                }
            },
            {
                name: "虎",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.shengxiao === "虎";
                    });
                    return d;
                }
            },
            {
                name: "兔",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.shengxiao === "兔";
                    });
                    return d;
                }
            },
            {
                name: "龙",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.shengxiao === "龙";
                    });
                    return d;
                }
            },
            {
                name: "蛇",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.shengxiao === "蛇";
                    });
                    return d;
                }
            },
            {
                name: "马",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.shengxiao === "马";
                    });
                    return d;
                }
            },
            {
                name: "羊",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.shengxiao === "羊";
                    });
                    return d;
                }
            },
            {
                name: "猴",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.shengxiao === "猴";
                    });
                    return d;
                }
            },
            {
                name: "鸡",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.shengxiao === "鸡";
                    });
                    return d;
                }
            },
            {
                name: "狗",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.shengxiao === "狗";
                    });
                    return d;
                }
            },
            {
                name: "猪",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.shengxiao === "猪";
                    });
                    return d;
                }
            }
        ],
        data3: [{
                name: "红大",
                checked: false,
                color: "red",
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.numb >= 25 && x.red;
                    });
                    return d;
                }
            },
            {
                name: "红小",
                checked: false,
                color: "red",
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.numb < 25 && x.red;
                    });
                    return d;
                }
            },
            {
                name: "红单",
                checked: false,
                color: "red",
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.red && x.numb % 2 === 1;
                    });
                    return d;
                }
            },
            {
                name: "红双",
                color: "red",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.red && x.numb % 2 === 0;
                    });
                    return d;
                }
            },
            {
                name: "红波",
                color: "red",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.red;
                    });
                    return d;
                }
            },
            {
                name: "蓝大",
                color: "blue",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.numb >= 25 && x.blue;
                    });
                    return d;
                }
            },
            {
                name: "蓝小",
                color: "blue",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.numb < 25 && x.blue;
                    });
                    return d;
                }
            },
            {
                name: "蓝单",
                color: "blue",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.blue && x.numb % 2 === 1;
                    });
                    return d;
                }
            },
            {
                name: "蓝双",
                color: "blue",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.blue && x.numb % 2 === 0;
                    });
                    return d;
                }
            },
            {
                name: "蓝波",
                color: "blue",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.blue;
                    });
                    return d;
                }
            },
            {
                name: "绿大",
                color: "green",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.numb >= 25 && x.green;
                    });
                    return d;
                }
            },
            {
                name: "绿小",
                color: "green",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.numb < 25 && x.green;
                    });
                    return d;
                }
            },
            {
                name: "绿单",
                color: "green",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.green && x.numb % 2 === 1;
                    });
                    return d;
                }
            },
            {
                name: "绿双",
                color: "green",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.green && x.numb % 2 === 0;
                    });
                    return d;
                }
            },
            {
                name: "绿波",
                color: "green",
                checked: false,
                fn: function (arr) {
                    let d = arr.filter(function (x) {
                        return x.green;
                    });
                    return d;
                }
            }
        ],
        data4: {
            name: "全选",
            checked: false
        },
        ktarr: [],
        ktstr: "",
        jiantoustr: ""
    };

    public BALL = {
        numb: 0, // 球号
        red: false, // 红波
        green: false, // 绿波
        blue: false, // 蓝波
        checked: false, // 如果多选框 绑定选中
        disabled: false, // 如果多选框 绑定是否禁用
        shengxiao: "", //生肖
        poultry: false, // 家禽
        wild: false, //野兽
        value: "", // 下注金额
        point: 0,
        step: 0
    };
    public BALL2 = {
        name: "",
        title:'',
        checked: false,
        value: "",
        point: 0,
        step: 0
    };
    public typedata = [
        {
            id: 1,
            name: "特码"
        },
        {
            id: 2,
            name: "色波"
        },
        {
            id: 3,
            name: "特肖"
        },
        {
            id: 4,
            name: "正码"
        },
        {
            id: 5,
            name: "正特"
        },
        {
            id: 6,
            name: "正码1-6"
        },
        {
            id: 7,
            name: "连码"
        },
        {
            id: 8,
            name: "一肖"
        },
        {
            id: 9,
            name: "尾数"
        },
        {
            id: 10,
            name: "合肖"
        },
        {
            id: 11,
            name: "自选不中"
        },
        {
            id: 12,
            name: "连肖"
        },
        {
            id: 13,
            name: "龙虎斗"
        }
    ];
    public contenttoptitle = [, , , , , ];
    // 活动选择框的位置
    public boxposition = {
        x: "",
        y: ""
    };
    public optionsdata = {
        zhengte: [
            "正码特一",
            "正码特二",
            "正码特三",
            "正码特四",
            "正码特五",
            "正码特六"
        ],
        zhengteactive: 0,
        lianma: ["单选/复式", "胆拖", "生肖对碰", "尾数对碰", "混合对碰"],
        lianmaactive: 0,
        lianmastyle: ["三中二", "三全中", "二全中", "二中特", "特串"],
        lianmastactive: 0,
        zixuanno: [
            "五不中",
            "六不中",
            "七不中",
            "八不中",
            "九不中",
            "十不中",
            "十一不中",
            "十二不中"
        ],
        zixuactive: 0,
        hexiao1: ["前肖", "后肖", "天肖", "地肖"],
        hexiaoactive1: 0,
        hexiao2: ["野兽", "家禽", "单", "双"],
        hexiaoactive2: 0,
        lianxiao: ["单选/复式", "胆拖"],
        lianxiaoactive: 0,
        lianxiaostyle: ["连肖二肖", "连肖三肖", "连肖四肖", "连肖五肖"],
        lianxiaostactive: 0
    };
    
    public POINt_data = {
        dpcdata1: {
            data1: this.setBallPoint(44.482, 3.822 / 7.8),
            data2: [{
                    name: "特大",
                    point: 1.816,
                    step: 0.156 / 7.8
                },
                {
                    name: "特小",
                    point: 1.816,
                    step: 0.156 / 7.8
                },
                {
                    name: "家禽",
                    point: 1.816,
                    step: 0.156 / 7.8
                },
                {
                    name: "野兽",
                    point: 1.816,
                    step: 0.156 / 7.8
                },
                {
                    name: "大单",
                    point: 3.592,
                    step: 0.312 / 7.8
                },
                {
                    name: "奇",
                    point: 2.553,
                    step: 0.234 / 7.8
                },
                {
                    name: "上",
                    point: 2.553,
                    step: 0.234 / 7.8
                },
                {
                    name: "特单",
                    point: 1.816,
                    step: 0.156 / 7.8
                },
                {
                    name: "特双",
                    point: 1.816,
                    step: 0.156 / 7.8
                },
                {
                    name: "总大",
                    point: 1.816,
                    step: 0.155 / 7.8
                },
                {
                    name: "总小",
                    point: 1.816,
                    step: 0.156 / 7.8
                },
                {
                    name: "大双",
                    point: 3.592,
                    step: 0.312 / 7.8
                },
                {
                    name: "奇偶和",
                    point: 2.454,
                    step: 0.233 / 7.8
                },
                {
                    name: "上下和",
                    point: 2.454,
                    step: 0.233 / 7.8
                },
                {
                    name: "合大",
                    point: 1.816,
                    step: 0.156 / 7.8
                },
                {
                    name: "合小",
                    point: 1.816,
                    step: 0.156 / 7.8
                },
                {
                    name: "总单",
                    point: 1.816,
                    step: 0.155 / 7.8
                },
                {
                    name: "总双",
                    point: 1.816,
                    step: 0.156 / 7.8
                },
                {
                    name: "小单",
                    point: 3.592,
                    step: 0.312 / 7.8
                },
                {
                    name: "偶",
                    point: 2.553,
                    step: 0.234 / 7.8
                },
                {
                    name: "下",
                    point: 2.553,
                    step: 0.234 / 7.8
                },
                {
                    name: "合单",
                    point: 1.816,
                    step: 0.156 / 7.8
                },
                {
                    name: "合双",
                    point: 1.816,
                    step: 0.156 / 7.8
                },
                {
                    name: "合尾大",
                    point: 1.816,
                    step: 0.156 / 7.8
                },
                {
                    name: "合尾小",
                    point: 1.816,
                    step: 0.156 / 7.8
                },
                {
                    name: "小双",
                    point: 3.592,
                    step: 0.312 / 7.8
                },
                {
                    name: "尾大",
                    point: 1.816,
                    step: 0.156 / 7.8
                },
                {
                    name: "尾小",
                    point: 1.816,
                    step: 0.156 / 7.8
                },
                {
                    name: "红波",
                    point: 2.513,
                    step: 0.324 / 7.8
                },
                {
                    name: "蓝波",
                    point: 2.598,
                    step: 0.239 / 7.8
                },
                {
                    name: "绿波",
                    point: 2.598,
                    step: 0.239 / 7.8
                }
            ]
        },
        dpcdata2: {
            data1: [{
                    name: "红单",
                    point: 5.107,
                    step: 0.468 / 7.8
                },
                {
                    name: "红双",
                    point: 4.612,
                    step: 0.416 / 7.8
                },
                {
                    name: "红大",
                    point: 5.937,
                    step: 0.535 / 7.8
                },
                {
                    name: "红小",
                    point: 4.106,
                    step: 0.374 / 7.8
                },
                {
                    name: "蓝单",
                    point: 5.107,
                    step: 0.468 / 7.8
                },
                {
                    name: "蓝双",
                    point: 5.107,
                    step: 0.468 / 7.8
                },
                {
                    name: "蓝大",
                    point: 4.612,
                    step: 0.416 / 7.8
                },
                {
                    name: "蓝小",
                    point: 5.937,
                    step: 0.535 / 7.8
                },
                {
                    name: "绿单",
                    point: 5.107,
                    step: 0.468 / 7.8
                },
                {
                    name: "绿双",
                    point: 5.937,
                    step: 0.535 / 7.8
                },
                {
                    name: "绿大",
                    point: 5.107,
                    step: 0.468 / 7.8
                },
                {
                    name: "绿小",
                    point: 5.937,
                    step: 0.535 / 7.8
                }
            ]
        },
        dpcdata3: {
            data1: [{
                    name: "鼠",
                    point: 10.395,
                    step: 0.955 / 7.8
                },
                {
                    name: "牛",
                    point: 10.395,
                    step: 0.955 / 7.8
                },
                {
                    name: "虎",
                    point: 10.395,
                    step: 0.955 / 7.8
                },
                {
                    name: "兔",
                    point: 10.395,
                    step: 0.955 / 7.8
                },
                {
                    name: "龙",
                    point: 10.395,
                    step: 0.955 / 7.8
                },
                {
                    name: "蛇",
                    point: 10.395,
                    step: 0.955 / 7.8
                },
                {
                    name: "马",
                    point: 10.395,
                    step: 0.955 / 7.8
                },
                {
                    name: "羊",
                    point: 10.395,
                    step: 0.955 / 7.8
                },
                {
                    name: "猴",
                    point: 10.395,
                    step: 0.955 / 7.8
                },
                {
                    name: "鸡",
                    point: 10.395,
                    step: 0.955 / 7.8
                },
                {
                    name: "狗",
                    point: 8.316,
                    step: 0.764 / 7.8
                },
                {
                    name: "猪",
                    point: 10.395,
                    step: 0.955 / 7.8
                }
            ]
        },
        dpcdata4: {
            data1: this.setBallPoint(6.48, 0.637 / 7.8)
        },
        dpcdata5: {
            data1: this.setBallPoint(44.482, 3.822 / 7.8)
        },
        dpcdata6: {
            data1: this.setZhengmaPoint()
        },
        dpcdata7: {
            data1: this.setBallPoint(64, 0),
            data2: this.setShengxiaoPoint(64, 0),
            data3: this.setWeiPoint(64, 0)
        },
        dpcdata8: {
            data1: [{
                    name: "鼠",
                    point: 1.886,
                    step: 0.165 / 7.8
                },
                {
                    name: "牛",
                    point: 1.886,
                    step: 0.165 / 7.8
                },
                {
                    name: "虎",
                    point: 1.886,
                    step: 0.165 / 7.8
                },
                {
                    name: "兔",
                    point: 1.886,
                    step: 0.165 / 7.8
                },
                {
                    name: "龙",
                    point: 1.886,
                    step: 0.165 / 7.8
                },
                {
                    name: "蛇",
                    point: 1.886,
                    step: 0.165 / 7.8
                },
                {
                    name: "马",
                    point: 1.886,
                    step: 0.165 / 7.8
                },
                {
                    name: "羊",
                    point: 1.886,
                    step: 0.165 / 7.8
                },
                {
                    name: "猴",
                    point: 1.886,
                    step: 0.165 / 7.8
                },
                {
                    name: "鸡",
                    point: 1.886,
                    step: 0.165 / 7.8
                },
                {
                    name: "狗",
                    point: 1.606,
                    step: 0.141 / 7.8
                },
                {
                    name: "猪",
                    point: 1.886,
                    step: 0.165 / 7.8
                }
            ]
        },
        dpcdata9: {
            data1: [{
                    name: "1尾",
                    point: 1.607,
                    step: 0.14 / 7.8
                },
                {
                    name: "2尾",
                    point: 1.607,
                    step: 0.14 / 7.8
                },
                {
                    name: "3尾",
                    point: 1.607,
                    step: 0.14 / 7.8
                },
                {
                    name: "4尾",
                    point: 1.607,
                    step: 0.14 / 7.8
                },
                {
                    name: "5尾",
                    point: 1.607,
                    step: 0.14 / 7.8
                },
                {
                    name: "6尾",
                    point: 1.607,
                    step: 0.14 / 7.8
                },
                {
                    name: "7尾",
                    point: 1.607,
                    step: 0.14 / 7.8
                },
                {
                    name: "8尾",
                    point: 1.607,
                    step: 0.14 / 7.8
                },
                {
                    name: "9尾",
                    point: 1.607,
                    step: 0.14 / 7.8
                },
                {
                    name: "0尾",
                    point: 1.826,
                    step: 0.165 / 7.8
                }
            ]
        },
        dpcdata10: {
            data1: [{
                    name: "合肖一肖",
                    point1: 10.416,
                    point2: 0.95,
                    step1: 0.936 / 7.8,
                    step2: 0.085 / 7.8
                },
                {
                    name: "合肖二肖",
                    point1: 5.208,
                    point2: 1.041,
                    step1: 0.468 / 7.8,
                    step2: 0.094 / 7.8
                },
                {
                    name: "合肖三肖",
                    point1: 3.472,
                    point2: 1.16,
                    step1: 0.312 / 7.8,
                    step2: 0.104 / 7.8
                },
                {
                    name: "合肖四肖",
                    point1: 2.604,
                    point2: 1.307,
                    step1: 0.234 / 7.8,
                    step2: 0.117 / 7.8
                },
                {
                    name: "合肖五肖",
                    point1: 2.103,
                    point2: 1.489,
                    step1: 0.187 / 7.8,
                    step2: 0.134 / 7.8
                },
                {
                    name: "合肖六肖",
                    point1: 1.816,
                    point2: 1.816,
                    step1: 0.156 / 7.8,
                    step2: 0.156 / 7.8
                },
                {
                    name: "合肖七肖",
                    point1: 1.489,
                    point2: 2.083,
                    step1: 0.134 / 7.8,
                    step2: 0.187 / 7.8
                },
                {
                    name: "合肖八肖",
                    point1: 1.307,
                    point2: 2.604,
                    step1: 0.117 / 7.8,
                    step2: 0.234 / 7.8
                },
                {
                    name: "合肖九肖",
                    point1: 1.16,
                    point2: 3.472,
                    step1: 0.104 / 7.8,
                    step2: 0.312 / 7.8
                },
                {
                    name: "合肖十肖",
                    point1: 1.041,
                    point2: 5.208,
                    step1: 0.094 / 7.8,
                    step2: 0.468 / 7.8
                },
                {
                    name: "合肖十一肖",
                    point1: 0.95,
                    point2: 10.416,
                    step1: 0.085 / 7.8,
                    step2: 0.936 / 7.8
                }
            ]
        },
        dpcdata11: {
            data1: this.setBallPoint(1.786, 0.175 / 7.8)
        },

        dpcdata12: {
            data1: [{
                    name: "鼠",
                    point: 3.8,
                    step: 0.38 / 7.8
                },
                {
                    name: "牛",
                    point: 3.8,
                    step: 0.38 / 7.8
                },
                {
                    name: "虎",
                    point: 3.8,
                    step: 0.38 / 7.8
                },
                {
                    name: "兔",
                    point: 3.8,
                    step: 0.38 / 7.8
                },
                {
                    name: "龙",
                    point: 3.8,
                    step: 0.38 / 7.8
                },
                {
                    name: "蛇",
                    point: 3.8,
                    step: 0.38 / 7.8
                },
                {
                    name: "马",
                    point: 3.8,
                    step: 0.38 / 7.8
                },
                {
                    name: "羊",
                    point: 3.8,
                    step: 0.38 / 7.8
                },
                {
                    name: "猴",
                    point: 3.8,
                    step: 0.38 / 7.8
                },
                {
                    name: "鸡",
                    point: 3.8,
                    step: 0.38 / 7.8
                },
                {
                    name: "狗",
                    point: 3.213,
                    step: 0.321 / 7.8
                },
                {
                    name: "猪",
                    point: 3.8,
                    step: 0.38 / 7.8
                }
            ]
        },
        longhu: {
            long: {
                name: "龙",
                point: 1.816,
                step: 0.156 / 7.8
            },
            hu: {
                name: "虎",
                point: 1.816,
                step: 0.156 / 7.8
            }
        }
    };
    public dpcdata1 = {
        title: "特码",
        data1: this.setball(),
        data2: [
            [{
                    name: "特大",
                    title:"特大小",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "特小",
                    title:"特大小",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "家禽",
                    title:"家禽野兽",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "野兽",
                    title:"家禽野兽",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "大单",
                    title:"特大单双",
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
                    name: "上",
                    title:"上下",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                }
            ],
            [{
                    name: "特单",
                    title:"特单双",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "特双",
                    title:"特单双",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "总大",
                    title:"总和大小",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "总小",
                    title:"总和大小",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "大双",
                    title:"特大单双",
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
                    name: "上下和",
                    title:"上下",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                }
            ],
            [{
                    name: "合大",
                    title:"特合大小",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "合小",
                    title:"特合大小",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "总单",
                    title:"总和单双",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "总双",
                    title:"总和单双",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "小单",
                    title:"特小单双",
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
                },
                {
                    name: "下",
                    title:"上下",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                }
            ],
            [{
                    name: "合单",
                    title:"特合单双",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "合双",
                    title:"特合单双",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "合尾大",
                    title:"特合尾大小",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "合尾小",
                    title:"特合尾大小",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "小双",
                    title:"特小单双",
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
            ],
            [{
                    name: "尾大",
                    title:"特大小尾",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "尾小",
                    title:"特大小尾",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "红波",
                    title:"特色波",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "蓝波",
                    title:"特色波",
                    value: "",
                    point: 0,
                    step: 0,checked:false,
                },
                {
                    name: "绿波",
                    title:"特色波",
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
        ]
    };
    public dpcdata2 = {
        title: "色波",
        data1: [{
                name: "红单",
                value: "",
                data: this.setball2("red", 1),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "红双",
                value: "",
                data: this.setball2("red", 0),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "红大",
                value: "",
                data: this.setball2("red", 25),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "红小",
                value: "",
                data: this.setball2("red", 24),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "蓝单",
                value: "",
                data: this.setball2("blue", 1),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "蓝双",
                value: "",
                data: this.setball2("blue", 0),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "蓝大",
                value: "",
                data: this.setball2("blue", 25),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "蓝小",
                value: "",
                data: this.setball2("blue", 24),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "绿单",
                value: "",
                data: this.setball2("green", 1),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "绿双",
                value: "",
                data: this.setball2("green", 0),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "绿大",
                value: "",
                data: this.setball2("green", 25),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "绿小",
                value: "",
                data: this.setball2("green", 24),
                point: 0,
                step: 0,checked:false,
            }
        ]
    };
    public dpcdata3 = {
        title: "特肖",
        data1: [
            {
                name: "鼠",
                value: "",
                data: this.setball3(0),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "牛",
                value: "",
                data: this.setball3(1),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "虎",
                value: "",
                data: this.setball3(2),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "兔",
                value: "",
                data: this.setball3(3),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "龙",
                value: "",
                data: this.setball3(4),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "蛇",
                value: "",
                data: this.setball3(5),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "马",
                value: "",
                data: this.setball3(6),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "羊",
                value: "",
                data: this.setball3(7),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "猴",
                value: "",
                data: this.setball3(8),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "鸡",
                value: "",
                data: this.setball3(9),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "狗",
                value: "",
                data: this.setball3(10),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "猪",
                value: "",
                data: this.setball3(11),
                point: 0,
                step: 0,checked:false,
            }
        ]
    };
    public dpcdata4 = {
        title: "正码",
        data1: this.setball()
    };
    public dpcdata5 = {
        title: "正码特一",
        data1: this.setball()
    };
    public dpcdata6 = [
        {
            title: "正码一",
            data1: this.setzhengma()
        },
        {
            title: "正码二",
            data1: this.setzhengma()
        },
        {
            title: "正码三",
            data1: this.setzhengma()
        },
        {
            title: "正码四",
            data1: this.setzhengma()
        },
        {
            title: "正码五",
            data1: this.setzhengma()
        },
        {
            title: "正码六",
            data1: this.setzhengma()
        }
    ];

    public dpcdata7 = {
        title: "连码 - 单选/复式 - 三中二",
        checkarr: [],
        ballarr: [],
        dantuo: 0,
        dantuodata: [],
        data1: this.setball(),
        data2: [
            {
                name: "鼠",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(0),
                point: 0,
                step: 0
            },
            {
                name: "牛",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(1),
                point: 0,
                step: 0
            },
            {
                name: "虎",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(2),
                point: 0,
                step: 0
            },
            {
                name: "兔",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(3),
                point: 0,
                step: 0
            },
            {
                name: "龙",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(4),
                point: 0,
                step: 0
            },
            {
                name: "蛇",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(5),
                point: 0,
                step: 0
            },
            {
                name: "马",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(6),
                point: 0,
                step: 0
            },
            {
                name: "羊",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(7),
                point: 0,
                step: 0
            },
            {
                name: "猴",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(8),
                point: 0,
                step: 0
            },
            {
                name: "鸡",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(9),
                point: 0,
                step: 0
            },
            {
                name: "狗",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(10),
                point: 0,
                step: 0
            },
            {
                name: "猪",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(11),
                point: 0,
                step: 0
            }
        ],
        data3: [
            {
                name: "0",
                value: "",
                checked: false,
                disabled: false,
                data: this.setweiball(0),
                point: 0,
                step: 0
            },
            {
                name: "1",
                value: "",
                checked: false,
                disabled: false,
                data: this.setweiball(1),
                point: 0,
                step: 0
            },
            {
                name: "2",
                value: "",
                checked: false,
                disabled: false,
                data: this.setweiball(2),
                point: 0,
                step: 0
            },
            {
                name: "3",
                value: "",
                checked: false,
                disabled: false,
                data: this.setweiball(3),
                point: 0,
                step: 0
            },
            {
                name: "4",
                value: "",
                checked: false,
                disabled: false,
                data: this.setweiball(4),
                point: 0,
                step: 0
            },
            {
                name: "5",
                value: "",
                checked: false,
                disabled: false,
                data: this.setweiball(5),
                point: 0,
                step: 0
            },
            {
                name: "6",
                value: "",
                checked: false,
                disabled: false,
                data: this.setweiball(6),
                point: 0,
                step: 0
            },
            {
                name: "7",
                value: "",
                checked: false,
                disabled: false,
                data: this.setweiball(7),
                point: 0,
                step: 0
            },
            {
                name: "8",
                value: "",
                checked: false,
                disabled: false,
                data: this.setweiball(8),
                point: 0,
                step: 0
            },
            {
                name: "9",
                value: "",
                checked: false,
                disabled: false,
                data: this.setweiball(9),
                point: 0,
                step: 0
            }
        ]
    };
    public dpcdata8 = {
        title: "一肖",
        data1: [{
                name: "鼠",
                value: "",
                data: this.setball3(0),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "牛",
                value: "",
                data: this.setball3(1),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "虎",
                value: "",
                data: this.setball3(2),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "兔",
                value: "",
                data: this.setball3(3),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "龙",
                value: "",
                data: this.setball3(4),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "蛇",
                value: "",
                data: this.setball3(5),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "马",
                value: "",
                data: this.setball3(6),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "羊",
                value: "",
                data: this.setball3(7),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "猴",
                value: "",
                data: this.setball3(8),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "鸡",
                value: "",
                data: this.setball3(9),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "狗",
                value: "",
                data: this.setball3(10),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "猪",
                value: "",
                data: this.setball3(11),
                point: 0,
                step: 0,checked:false,
            }
        ]
    };
    public dpcdata9 = {
        title: "尾数",
        data1: [{
                name: "1尾",
                value: "",
                data: this.setweiball(1),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "2尾",
                value: "",
                data: this.setweiball(2),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "3尾",
                value: "",
                data: this.setweiball(3),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "4尾",
                value: "",
                data: this.setweiball(4),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "5尾",
                value: "",
                data: this.setweiball(5),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "6尾",
                value: "",
                data: this.setweiball(6),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "7尾",
                value: "",
                data: this.setweiball(7),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "8尾",
                value: "",
                data: this.setweiball(8),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "9尾",
                value: "",
                data: this.setweiball(9),
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "0尾",
                value: "",
                data: this.setweiball(0),
                point: 0,
                step: 0,checked:false,
            }
        ]
    };
    public dpcdata10 = {
        title: "",
        checkarr: [],
        ballarr: [],
        dantuo: 1,
        dantuodata: [],
        point: 0,
        step: 0,
        data1: [{
                name: "鼠",
                value: "",
                checked: false,
                disabled: true,
                data: this.sethexiaoball(0)
            },
            {
                name: "牛",
                value: "",
                checked: false,
                disabled: true,
                data: this.sethexiaoball(1)
            },
            {
                name: "虎",
                value: "",
                checked: false,
                disabled: true,
                data: this.sethexiaoball(2)
            },
            {
                name: "兔",
                value: "",
                checked: false,
                disabled: true,
                data: this.sethexiaoball(3)
            },
            {
                name: "龙",
                value: "",
                checked: false,
                disabled: true,
                data: this.sethexiaoball(4)
            },
            {
                name: "蛇",
                value: "",
                checked: false,
                disabled: true,
                data: this.sethexiaoball(5)
            },
            {
                name: "马",
                value: "",
                checked: false,
                disabled: true,
                data: this.sethexiaoball(6)
            },
            {
                name: "羊",
                value: "",
                checked: false,
                disabled: true,
                data: this.sethexiaoball(7)
            },
            {
                name: "猴",
                value: "",
                checked: false,
                disabled: true,
                data: this.sethexiaoball(8)
            },
            {
                name: "鸡",
                value: "",
                checked: false,
                disabled: true,
                data: this.sethexiaoball(9)
            },
            {
                name: "狗",
                value: "",
                checked: false,
                disabled: true,
                data: this.sethexiaoball(10)
            },
            {
                name: "猪",
                value: "",
                checked: false,
                disabled: true,
                data: this.sethexiaoball(11)
            }
        ]
    };
    public data10_1 = [
        {
            title: "合肖一肖",
            value1: "合肖一肖 - 中",
            value2: "合肖一肖 - 不中",
            point1: 1,
            point2: 1,
            step1: 1,
            step2: 1
        },
        {
            title: "合肖二肖",
            value1: "合肖二肖 - 中",
            value2: "合肖二肖 - 不中",
            point1: 1,
            point2: 1,
            step1: 1,
            step2: 1
        },
        {
            title: "合肖三肖",
            value1: "合肖三肖 - 中",
            value2: "合肖三肖 - 不中",
            point1: 1,
            point2: 1,
            step1: 1,
            step2: 1
        },
        {
            title: "合肖四肖",
            value1: "合肖四肖 - 中",
            value2: "合肖四肖 - 不中",
            point1: 1,
            point2: 1,
            step1: 1,
            step2: 1
        },
        {
            title: "合肖五肖",
            value1: "合肖五肖 - 中",
            value2: "合肖五肖 - 不中",
            point1: 1,
            point2: 1,
            step1: 1,
            step2: 1
        },
        {
            title: "合肖六肖",
            value1: "合肖六肖 - 中",
            value2: "合肖六肖 - 不中",
            point1: 1,
            point2: 1,
            step1: 1,
            step2: 1
        },
        {
            title: "合肖七肖",
            value1: "合肖七肖 - 中",
            value2: "合肖七肖 - 不中",
            point1: 1,
            point2: 1,
            step1: 1,
            step2: 1
        },
        {
            title: "合肖八肖",
            value1: "合肖八肖 - 中",
            value2: "合肖八肖 - 不中",
            point1: 1,
            point2: 1,
            step1: 1,
            step2: 1
        },
        {
            title: "合肖九肖",
            value1: "合肖九肖 - 中",
            value2: "合肖九肖 - 不中",
            point1: 1,
            point2: 1,
            step1: 1,
            step2: 1
        },
        {
            title: "合肖十肖",
            value1: "合肖十肖 - 中",
            value2: "合肖十肖 - 不中",
            point1: 1,
            point2: 1,
            step1: 1,
            step2: 1
        },
        {
            title: "合肖十一肖",
            value1: "合肖十一肖 - 中",
            value2: "合肖十一肖 - 不中",
            point1: 1,
            point2: 1,
            step1: 1,
            step2: 1
        }
    ];
    public radvalue = ""; // 绑定单选框值

    public dpcdata11 = {
        title: "自选不中 - 五不中",
        checkarr: [],
        ballarr: [],
        dantuo: 4,
        dantuodata: [],
        data1: this.setball()
    };
    public dpcdata12 = {
        title: "连肖 - 单选/复式 - 连肖二肖",
        checkarr: [],
        ballarr: [],
        dantuo: 1,
        dantuodata: [],
        point: 0,
        step: 0,
        data1: [{
                name: "鼠",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(0),
                point: 0,
                step: 0
            },
            {
                name: "牛",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(1),
                point: 0,
                step: 0
            },
            {
                name: "虎",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(2),
                point: 0,
                step: 0
            },
            {
                name: "兔",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(3),
                point: 0,
                step: 0
            },
            {
                name: "龙",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(4),
                point: 0,
                step: 0
            },
            {
                name: "蛇",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(5),
                point: 0,
                step: 0
            },
            {
                name: "马",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(6),
                point: 0,
                step: 0
            },
            {
                name: "羊",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(7),
                point: 0,
                step: 0
            },
            {
                name: "猴",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(8),
                point: 0,
                step: 0
            },
            {
                name: "鸡",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(9),
                point: 0,
                step: 0
            },
            {
                name: "狗",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(10),
                point: 0,
                step: 0
            },
            {
                name: "猪",
                value: "",
                checked: false,
                disabled: false,
                data: this.setball3(11),
                point: 0,
                step: 0
            }
        ]
    };
    public dpcdata13 = [{
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
            title: "正一VS正五",
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
            title: "正一VS正六",
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
            numb: 6,
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
            numb: 7,
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
            numb: 8,
            title: "正二VS正五",
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
            title: "正二VS正六",
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
            numb: 10,
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
            numb: 11,
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
            numb: 12,
            title: "正三VS正五",
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
            numb: 13,
            title: "正三VS正六",
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
            numb: 14,
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
            numb: 15,
            title: "正四VS正五",
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
            numb: 16,
            title: "正四VS正六",
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
            numb: 17,
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
        },
        {
            numb: 18,
            title: "正五VS正六",
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
            numb: 19,
            title: "正五VS特码",
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
            numb: 20,
            title: "正六VS特码",
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
    public notetip = [
        "只有二全中、二中特、特串支持对碰",
        "快捷方式只有选中六肖中(不中)后才能使用。",
        "系统不允许同时选择 【野兽】",
        "系统不允许同时选择 【家禽】",
        "系统不允许同时选择 【单】",
        "系统不允许同时选择 【双】"
    ];
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
        // 跳转官方路由设置
        // this.setlink();
        this.route.params.subscribe(data => {
            this.type = 1;
            if (this.selectbtnvalue===0) {
                this.reset();
            }
            this.tabclick(0);
            this.routeid = data.id;
            this.subob.channel = "低频彩 - " + this.routeid;
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
        for (let ty = 1; ty < 14; ty++) {
            if (ty === 13) {
                let d = this.dpcdata13;
                for (let q = 0; q < d.length; q++) {
                    _that.dpcdata13[q].value1.point = p.longhu.long.point;
                    _that.dpcdata13[q].value1.step = p.longhu.long.step;
                    _that.dpcdata13[q].value2.point = p.longhu.hu.point;
                    _that.dpcdata13[q].value2.step = p.longhu.hu.step;
                }
            } else {
                let str = "dpcdata" + ty;
                let _that = this;
                if (_that[str] instanceof Array) {
                    for (let q = 0; q < _that[str].length; q++) {
                        let d1 = _that[str][q].data1;
                        if (d1) {
                            for (let q = 0; q < d1.length; q++) {
                                let t = d1[q].name === undefined ? "numb" : "name";
                                this.setpoint(p[str].data1, d1[q], t);
                            }
                        }
                    }
                } else {
                    if (ty === 10) {
                        let d1 = _that.data10_1;
                        let d = p.dpcdata10.data1;
                        for (let t = 0; t < d1.length; t++) {
                            for (let j = 0; j < d.length; j++) {
                                if (String(d1[t].title) === String(d[j].name)) {
                                    d1[t].point1 = d[j].point1;
                                    d1[t].step1 = d[j].step1;
                                    d1[t].point2 = d[j].point2;
                                    d1[t].step2 = d[j].step2;
                                }
                            }
                        }
                    }
                    if (ty !== 6 && ty !== 10) {
                        let d1 = _that[str].data1;
                        let d2 = _that[str].data2;
                        let d3 = _that[str].data3;
                        if (d1) {
                            for (let q = 0; q < d1.length; q++) {
                                let t = d1[q].name === undefined ? "numb" : "name";
                                this.setpoint(p[str].data1, d1[q], t);
                            }
                        }
                        if (d2) {
                            for (let q = 0; q < d2.length; q++) {
                                if (d2[q] instanceof Array) {
                                    for (let w = 0; w < d2[q].length; w++) {
                                        let t = d2[q][w].name === undefined ? "numb" : "name";
                                        this.setpoint(p[str].data2, d2[q][w], t);
                                    }
                                } else {
                                    let t = d2[q].name === undefined ? "numb" : "name";
                                    this.setpoint(p[str].data2, d2[q], t);
                                }
                            }
                        }
                        if (d3) {
                            for (let q = 0; q < d3.length; q++) {
                                let t = d3[q].name === undefined ? "numb" : "name";
                                this.setpoint(p[str].data3, d3[q], t);
                            }
                        }
                    }
                }
            }
        }
    }

    setpoint(data, d, name) {
        if (data && d && d[name] !== null) {
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
            this.allinput = false;
            if (i === 7 || i === 10 || i === 11 || i === 12) {
                this.allinput = true;
            }
            this.ktclick("rest", 0); //清空快速投注数据
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
        box.x = e.target.offsetLeft + 4 + "px";
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

    // 正特选项点击事件
    zhengteclick(i) {
        let o = this.optionsdata;
        o.zhengteactive = i;
        this.dpcdata5.title = o.zhengte[o.zhengteactive];
        this.reset();
    }
    lianmaclick(i, n) {
        let o = this.optionsdata;
        let d7 = this.dpcdata7;
        if (n) {
            if (i < 1) {
                d7.dantuo = 0;
            }
            if (i === 1) {
                d7.dantuo = o.lianmastactive < 2 ? 2 : 1;
            }
            if (i > 1 && o.lianmastactive < 2) {
                this.POPNOTE({msg:this.notetip[0]});
                return;
            }
            if (i > 1) {
                d7.dantuo = 2;
            }
            o.lianmaactive = i;
        } else {
            o.lianmastactive = i;
            o.lianmaactive = 0;
            d7.dantuo = 0;
        }
        for (let q = 0; q < d7.data1.length; q++) {
            d7.data1[q].checked = false;
            d7.data1[q].disabled = false;
        }
        for (let q = 0; q < d7.data2.length; q++) {
            d7.data2[q].checked = false;
            d7.data2[q].disabled = false;
        }
        for (let q = 0; q < d7.data3.length; q++) {
            d7.data3[q].checked = false;
            d7.data3[q].disabled = false;
        }

        d7.checkarr = [];
        d7.ballarr = [];
        d7.dantuodata = [];
        d7.title =
            "连码 - " +
            o.lianma[o.lianmaactive] +
            " - " +
            o.lianmastyle[o.lianmastactive];

        //   ======
    }
    hexiaoclick(i, n) {
        let o = this.optionsdata;
        let d10 = this.dpcdata10;
        let tianxiao = ["兔", "马", "猴", "猪", "牛", "龙"];
        let dixiao = ["蛇", "羊", "鸡", "狗", "鼠", "虎"];
        if (
            this.radvalue === "合肖六肖 - 中" ||
            this.radvalue === "合肖六肖 - 不中"
        ) {
            if (n === 2) {
                let t = 2 + i;
                this.POPNOTE({msg:this.notetip[t]});
            } else {
                d10.checkarr = [];
                let d = d10.data1;
                for (let q = 0; q < d.length; q++) {
                    if (i === 0) {
                        d[q].checked = q < 6 ? true : false;
                        d[q].disabled = q < 6 ? false : true;
                    }
                    if (i === 1) {
                        d[q].checked = q < 6 ? false : true;
                        d[q].disabled = q < 6 ? true : false;
                    }
                    if (i === 2) {
                        d[q].checked = tianxiao.indexOf(d[q].name) > -1 ? true : false;
                        d[q].disabled = tianxiao.indexOf(d[q].name) > -1 ? false : true;
                    }
                    if (i === 3) {
                        d[q].checked = dixiao.indexOf(d[q].name) > -1 ? true : false;
                        d[q].disabled = dixiao.indexOf(d[q].name) > -1 ? false : true;
                    }
                }
                for (let q = 0; q < d.length; q++) {
                    if (d[q].checked) {
                        d10.checkarr.push(d[q].name);
                    }
                }
            }
        } else {
            this.POPNOTE({msg:this.notetip[1]});
        }
    }
    zixuanclick(i) {
        this.optionsdata.zixuactive = i;
        let d11 = this.dpcdata11;
        this.dpcdata11.dantuo = i + 4;
        this.dpcdata11.title = "自选不中 - " + this.optionsdata.zixuanno[i];
        for (let q = 0; q < d11.data1.length; q++) {
            d11.data1[q].checked = false;
            d11.data1[q].disabled = false;
        }
        d11.checkarr = [];
    }
    lianxiaoclick(i, n) {
        let o = this.optionsdata;
        let d12 = this.dpcdata12;
        if (n) {
            o.lianxiaoactive = i;
        } else {
            o.lianxiaostactive = i;
            o.lianxiaoactive = 0;
        }
        d12.dantuo = o.lianxiaostactive + 1;

        for (let q = 0; q < d12.data1.length; q++) {
            d12.data1[q].checked = false;
            d12.data1[q].disabled = false;
        }
        d12.checkarr = [];
        d12.ballarr = [];
        d12.dantuodata = [];
        this.dpcdata12.title =
            "连肖 - " +
            o.lianxiao[o.lianxiaoactive] +
            " - " +
            o.lianxiaostyle[o.lianxiaostactive];
    }
    // 多选框选择事件
    chechange(i, j) {
        let str = "dpcdata" + this.type;
        let _that = this;
        let tda = _that[str];
        let d1 = tda.data1;
        let d2 = tda.data2;
        let d3 = tda.data3;
        let op = this.optionsdata;
        if (this.type === 7) {
            if (op.lianmaactive < 2) {
                if (d1[i].checked) {
                    tda.checkarr.push(d1[i].numb);
                    if (op.lianmaactive === 1) {
                        let dt = tda.dantuo;
                        if (dt && tda.checkarr.length > dt && tda.dantuodata.length === 0) {
                            tda.dantuodata = tda.checkarr.splice(0, dt);
                            for (let q = 0; q < tda.dantuodata.length; q++) {
                                tda.data1[tda.dantuodata[q] - 1].disabled = true;
                            }
                        }
                    }
                } else {
                    let n = tda.checkarr.indexOf(d1[i].numb);
                    tda.checkarr.splice(n, 1);
                }
            }
            if (op.lianmaactive === 2) {
                tda.ballarr = [];
                if (d2[i].checked) {
                    tda.checkarr.push(d2[i].data);
                    if (tda.checkarr.length >= 2) {
                        for (let q = 0; q < tda.data2.length; q++) {
                            if (!tda.data2[q].checked) {
                                tda.data2[q].disabled = true;
                            }
                        }
                    }
                } else {
                    let n = tda.checkarr.indexOf(d2[i].data);
                    tda.checkarr.splice(n, 1);
                    for (let q = 0; q < tda.data2.length; q++) {
                        if (tda.data2[q].disabled) {
                            tda.data2[q].disabled = false;
                        }
                    }
                }
                for (let w = 0; w < tda.checkarr.length; w++) {
                    tda.ballarr[w] = [];
                    for (let e = 0; e < tda.checkarr[w].length; e++) {
                        tda.ballarr[w].push(tda.checkarr[w][e].numb);
                    }
                }
            }
            if (op.lianmaactive === 3) {
                tda.ballarr = [];
                if (d3[i].checked) {
                    tda.checkarr.push(d3[i].data);
                    if (tda.checkarr.length >= 2) {
                        for (let q = 0; q < tda.data3.length; q++) {
                            if (!tda.data3[q].checked) {
                                tda.data3[q].disabled = true;
                            }
                        }
                    }
                } else {
                    let n = tda.checkarr.indexOf(d3[i].data);
                    tda.checkarr.splice(n, 1);
                    for (let q = 0; q < tda.data3.length; q++) {
                        if (tda.data3[q].disabled) {
                            tda.data3[q].disabled = false;
                        }
                    }
                }
                for (let w = 0; w < tda.checkarr.length; w++) {
                    tda.ballarr[w] = [];
                    for (let e = 0; e < tda.checkarr[w].length; e++) {
                        tda.ballarr[w].push(tda.checkarr[w][e].numb);
                    }
                }
            }
            if (op.lianmaactive === 4) {
                tda.ballarr = [];
                let ddd = [];
                ddd = j === 2 ? d2 : d3;
                if (ddd[i].checked) {
                    tda.checkarr.push(ddd[i].data);
                    if (tda.checkarr.length >= 2) {
                        for (let q = 0; q < tda.data2.length; q++) {
                            if (!tda.data2[q].checked) {
                                tda.data2[q].disabled = true;
                            }
                        }
                        for (let q = 0; q < tda.data3.length; q++) {
                            if (!tda.data3[q].checked) {
                                tda.data3[q].disabled = true;
                            }
                        }
                    }
                } else {
                    let n = tda.checkarr.indexOf(ddd[i].data);
                    tda.checkarr.splice(n, 1);
                    for (let q = 0; q < tda.data2.length; q++) {
                        if (tda.data2[q].disabled) {
                            tda.data2[q].disabled = false;
                        }
                    }
                    for (let q = 0; q < tda.data3.length; q++) {
                        if (tda.data3[q].disabled) {
                            tda.data3[q].disabled = false;
                        }
                    }
                }
                for (let w = 0; w < tda.checkarr.length; w++) {
                    tda.ballarr[w] = [];
                    for (let e = 0; e < tda.checkarr[w].length; e++) {
                        tda.ballarr[w].push(tda.checkarr[w][e].numb);
                    }
                }
            }
        }
        if (this.type === 10) {
            let dt = tda.dantuo;
            if (d1[i].checked) {
                tda.checkarr.push(d1[i].name);
                if (dt && tda.checkarr.length >= dt) {
                    for (let w = 0; w < d1.length; w++) {
                        if (!tda.data1[w].checked) {
                            tda.data1[w].disabled = true;
                        }
                    }
                }
            } else {
                let n = tda.checkarr.indexOf(d1[i].name);
                tda.checkarr.splice(n, 1);
                for (let w = 0; w < d1.length; w++) {
                    tda.data1[w].disabled = false;
                }
            }
        }
        if (this.type === 11) {
            let dt = tda.dantuo;
            if (d1[i].checked) {
                tda.checkarr.push(d1[i].numb);
                if (dt && tda.checkarr.length > dt) {
                    for (let w = 0; w < d1.length; w++) {
                        if (!tda.data1[w].checked) {
                            tda.data1[w].disabled = true;
                        }
                    }
                }
            } else {
                let n = tda.checkarr.indexOf(d1[i].numb);
                tda.checkarr.splice(n, 1);
                for (let w = 0; w < d1.length; w++) {
                    tda.data1[w].disabled = false;
                }
            }
        }
        if (this.type === 12) {
            if (d1[i].checked) {
                tda.checkarr.push(d1[i].name);
                if (op.lianxiaoactive === 1) {
                    let dt = tda.dantuo;
                    if (dt && tda.checkarr.length > dt && tda.dantuodata.length === 0) {
                        tda.dantuodata = tda.checkarr.splice(0, dt);
                        for (let q = 0; q < tda.dantuodata.length; q++) {
                            let index = 0;
                            for (let w = 0; w < d1.length; w++) {
                                if (d1[w].name === tda.dantuodata[q]) {
                                    index = w;
                                    tda.data1[index].disabled = true;
                                    break;
                                }
                            }
                        }
                    }
                }
            } else {
                let n = tda.checkarr.indexOf(d1[i].name);
                tda.checkarr.splice(n, 1);
            }
        }
    }
    // 单选框选择事件
    radchange(i, n) {
        // let o = this.optionsdata;
        this.dpcdata10.title = this.radvalue;
        this.dpcdata10.dantuo = i + 1;
        this.dpcdata10.checkarr = [];
        this.dpcdata10.point =
            n === 1 ? this.data10_1[i].point1 : this.data10_1[i].point2;
        this.dpcdata10.step =
            n === 1 ? this.data10_1[i].step1 : this.data10_1[i].step2;
        let d = this.dpcdata10.data1;
        for (let i = 0; i < d.length; i++) {
            d[i].disabled = false;
            d[i].checked = false;
        }
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
        // 如果是有多选框的页面
        let t = this.type;
        let str = "dpcdata" + t;
        let _that = this;
        _that[str].checkarr = [];
        _that[str].ballarr = [];
        _that[str].dantuodata = [];
        if (t === 7 || t === 11 || t === 12) {
            let d1 = _that[str].data1;
            let d2 = _that[str].data2;
            let d3 = _that[str].data3;
            this.setchecked(d1);
            this.setchecked(d2);
            this.setchecked(d3);
        }
        if (t === 10) {
            this.radvalue = "";
            _that[str].checkarr = [];
            let d = _that[str].data1;
            for (let i = 0; i < d.length; i++) {
                d[i].checked = false;
                d[i].disabled = true;
            }
        }
        this.setallmoney.value = "";
    }
    setchecked(d){
        if(d){
            for (let i = 0; i < d.length; i++) {
                d[i].checked = false;
                d[i].disabled =false;
            }

        }
    }
    // 快捷选项下的输入框值改变后的方法，
    allchange() {
        let v = this.setallmoney.value;
        this.amend(v,true);
    }
    amend(v, bol=false) {
        if (this.type === 13) {
            let d = this.dpcdata13;
            for (let q = 0; q < d.length; q++) {
                d[q].value1.value = this.selectbtnvalue===1?(d[q].value1.checked?v:""):v;
                d[q].value2.value = this.selectbtnvalue===1?(d[q].value2.checked?v:""):v;
                d[q].value1.checked = bol?d[q].value1.checked:false;
                d[q].value2.checked = bol?d[q].value2.checked:false;
            }
        } else {
            let str = "dpcdata" + this.type;
            let _that = this;
            if (_that[str] instanceof Array) {
                for (let q = 0; q < _that[str].length; q++) {
                    let d1 = _that[str][q].data1;
                    let d2 = _that[str][q].data2;
                    this.setvalue(d1, v, bol);
                    this.setvalue(d2, v, bol);
                }
            } else {
                let d1 = _that[str].data1;
                let d2 = _that[str].data2;
                let d3 = _that[str].data3;
                this.setvalue(d1, v, bol);
                this.setvalue(d2, v, bol);
                this.setvalue(d3, v, bol);
            }
        }
    }
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
                        // 如果是有多选框的页面
                        if (
                            this.type === 7 ||
                            this.type === 10 ||
                            this.type === 11 ||
                            this.type === 12
                        ) {
                            return;
                        } else {
                            d[q].value = this.selectbtnvalue===1?(d[q].checked?v:""):v;
                            d[q].checked = bol?d[q].checked:false;
                        }
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
        let differ = 0;
        if (this.type == 13) {
            let d = this.dpcdata13;
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
        } else {
            let _that = this;
            let str = "dpcdata" + this.type;
            if (_that[str] instanceof Array) {
                for (let q = 0; q < _that[str].length; q++) {
                    let d1 = _that[str][q].data1;
                    let d2 = _that[str][q].data2;
                    if (d1) {
                        if (d1[0] instanceof Array) {
                            for (let w = 0; w < d1.length; w++) {
                                this.setsubdata(d1[w], data, _that[str][q].title);
                            }
                        } else {
                            this.setsubdata(d1, data, _that[str][q].title);
                        }
                    }
                    if (d2) {
                        if (d2[0] instanceof Array) {
                            for (let w = 0; w < d2.length; w++) {
                                this.setsubdata(d2[w], data, _that[str][q].title);
                            }
                        } else {
                            this.setsubdata(d2, data, _that[str][q].title);
                        }
                    }
                }
            } else {
                let d1 = _that[str].data1;
                let d2 = _that[str].data2;
                if (
                    _that.type === 7 ||
                    _that.type === 12 ||
                    _that.type === 10 ||
                    _that.type === 11
                ) {
                    let op = _that.optionsdata;
                    if (_that.type === 7) {
                        // ====================连码规则
                        let resutdata = [];
                        let n = op.lianmaactive === 0 && op.lianmastactive < 2 ? 3 : 2;
                        let rearr = [];
                        rearr = _that[str].checkarr;
                        if (op.lianmaactive === 0) {
                            if (rearr.length >= n) {
                                resutdata = _that.choose_group(rearr, n);
                            }else{
                                differ = n - rearr.length;
                            }
                        }
                        if (op.lianmaactive === 1) {
                            if (_that[str].dantuodata.length > 0 && rearr.length > 0) {
                                for (let q = 0; q < _that[str].checkarr.length; q++) {
                                    let a = _that[str].dantuodata.concat(_that[str].checkarr[q]);
                                    resutdata.push(a);
                                }
                            }else{
                                differ = n - rearr.length - _that[str].dantuodata.length;
                            }
                        }
                        if (
                            op.lianmaactive === 2 ||
                            op.lianmaactive === 3 ||
                            op.lianmaactive === 4
                        ) {
                            rearr = _that[str].ballarr;
                            if (rearr.length === n) {
                                resutdata = _that.count_group(rearr, n);
                            }else{
                                differ = n - rearr.length;
                            }
                            resutdata = resutdata.filter(x => {
                                x.sort((a, b) => {
                                    return a - b;
                                });
                                return x[0] !== x[1];
                            });
                            let set = new Set(resutdata);
                            resutdata = Array.from(set);
                        }

                        // =====================================================
                        if (Number(_that.setallmoney.value) > 0) {
                            for (let q = 0; q < resutdata.length; q++) {
                                let l = data.length;
                                data[l] = Object.assign({}, this.subob);
                                data[l].ball = resutdata[q].join(", ");
                                data[l].type = _that[str].title;
                                data[l].point = parseFloat(
                                    (
                                        _that[str].data1[0].point +
                                        _that[str].data1[0].step * this.rangevalue
                                    ).toFixed(3)
                                );
                                data[l].money = _that.setallmoney.value;
                            }
                        }
                    }
                    if (_that.type === 10) {
                        // ====================合肖规则
                        if (_that[str].checkarr.length >= _that[str].dantuo) {
                            let resutdata = [];
                            resutdata = _that[str].checkarr;
                            if (Number(_that.setallmoney.value) > 0) {
                                let l = data.length;
                                data[l] = Object.assign({}, this.subob);
                                data[l].ball = resutdata.join(", ");
                                data[l].type = _that[str].title;
                                data[l].point = parseFloat(
                                    (
                                        _that[str].point +
                                        _that[str].step * this.rangevalue
                                    ).toFixed(3)
                                );
                                data[l].money = _that.setallmoney.value;
                            }
                        }else{
                            differ = _that[str].dantuo - _that[str].checkarr.length;
                        }
                    }
                    if (_that.type === 11) {
                        // ====================自选不中规则
                        if (_that[str].checkarr.length >= _that[str].dantuo + 1) {
                            let resutdata = [];
                            resutdata = _that[str].checkarr.sort((a, b) => {
                                return a - b;
                            });
                            if (Number(_that.setallmoney.value) > 0) {
                                let l = data.length;
                                data[l] = Object.assign({}, this.subob);
                                data[l].ball = resutdata.join(", ");
                                data[l].type = _that[str].title;
                                data[l].point = parseFloat(
                                    (
                                        _that[str].data1[0].point +
                                        _that[str].data1[0].step * this.rangevalue
                                    ).toFixed(3)
                                );
                                data[l].money = _that.setallmoney.value;
                            }
                        }else{
                            differ = _that[str].dantuo + 1 - _that[str].checkarr.length;
                        }
                    }
                    if (_that.type === 12) {
                        // ====================连肖规则
                        let resutdata = [];
                        let n = _that[str].dantuo + 1;
                        let rearr = [];
                        rearr = _that[str].checkarr;
                        if (op.lianxiaoactive === 0) {
                            if (rearr.length >= n) {
                                resutdata = _that.choose_group(rearr, n);
                            }else{
                                differ = n - rearr.length;
                            }
                        }
                        if (op.lianxiaoactive === 1) {
                            if (_that[str].dantuodata.length > 0 && rearr.length > 0) {
                                for (let q = 0; q < _that[str].checkarr.length; q++) {
                                    let a = _that[str].dantuodata.concat(_that[str].checkarr[q]);
                                    resutdata.push(a);
                                }
                            }else{
                                differ = n - rearr.length - _that[str].dantuodata.length;
                            }
                        }
                        let index1 = 0;
                        let index2 = 0;
                        for (let j = 0; j < _that.dpcdata12.data1.length; j++) {
                            if (_that.dpcdata12.data1[j].name === _that.year) {
                                index1 = j;
                                index2 = j === _that.dpcdata12.data1.length - 1 ? j - 1 : j + 1;
                            }
                        }
                        // =====================================================
                        if (Number(_that.setallmoney.value) > 0) {
                            for (let q = 0; q < resutdata.length; q++) {
                                let nnn =
                                    resutdata[q].indexOf(_that.year) > -1 ? index1 : index2;

                                let l = data.length;
                                data[l] = Object.assign({}, this.subob);
                                data[l].ball = resutdata[q].join(", ");
                                data[l].type = _that[str].title;
                                data[l].point = parseFloat(
                                    (
                                        _that.dpcdata12.data1[nnn].point +
                                        _that.dpcdata12.data1[nnn].step * this.rangevalue
                                    ).toFixed(3)
                                );
                                data[l].money = _that.setallmoney.value;
                            }
                        }
                    }
                } else {
                    if (d1) {
                        if (d1[0] instanceof Array) {
                            for (let w = 0; w < d1.length; w++) {
                                this.setsubdata(d1[w], data, _that[str].title);
                            }
                        } else {
                            this.setsubdata(d1, data, _that[str].title);
                        }
                    }
                    if (d2) {
                        if (d2[0] instanceof Array) {
                            for (let w = 0; w < d2.length; w++) {
                                this.setsubdata(d2[w], data, _that[str].title);
                            }
                        } else {
                            this.setsubdata(d2, data, _that[str].title);
                        }
                    }
                }
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
            if (this.allinput) {
                if (differ>0) {
                    if (this.type === 10 && this.dpcdata10.title==="") {
                        this.POPNOTE({msg:'请勾选合肖选项！'});
                    }else{
                        this.POPNOTE({msg:'您至少还需要勾选' + differ + '项！'});
                    }
                }else{
                    if (this.setallmoney.value==="") {
                        this.POPNOTE({msg:'请填写下注金额！'});
                    }
                }
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

    // 快速投注提交事件
    ktsub() {
        if (Number(this.kuaitoudata.value) <= 0) {
        }
        let data = [];
        let d = this.kuaitoudata.data1;
        let str = this.typedata[this.type - 1].name + " - 快速投注";
        let point;
        if (this.type===4) {
            point = parseFloat((this.POINt_data.dpcdata4.data1[0].point + (this.POINt_data.dpcdata4.data1[0].step * this.rangevalue)).toFixed(3));
        }else{
            point = parseFloat((this.POINt_data.dpcdata1.data1[0].point + (this.POINt_data.dpcdata1.data1[0].step * this.rangevalue)).toFixed(3));
        }
        for (let i = 0; i < d.length; i++) {
            if (d[i].checked) {
                let l = data.length;
                data[l] = Object.assign({}, this.subob);
                data[l].number = d[i].numb.toString();
                data[l].type = str;
                data[l].point = point;
                data[l].money = this.kuaitoudata.value;
            }
        }
        if (data.length > 0) {
            this.submoney = 0;
            for (let i = 0; i < data.length; i++) {
                this.submoney += Number(data[i].money);
            }
            if (Number(this.kuaitoudata.value) > 0) {
                this.SUB(data);
            } else {
                this.POPNOTE({msg:'请填写快速投注金额！'});
            }
            return false;
        } else {
            // ===此处提示完成投注内容提示
            this.POPNOTE({msg:'请选择快速投注内容！'});
            return false;
        }
    }
    jiansub() {
        this.kuaitoudata.jiantoustr = formmod.trim(this.kuaitoudata.jiantoustr);
        if (!this.kuaitoudata.jiantoustr) {
            this.POPNOTE({msg:'请输入投注内容！'});
            return;
        }
        let arr = this.kuaitoudata.jiantoustr.split(" ");
        let data=[], d=[];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) {
                let a = arr[i].split("=");
                if (a.length===2) {
                    let o ={numb:Number(a[0]), value:Number(a[a.length-1]), }
                    if (String(o.numb) === 'NaN' || String(o.value)=== 'NaN' ||!String(o.numb)|| !String(o.value)) {
                        this.POPNOTE({msg:'输入内容的格式有误'});
                        return;
                    };
                    if (o.numb < 1 || o.numb >50 ||".".indexOf(o.numb+'')!==-1) {
                        this.POPNOTE({msg:'您输入的号码有误！'});
                        return;
                    };
                    if (o.value < 1) {
                        this.POPNOTE({msg:'您输入的下注金额不能小于1！'});
                        return;
                    };
                    d.push(o);
                }else{
                    this.POPNOTE({msg:'输入内容的格式有误'});
                    return;
                }
            }
        }
        let str = this.typedata[this.type - 1].name + " - 快速投注";
        let point;
        if (this.type===4) {
            point = parseFloat((this.POINt_data.dpcdata4.data1[0].point + (this.POINt_data.dpcdata4.data1[0].step * this.rangevalue)).toFixed(3));
        }else{
            point = parseFloat((this.POINt_data.dpcdata1.data1[0].point + (this.POINt_data.dpcdata1.data1[0].step * this.rangevalue)).toFixed(3));
        }
        for (let i = 0; i < d.length; i++) {
            let l = data.length;
            data[l] = Object.assign({}, this.subob);
            data[l].number = d[i].numb.toString();
            data[l].type = str;
            data[l].point = point;
            data[l].money = d[i].value;
        }
        this.submoney = 0;
        for (let i = 0; i < data.length; i++) {
            this.submoney += Number(data[i].money);
        }
        this.SUB(data);
        this.kuaitoudata.jiantoustr = '';
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
        let d = this.kuaitoudata;
        let d1 = this.kuaitoudata["data1"];
        let d2 = this.kuaitoudata["data2"];
        let d3 = this.kuaitoudata["data3"];
        d.data4.checked = false;
        if (t === "data1") {
            d1[n].checked = !d1[n].checked;
        } else if (t === "data4") {
            d.data4.checked = true;
            for (let i = 0; i < d1.length; i++) {
                d1[i].checked = true;
            }
            for (let i = 0; i < d2.length; i++) {
                d2[i].checked = false;
            }
            for (let i = 0; i < d3.length; i++) {
                d3[i].checked = false;
            }
        } else if (t === "rest") {
            for (let i = 0; i < d1.length; i++) {
                d1[i].checked = false;
            }
            for (let i = 0; i < d2.length; i++) {
                d2[i].checked = false;
            }
            for (let i = 0; i < d3.length; i++) {
                d3[i].checked = false;
            }
            d.data4.checked = false;
        } else {
            d[t][n].checked = !d[t][n].checked;

            let arr = d[t][n].fn(d1);
            for (let i = 0; i < arr.length; i++) {
                let l = arr[i].numb - 1;
                if (d[t][n].checked) {
                    d1[l].checked = true;
                } else {
                    d1[l].checked = false;
                }
            }
        }

        d.ktarr = [];
        for (let i = 0; i < d1.length; i++) {
            if (d1[i].checked) {
                d.ktarr.push(d1[i].numb);
            }
        }
        d.ktstr = d.ktarr.join(", ");
    }

    // 设置波色球的数据
    setball() {
        let data = [];
        for (let q = 1; q <= 50; q++) {
            let o = Object.assign({}, this.BALL);
            o.numb = q;
            if (q < 50 && q > 40) {
                if (q % 6 === 3 || q % 6 === 4) {
                    o.red = true;
                }
                if (q % 6 === 5 || q % 6 === 0) {
                    o.blue = true;
                }
                if (q % 6 === 1 || q % 6 === 2) {
                    o.green = true;
                }
            }
            if (q < 41 && q > 30) {
                if (q % 6 === 4 || q % 6 === 5) {
                    o.red = true;
                }
                if (q % 6 === 0 || q % 6 === 1) {
                    o.blue = true;
                }
                if (q % 6 === 2 || q % 6 === 3) {
                    o.green = true;
                }
            }
            if (q < 31 && q > 20) {
                if (q % 6 === 5 || q % 6 === 0) {
                    o.red = true;
                }
                if (q % 6 === 1 || q % 6 === 2) {
                    o.blue = true;
                }
                if (q % 6 === 3 || q % 6 === 4) {
                    o.green = true;
                }
            }
            if (q < 21 && q > 10) {
                if (q % 6 === 0 || q % 6 === 1) {
                    o.red = true;
                }
                if (q % 6 === 2 || q % 6 === 3) {
                    o.blue = true;
                }
                if (q % 6 === 4 || q % 6 === 5) {
                    o.green = true;
                }
            }

            if (q < 11) {
                if (q % 6 === 1 || q % 6 === 2) {
                    o.red = true;
                }
                if (q % 6 === 3 || q % 6 === 4) {
                    o.blue = true;
                }
                if (q % 6 === 5 || q % 6 === 0) {
                    o.green = true;
                }
            }
            data.push(o);
        }
        data[data.length - 1].numb = null;
        return data;
    }
    // 设置合肖数据
    sethexiaoball(n) {
        let data = this.setshengxiaoball();
        for (let i = 0; i < data.length; i++) {
            for (let q = 0; q < data[i].length; q++) {
                if (data[i][q].numb === 49) {
                    data[i].splice(q, 1);
                }
            }
        }
        return data[n];
    }
    // 设置尾号数据
    setweiball(n) {
        let d = this.setball();
        d.splice(49);
        let data = [];
        for (let i = 0; i < 10; i++) {
            data[i] = [];
            for (let q = 0; q < d.length; q++) {
                if (d[q].numb % 10 === i) {
                    let o = Object.assign({}, d[q]);
                    data[i].push(o);
                }
            }
        }
        return data[n];
    }

    // 过滤波色 大小数据。 t为波色 n为大小判断
    setball2(t, n) {
        let d = this.setball();
        d.splice(48);
        let data = d.filter(o => {
            if (n < 2) {
                return o[t] && o.numb % 2 === n;
            } else {
                if (n === 24) {
                    return o[t] && o.numb <= n;
                } else {
                    return o[t] && o.numb >= n;
                }
            }
        });
        return data;
    }
    // 设置生肖球数据
    setball3(z) {
        let data = this.setshengxiaoball();
        return data[z];
    }
    // 设置生肖球数据
    setshengxiaoball() {
        let d = this.setball();
        d.splice(49);
        let data = [];
        for (let i = 0; i < 12; i++) {
            data[i] = [];
        }
        for (let i = 0; i < d.length; i++) {
            let o = d[i];
            let date = new Date();
            let Y = date.getFullYear();
            let n = 48 - i + ((Y + 8) % 12);
            if (n >= 12) {
                n = n % 12;
            }
            data[n].push(o);
        }
        return data;
    }
    // 设置全属性球数据
    setquanball() {
        let d = [];
        let data = this.setshengxiaoball();
        let shengxiao = [
            "鼠",
            "牛",
            "虎",
            "兔",
            "龙",
            "蛇",
            "马",
            "羊",
            "猴",
            "鸡",
            "狗",
            "猪"
        ];
        let poultry = ["狗", "鸡", "羊", "马", "牛", "猪"];
        for (let i = 0; i < data.length; i++) {
            for (let q = 0; q < data[i].length; q++) {
                data[i][q].shengxiao = shengxiao[i];
                if (poultry.indexOf(shengxiao[i]) !== -1) {
                    data[i][q].poultry = true;
                } else {
                    data[i][q].wild = true;
                }
                d.push(data[i][q]);
            }
        }
        d.sort((a, b) => {
            return a.numb - b.numb;
        });
        this.year = d[0].shengxiao;
        return d;
    }

    // 设置正码球数据
    setzhengma() {
        let data = [];
        let d = [
            "单",
            "双",
            "大",
            "小",
            "合单",
            "合双",
            "红波",
            "蓝波",
            "绿波"
        ];
        for (let i = 0; i < d.length; i++) {
            let o = Object.assign({}, this.BALL2);
            o.name = d[i];
            o.title = i<2?'单双':(i<4?'大小':(i<6?'合数单双':'色波'));
            data.push(o);
        }
        return data;
    }
    // 组选公式 arr需要组选的数组  size组合数组的length
    choose_group(arr, size) {
        var allResult = [];
        (function fn(arr, size, result) {
            var arrLen = arr.length;
            if (size > arrLen) {
                return;
            }
            if (size == arrLen) {
                allResult.push([].concat(result, arr));
            } else {
                for (var i = 0; i < arrLen; i++) {
                    var newResult = [].concat(result);
                    newResult.push(arr[i]);
                    if (size == 1) {
                        allResult.push(newResult);
                    } else {
                        var newArr = [].concat(arr);
                        newArr.splice(0, i + 1);
                        fn(newArr, size - 1, newResult);
                    }
                }
            }
        })(arr, size, []);
        return allResult;
    }
    // 数组组选公式 arr需要组选的数组  size组合数组的length
    count_group(array, z) {
        let arr = array.concat();
        if (arr.length !== z) {
            return;
        }
        for (let t = 0; t < arr.length; t++) {
            if (arr[t].length < 1) return;
        }
        if (z === 1) return arr[0];
        let value = [];
        for (let i = 0; i < arr[0].length; i++) {
            for (let q = 0; q < arr[1].length; q++) {
                let n = [arr[0][i], arr[1][q]];
                value.push(n);
            }
        }
        arr.splice(0, 2, value);
        value = null;
        return this.count_group(arr, z - 1);
    }
    setBallPoint(p, s) {
        let data = [];
        for (let i = 1; i < 50; i++) {
            let d = {
                numb: i,
                point: p,
                step: s
            };
            data.push(d);
        }
        return data;
    }
    setWeiPoint(p, s) {
        let data = [];
        for (let i = 0; i < 10; i++) {
            let d = {
                name: i + "",
                point: p,
                step: s
            };
            data.push(d);
        }
        return data;
    }
    setShengxiaoPoint(p, s) {
        let data = [];
        let shengxiao = [
            "鼠",
            "牛",
            "虎",
            "兔",
            "龙",
            "蛇",
            "马",
            "羊",
            "猴",
            "鸡",
            "狗",
            "猪"
        ];
        for (let i = 0; i < shengxiao.length; i++) {
            let d = {
                name: shengxiao[i],
                point: p,
                step: s
            };
            data.push(d);
        }
        return data;
    }
    setZhengmaPoint() {
        let data = [{
                name: "单",
                point: 1.816,
                step: 0.156 / 7.8
            },
            {
                name: "双",
                point: 1.816,
                step: 0.156 / 7.8
            },
            {
                name: "大",
                point: 1.816,
                step: 0.156 / 7.8
            },
            {
                name: "小",
                point: 1.816,
                step: 0.156 / 7.8
            },
            {
                name: "合单",
                point: 1.816,
                step: 0.156 / 7.8
            },
            {
                name: "合双",
                point: 1.816,
                step: 0.156 / 7.8
            },
            {
                name: "红波",
                point: 2.513,
                step: 0.324 / 7.8
            },
            {
                name: "蓝波",
                point: 2.598,
                step: 0.239 / 7.8
            },
            {
                name: "绿波",
                point: 2.598,
                step: 0.239 / 7.8
            }
        ];
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