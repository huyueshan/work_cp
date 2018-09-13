import {
    Component,
    OnInit,
    Input,
    AfterContentInit,
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
export class ModalComponent implements OnInit,
AfterContentInit{
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
    public content_height = 50;

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
        let p = this.popup;
        this.setfixed(p.note, this.content_width, this.content_height);
    }
    ngOnChanges() {
    }
    ngAfterContentInit(){
        this.init();

    }


    init(){
        let p = this.popup;
        setTimeout(() => {
            p.shade.w = screen.width;
            p.shade.h = screen.height;
            this.content_height = this.el.nativeElement.querySelector('#note').offsetHeight;
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