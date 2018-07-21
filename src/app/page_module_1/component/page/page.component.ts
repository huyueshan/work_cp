import { Component, OnInit, Input, EventEmitter, Output,OnChanges } from '@angular/core';

@Component({

    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit,OnChanges {
    @Input() pageParams:{
        totalNum: number,  //总数据条数
        pageSize: number, // 每页显示数量
        curPage: number, //当前页
        segmentSize: number, //最大显示页码标签数量
        totalPage: number, // 最大页码数
      };

    @Output() changeCurPage: EventEmitter<Number> = new EventEmitter;
    public pageOb;
    public pageList = [];
    public dianfirst = false;
    public dianlast = false;
    public oldpage = 0;
    public OB = { page: 0, show: false, }

    constructor() { }

    ngOnInit() {
        this.pageList = this.getPageList(this.pageParams);
    }
    ngOnChanges(){
        this.pageList = this.getPageList(this.pageParams);
    }

    getPageList(Params) {
        this.pageOb =Object.assign({},Params);
        let p = this.pageOb;
        let data = [];
        let n = Math.ceil(p.totalNum / p.pageSize);
        p.totalPage = n;
        let s= p.segmentSize?(p.segmentSize>n?n:p.segmentSize):(n<5?n:5);
        p.segmentSize=Number(s);
        for (let i = 1; i <= n; i++) {
            let o = Object.assign({}, this.OB);
            o.page = i;
            data.push(o)
        }
        data = this.setdata(data, p);
        return data;
    }
    setdata(d, p) {
        this.dianfirst = false;
        this.dianlast = false;
        let t = p.totalPage;
        if (t<2) {
            return;
        }
        if (p.curPage < p.segmentSize) {
            for (let i = 0; i < d.length; i++) {
                d[i].show = false;
            }
            for (let i = 0; i < p.segmentSize; i++) {
                d[i].show = true;
            }
            this.dianlast = true;
            return d;
        }else if (t - p.segmentSize+1 < p.curPage) {
                for (let i = 0; i < d.length; i++) {
                    d[i].show = false;
                }
                for (let i = (t - p.segmentSize); i < t; i++) {
                    d[i].show = true;
                }
                this.dianfirst = true;
                return d;
        }else{
            this.dianfirst = true;
            this.dianlast = true;
            if (p.curPage > this.oldpage && !d[p.curPage].show) {
                for (let i = 0; i < d.length; i++) {
                    d[i].show = false;
                }
                for (let i = p.curPage; i > (p.curPage - p.segmentSize); i--) {
                    d[i].show = true;
                }
                return d;
            }
            if (p.curPage < this.oldpage && !d[p.curPage - 2].show) {
                for (let i = 0; i < d.length; i++) {
                    d[i].show = false;
                }
                for (let i = (p.curPage - 2); i < ((p.curPage - 2) + p.segmentSize); i++) {
                    d[i].show = true;
                }
                return d;
            }

        }
        return d;
    }

    changePage(pageNo) {
        this.oldpage = this.pageOb.curPage;
        this.pageOb.curPage = pageNo;  //当前页码
        this.pageList = this.setdata(this.pageList,this.pageOb);
        this.changeCurPage.emit(pageNo);
    }
}
