import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({

  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
    @Input('pageParams') pageParams;
    
    @Output() changeCurPage: EventEmitter<Number> = new EventEmitter;

    public totalPage=0;
    public pageList = [];
    public currange=0;
    public oldpage = 0;

  constructor() {}

  ngOnInit() {
      this.getPageList(this.pageParams)
  }

  getPageList(p) {
    let data = [];
    let n = Math.ceil(p.totalNum/p.pageSize);
    this.totalPage = n ;
    for (let i = 1; i <= n; i++) {
        data.push(i)
    }
    return data;
  }
  setshowitem(i,p){
      let n= i+1;
        if (p.curPage<p.segmentSize/2+1) {
            if (n<=p.segmentSize) {
                return true;
            }else{
                return false;
            }
        }
        if (this.totalPage-(p.segmentSize/2)<=p.curPage) {
            if (this.totalPage-p.segmentSize < n) {
                return true;
            }else{
                return false;
            }
        }
        this.currange = (p.segmentSize/2)-1 ;
        let pagenumb;
        if (Math.abs(this.oldpage - p.curPage) >this.currange) {
            pagenumb=p.curPage
        }else{
            pagenumb=this.oldpage
        }
        if(n>(pagenumb-(p.segmentSize/2)) && n<(pagenumb+(p.segmentSize/2))){
            return true
        }else{
            return false;
        }
  }
    changePage(pageNo) {
        this.oldpage = this.pageParams.curPage;
        this.pageParams.curPage = pageNo;  //当前页码
        this.changeCurPage.emit(pageNo);
    }
}
