import {
    Component,
    OnInit
} from "@angular/core";
import userModel from "../../../status/user.model";
import {
    Base
} from "../../../factory/base.model";

@Component({
    selector: "app-result",
    templateUrl: "./result.component.html",
    styleUrls: ["./result.component.scss"]
})
export class ResultComponent implements OnInit {
    loadpage = false;
    public gamelist = [
        {
            gamename: "重庆时时彩[官]",
            id: "101",
            type: "ssc",
            style: "guan",
            url: ""
        },
        {
            gamename: "天津时时彩[官]",
            id: "102",
            type: "ssc",
            style: "guan",
            url: ""
        },
        {
            gamename: "新疆时时彩[官]",
            id: "103",
            type: "ssc",
            style: "guan",
            url: ""
        },
        {
            gamename: "北京时时彩[官]",
            id: "104",
            type: "ssc",
            style: "guan",
            url: ""
        },
        {
            gamename: "重庆时时彩[信]",
            id: "201",
            type: "ssc",
            style: "xin",
            url: ""
        },
        {
            gamename: "天津时时彩[信]",
            id: "202",
            type: "ssc",
            style: "xin",
            url: ""
        },
        {
            gamename: "新疆时时彩[信]",
            id: "203",
            type: "ssc",
            style: "xin",
            url: ""
        },
        {
            gamename: "北京时时彩[信]",
            id: "204",
            type: "ssc",
            style: "xin",
            url: ""
        },
        {
            gamename: "韩式1.5分彩[官]",
            id: "105",
            type: "ssc",
            style: "guan",
            url: ""
        },
        {
            gamename: "台湾5分彩[官]",
            id: "106",
            type: "ssc",
            style: "guan",
            url: ""
        },
        {
            gamename: "加拿大3.5分[官]",
            id: "107",
            type: "ssc",
            style: "guan",
            url: ""
        },
        {
            gamename: "澳洲3分彩[官]",
            id: "108",
            type: "ssc",
            style: "guan",
            url: ""
        },
        {
            gamename: "斯洛伐克5分[官]",
            id: "109",
            type: "ssc",
            style: "guan",
            url: ""
        },
        {
            gamename: "腾讯分分彩[官]",
            id: "110",
            type: "ssc",
            style: "guan",
            url: ""
        },
        {
            gamename: "QQ分分彩[官]",
            id: "111",
            type: "ssc",
            style: "guan",
            url: ""
        },
        {
            gamename: "东京1.5分彩[官]",
            id: "112",
            type: "ssc",
            style: "guan",
            url: ""
        },
        {
            gamename: "极速分分彩[官]",
            id: "113",
            type: "ssc",
            style: "guan",
            url: ""
        },
        {
            gamename: "北京分分彩[官]",
            id: "114",
            type: "ssc",
            style: "guan",
            url: ""
        },

        {
            gamename: "韩式1.5分彩[信]",
            id: "205",
            type: "ssc",
            style: "xin",
            url: ""
        },
        {
            gamename: "台湾5分彩[信]",
            id: "206",
            type: "ssc",
            style: "xin",
            url: ""
        },
        {
            gamename: "加拿大3.5分[信]",
            id: "207",
            type: "ssc",
            style: "xin",
            url: ""
        },
        {
            gamename: "澳洲3分彩[信]",
            id: "208",
            type: "ssc",
            style: "xin",
            url: ""
        },
        {
            gamename: "斯洛伐克5分[信]",
            id: "209",
            type: "ssc",
            style: "xin",
            url: ""
        },
        {
            gamename: "腾讯分分彩[信]",
            id: "210",
            type: "ssc",
            style: "xin",
            url: ""
        },
        {
            gamename: "QQ分分彩[信]",
            id: "211",
            type: "ssc",
            style: "xin",
            url: ""
        },
        {
            gamename: "东京1.5分彩[信]",
            id: "212",
            type: "ssc",
            style: "xin",
            url: ""
        },
        {
            gamename: "极速分分彩[信]",
            id: "213",
            type: "ssc",
            style: "xin",
            url: ""
        },
        {
            gamename: "北京分分彩[信]",
            id: "214",
            type: "ssc",
            style: "xin",
            url: ""
        },

        {
            gamename: "北京PK拾[官]",
            id: "121",
            type: "pk10",
            style: "guan",
            url: ""
        },
        {
            gamename: "幸运飞艇[官]",
            id: "122",
            type: "pk10",
            style: "guan",
            url: ""
        },
        {
            gamename: "北京PK拾[信]",
            id: "221",
            type: "pk10",
            style: "xin",
            url: ""
        },
        {
            gamename: "幸运飞艇[信]",
            id: "222",
            type: "pk10",
            style: "xin",
            url: ""
        },

        {
            gamename: "山东11选5[官]",
            id: "131",
            type: "exf",
            style: "guan",
            url: ""
        },
        {
            gamename: "江西11选5[官]",
            id: "132",
            type: "exf",
            style: "guan",
            url: ""
        },
        {
            gamename: "黑龙江11选5[官]",
            id: "133",
            type: "exf",
            style: "guan",
            url: ""
        },
        {
            gamename: "江苏11选5[官]",
            id: "134",
            type: "exf",
            style: "guan",
            url: ""
        },
        {
            gamename: "上海11选5[官]",
            id: "135",
            type: "exf",
            style: "guan",
            url: ""
        },
        {
            gamename: "新疆11选5[官]",
            id: "136",
            type: "exf",
            style: "guan",
            url: ""
        },

        {
            gamename: "山东11选5[信]",
            id: "231",
            type: "exf",
            style: "xin",
            url: ""
        },
        {
            gamename: "江西11选5[信]",
            id: "232",
            type: "exf",
            style: "xin",
            url: ""
        },
        {
            gamename: "黑龙江11选5[信]",
            id: "233",
            type: "exf",
            style: "xin",
            url: ""
        },
        {
            gamename: "江苏11选5[信]",
            id: "234",
            type: "exf",
            style: "xin",
            url: ""
        },
        {
            gamename: "上海11选5[信]",
            id: "235",
            type: "exf",
            style: "xin",
            url: ""
        },
        {
            gamename: "新疆11选5[信]",
            id: "236",
            type: "exf",
            style: "xin",
            url: ""
        },

        {
            gamename: "北京快乐8[官]",
            id: "141",
            type: "kl8",
            style: "guan",
            url: ""
        },
        {
            gamename: "加拿大快乐8[官]",
            id: "142",
            type: "kl8",
            style: "guan",
            url: ""
        },
        {
            gamename: "澳洲快乐8[官]",
            id: "143",
            type: "kl8",
            style: "guan",
            url: ""
        },
        {
            gamename: "斯洛伐克[官]",
            id: "144",
            type: "kl8",
            style: "guan",
            url: ""
        },
        {
            gamename: "台湾宾果[官]",
            id: "145",
            type: "ssc",
            style: "guan",
            url: ""
        },

        {
            gamename: "广东快十[信]",
            id: "241",
            type: "gdk10",
            style: "xin",
            url: ""
        },
        {
            gamename: "广西快十[信]",
            id: "242",
            type: "gxk10",
            style: "xin",
            url: ""
        },
        {
            gamename: "重庆快十[信]",
            id: "243",
            type: "gdk10",
            style: "xin",
            url: ""
        },

        {
            gamename: "福彩3D[官]",
            id: "151",
            type: "fc3d",
            style: "guan",
            url: ""
        },
        {
            gamename: "排列三、五[官]",
            id: "152",
            type: "kl8",
            style: "guan",
            url: ""
        },
        {
            gamename: "上海时时乐[官]",
            id: "153",
            type: "ssc",
            style: "guan",
            url: ""
        },
        {
            gamename: "香港⑥合彩[信]",
            id: "251",
            type: "lhc",
            style: "xin",
            url: ""
        },

        {
            gamename: "幸运28[信]",
            id: "261",
            type: "pcdd",
            style: "xin",
            url: ""
        },
        {
            gamename: "斯洛伐克28[信]",
            id: "262",
            type: "pcdd",
            style: "xin",
            url: ""
        },
        {
            gamename: "澳洲28[信]",
            id: "263",
            type: "pcdd",
            style: "xin",
            url: ""
        },
        {
            gamename: "加拿大28[信]",
            id: "264",
            type: "pcdd",
            style: "xin",
            url: ""
        },
        {
            gamename: "韩式28[信]",
            id: "265",
            type: "pcdd",
            style: "xin",
            url: ""
        },
        {
            gamename: "台湾28[信]",
            id: "266",
            type: "pcdd",
            style: "xin",
            url: ""
        },
        {
            gamename: "东京28[信]",
            id: "267",
            type: "pcdd",
            style: "xin",
            url: ""
        },

        {
            gamename: "安徽快3[官]",
            id: "171",
            type: "k3",
            style: "guan",
            url: ""
        },
        {
            gamename: "河北快3[官]",
            id: "172",
            type: "k3",
            style: "guan",
            url: ""
        },
        {
            gamename: "河南快3[官]",
            id: "173",
            type: "k3",
            style: "guan",
            url: ""
        },
        {
            gamename: "湖北快3[官]",
            id: "174",
            type: "k3",
            style: "guan",
            url: ""
        },
        {
            gamename: "上海快3[官]",
            id: "175",
            type: "k3",
            style: "guan",
            url: ""
        },
        {
            gamename: "北京快3[官]",
            id: "176",
            type: "k3",
            style: "guan",
            url: ""
        },
        {
            gamename: "广西快3[官]",
            id: "177",
            type: "k3",
            style: "guan",
            url: ""
        },
        {
            gamename: "江苏快3[官]",
            id: "178",
            type: "k3",
            style: "guan",
            url: ""
        },

        {
            gamename: "安徽快3[信]",
            id: "271",
            type: "k3",
            style: "xin",
            url: ""
        },
        {
            gamename: "河北快3[信]",
            id: "272",
            type: "k3",
            style: "xin",
            url: ""
        },
        {
            gamename: "河南快3[信]",
            id: "273",
            type: "k3",
            style: "xin",
            url: ""
        },
        {
            gamename: "湖北快3[信]",
            id: "274",
            type: "k3",
            style: "xin",
            url: ""
        },
        {
            gamename: "上海快3[信]",
            id: "275",
            type: "k3",
            style: "xin",
            url: ""
        },
        {
            gamename: "北京快3[信]",
            id: "276",
            type: "k3",
            style: "xin",
            url: ""
        },
        {
            gamename: "广西快3[信]",
            id: "277",
            type: "k3",
            style: "xin",
            url: ""
        },
        {
            gamename: "江苏快3[信]",
            id: "278",
            type: "k3",
            style: "xin",
            url: ""
        },
    ];
    public quergame = "香港⑥合彩[信]"; // 当前彩种
    public curgametype = "lhc"; // 当前彩种类型
    public curgamestyle = "xin"; // 当前彩种类型
    public curgameID = "0"; // 当前彩种id

