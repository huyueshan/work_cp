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
    public routeid;
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
    public newpoint = false; // 绑定提交时的最新赔率
    public BALL = {
        numb: [],
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
            top: "-48px"
        },
        {
            top: "-86px"
        },
        {
            top: "-124px"
        },
        {
            top: "-162px"
        },
        {
            top: "-200px"
        }
    ];

    public POINt_data = {
        k3data1: {
            data1: [{
                    numb: 1,
                    point: 1.743,
                    step: 0.225 / 7.8
                },
                {
                    numb: 2,
                    point: 1.743,
                    step: 0.225 / 7.8
                },
                {
                    numb: 3,
                    point: 1.743,
                    step: 0.225 / 7.8
                },
                {
                    numb: 4,
                    point: 1.743,
                    step: 0.225 / 7.8
                },
                {
                    numb: 5,
                    point: 1.743,
                    step: 0.225 / 7.8
                },
                {
                    numb: 6,
                    point: 1.743,
                    step: 0.225 / 7.8
                },
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
            ]
        },
        k3data2: {
            data1: [{
                name: "全骰",
                point: 27.048,
                step: 2.806 / 7.8
            }],
            data2: [{
                    numb: 1,
                    point: 162.288,
                    step: 16.84 / 7.8
                },
                {
                    numb: 2,
                    point: 162.288,
                    step: 16.84 / 7.8
                },
                {
                    numb: 3,
                    point: 162.288,
                    step: 16.84 / 7.8
                },
                {
                    numb: 4,
                    point: 162.288,
                    step: 16.84 / 7.8
                },
                {
                    numb: 5,
                    point: 162.288,
                    step: 16.84 / 7.8
                },
                {
                    numb: 6,
                    point: 162.288,
                    step: 16.84 / 7.8
                }
            ]
        },
        k3data3: {
            data1: [{
                    numb: [1, 1],
                    point: 7.893,
                    step: 1.053 / 7.8
                },
                {
                    numb: [2, 2],
                    point: 7.893,
                    step: 1.053 / 7.8
                },
                {
                    numb: [3, 3],
                    point: 7.893,
                    step: 1.053 / 7.8
                },
                {
                    numb: [4, 4],
                    point: 7.893,
                    step: 1.053 / 7.8
                },
                {
                    numb: [5, 5],
                    point: 7.893,
                    step: 1.053 / 7.8
                },
                {
                    numb: [6, 6],
                    point: 7.893,
                    step: 1.053 / 7.8
                }
            ]
        },
        k3data4: {
            data1: [{
                    name: "4点",
                    point: 44.096,
                    step: 5.612 / 7.8
                },
                {
                    name: "5点",
                    point: 17.048,
                    step: 2.809 / 7.8
                },
                {
                    name: "6点",
                    point: 13.228,
                    step: 1.684 / 7.8
                },
                {
                    name: "7点",
                    point: 11.819,
                    step: 1.123 / 7.8
                },
                {
                    name: "8点",
                    point: 8.156,
                    step: 0.802 / 7.8
                },
                {
                    name: "9点",
                    point: 6.291,
                    step: 0.674 / 7.8
                },
                {
                    name: "10点",
                    point: 6.344,
                    step: 0.624 / 7.8
                },
                {
                    name: "11点",
                    point: 6.344,
                    step: 0.624 / 7.8
                },
                {
                    name: "12点",
                    point: 6.291,
                    step: 0.674 / 7.8
                },
                {
                    name: "13点",
                    point: 8.156,
                    step: 0.802 / 7.8
                },
                {
                    name: "14点",
                    point: 11.819,
                    step: 1.123 / 7.8
                },
                {
                    name: "15点",
                    point: 13.228,
                    step: 1.684 / 7.8
                },
                {
                    name: "16点",
                    point: 17.048,
                    step: 2.809 / 7.8
                },
                {
                    name: "17点",
                    point: 44.096,
                    step: 5.612 / 7.8
                },
            ]
        },
        k3data5: {
            data1: [{
                    numb: [1, 2],
                    point: 5.409,
                    step: 0.562 / 7.8
                },
                {
                    numb: [1, 3],
                    point: 5.409,
                    step: 0.562 / 7.8
                },
                {
                    numb: [1, 4],
                    point: 5.409,
                    step: 0.562 / 7.8
                },
                {
                    numb: [1, 5],
                    point: 5.409,
                    step: 0.562 / 7.8
                },
                {
                    numb: [1, 6],
                    point: 5.409,
                    step: 0.562 / 7.8
                },
                {
                    numb: [2, 3],
                    point: 5.409,
                    step: 0.562 / 7.8
                },
                {
                    numb: [2, 4],
                    point: 5.409,
                    step: 0.562 / 7.8
                },
                {
                    numb: [2, 5],
                    point: 5.409,
                    step: 0.562 / 7.8
                },
                {
                    numb: [2, 6],
                    point: 5.409,
                    step: 0.562 / 7.8
                },
                {
                    numb: [3, 4],
                    point: 5.409,
                    step: 0.562 / 7.8
                },
                {
                    numb: [3, 5],
                    point: 5.409,
                    step: 0.562 / 7.8
                },
                {
                    numb: [3, 6],
                    point: 5.409,
                    step: 0.562 / 7.8
                },
                {
                    numb: [4, 5],
                    point: 5.409,
                    step: 0.562 / 7.8
                },
                {
                    numb: [4, 6],
                    point: 5.409,
                    step: 0.562 / 7.8
                },
                {
                    numb: [5, 6],
                    point: 5.409,
                    step: 0.562 / 7.8
                },
            ]
        }
    };
    public k3data1 = {
        title: "三军",
        data1: [{
                numb: 1,
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: 2,
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
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
        data2: [{
                name: "大",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "小",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: null,
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: null,
                value: "",
                point: 0,
                step: 0,checked:false,
            }
        ]
    };
    public k3data2 = {
        title: "全骰、围骰",
        data1: [{
            name: "全骰",
            value: "",
            point: 0,
            step: 0,checked:false,
        }],
        data2: [{
                numb: 1,
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: 2,
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
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
            }
        ]
    };
    public k3data3 = {
        title: "短牌",
        data1: [{
                numb: [1, 1],
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: [2, 2],
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: [3, 3],
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: [4, 4],
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: [5, 5],
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                numb: [6, 6],
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
            {
                numb: null,
                value: "",
                point: 0,
                step: 0,checked:false,
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
        // 跳转官方路由设置
        // this.setlink();
        this.route.params.subscribe(data => {
            this.type = 1;
            this.tabclick(0);
            this.routeid = data.id;
            this.subob.channel = "快三 - " + this.routeid;
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
        for (let i = 1; i <= 5; i++) {
            let str = "k3data" + i;
            let d1 = _that[str].data1;
            let d2 = _that[str].data2;
            for (let q = 0; q < d1.length; q++) {
                let t = d1[q].numb !== undefined ? "numb" : "name";
                _that.setpoint(p[str].data1, d1[q], t)
            }
            if (d2) {
                for (let q = 0; q < d2.length; q++) {
                    let t = d2[q].numb !== undefined ? "numb" : "name";
                    _that.setpoint(p[str].data2, d2[q], t)
                }
            }
        }
    }

    setpoint(data, d, name) {
        if (d[name] !== null) {
            for (let t = 0; t < data.length; t++) {
                if (String(data[t][name]) === String(d[name])) {
                    d.point = data[t].point;
                    d.step = data[t].step;
                    return
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
    // 切换一般 /快捷 事件
    tabclick(i) {
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
        if (this.curinpt === this.setallmoney) {
            box.y = e.target.offsetTop + 36 + "px";
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
    let _that = this;
    for (let i = 1; i <= 5; i++) {
        let str = "k3data" + i;
        let d1 = _that[str].data1;
        let d2 = _that[str].data2;
        for (let q = 0; q < d1.length; q++) {
            if (d1[q].numb !== null && d1[q].name !== null) {
                d1[q].value =  this.selectbtnvalue===1?(d1[q].checked?v:""):v;
                d1[q].checked = bol?d1[q].checked:false;
            }
        }
        if (d2) {
            for (let q = 0; q < d2.length; q++) {
                if (d2[q].numb !== null && d2[q].name !== null) {
                    d2[q].value =  this.selectbtnvalue===1?(d2[q].checked?v:""):v;
                    d2[q].checked = bol?d2[q].checked:false;
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
    let _that = this;
    for (let i = 1; i <= 5; i++) {
        let str = "k3data" + i;
        let d1 = _that[str].data1;
        let d2 = _that[str].data2;
        this.setsubdata(d1, data, _that[str].title);
        if (d2) {
            this.setsubdata(d2, data, _that[str].title);
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
                data[l].type = "大小骰宝 - " + str;
                data[l].point = parseFloat((d[q].point + (d[q].step * this.rangevalue)).toFixed(3));
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
// 绑定给弹窗组件的事件；
NOTARIZE(){
    return
}
// 弹窗关闭事件 可以自定义命名
closePopouot(e){
    let p = this.popoutInfo;
    p.show = false;
    p.event = false;
}

// 弹窗显示事件 data为对象 fn传一个方法时点击确认时触发
POPNOTE(data,fn=null){
    let o = {
        title:'操作提示',   //title不传值默认为 ‘操作提示’
        msg:' ',
        event: fn === null?false:true,
        show: true,
    }
    this.NOTARIZE = (typeof fn === 'function')?fn:this.NOTARIZE;
    this.popoutInfo = Object.assign({},o,data);
}
}