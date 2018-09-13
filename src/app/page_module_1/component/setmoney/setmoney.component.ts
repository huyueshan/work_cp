import {
    Component,
    OnInit,
    Input,
    AfterViewInit,
    Output,
    EventEmitter,
    HostListener,
    ElementRef
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


    constructor(private transfer:TransferService) {}

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
        Base.Store.set("selmoeny", d, true);
        this.transfer.Credit_selmoeny = d;
        // this.POPNOTE({
        //     msg: '保存成功！'
        // });
        // setTimeout(() => {
        //     this.close();
        // }, 2000);
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
    changeregset(i) {
        if (i === -1) {
            this.setnumb.value =this.setnumb.value.replace(/\D/g, "");
        } else {
            this.setnumb.data[i].value = this.setnumb.data[i].value.replace(/\D/g, "");
        }
    }
    // 设置快捷金额窗口
    SETM() {
        this.transfer.Credit_setnumb = true;

        // let p = this.popup;
        // this.setfixed(p.setnumb, 260, 410);
        // p.setnumb.scale = false;
        // p.setnumb.show = true;
        // p.shade.show = true;
        // setTimeout(() => {
        //     p.setnumb.scale = true;
        // }, 10);
    }
    // 禁用快选活动框事件
    setboxvalid() {
        this.transfer.Credit_boxvalid = !this.transfer.Credit_boxvalid;
        let s = this.transfer.Credit_boxvalid ? "快捷金额已开启" : "快捷金额已禁用";
        // this.POPNOTE({
        //     msg: s
        // });
        // setTimeout(() => {
        //     this.popup.note.show = false;
        // }, 2000);
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