
import { Component } from '@angular/core';
import { HttpInterceptorService } from '../../Http.Service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {

    // 传给弹窗组件数据
    public  popoutInfo={
        title:'string',
        msg:'string',
        event: false,
        show: false,
    }

    //====================传给分页组件数据 
    public pagination = {
        totalNum:20,  //总数据条数 
        pageSize: 5, // 每页显示数量
        curPage: 1, //当前页
        segmentSize: 5, //最大显示页码标签数量
        totalPage:4,// 最大页码数。
      };

    // 每页显示条数 和 最大显示分页标签数量 设置数据
    public selectdata={
        pageSize: 5,
        segmentSize: 5,
    }

	constructor( private shttp:HttpInterceptorService) {}
    
	ngOnInit(){
        // 测试请求
        // this.shttp.get('http://127.0.0.1:3000',{'查询':"测试",2:"diy"}).then(result => {  
        //     console.log("登录接口返回的信息是：" , result); 
        //     if (result.status == 200 && result.data) {
        //       console.log('qingqiu neirong:',result.data);
        //       console.log('qingqiu code',result.statusText);
        //     } else { // 失败  
        //       alert(result.message);  
        //     }  
        //   });
    }

    // 测试弹窗确认按钮事件
    test(){
        alert('您点击了确认按钮，分页组件数据总数将增加20条！');
        this.pagination.totalNum+=20;
        let o = Object.assign({},this.pagination);
        this.pagination = Object.assign({},o);
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

    // 弹窗使用操作
    click1(){
        this.POPNOTE({msg:'这是普通提示内容'});
    }
    click2(){
        this.POPNOTE({title:'事件提示',msg:'这是带取消按钮的提示内容'},this.test); // 传入事件后 弹窗点击确认会触发此事件
    }

    // ==========================弹窗结束


    // ===============分页组件事件
    // 分页组件点击页码事件，参数i为点击页码数
    getPageData(i) {
        //  此处请求数据
        console.log(i);
    }
    
    // 改变传给分页组件参数事件
    // !!!!!!!!!!因为传给组件的参数是对象，所以一定要改变对象的引用指针，子组件才会更新传过去的数据！！！！！！！！！！！！！！！！
    pageParamschange(){
        let o=Object.assign({},this.pagination,this.selectdata);
        this.pagination = Object.assign({},o);  // 这一步改变了对象的引用指针
    }
};
