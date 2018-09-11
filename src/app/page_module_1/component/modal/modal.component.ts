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

@Component({

    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {
    @Input() data: {
        title: string,        // title 名字
        center?: boolean,   // title是否居中
        width ?: number,   // 窗口宽度
        show: boolean,
    };
    @Output() private close = new EventEmitter();
    @HostListener('window:resize', ['$event']) onResize(e) {
        this.setfixed(this.popup.note, this.content_width, this.content_height);
    }

    public scale = false;

    public content_width = 600;
    public content_height = 180;

    public popup = {
        // 遮罩层
        shade: {
            w: 0,
            h: 0
        },
        // 提示信息框
        note: {
            drag: false,
            dragleft: 0,
            dragtop: 0,
            left: 0,
            top: 0,
        },
    };
    constructor(private el: ElementRef) {}

    ngOnInit() {
        this.content_width = this.data.width ? this.data.width : this.content_width
        this.scale = false;
    }
    ngOnChanges() {
        // this.init();
    }
    ngAfterViewInit() {
        this.init();
    }

    init(){
        let p = this.popup;
        setTimeout(() => {
            p.shade.w = screen.width;
            p.shade.h = screen.height;
            // 此处需要先判断 不然angular有报错
            if (this.data.show) {
                this.content_height = this.el.nativeElement.querySelector('#note').offsetHeight;
            }
            console.log(this.content_height);
            this.setfixed(p.note, this.content_width, this.content_height);
            this.scale = true;
        }, 10);

    }

    // 提示信息窗口关闭事件
    click() {
        this.close.emit();
    }


    // 设置显示位置
    setfixed(t, w, h) {
        let WIDTH = document.body.clientWidth;
        let HEIGHT = document.body.clientHeight;
        t.left = (WIDTH - w) / 2 < 0 ? 0 : (WIDTH - w) / 2;
        t.top = (HEIGHT - h) / 2 < 10 ? 10 : (HEIGHT - h - 30) / 2;
    }
    // 弹窗拖动事件
    popmousedown(e) {
        let t = this.popup.note;
        let ev = e || event;
        t.drag = true;
        t.dragleft = ev.clientX - t.left;
        t.dragtop = ev.clientY - t.top;
    }
    popmouseup(e) {
        let t = this.popup.note;
        t.drag = false;
    }
    popmousmove(e) {
        let t = this.popup.note;
        if (t.drag) {
            let ev = e || event;
            t.left = ev.clientX - t.dragleft;
            t.top = ev.clientY - t.dragtop;
        }
    }

}