    public loadinfo = true; //控制页面数据加载文字

    // 控制数据对象
    public view_paramet = {
        isshowline: true, // 是否连线
        ishaowen: true, // 是否号温
        isomission: false, // 是否遗漏分层背景
        isomissionshow: true, // 是否显示遗漏分层数据
        isdisdata: true, // 是否显示统计数据
        isdouble: true, // 是否为重号
        issubline: true // 是否辅助线
    };
    public numbdata = [30, 50, 100, 200, 300];
    public numbdatactve = 0;

    public resultdata; // 结果数据
    public resultomdata; // 第一期遗漏数据\

    public querydata = {
        starttime: '',
        endtime: '',
        qishu: '',
        resttime: 0,
    };

    public xintab = {
        list: ["特码", "龙虎斗"],
        active: 0,
    }
    public longhulist = {
        exf: ['1v2', '1v3', '1v4', '1v特', '2v3', '2v4', '2v特', '3v4', '3v特', '4v特', ],
        ssc: ['1v2', '1v3', '1v4', '1v5', '2v3', '2v4', '2v5', '3v4', '3v5', '4v5', ],
        lhc: ['1v2', '1v3', '1v4', '1v5', '1v6', '1v特', '2v3', '2v4', '2v5', '2v6', '2v特', '3v4', '3v5', '3v6', '3v特', '4v5', '4v6', '4v特', '5v6', '5v特', '6v特', ],
        gdk10: ['1v2', '1v3', '1v4', '1v5', '1v6', '1v7', '1v特', '2v3', '2v4', '2v5', '2v6', '2v7', '2v特', '3v4', '3v5', '3v6', '3v7', '3v特', '4v5', '4v6', '4v7', '4v特', '5v6', '5v7', '5v特', '6v7', '6v特', '7v特', ],
        gxk10: ['1v2', '1v3', '1v4', '1v特', '2v3', '2v4', '2v特', '3v4', '3v特', '4v特', ],
    }
    public thlislt = {
        gdk10: ['正码一', '正码二', '正码三', '正码四', '正码五', '正码六', '正码七', ],
        gxk10: ['正码一', '正码二', '正码三', '正码四', ],
        pk10_1: ['冠军', '亚军', '第三名', '第四名', '第五名', ],
        pk10_2: ['第六名', '第七名', '第八名', '第九名', '第十名', ],
    };
    public imgtop = {
        k3: [{
            top: -10,
        }, {
            top: -50,
        }, {
            top: -90,
        }, {
            top: -130,
        }, {
            top: -170,
        }, {
            top: -210,
        }, ],
        pk10: [{
            top: -10,
        }, {
            top: -62,
        }, {
            top: -114,
        }, {
            top: -166,
        }, {
            top: -218,
        }, {
            top: -270,
        }, {
            top: -322,
        }, {
            top: -374,
        }, {
            top: -426,
        }, {
            top: -478,
        }, ],
    };

