import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'c-tabView',
    template: `
        <p-tabView 
            [orientation]="orientation"
            [activeIndex]="activeIndex"
            [style]="style"
            [styleClass]="styleClass"
            (onChange)="onChangeEvent($event)"
            (onClose)="onCloseEvent($event)">
            <ng-content></ng-content>
        </p-tabView>
    `
})
export class CindyTabView {
    @Input() orientation: string = "top";
    @Input() activeIndex: number;
    @Input() style: string;
    @Input() styleClass: string;

    @Output() onChange = new EventEmitter();
    @Output() onClose = new EventEmitter();

    onChangeEvent(event) {
        this.onChange.emit(event);
    }

    onCloseEvent(event) {
        this.onClose.emit(event);
    }
}