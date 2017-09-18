import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from 'primeng/primeng';

@Component({
    selector: 'c-growl',
    template: `
        <p-growl 
            [(value)]="value"
            [sticky]='sticky'
            [life]='life'
            [style]='style'
            [styleClass]='styleClass'
            [immutable]='immutable'
            (onClose)='onCloseEvent()'
            (onClick)='onClickEvent()'
            (onHover)='onHoverEvent()'>
        </p-growl>
    `
})
export class CindyGrowl {
    @Input() value: Message[];
    @Input() sticky: boolean = false;
    @Input() life: number = 3000;
    @Input() style: string;
    @Input() styleClass: string;
    @Input() immutable: boolean = true;
    @Output() onClose: EventEmitter<any> = new EventEmitter();
    @Output() onClick: EventEmitter<any> = new EventEmitter();
    @Output() onHover: EventEmitter<any> = new EventEmitter();

    onCloseEvent() {
        this.onClose.emit();
    }

    onClickEvent() {
        this.onClick.emit();
    }

    onHoverEvent() {
        this.onHover.emit();
    }
}