    public OBJX = {
        sum: 0,
        sumBigSmall: '',
        balls: '',
        lastBigSmall: '',
        specialOddEven: '',
        specialBigSmall: '',
        specialCombOddEven: '',
        specialCombBigSmall: '',
        specialLastNum: '',
        specialAnimal: '',
        specialColor: '',
        upDown: '',
        oddEven: '',
        OneBigSmall: function (n) {},
        OneOddEven: function (n) {},
        sumOddEven: '',
        before: '',
        middle: '',
        behind: '',
        pklh: function (l, h) {},
    }


    //====================传给分页组件数据 
    public pagination = {
        totalNum:200,  //总数据条数 
        pageSize: 20, // 每页显示数量
        curPage: 1, //当前页
        segmentSize: 5, //最大显示页码标签数量
        totalPage:10,// 最大页码数。
      };

    // ==========临时设置开奖数据参数

    public OB = {
        id: 0,
        number: "180100",
        time: '2018-07-04 15:09:00',
        data: []
    }; // 接受后台数据单期统一格式
    public gamepam = {
        ssc: {
            min: 0,
            max: 9,
            len: 10,
            length: 5
        },
        exf: {
            min: 1,
            max: 11,
            len: 11,
            length: 5
        },
        pk10: {
            min: 1,
            max: 10,
            len: 10,
            length: 10
        },
        fc3d: {
            min: 0,
            max: 9,
            len: 10,
            length: 3
        },
        k3: {
            min: 1,
            max: 6,
            len: 6,
            length: 3
        },
        lhc: {
            min: 1,
            max: 49,
            len: 49,
            length: 7
        },
        // gdk10: { min: 1, max: 20, len: 20, length: 8 },

    };
    public curgame = this.gamepam[this.curgametype];
    // =========临时数据end

    constructor() {}
    ngOnInit() {
        this.loadpage = userModel.platform;
        this.curgameID = Base.Store.get('HistoryID') ? String(Base.Store.get('HistoryID')) : "0";
        this.curgameID = this.curgameID === "0" ? "251" : this.curgameID;
        this.pageinit();
    }

