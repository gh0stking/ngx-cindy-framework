import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'c-cindySteps',
    template: `
        <p-steps 
            [model]="model"
            [activeIndex]="activeIndex"
            [readonly]="readonly"
            [style]="style"
            [styleClass]="styleClass"
            (activeIndexChange)="activeIndexChangeEvent($event)">
        </p-steps>
    `
})
export class CindySteps {
    @Input() model: any;
    @Input() activeIndex: number = 0;
    @Input() readonly: boolean = true;
    @Input() style: string;
    @Input() styleClass: string;

    @Output() activeIndexChange: EventEmitter<any> = new EventEmitter();

    activeIndexChangeEvent(event) {
        this.activeIndexChange.emit(event);
    }
}