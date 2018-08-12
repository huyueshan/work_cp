import {
    Component,
    OnInit
} from '@angular/core';
import userModel from '../../../../../status/user.model';

import { OFFTYPE, CREDITTYPE } from '../../../../../factory/cpdata';

@Component({
    selector: 'app-proinfo',
    templateUrl: './proinfo.component.html',
    styleUrls: ['./proinfo.component.scss']
})
export class ProinfoComponent implements OnInit {
    public now_lang: any = userModel.langpackage;
    public now_lang_type: any = 'zh';


    public gamelist = [{
            gamename: "重庆时时彩[官]",
            id: "101",
            type: "ssc",
            style: "guan",

        },
        {
            gamename: "天津时时彩[官]",
            id: "102",
            type: "ssc",
            style: "guan",

        },
        {
            gamename: "新疆时时彩[官]",
            id: "103",
            type: "ssc",
            style: "guan",

        },
        {
            gamename: "北京时时彩[官]",
            id: "104",
            type: "ssc",
            style: "guan",

        },
        {
            gamename: "重庆时时彩[信]",
            id: "201",
            type: "ssc",
            style: "xin",

        },
        {
            gamename: "天津时时彩[信]",
            id: "202",
            type: "ssc",
            style: "xin",

        },
        {
            gamename: "新疆时时彩[信]",
            id: "203",
            type: "ssc",
            style: "xin",

        },
        {
            gamename: "北京时时彩[信]",
            id: "204",
            type: "ssc",
            style: "xin",

        },
        {
            gamename: "韩式1.5分彩[官]",
            id: "105",
            type: "ssc",
            style: "guan",

        },
        {
            gamename: "台湾5分彩[官]",
            id: "106",
            type: "ssc",
            style: "guan",

        },
        {
            gamename: "加拿大3.5分[官]",
            id: "107",
            type: "ssc",
            style: "guan",

        },
        {
            gamename: "澳洲3分彩[官]",
            id: "108",
            type: "ssc",
            style: "guan",

        },
        {
            gamename: "斯洛伐克5分[官]",
            id: "109",
            type: "ssc",
            style: "guan",

        },
        {
            gamename: "腾讯分分彩[官]",
            id: "110",
            type: "ssc",
            style: "guan",

        },
        {
            gamename: "QQ分分彩[官]",
            id: "111",
            type: "ssc",
            style: "guan",

        },
        {
            gamename: "东京1.5分彩[官]",
            id: "112",
            type: "ssc",
            style: "guan",

        },
        {
            gamename: "极速分分彩[官]",
            id: "113",
            type: "ssc",
            style: "guan",

        },
        {
            gamename: "北京分分彩[官]",
            id: "114",
            type: "ssc",
            style: "guan",

        },

        {
            gamename: "韩式1.5分彩[信]",
            id: "205",
            type: "ssc",
            style: "xin",

        },
        {
            gamename: "台湾5分彩[信]",
            id: "206",
            type: "ssc",
            style: "xin",

        },
        {
            gamename: "加拿大3.5分[信]",
            id: "207",
            type: "ssc",
            style: "xin",

        },
        {
            gamename: "澳洲3分彩[信]",
            id: "208",
            type: "ssc",
            style: "xin",

        },
        {
            gamename: "斯洛伐克5分[信]",
            id: "209",
            type: "ssc",
            style: "xin",

        },
        {
            gamename: "腾讯分分彩[信]",
            id: "210",
            type: "ssc",
            style: "xin",

        },
        {
            gamename: "QQ分分彩[信]",
            id: "211",
            type: "ssc",
            style: "xin",

        },
        {
            gamename: "东京1.5分彩[信]",
            id: "212",
            type: "ssc",
            style: "xin",

        },
        {
            gamename: "极速分分彩[信]",
            id: "213",
            type: "ssc",
            style: "xin",

        },
        {
            gamename: "北京分分彩[信]",
            id: "214",
            type: "ssc",
            style: "xin",

        },

        {
            gamename: "北京PK拾[官]",
            id: "121",
            type: "pk10",
            style: "guan",

        },
        {
            gamename: "幸运飞艇[官]",
            id: "122",
            type: "pk10",
            style: "guan",

        },
        {
            gamename: "北京PK拾[信]",
            id: "221",
            type: "pk10",
            style: "xin",

        },
        {
            gamename: "幸运飞艇[信]",
            id: "222",
            type: "pk10",
            style: "xin",

        },

        {
            gamename: "山东11选5[官]",
            id: "131",
            type: "exf",
            style: "guan",

        },
        {
            gamename: "江西11选5[官]",
            id: "132",
            type: "exf",
            style: "guan",

        },
        {
            gamename: "黑龙江11选5[官]",
            id: "133",
            type: "exf",
            style: "guan",

        },
        {
            gamename: "江苏11选5[官]",
            id: "134",
            type: "exf",
            style: "guan",

        },
        {
            gamename: "上海11选5[官]",
            id: "135",
            type: "exf",
            style: "guan",

        },
        {
            gamename: "新疆11选5[官]",
            id: "136",
            type: "exf",
            style: "guan",

        },

        {
            gamename: "山东11选5[信]",
            id: "231",
            type: "exf",
            style: "xin",

        },
        {
            gamename: "江西11选5[信]",
            id: "232",
            type: "exf",
            style: "xin",

        },
        {
            gamename: "黑龙江11选5[信]",
            id: "233",
            type: "exf",
            style: "xin",

        },
        {
            gamename: "江苏11选5[信]",
            id: "234",
            type: "exf",
            style: "xin",

        },
        {
            gamename: "上海11选5[信]",
            id: "235",
            type: "exf",
            style: "xin",

        },
        {
            gamename: "新疆11选5[信]",
            id: "236",
            type: "exf",
            style: "xin",

        },

        {
            gamename: "北京快乐8[官]",
            id: "141",
            type: "kl8",
            style: "guan",

        },
        {
            gamename: "加拿大快乐8[官]",
            id: "142",
            type: "kl8",
            style: "guan",

        },
        {
            gamename: "澳洲快乐8[官]",
            id: "143",
            type: "kl8",
            style: "guan",

        },
        {
            gamename: "斯洛伐克[官]",
            id: "144",
            type: "kl8",
            style: "guan",

        },
        {
            gamename: "台湾宾果[官]",
            id: "145",
            type: "ssc",
            style: "guan",

        },

        {
            gamename: "广东快十[信]",
            id: "241",
            type: "gdk10",
            style: "xin",

        },
        {
            gamename: "广西快十[信]",
            id: "242",
            type: "gxk10",
            style: "xin",

        },
        {
            gamename: "重庆快十[信]",
            id: "243",
            type: "gdk10",
            style: "xin",

        },

        {
            gamename: "福彩3D[官]",
            id: "151",
            type: "fc3d",
            style: "guan",

        },
        {
            gamename: "排列三、五[官]",
            id: "152",
            type: "kl8",
            style: "guan",

        },
        {
            gamename: "上海时时乐[官]",
            id: "153",
            type: "ssc",
            style: "guan",

        },
        {
            gamename: "香港⑥合彩[信]",
            id: "251",
            type: "lhc",
            style: "xin",

        },

        {
            gamename: "幸运28[信]",
            id: "261",
            type: "pcdd",
            style: "xin",

        },
        {
            gamename: "斯洛伐克28[信]",
            id: "262",
            type: "pcdd",
            style: "xin",

        },
        {
            gamename: "澳洲28[信]",
            id: "263",
            type: "pcdd",
            style: "xin",

        },
        {
            gamename: "加拿大28[信]",
            id: "264",
            type: "pcdd",
            style: "xin",

        },
        {
            gamename: "韩式28[信]",
            id: "265",
            type: "pcdd",
            style: "xin",

        },
        {
            gamename: "台湾28[信]",
            id: "266",
            type: "pcdd",
            style: "xin",

        },
        {
            gamename: "东京28[信]",
            id: "267",
            type: "pcdd",
            style: "xin",

        },

        {
            gamename: "安徽快3[官]",
            id: "171",
            type: "k3",
            style: "guan",

        },
        {
            gamename: "河北快3[官]",
            id: "172",
            type: "k3",
            style: "guan",

        },
        {
            gamename: "河南快3[官]",
            id: "173",
            type: "k3",
            style: "guan",

        },
        {
            gamename: "湖北快3[官]",
            id: "174",
            type: "k3",
            style: "guan",

        },
        {
            gamename: "上海快3[官]",
            id: "175",
            type: "k3",
            style: "guan",

        },
        {
            gamename: "北京快3[官]",
            id: "176",
            type: "k3",
            style: "guan",

        },
        {
            gamename: "广西快3[官]",
            id: "177",
            type: "k3",
            style: "guan",

        },
        {
            gamename: "江苏快3[官]",
            id: "178",
            type: "k3",
            style: "guan",

        },

        {
            gamename: "安徽快3[信]",
            id: "271",
            type: "k3",
            style: "xin",

        },
        {
            gamename: "河北快3[信]",
            id: "272",
            type: "k3",
            style: "xin",

        },
        {
            gamename: "河南快3[信]",
            id: "273",
            type: "k3",
            style: "xin",

        },
        {
            gamename: "湖北快3[信]",
            id: "274",
            type: "k3",
            style: "xin",

        },
        {
            gamename: "上海快3[信]",
            id: "275",
            type: "k3",
            style: "xin",

        },
        {
            gamename: "北京快3[信]",
            id: "276",
            type: "k3",
            style: "xin",

        },
        {
            gamename: "广西快3[信]",
            id: "277",
            type: "k3",
            style: "xin",

        },
        {
            gamename: "江苏快3[信]",
            id: "278",
            type: "k3",
            style: "xin",

        },
    ];