    // 彩种选择框事件
    selechange() {
        Base.Store.set('HistoryID', this.curgameID, false);
        this.xintab.active = 0;
        this.numbdatactve = 0;
        this.pageinit();
    }
    // 信用玩法查询按钮事件
    query() {
        Base.Store.set('HistoryID', this.curgameID, false);
        this.pageinit();
    }

    pageinit() {
        let url = "";
        for (let i = 0; i < this.gamelist.length; i++) {
            if (this.curgameID === this.gamelist[i].id) {
                this.curgametype = this.gamelist[i].type;
                this.curgamestyle = this.gamelist[i].style;
                this.quergame = this.gamelist[i].gamename;
                url = this.gamelist[i].url; //请求数据地址
                break;
            }
        }
        // ==================此处请求数据=====
        this.loadinfo = true;
        let tp = this.curgametype;
        // 模拟数据
        if (this.curgamestyle === 'guan') {
            if (tp === "ssc" || tp === "exf" || tp === "pk10" || tp === "fc3d" || tp === "k3") {
                this.curgame = this.gamepam[tp]; // 创建当前游戏数据
                this.resultdata = this.setballdata(this.numbdata[this.numbdatactve]);
                this.resultomdata = this.setbassomisdata();
            }
            if (tp === "kl8") {
                let data = this.setkldata(this.numbdata[this.numbdatactve], 20, 1, 80);
                for (let i = 0; i < data.length; i++) {
                    data[i].data.sort((a, b) => {
                        return a - b
                    });
                }
                this.resultdata = this.kl8data(data);
            }
        }
        if (this.curgamestyle === 'xin') {
            if (tp === "exf") {
                this.curgame = this.gamepam[tp]; // 创建当前游戏数据
                this.resultdata = this.setballdata(20);
                for (let i = 0; i < this.resultdata.length; i++) {
                    this.resultdata[i].data = this.GD11X5(this.resultdata[i].data)
                }
            }
            if (tp === "ssc") {
                this.curgame = this.gamepam[tp]; // 创建当前游戏数据
                this.resultdata = this.setballdata(20);
                for (let i = 0; i < this.resultdata.length; i++) {
                    this.resultdata[i].data = this.SSC(this.resultdata[i].data)
                }
            }
            if (tp === "lhc") {
                this.curgame = this.gamepam[tp]; // 创建当前游戏数据
                this.resultdata = this.setballdata(20);
                let year = 2018; // 六合彩需要传入开奖时的 年份 数字类型
                for (let i = 0; i < this.resultdata.length; i++) {
                    this.resultdata[i].data = this.SIX(year, this.resultdata[i].data)
                }
            }
            if (tp === "gdk10") {
                this.resultdata = this.setkldata(20, 8, 1, 20);
                for (let i = 0; i < this.resultdata.length; i++) {
                    this.resultdata[i].data = this.GDKS(this.resultdata[i].data);
                }
            }
            if (tp === "gxk10") {
                this.resultdata = this.setkldata(20, 5, 1, 20);
                for (let i = 0; i < this.resultdata.length; i++) {
                    this.resultdata[i].data = this.GXKS(this.resultdata[i].data);
                }
            }
            if (tp === "k3") {
                this.curgame = this.gamepam[tp]; // 创建当前游戏数据
                this.resultdata = this.setballdata(20);
                for (let i = 0; i < this.resultdata.length; i++) {
                    this.resultdata[i].data = this.GXK3(this.resultdata[i].data);
                }
            }
            if (tp === "pk10") {
                this.resultdata = this.setkldata(20, 10, 1, 10);
                for (let i = 0; i < this.resultdata.length; i++) {
                    this.resultdata[i].data = this.BJPK10(this.resultdata[i].data);
                }
            }
            if (tp === "pcdd") {
                this.resultdata = this.setkldata(20, 3, 0, 9);
                for (let i = 0; i < this.resultdata.length; i++) {
                    this.resultdata[i].data = this.PCDD(this.resultdata[i].data);
                }
            }
        }
        setTimeout(() => {
            this.loadinfo = false;
        }, 500);
    }

    // 选择多期开奖事件
    numbclick(i) {
        this.numbdatactve = i;
        this.pageinit();
    }

