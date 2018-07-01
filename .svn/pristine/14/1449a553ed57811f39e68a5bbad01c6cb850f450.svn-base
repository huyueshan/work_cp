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
import "rxjs/add/operator/filter";

@Component({
    selector: "app-k3",
    templateUrl: "./k3.component.html",
    styleUrls: ["./k3.component.scss"]
})
export class K3Component implements OnInit, OnDestroy, AfterViewInit {
    loadpage = false;
    public cpnav = {
        style: "credit",
        prev: "20180517022",
        prevball: [2, 5, 9, 0, 8],
        next: "20180517023",
        time: ""
    };
    public routeid;
    public odds = 7.8; // 赔率
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
    public BALL = {
        numb: [],
        value: ""
    };
    public BALL2 = {
        name: "",
        value: ""
    };
    public contenttoptitle = [, , , , , ];
    public setallmoney = {
        value: ""
    }; //绑定快捷金额
    // 活动选择框的位置
    public boxposition = {
        x: "",
        y: ""
    };
    public imgtop = [{
            top: "-10px"
        },
        {
            top: "-10px"
        },
        {
            top: "-50px"
        },
        {
            top: "-90px"
        },
        {
            top: "-130px"
        },
        {
            top: "-170px"
        },
        {
            top: "-210px"
        }
    ];
    public k3data1 = {
        title: "三军",
        data1: [{
                numb: 1,
                value: ""
            },
            {
                numb: 2,
                value: ""
            },
            {
                numb: 3,
                value: ""
            },
            {
                numb: 4,
                value: ""
            },
            {
                numb: 5,
                value: ""
            },
            {
                numb: 6,
                value: ""
            }
        ],
        data2: [{
                name: "大",
                value: ""
            },
            {
                name: "小",
                value: ""
            },
            {
                name: null,
                value: ""
            },
            {
                name: null,
                value: ""
            }
        ]
    };
    public k3data2 = {
        title: "全骰、围骰",
        data1: [{
            name: "全骰",
            value: ""
        }],
        data2: [{
                numb: 1,
                value: ""
            },
            {
                numb: 2,
                value: ""
            },
            {
                numb: 3,
                value: ""
            },
            {
                numb: 4,
                value: ""
            },
            {
                numb: 5,
                value: ""
            },
            {
                numb: 6,
                value: ""
            },
            {
                numb: null,
                value: ""
            },
            {
                numb: null,
                value: ""
            },
            {
                numb: null,
                value: ""
            }
        ]
    };
    public k3data3 = {
        title: "短牌",
        data1: [{
                numb: [1, 1],
                value: ""
            },
            {
                numb: [2, 2],
                value: ""
            },
            {
                numb: [3, 3],
                value: ""
            },
            {
                numb: [4, 4],
                value: ""
            },
            {
                numb: [5, 5],
                value: ""
            },
            {
                numb: [6, 6],
                value: ""
            },
            {
                numb: null,
                value: ""
            },
            {
                numb: null,
                value: ""
            },
            {
                numb: null,
                value: ""
            },
            {
                numb: null,
                value: ""
            }
        ]
    };
    public k3data4 = {
        title: "点数",
        data1: this.setdian()
    };
    public k3data5 = {
        title: "长牌",
        data1: this.setvs()
    };

    // 遮罩层
    public shade = {
        w: 0,
        h: 0
    };
    // =弹窗对话框数据

