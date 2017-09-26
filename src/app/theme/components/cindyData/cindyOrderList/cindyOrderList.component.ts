import { Component, Input, Output, EventEmitter, ContentChild, ViewChild } from '@angular/core';
import { CindyTemplate } from '../../../directives/common/cindyTemplate.directive';

@Component({
    selector: 'c-orderList',
    template: `
        <p-orderList 
            [value]="value"
            [header]="header"
            [style]="style"
            [styleClass]="styleClass"
            [listStyle]="listStyle"
            [responsive]="responsive"
            [filterBy]="filterBy"
            [metaKeySelection]="metaKeySelection"
            [dragdrop]="dragdrop"
            [dragdropScope]="dragdropScope"
            (onReorder)="onReorderEvent($event)"
            (onSelectionChange)="onSelectionChangeEvent($event)"
            (onFilterEvent)="onFilterEventEvent($event)">
            <ng-content [ngTemplateOutlet]='template'></ng-content>
        </p-orderList>
    `
})
export class CindyOrderList {
    @ContentChild(CindyTemplate) template: CindyTemplate;
    
    @Input() value: any[];
    @Input() header: string;
    @Input() style: string;
    @Input() styleClass: string;
    @Input() listStyle: string;
    @Input() responsive: boolean;
    @Input() filterBy: string;
    @Input() metaKeySelection: boolean = true;
    @Input() dragdrop: boolean;
    @Input() dragdropScope: string;
    @Input() filterPlaceHolder: string;

    @Output() onReorder: EventEmitter<any> = new EventEmitter();
    @Output() onSelectionChange: EventEmitter<any> = new EventEmitter();
    @Output() onFilterEvent: EventEmitter<any> = new EventEmitter();

    onReorderEvent(event) {
        this.onReorder.emit(event);
    }

    onSelectionChangeEvent(event) {
        this.onSelectionChange.emit(event);
    }

    onFilterEventEvent(event) {
        this.onFilterEvent.emit(event);
    }
}