    kl8data(D) {
        let data = [];
        let o = {
            sum: 0,
            bigSmall: '',
            evenOdd: '',
            upDown: '',
            danShuang: ''
        }
        for (let i = 0; i < D.length; i++) {
            data[i] = Object.assign({}, D[i], o);
            let d = data[i];
            for (let q = 0; q < d.data.length; q++) {
                d.sum += d.data[q];
            }
            let n = d.sum
            d.danShuang = n % 2 === 0 ? "双" : "单";
            d.bigSmall = n <= 809 && n >= 210 ? "小" : 810 === n ? "和" : "大";
            d.evenOdd = (function (d) {
                let n = 0,
                    e = 0;
                for (let q = 0; q < d.length; q++) {
                    (d[q] - 0) % 2 === 0 ? ++n : ++e;
                }
                return (n === e) ? "和" : n > e ? "偶" : "奇"
            })(d.data);
            d.upDown = (function (d) {
                let n = 0,
                    e = 0;
                for (let q = 0; q < d.length; q++) {
                    (d[q] - 0) <= 40 ? ++n : ++e;
                }
                return n === e ? "和" : n > e ? "上" : "下"
            })(d.data)
        }
        return data
    }
    //   ======================信用页面数据分析
    // 信用玩法数据设置
    SIX(year, arr) {
        let _that = this;
        let sum = _that.compute(arr);
        let obj = Object.assign({}, _that.OBJX, );
        let result = arr.join(",");
        obj.sum = sum;
        obj.sumBigSmall = _that.bigSmall(sum, 175, "zhi", {
            big: "总大",
            small: "总小"
        }, undefined);
        obj.sumOddEven = (function () {
            return sum % 2 === 0 ? "总双" : "总单";
        })();
        obj.balls = JSON.parse(_that.getZodiac(year, result, 1));

        let special = result.match(/\d+$/)[0] * 1
        let specialComb = _that.compute(String(special).split(''));
        let he = "和";
        obj.specialOddEven = special === 49 ? he : (special % 2 === 0 ? "特双" : "特单");
        obj.specialBigSmall = special === 49 ? he : (special >= 25 ? "特大" : "特小");
        obj.specialCombOddEven = special === 49 ? he : (specialComb % 2 === 0 ? "合双" : "合单");
        obj.specialCombBigSmall = special === 49 ? he : (specialComb > 6 ? "合大" : "合小");
        obj.specialLastNum = special === 25 ? he : (specialComb % 10 >= 5 ? "合尾大" : "合尾小");
        obj.specialAnimal = special === 49 ? he : _that.getZodiac(year, special, 2);
        obj.specialColor = _that.color(special) === 'red' ? '红波' : (_that.color(special) === 'blue' ? '蓝波' : '绿波');
        obj.upDown = _that.three(arr.slice(0, -1), function (e) {
            e = Number(e);
            if (e === 49) {
                return special > 24 ? special + '' : '';
            } else {
                return e > 24 ? e + '' : '';
            }
        }, 6, "updown");

        obj.oddEven = _that.three(arr.slice(0, -1), function (e) {
            e = Number(e);
            if (e === 49) {
                return special % 2 === 0 ? special + '' : '';
            } else {
                return e % 2 === 0 ? e + '' : '';
            }
        }, 6, "oddeven");
        obj.pklh = function (long, hu) {
            return _that.pk(long, hu, arr, 49);
        }
        return obj;
    };
    GD11X5(arr) {
        let _that = this;
        let obj = Object.assign({}, _that.OBJX);
        let sum = _that.compute(arr);
        let result = arr.join(",");
        obj.sum = sum;
        obj.sumBigSmall = _that.bigSmall(sum, 31, "zhi", {
            big: "总大",
            small: "总小"
        }, 30); // 总和大小
        obj.balls = result.split(",");
        obj.lastBigSmall = _that.bigSmall(sum, 5, "wei", {
            big: "总尾大",
            small: "总尾小"
        }, undefined); // 总尾大小
        obj.sumOddEven = (function () {
            return sum % 2 === 0 ? "总双" : "总单";
        })();
        /// 单个号码的大小
        obj.OneBigSmall = function (num) {
            return Number(num) === 11 ? "和" : (Number(num) >= 6 ? "大" : "小")
        }
        /// 单个号码的单双
        obj.OneOddEven = function (num) {
            return Number(num) === 11 ? "和" : (Number(num) % 2 === 0 ? "双" : "单");
        }

        let special = result.match(/\d+$/)[0] * 1;
        obj.upDown = _that.three(arr.slice(0, -1), function (e) {
            e = Number(e);
            if (e === 11) {
                return special > 5 ? special + '' : '';
            } else {
                return e > 5 ? e + '' : '';
            }
        }, 4, "updown");

        obj.oddEven = _that.three(arr.slice(0, -1), function (e) {
            e = Number(e);
            if (e === 11) {
                return special % 2 === 0 ? special + '' : '';
            } else {
                return e % 2 === 0 ? e + '' : '';
            }
        }, 4, "oddeven");
        obj.pklh = function (long, hu) {
            return _that.pk(long, hu, arr, 11);
        }
        return obj;
    };
    SSC(arr) {
        let _that = this;
        let obj = Object.assign({}, _that.OBJX);
        let sum = _that.compute(arr);
        let result = arr.join(",");
        obj.sum = sum;
        obj.sumBigSmall = _that.compute(arr) >= 23 ? "总大" : "总小"; // 总和大小
        obj.balls = result.split(",");
        obj.lastBigSmall = _that.bigSmall(sum, 5, "wei", {
            big: "总尾大",
            small: "总尾小"
        }, undefined); // 总尾大小
        obj.sumOddEven = (function () {
            return sum % 2 === 0 ? "总双" : "总单";
        })();
        /// 单个号码的大小
        obj.OneBigSmall = function (num) {
            return Number(num) >= 5 ? "大" : "小"
        }
        /// 单个号码的单双
        obj.OneOddEven = function (num) {
            return Number(num) % 2 === 0 ? "双" : "单";
        }

        let special = result.match(/\d+$/)[0] * 1;
        obj.upDown = _that.three(arr.slice(0, -1), function (e) {
            e = Number(e);
            if (e === 11) {
                return special > 5 ? special + '' : '';
            } else {
                return e > 5 ? e + '' : '';
            }
        }, 4, "updown");

        obj.oddEven = _that.three(arr.slice(0, -1), function (e) {
            e = Number(e);
            if (e === 11) {
                return special % 2 === 0 ? special + '' : '';
            } else {
                return e % 2 === 0 ? e + '' : '';
            }
        }, 4, "oddeven");
        obj.pklh = function (long, hu) {
            let l = Number(arr[long - 1])
            let h = Number(arr[hu - 1]);
            return l === h ? '和' : (l > h ? '龙' : '虎')
        }
        obj.before = _that.ssc(arr.slice(0, 3));
        obj.middle = _that.ssc(arr.slice(1, 4));
        obj.behind = _that.ssc(arr.slice(2));
        return obj;
    };