    public popup = {
        shade: {
            show: false,
            w: 0,
            h: 0
        },
        setnumb: {
            show: false,
            value: "",
            data: []
        },
        sub: {
            show: false,
            top: "10px",
            data: []
        }
    };
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
            this.routeid = data.id;
            this.subob.channel = "快三 - " + this.routeid;
        });
    }
    ngAfterViewInit() {}
    ngOnDestroy() {}

    // 禁用快选活动框事件
    setboxvalid() {
        this.boxvalid = !this.boxvalid;
    }
    // 滑块左侧递减事件
    rangevaluelessen() {
        if (this.rangevalue > 0) {
            this.rangevalue -= 0.1;
        }
    }
    // 滑块左侧递加事件
    rangevalueadd() {
        if (this.rangevalue < 7.8) {
            this.rangevalue += 0.1;
        }
    }
    // 切换一般 /快捷 事件
    tabclick(i) {
        if (i === 0) {
            this.selectbtnvalue = 0;
            this.inputshow = true;
        }
        if (i === 1) {
            this.selectbtnvalue = 1;
            this.inputshow = false;
        }
        if (i === 2) {
            let p = this.popup;
            let d = this.popup.setnumb.data;
            for (let i = 0; i < this.selmoeny.length; i++) {
                d[i] = {
                    value: this.selmoeny[i]
                };
            }
            p.setnumb.show = true;

            p.shade.show = true;
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
        this.close();
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
    close() {
        let p = this.popup;
        p.setnumb.show = false;
        p.shade.show = false;
        p.sub.show = false;
    }
    //====快选金额事件end=============

    // curinpt为当前操作输入框 变量
    // i 数组当前index
    inmoneyfocus(e, i) {
        this.curinpt = this.setallmoney;
        this.setposition(e);
    }
    // 金额框获得焦点事件 /curinpt为当前操作输入框 变量
    // t、i 、n 为对应数据的key值或者index
    inmoney1focus(e, n, t, i) {
        let _that = this;
        let str = "k3data" + n;
        this.curinpt = _that[str][t][i];
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
        if (this.curinpt === this.setallmoney) {
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
            this.amend(i);
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
        this.amend(v);
    }
    amend(v) {
        let _that = this;
        for (let i = 1; i <= 5; i++) {
            let str = "k3data" + i;
            let d1 = _that[str].data1;
            let d2 = _that[str].data2;
            for (let q = 0; q < d1.length; q++) {
                if (d1[q].numb !== null && d1[q].name !== null) {
                    d1[q].value = v;
                }
            }
            if (d2) {
                for (let q = 0; q < d2.length; q++) {
                    if (d2[q].numb !== null && d2[q].name !== null) {
                        d2[q].value = v;
                    }
                }
            }
        }
    }
    // 限制输入框只能输入数字
    changereg() {
        let v = this.curinpt;
        v.value = v.value.replace(/\D/g, "");
        if(Number(v.value)===0 && v.value !== ""){
          v.value = 0;
        }
        if(Number(v.value)>0){
          v.value = Number(v.value);
        }
      }

    // 确认提交按钮事件
    sub() {
        let data = [];
        this.popup.sub.top = "260px";
        let point = (11.633 + (1.3 / 7.8) * this.rangevalue).toFixed(3);

        let _that = this;
        for (let i = 1; i <= 5; i++) {
            let str = "k3data" + i;
            let d1 = _that[str].data1;
            let d2 = _that[str].data2;
            this.setsubdata(d1, data, _that[str].title, point);
            if (d2) {
                this.setsubdata(d2, data, _that[str].title, point);
            }
        }
        // 金额求和===================
        this.submoney = 0;
        for (let i = 0; i < data.length; i++) {
            this.submoney += Number(data[i].money);
        }
        this.subdata = data;
        this.popup.sub.show = true;
        this.popup.shade.show = true;
        // this.reset();
        // this.setallmoney.value = '';
        return false;
    }

    setsubdata(d, data, str, point) {
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
                    data[l].type = "大小骰宝 - " + str;
                    data[l].point = point;
                    data[l].money = d[q].value;
                }
            }
        }
    }

    linkrouter(t) {
        this.router.navigate([t]);
    }
    routlink() {
        let str;
        this.route.params.subscribe(data => (str = data.id));
        this.router.navigate(["/lottery/officialk3", str]);
    }

    // 设置整合 球的数据
    setdian() {
        let data = [];
        for (let i = 4; i <= 17; i++) {
            let o = Object.assign({}, this.BALL2);
            o.name = i + "点";
            data.push(o);
        }
        return data;
    }
    setvs() {
        let data = [];
        for (let q = 1; q < 6; q++) {
            for (let w = q + 1; w <= 6; w++) {
                let o = Object.assign({}, this.BALL);
                o.numb = [q, w];
                data.push(o);
            }
        }
        return data;
    }
}