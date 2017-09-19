import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'c-accordion',
    template: `
        <p-accordion 
            [multiple]="true"
            [style]="style"
            [styleClass]="styleClass"
            [lazy]="lazy"
            [activeIndex]="activeIndex"
            (onClose)="onCloseEvent($event)"
            (onOpen)="onOpenEvent($event)">
            <ng-content></ng-content>
        </p-accordion>
    `
})
export class CindyAccordion {
    @Input() multiple: boolean = false;
    @Input() style: string;
    @Input() styleClass: string;
    @Input() lazy: boolean = false;
    @Input() activeIndex: any;

    @Output() onClose = new EventEmitter();
    @Output() onOpen = new EventEmitter();

    onCloseEvent(event) {
        this.onClose.emit(event);
    }

    onOpenEvent(event) {
        this.onOpen.emit(event);
    }
}