    GDKS(arr) {
        let _that = this;
        let obj = Object.assign({}, _that.OBJX, {
            specialLastBigSmall: '',
            specialCombSum: '',
            OneCombOddEven: function (n) {},
            OneLastBigSmall: function (n) {},
            zhengballs: []
        });
        let sum = _that.compute(arr);
        let result = arr.join(",");
        obj.sum = sum;
        obj.sumBigSmall = _that.bigSmall(sum, 85, "zhi", {
            big: "总大",
            small: "总小"
        }, true); // 总和大小
        obj.balls = result.split(",");
        obj.zhengballs = arr.slice(0, arr.length - 1);
        obj.lastBigSmall = _that.bigSmall(sum, 5, "wei", {
            big: "总尾大",
            small: "总尾小"
        }, undefined); // 总尾大小
        obj.sumOddEven = (function () {
            return sum % 2 === 0 ? "总双" : "总单";
        })();
        let special = result.match(/\d+$/)[0] * 1;
        obj.specialBigSmall = special >= 11 ? "大" : "小";
        obj.specialOddEven = special % 2 === 0 ? "双" : "单";
        obj.specialLastBigSmall = _that.bigSmall(special, 5, 'wei', {
            big: "尾大",
            small: "尾小"
        }, undefined);
        obj.specialCombSum = _that.compute(String(special).split('')) % 2 === 0 ? "合双" : "合单";

        obj.upDown = _that.three(arr, function (e) {
            return Number(e) > 10 ? e : '';
        }, 8, "updown");

        obj.oddEven = _that.three(arr, function (e) {
            return Number(e) % 2 === 0 ? e : '';
        }, 8, "oddeven");

        obj.OneBigSmall = function (data) {
            return _that.bigSmall(data, 11, 'zhi', {
                big: '大',
                small: '小'
            }, undefined);
        }
        obj.OneOddEven = function (data) {
            return Number(data) % 2 === 0 ? "双" : "单";
        }
        obj.OneCombOddEven = function (data) {
            let str = data.toString();
            return (_that.compute(str.split('')) % 2) === 0 ? "双" : "单";
        }
        obj.OneLastBigSmall = function (data) {
            return _that.bigSmall(Number(data), 5, 'wei', {
                big: '尾大',
                small: '尾小'
            }, undefined);
        }
        obj.pklh = function (long, hu) {
            return _that.pk(long, hu, arr, null);
        }
        return obj;
    };
    GXKS(arr) {
        let _that = this;
        let obj = Object.assign({}, _that.OBJX, {
            specialLastBigSmall: '',
            specialCombSum: '',
            OneCombOddEven: function (n) {},
            OneLastBigSmall: function (n) {},
            sixi: function (n) {},
            zhengballs: [],
            speciasixi: '',
        });
        let sum = _that.compute(arr);
        let result = arr.join(",");
        obj.sum = sum;
        let sixi = {
            '_1_2_3_4_5_': '福',
            '_6_7_8_9_10_': '禄',
            '_11_12_13_14_15_': '寿',
            '_16_17_18_19_20_': '喜'
        };
        obj.sumBigSmall = _that.bigSmall(sum, 56, "zhi", {
            big: "总大",
            small: "总小",
            he: "和-和"
        }, true); // 总和大小
        obj.sumOddEven = (function () {

            return sum % 2 === 0 ? "总双" : "总单";

        })();
        obj.balls = arr;
        obj.zhengballs = arr.slice(0, arr.length - 1);
        obj.lastBigSmall = _that.bigSmall(sum, 5, "wei", {
            big: "总尾大",
            small: "总尾小"
        }, undefined); // 总尾大小
        let special = result.match(/\d+$/)[0] * 1;
        obj.specialBigSmall = special >= 11 ? "大" : "小";
        obj.specialOddEven = special % 2 === 0 ? "双" : "单";
        obj.specialLastBigSmall = _that.bigSmall(special, 5, 'wei', {
            big: "尾大",
            small: "尾小"
        }, undefined);
        obj.specialCombSum = _that.compute(String(special).split('')) % 2 === 0 ? "合双" : "合单";
        obj.speciasixi = _that.sixi(special);
        obj.sixi = function (data) {
            return _that.sixi(data);
        }
        obj.OneBigSmall = function (data) {
            return Number(data) === 21 ? "输-和" : (data >= 11 ? "大" : "小");
        }
        obj.OneOddEven = function (data) {
            return Number(data) === 21 ? "输-和" : (data % 2 === 0 ? "双" : "单");
        }
        obj.OneCombOddEven = function (data) {
            return Number(data) === 21 ? "输-和" : (_that.compute(String(data).split('')) % 2 === 0 ? "合双" : "合单");
        }
        obj.OneLastBigSmall = function (data) {
            return Number(data) === 21 ? "输-和" : _that.bigSmall(data, 5, 'wei', {
                big: "尾大",
                small: "尾小"
            }, undefined);
        }
        obj.pklh = function (long, hu) {
            return _that.pk(long, hu, arr, 21);
        }
        return obj;
    };
    BJPK10(arr) {
        let _that = this;
        let obj = Object.assign({}, {
            sum: 0,
            combFirstSecondBigSmall: '',
            combFirstSecondOddEven: '',
            balls: [],
            oneBigSmall: function (n) {},
            oneOddEven: function (n) {},
            pk: function (n) {},
            firstgroup: [],
            lastgroup: [],
        });
        let sum = _that.compute(arr);
        obj.balls = arr;
        obj.firstgroup = arr.slice(0, 5);
        obj.lastgroup = arr.slice(5);
        let combFirstSecond = Number(arr[0]) + Number(arr[1]);
        obj.sum = combFirstSecond;
        obj.combFirstSecondOddEven = combFirstSecond === 11 ? "和" : (combFirstSecond % 2 === 0 ? "双" : "单");
        obj.combFirstSecondBigSmall = combFirstSecond === 11 ? "和" : (combFirstSecond > 11 ? "大" : "小");
        obj.oneBigSmall = function (data) {
            return Number(data) >= 6 ? "大" : "小";
        }
        obj.oneOddEven = function (data) {
            return Number(data) % 2 === 0 ? "双" : "单";
        }
        obj.pk = function (data) {
            if (data < 5) {
                return Number(arr[data]) > Number(arr[9 - data]) ? "龙" : "虎";
            } else {
                return '';
            }
        }
        return obj;
    };
    GXK3(arr) {
        let _that = this;
        let obj = Object.assign({}, {
            sum: 0,
            sumBigSmall: '',
            sumOddEven: '',
            balls: [],
        });
        let sum = _that.compute(arr);
        obj.balls = arr;
        obj.sum = sum;
        obj.sumOddEven = (function () {
            return sum % 2 === 0 ? "总双" : "总单";
        })();
        obj.sumBigSmall = sum >= 11 ? "总大" : "总小";
        return obj;
    };
    PCDD(arr) {
        let _that = this;
        let obj = Object.assign({}, {
            sum: 0,
            bigSmall: '',
            evenOdd: '',
            ball1: 0,
            ball2: 0,
            ball3: 0,
        });
        let sum = _that.compute(arr);
        obj.ball1 = arr[0];
        obj.ball2 = arr[1];
        obj.ball3 = arr[2];
        obj.sum = sum;
        obj.bigSmall = sum < 14 ? '小' : '大';
        obj.evenOdd = sum % 2 == 0 ? '双' : '单';
        return obj;
    };



