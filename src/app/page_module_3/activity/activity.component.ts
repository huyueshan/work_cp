import {
    Component,
    OnInit,
    ElementRef
} from "@angular/core";
import {
    Router,
    ActivatedRoute,
    Params
} from "@angular/router";
import userModel from "../../../status/user.model";
@Component({
    selector: "app-activity",
    templateUrl: "./activity.component.html",
    styleUrls: ["./activity.component.scss"]
})
export class ActivityComponent implements OnInit {
    public navdata = [{
            name: "热门推荐"
        },
        {
            name: "时时彩"
        },
        {
            name: "快三"
        },
        {
            name: "分分彩"
        },
        {
            name: "北京赛车"
        },
        {
            name: "PC蛋蛋"
        }
    ];
    public nacactive = 0;
    public actdata = [

        {
            isrc: require("../images/mod3/activity_m3_01.png"),
            title: "2018俄罗斯世界杯，神预测现金188,888",
            content: "活动期间，会员拥有单笔2,000元的存款记录即获得一次预测机会（10,000元则有5次预测机会以此类推）",
            on: false
        },
        {
            isrc: require("../images/mod3/activity_m3_02.png"),
            title: "生日欢乐庆！惊喜送不停！",
            content: "活动期间，会员拥有单笔2,000元的存款记录即获得一次预测机会（10,000元则有5次预测机会以此类推）",
            on: false
        },
        {
            isrc: require("../images/mod3/activity_m3_03.png"),
            title: "2018俄罗斯世界杯，神预测现金188,888 拷贝 2",
            content: "一周一期，网站每期发出5道赛事问题，会员每周有1次机会参与竞猜，猜中即刻获得高达￥14,888奖金！",
            on: false
        },
    ];
    constructor() {}
    ngOnInit() {}
    ngAfterViewInit() {}
    ngOnDestroy() {}
}