    public game = "重庆时时彩[官]"; // 当前游戏名称
    public curgamename = "重庆时时彩[官]"; // 当前游戏名称
    public curgametype = 'ssc'; // 当前游戏类型
    public curgamestyle = 'guan'; // 当前游戏玩法

    public offdata = OFFTYPE[this.curgametype].official;
    public creditdata = [];
    constructor() {}

    ngOnInit() {}

    selchange(){
        if (this.curgamename === this.game) {
            return;
        }
        let d = this.gamelist;
        for (let i = 0; i < d.length; i++) {
            if (this.game === d[i].gamename) {
                this.curgametype = d[i].type;
                this.curgamestyle = d[i].style;
                if (this.curgamestyle==='guan') {
                    this.offdata = OFFTYPE[this.curgametype].official;
                }
                if (this.curgamestyle==='xin') {
                    this.creditdata = this.setcreditdata(CREDITTYPE[this.curgametype]);
                }
                this.curgamename = this.game;
            }
        }

    }
    setcreditdata(data){
        let DATA = [];
        for (let i = 0; i < data.length; i++) {
            let o = Object.assign({},data[i],{active:false});
            DATA.push(o);
        }
        return DATA
    }

    trclick(i){
        this.creditdata[i].active = !this.creditdata[i].active;
    }
        

}