    /// year:Number, 要查询的(农历)年份
    /// num :String, 要查询的球号,如果多个号码则用逗号分隔
    /// type:Number, 1返回(Array)生肖 2返回(String)家禽/野兽
    getZodiac(year, num, type) {
        //num % 12  将号码转换成1-12,得出在数组对应的索引
        let zodiac = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
        let cate = {
            "鼠,虎,兔,龙,蛇,猴,": "野兽",
            "牛,马,羊,鸡,狗,猪,": "家禽"
        };
        let reference = 1924; ///必须是鼠年，即reference对应zodiac[0]
        let index = (year - reference) % 12;
        let a = zodiac.slice(0, index + 1).reverse();
        let b = zodiac.slice(index + 1).reverse();
        let sortZodiac = a.concat(b);
        let result;
        if (type === 1) {
            let nums = num.split(',');
            result = [];
            for (let i = 0, len = nums.length; i < len; i++) {
                result.push({
                    num: Number(nums[i]),
                    name: sortZodiac[(nums[i] - 1) % 12]
                });
            }
            result = JSON.stringify(result);
        } else if (type === 2) {
            if (Number(num) === 49) return '和';
            for (let i in cate) {
                if (i.indexOf(sortZodiac[(Number(num) - 1) % 12]) > -1) {
                    result = cate[i];
                }
            }
        }
        return result;
    }
    sixi(num) {
        let xi = {
            '_1_2_3_4_5_': '福',
            '_6_7_8_9_10_': '禄',
            '_11_12_13_14_15_': '寿',
            '_16_17_18_19_20_': '喜'
        };
        if (Number(num) === 21) return '输-和';
        let data = '_' + num + '_';
        let text = '';
        for (let key in xi) {
            if (key.indexOf(data) > -1) {
                return xi[key];
            }
        }
        return "";
    }

