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
    selector: "app-pcdd",
    templateUrl: "./pcdd.component.html",
    styleUrls: ["./pcdd.component.scss"]
})
export class PcddComponent implements OnInit, OnDestroy, AfterViewInit {
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
    public rastep = 7.8; // 滑动条步长
    public rangevalue = this.odds; //绑定滑动条数据
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
        numb: 0,
        red: false,
        green: false,
        blue: false,
        gray: false,
        value: "",
        point: 0,
        step: 0,checked:false,
    };
    public BALL2 = {
        name: "",
        value: ""
    };
    public contenttoptitle = [, , , , ];
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
        pcdata1: [{
                numb: 0,
                point: 900,
                step: 78 / 7.8,
            },
            {
                numb: 1,
                point: 300,
                step: 26 / 7.8,
            },
            {
                numb: 2,
                point: 150,
                step: 13 / 7.8,
            },
            {
                numb: 3,
                point: 90,
                step: 7.8 / 7.8,
            },
            {
                numb: 4,
                point: 59.993,
                step: 5.2 / 7.8,
            },
            {
                numb: 5,
                point: 42.855,
                step: 3.716 / 7.8,
            },
            {
                numb: 6,
                point: 32.141,
                step: 2.787 / 7.8,
            },
            {
                numb: 7,
                point: 24.992,
                step: 2.166 / 7.8,
            },
            {
                numb: 8,
                point: 19.997,
                step: 1.734 / 7.8,
            },
            {
                numb: 9,
                point: 16.359,
                step: 1.419 / 7.8,
            },
            {
                numb: 10,
                point: 14.278,
                step: 1.237 / 7.8,
            },
            {
                numb: 11,
                point: 13.041,
                step: 1.131 / 7.8,
            },
            {
                numb: 12,
                point: 12.326,
                step: 1.069 / 7.8,
            },
            {
                numb: 13,
                point: 11.996,
                step: 1.04 / 7.8,
            },
            {
                numb: 14,
                point: 11.996,
                step: 1.04 / 7.8,
            },
            {
                numb: 15,
                point: 12.326,
                step: 1.069 / 7.8,
            },
            {
                numb: 16,
                point: 13.041,
                step: 1.131 / 7.8,
            },
            {
                numb: 17,
                point: 14.278,
                step: 1.237 / 7.8,
            },
            {
                numb: 18,
                point: 16.359,
                step: 1.419 / 7.8,
            },
            {
                numb: 19,
                point: 19.997,
                step: 1.734 / 7.8,
            },
            {
                numb: 20,
                point: 24.992,
                step: 2.166 / 7.8,
            },
            {
                numb: 21,
                point: 32.141,
                step: 2.787 / 7.8,
            },
            {
                numb: 22,
                point: 42.855,
                step: 3.716 / 7.8,
            },
            {
                numb: 23,
                point: 59.993,
                step: 5.2 / 7.8,
            },
            {
                numb: 24,
                point: 90,
                step: 7.8 / 7.8,
            },
            {
                numb: 25,
                point: 150,
                step: 13 / 7.8,
            },
            {
                numb: 26,
                point: 300,
                step: 26 / 7.8,
            },
            {
                numb: 27,
                point: 900,
                step: 78 / 7.8,
            },
        ],
        pcdata2: [{
                name: "大",
                point: 1.8,
                step: 0.156 / 7.8,
            },
            {
                name: "单",
                point: 1.8,
                step: 0.156 / 7.8,
            },
            {
                name: "大单",
                point: 3.308,
                step: 0.287 / 7.8,
            },
            {
                name: "大双",
                point: 3.94,
                step: 0.342 / 7.8,
            },
            {
                name: "极大",
                point: 16.065,
                step: 1.393 / 7.8,
            },
            {
                name: "小",
                point: 1.8,
                step: 0.156 / 7.8,
            },
            {
                name: "双",
                point: 1.8,
                step: 0.156 / 7.8,
            },
            {
                name: "小单",
                point: 3.94,
                step: 0.342 / 7.8,
            },
            {
                name: "小双",
                point: 3.308,
                step: 0.287 / 7.8,
            },
            {
                name: "极小",
                point: 16.065,
                step: 1.393 / 7.8,
            },
            {
                name: "红波",
                point: 2.29,
                step: 0.199 / 7.8,
            },
            {
                name: "绿波",
                point: 2.95,
                step: 0.257 / 7.8,
            },
            {
                name: "蓝波",
                point: 2.95,
                step: 0.257 / 7.8,
            },
            {
                name: "豹子",
                point: 50,
                step: 0,
            },
        ],
        pcdata3: [{
            name: "特码包三",
            point: 3.5,
            step: 0,
        }, ],
    };
    public pcdata1 = this.setball();
    public pcdata2 = [
        [{
                name: "大",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "单",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "大单",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "大双",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "极大",
                value: "",
                point: 0,
                step: 0,checked:false,
            }
        ],
        [{
                name: "小",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "双",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "小单",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "小双",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "极小",
                value: "",
                point: 0,
                step: 0,checked:false,
            }
        ],
        [{
                name: "红波",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "绿波",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: "蓝波",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: null,
                value: ""
            },
            {
                name: null,
                value: ""
            }
        ],
        [{
                name: "豹子",
                value: "",
                point: 0,
                step: 0,checked:false,
            },
            {
                name: null,
                value: ""
            },
            {
                name: null,
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
    ];
    public ballsel = this.setselball();
    public selballdata = {
        name: "特码包三",
        value: "",
        point: 3.5,
        step: 0,checked:false,
        number: 1,
        left: "0px",
        value1: {
            value: 0,
            styn: "gray"
        },
        value2: {
            value: 26,
            styn: "blue"
        },
        value3: {
            value: 6,
            styn: "red"
        },
        show: false
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
        channel: "",
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
        this.route.params.subscribe(data => {
            this.type = 1;
            this.tabclick(0);
            this.routeid = data.id;
            this.subob.channel = "PC蛋蛋 - " + this.routeid;
        });
        // 设置各投注项目赔率
        this.POINT();
    }
    ngAfterViewInit() {}
    ngOnDestroy() {}
    // 设置赔率
    POINT() {
        let p = this.POINt_data;
        let d1 = this.pcdata1;
        let d2 = this.pcdata2;
        let d3 = this.selballdata;
        for (let w = 0; w < d1.length; w++) {
            this.setpoint(p.pcdata1, d1[w], "numb");
        }
        for (let w = 0; w < d2.length; w++) {
            for (let q = 0; q < d2[w].length; q++) {
                this.setpoint(p.pcdata2, d2[w][q], "name");
            }
        }
        d3.point = p.pcdata3[0].point;
        d3.step = p.pcdata3[0].step;
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


    // 特码包三选择框事件
    sanbaoclick(i) {
        let d = this.selballdata;
        d.number = i;
        d.show = true;
        let n = 178 + 80 * (i - 1);
        d.left = n + "px";
    }
    selectball(i) {
        let d = this.selballdata;
        let str = "value" + d.number;
        d[str].value = i;
        if (i % 3 === 0) {
            d[str].styn = "red";
        }
        if (i % 3 === 1) {
            d[str].styn = "green";
        }
        if (i % 3 === 2) {
            d[str].styn = "blue";
        }
        if (i === 0 || i === 13 || i === 14 || i === 27) {
            d[str].styn = "gray";
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

    // curinpt为当前操作输入框 变量
    // i 数组当前index
    inmoneyfocus(e, i) {
        if (i == "all") {
            this.curinpt = this.setallmoney;
        } else {
            this.curinpt = this.selballdata;
        }
        this.setposition(e);
    }
    // 整合 金额框获得焦点事件 /curinpt为当前操作输入框 变量
    // t、i 、q 为对应数据的key值或者index
    inmoney1focus(e, i) {
        this.curinpt = this.pcdata1[i];
        this.setposition(e);
    }
    // 龙虎斗 金额框获得焦点事件 /curinpt为当前操作输入框 变量
    // t、i 、q 为对应数据的key值或者index
    inmoney2focus(e, i, q) {
        this.curinpt = this.pcdata2[i][q];
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
        if (
            this.curinpt === this.setallmoney ||
            this.curinpt === this.selballdata
        ) {
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
        let d1 = this.pcdata1;
        let d2 = this.pcdata2;
        for (let w = 0; w < d1.length; w++) {
            if (d1[w].numb !== null && d1[w].name !== null) {
                d1[w].value = this.selectbtnvalue===1?(d1[w].checked?v:""):v;
                d1[w].checked = bol?d1[w].checked:false;
            }
        }
        for (let w = 0; w < d2.length; w++) {
            for (let q = 0; q < d2[w].length; q++) {
                if (d2[w][q].name !== null) {
                    d2[w][q].value = this.selectbtnvalue===1?(d2[w][q].checked?v:""):v;
                    d2[w][q].checked = bol?d2[w][q].checked:false;
                }
            }
        }
        this.selballdata.value = this.selectbtnvalue===1?(this.selballdata.checked?v:""):v;
        this.selballdata.checked = bol?this.selballdata.checked:false;
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
        let d = this.pcdata1;
        for (let i = 0; i < d.length; i++) {
            if (Number(d[i].value) > 0) {
                let l = data.length;
                data[l] = Object.assign({}, this.subob);
                data[l].number = d[i].numb;
                data[l].type = "特码";
                data[l].point = parseFloat((d[i].point + (d[i].step * this.rangevalue)).toFixed(3));
                data[l].money = d[i].value;
            }
        }
        let d1 = this.selballdata;
        if (Number(d1.value) > 0) {
            let l = data.length;
            data[l] = Object.assign({}, this.subob);
            data[l].ball = d1.name;
            data[l].number = `${d1.value1.value} | ${d1.value2.value} | ${
        d1.value3.value
      } `;
            data[l].type = "特码";
            data[l].point = parseFloat((d1.point + (d1.step * this.rangevalue)).toFixed(3));
            data[l].money = d1.value;
        }
        let d2 = this.pcdata2;
        for (let i = 0; i < d2.length; i++) {
            for (let q = 0; q < d2[i].length; q++) {
                if (Number(d2[i][q].value) > 0 && d2[i][q].name !== null) {
                    let l = data.length;
                    data[l] = Object.assign({}, this.subob);
                    data[l].ball = d2[i][q].name;
                    data[l].type = "特码";
                    data[l].point = parseFloat((d2[i][q].point + (d2[i][q].step * this.rangevalue)).toFixed(3));
                    data[l].money = d2[i][q].value;
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
            return false;
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


    // 设置整合 球的数据

    setball() {
        let data = [];
        for (let q = 0; q < 28; q++) {
            let o = Object.assign({}, this.BALL);
            o.numb = q;
            if (q % 3 === 0) {
                o.red = true;
            }
            if (q % 3 === 1) {
                o.green = true;
            }
            if (q % 3 === 2) {
                o.blue = true;
            }
            if (q === 0 || q === 13 || q === 14 || q === 27) {
                o.gray = true;
            }
            data.push(o);
        }
        return data;
    }
    setselball() {
        let data = [];
        for (let i = 0; i < 28; i++) {
            data[i] = i;
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