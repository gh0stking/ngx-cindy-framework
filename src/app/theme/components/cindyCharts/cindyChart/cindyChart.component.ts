import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'c-chart',
    template: `
        <p-chart
            [type]='type'
            [data]='data'
            [options]='options'
            [width]='width'
            [height]='height'
            (onDataSelect)='onDataSelectEvent($event)'>
        </p-chart>
    `
})
export class CindyChart {
    @Input() type: string;
    @Input() data: any;
    @Input() options: any;
    @Input() width: number;
    @Input() height: number;
    @Output() onDataSelect: EventEmitter<any> = new EventEmitter();

    onDataSelectEvent(event) {
        this.onDataSelect.emit(event);
    }
}