    /// 色波
    color(num) {
        let n = Number(num);
        let arr = [
            [1, 2, 7, 8, 12, 13, 18, 19, 23, 24, 29, 30, 34, 35, 40, 45, 46, ],
            [3, 4, 9, 10, 14, 15, 20, 25, 26, 31, 36, 37, 41, 42, 47, 48, ],
            [5, 6, 11, 16, 17, 21, 22, 27, 28, 32, 33, 38, 39, 43, 44, 49, ]
        ];
        let color = ['red', 'blue', 'green'];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].indexOf(n) > -1) {
                return color[i];
            }
        }
    }
    colorpcdd(num) {
        let n = Number(num);
        let color = "";
        color = n % 3 === 0 ? "red" : (n % 3 === 1 ? "green" : "blue");
        if (n === 0 || n === 13 || n === 14 || n === 27) {
            color = "gray";
        }
        return color
    }
    colorks(num) {
        let n = Number(num);
        return n % 3 === 1 ? 'red' : (n % 3 === 2 ? 'blue' : 'green');
    }
    /// 求和
    compute(arr) {
        let c = 0;
        for (let i = 0; i < arr.length; i++) {
            c += Number(arr[i]);
        }
        return c;
    }
    screen(arr, fn) {
        if (!fn) return arr;
        var a = [];
        for (let i = 0, len = arr.length; i < len; i++) {
            fn(arr[i]) !== "" && a.push(fn(arr[i]));
        }
        return a;

    }
    /// fn:{Function}筛选号码的函数，返回下盘或偶数的数组
    /// length:{Number}参与上下奇偶的号码个数
    /// type:{String} oddeven：上下   updown：奇偶
    /// 相同规则：上下或者奇偶的个数相同则为和
    three(arr, fn, length, type) {
        let text = [];
        if (type === "oddeven") {
            text = ['偶', '奇'];
        } else if (type === "updown") {
            text = ['下', '上'];
        }
        let d = this.screen(arr, fn);
        let len1 = d.length;
        let len2 = length / 2;
        if (len1 === len2) {
            return '和';
        } else if (len1 > len2) {
            return text[0];
        } else {
            return text[1];
        }
    }
    /// 前三、中三、后三
    /// arr:{Array}
    ssc(arr) {
        arr = arr.sort(function (a, b) {
            return Number(a) - Number(b);
        });
        for (let i = 0; i < arr.length; i++) {
            arr[i] = Number(arr[i])
        }
        if (arr[0] === arr[1] && arr[0] === arr[2]) {
            return '豹子';
        } else if ((arr[0] + 1 === arr[1] && arr[1] + 1 === arr[2]) || /^(019)|(089)$/.test(arr.join(''))) {
            return '顺子';
        } else if (arr[0] === arr[1] || arr[1] === arr[2] || arr[0] === arr[2]) {
            return '对子';
        } else if (arr[0] + 1 === arr[1] || arr[1] + 1 === arr[2] || /^0\d9$/.test(arr.join(''))) {
            return '半顺';
        } else {
            return '杂六';
        }
    }

    /// 与大小相关的属性
    /// sum:{Number}    和值
    /// bigVal:{Number} 为大的条件值
    /// type:{String}   玩法名
    /// he:{Boolen}     是否为有和
    bigSmall(sum, bigVal, type, options, he) {
        let value = "";
        switch (type) {
            // 值大小（总和大小、大小）
            case "zhi":
                if (he === undefined) {
                    return value = sum >= bigVal ? options.big : options.small;
                } else {
                    return value = sum === (bigVal - 1) ? (options.he ? options.he : "和") : (sum >= bigVal ? options.big : options.small);
                }
                /// 尾大小（总尾大小、合尾大小）
            case "wei":
                let last = Number(String(sum).slice(-1));
                return value = last >= bigVal ? options.big : options.small;

        }
    }

    /// 龙虎斗
    pk(long, hu, arr, he) {
        let L = Number(arr[long - 1]);
        let H = Number(arr[hu - 1]);
        if (L === he || H === he) {
            return "和";
        } else if (L > H) {
            return "龙";
        } else {
            return "虎";
        }
    }

    
    // 分页组件点击页码事件，参数i为点击页码数
    getPageData(i) {
        //  此处请求数据
        this.pageinit();
        console.log(i);
    }

    // ================临时数据开始
    // 创建开奖数据  n 为开奖数据期数
    setballdata(n) {
        let data = [];
        let g = this.curgame;
        for (let i = 0; i < n; i++) {
            let d = Object.assign({}, this.OB);
            d.id = i + 1;
            d.number = 180101 + i + "";
            d.data = [];
            for (let q = 0; q < g.length; q++) {
                d.data[q] = Math.floor(Math.random() * g.len + g.min);
            }
            data.push(d);
        }
        return data;
    }
    // 创建遗漏值数据
    setbassomisdata() {
        let d = [];
        let g = this.curgame;
        for (let i = 0; i < g.length; i++) {
            d[i] = [];
            for (let q = g.min; q <= g.max; q++) {
                d[i].push(Math.floor(Math.random() * g.len + g.min));
            }
        }
        return d;
    }
    // 创建快乐8数据 || 广东快10
    setkldata(n, len, min, max) {
        let d = [];
        for (let i = 0; i < n; i++) {
            d[i] = Object.assign({}, this.OB);
            d[i].id = i + 1;
            d[i].number = 180101 + i + "";
            let s = new Set();
            for (let q = 0; q < len; q = s.size) {
                let a = Math.floor(Math.random() * (max - min + 1) + min);
                s.add(a);
            }
            d[i].data = Array.from(s);
        }
        return d
    }
    // 创建六合数据
    setlhcdata(n) {
        let d = [];
        for (let i = 0; i < n; i++) {
            d[i] = Object.assign({}, this.OB);
            d[i].id = i + 1;
            d[i].number = 180101 + i + "";
            let s = new Set();
            for (let q = 0; q < 7; q = s.size) {
                let a = Math.floor(Math.random() * 49 + 1);
                s.add(a);
            }
            d[i].data = Array.from(s);
            d[i].data.sort((a, b) => {
                return a - b
            });
        }
        return d
    }
    // ================临时数据结束

}