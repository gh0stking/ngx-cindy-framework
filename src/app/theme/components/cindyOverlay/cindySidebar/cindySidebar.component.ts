import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'c-sidebar',
    template: `
        <!--<p-sidebar 
            [(visible)]="visible" 
            [position]="position"
            [fullScreen]="fullScreen"
            [appendTo]="appendTo"
            [style]="style"
            [styleClass]="styleClass"
            [blockScroll]="blockScroll"
            [baseZIndex]="baseZIndex"
            (onShow)="onShowEvent($event)"
            (onHide)="onHideEvent($event)">
            <ng-content></ng-content>
        </p-sidebar>-->
    `
})
export class CindySidebar {
    @Input() position: string = 'left';
    @Input() fullScreen: boolean = false;
    @Input() appendTo: any;
    @Input() style: string;
    @Input() styleClass: string;
    @Input() blockScroll: boolean = false;
    @Input() baseZIndex: number = 0;
    _visible: boolean = false;

    @Output() onShow: EventEmitter<any> = new EventEmitter();
    @Output() onHide: EventEmitter<any> = new EventEmitter();

    onShowEvent(event) {
        this.onShow.emit(event);
    }

    onHideEvent(event) {
        this.onHide.emit(event);
    }

    @Input() get visible(): boolean {
        return this._visible;
    }

    set visible(val: boolean) {
        this._visible = val;
    }
}