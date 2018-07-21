import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {

    // 传给弹窗组件数据
    public  popoutInfo={
        title:'string',
        message:'string',
        event: false,
        show: false,
        scale: false,
    }

    //====================传给分页组件数据 
    public pagination = {
        totalNum:1000,  //总数据条数 
        pageSize: 5, // 每页显示数量
        curPage: 1, //当前页
        segmentSize: 6, //最大显示页码标签数量
        totalPage:200,// 最大页码数。
      };

    // 每页显示条数 和 最大显示分页标签数量 设置数据
    public selectdata={
        pageSize: 5,
        segmentSize: 6,
    }

    // 临时测试数据
    public nn =this.pagination.totalNum;


	constructor() { 
    }
    
	ngOnInit(){
    }
    
    // 弹窗关闭事件 可以自定义命名
    closePopouot(e){
        let p = this.popoutInfo;
        p.show = false;
        p.scale = false;
        if(p.event){
            if(e ) {
                // 测试事件
                this.nn +=20;
                this.pagination.totalNum=this.nn;
                this.pagination.curPage=1;
                let o = Object.assign({},this.pagination);
                this.pagination = Object.assign({},o);
                alert("您点击了确认按钮！改变了分页组件数据总条数。")
            }else{
                alert("您点击了取消或关闭按钮！")
            }
        } 
        p.event = false;
    }

    // 弹窗显示事件 b可以不传值 为true时显示取消按钮
    POPNOTE(t,m,b=false){
        let p = this.popoutInfo;
        p.title = t;
        p.message= m;
        p.show = true;
        p.scale = false;
        p.event= b ? true : false;
        // 触发渐大动画
        setTimeout(() => {
            p.scale = true;
        }, 10);
    }

    // 使用操作
    click1(){
        this.POPNOTE('操作提示','这是普通提示内容');
    }
    click2(){
        this.POPNOTE('操作提示','这是带取消按钮的提示内容',true);
    }


    // ===============分页组件事件
    // 分页组件点击页码事件，参数i为点击页码数
    getPageData(i) {
        this.pagination.curPage = i;
        //  此处请求数据
        console.log(this.pagination.curPage);
    }
    
    // 改变传给分页组件参数事件
    // !!!!!!!!!!因为传给组件的参数是对象，所以一定要改变对象的引用指针，子组件才会更新传过去的数据！！！！！！！！！！！！！！！！
    pageParamschange(){
        this.pagination.curPage=1;
        let o=Object.assign({},this.pagination,this.selectdata);
        this.pagination = Object.assign({},o);  // 这一步改变了对象的引用指针
    }
};
