import {
    Component,
    OnInit,
    AfterViewInit,
} from '@angular/core';
import { TransferService } from '../../../../factory/Transfer.Service';

import { Base } from '../../../../factory/base.model';

@Component({
    selector: 'app-setmoney',
    templateUrl: './setmoney.component.html',
    styleUrls: ['./setmoney.component.scss']
})
export class SetmoneyComponent implements OnInit, AfterViewInit {
    
    // 传给弹窗模块数据
    public  modalInfo;
    public kxtip = false; // 快选金额保存提示显示控制
    public kxtipstr; // 快选金额提示信息
    
        // 设置快捷金额
        public setnumb= {
            show: false,
            drag: false,
            dragleft: 0,
            dragtop: 0,
            value: "",
            left: 200,
            top: 50,
            scale: false,
            data: [],
        };


    constructor(public transfer:TransferService) {}

    ngOnInit() {
        this.detail();
        let selmoeny = this.transfer.Credit_selmoeny;
        let d = this.setnumb.data;
        for (let i = 0; i < selmoeny.length; i++) {
            d[i] = {
                value: selmoeny[i]
            };
        }
    }
    ngOnChanges() {
    }
    ngAfterViewInit() {
    }
    
    //====快选金额事件开始=============
    savenum() {
        let d = [];
        let p = this.setnumb.data;
        for (let i = 0; i < p.length; i++) {
            d.push(Number(p[i].value));
        };
        d.sort((a,b)=>{return a-b});
        Base.Store.set("selmoeny", d, true);  // 保存到LocalStorage
        this.transfer.Credit_selmoeny = d;  // 保存到Transfer服务
        this.kxtipstr = '保存成功！'
        this.kxtip = true ;
        setTimeout(() => {
            this.kxtip = false ;
        }, 2000);
    }
    numbdel() {
        this.setnumb.value = "";
    }
    setnumbdel(i) {
        this.setnumb.data.splice(i, 1);
    }
    addnumb() {
        let n = Number(this.setnumb.value);
        if (n > 0) {
            let l = this.setnumb.data.length;
            this.setnumb.data[l] = {
                value: n
            };
        }
        this.setnumb.value = "";
    }
    changeregset(e,i) {
        if (i === -1) {
            this.setnumb.value =this.setnumb.value.toString().replace(/\D/g, "");
            if (e.keyCode === 13) {
                this.addnumb();
            }
        } else {
            this.setnumb.data[i].value = this.setnumb.data[i].value.toString().replace(/\D/g, "");
        }
    }
    // 禁用快选活动框事件
    setboxvalid() {
        this.transfer.Credit_sel_on = !this.transfer.Credit_sel_on;
        Base.Store.set("sel_on", this.transfer.Credit_sel_on, true);
        this.kxtipstr = this.transfer.Credit_sel_on ? "快捷金额已开启" : "快捷金额已禁用";
        this.kxtip = true ;
        setTimeout(() => {
            this.kxtip = false ;
        }, 2000);
    }
    //====快选金额事件end=============

    
  // 显示弹窗
  detail(){
    this.MODAL({width:260,});
  }
  // 弹窗关闭事件 可以自定义命名
  closeModal(e){
      this.transfer.Credit_setnumb = false;
  }
  // 弹窗显示事件 data为对象 fn传一个方法时点击确认时触发
  MODAL(data){
      let o = {
          title:'快选金额',   // title不传值默认
          center:true,  // title 是否居中
          width:260,
          show: true,
      }
      this.modalInfo = Object.assign({},o,data);
  }
}