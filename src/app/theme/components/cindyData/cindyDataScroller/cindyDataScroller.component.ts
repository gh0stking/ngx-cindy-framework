import { Component, Input, Output, EventEmitter, ContentChild, ViewChild } from '@angular/core';
import { CindyTemplate } from '../../../directives/common/cindyTemplate.directive';
import { DataScroller } from 'primeng/primeng';

@Component({
    selector: 'c-dataScroller',
    template: `
        <p-dataScroller #ds
            [value]="value"
            [rows]="rows"
            [inline]="inline"
            [scrollHeight]="scrollHeight"
            [loader]="loader"
            [style]="style"
            [styleClass]="styleClass"
            (onLazyLoad)="onLazyLoadEvent($event)">
            <ng-content select="c-header"></ng-content>
            <ng-content select="c-footer"></ng-content>
            <ng-content [ngTemplateOutlet]='template'></ng-content>
        </p-dataScroller>
    `
})
export class CindyDataScroller {
    @ContentChild(CindyTemplate) template: CindyTemplate;
    @ViewChild("ds") ds: DataScroller;

    @Input() value: any[];
    @Input() rows: number;
    @Input() inline: boolean;
    @Input() scrollHeight: any;
    @Input() loader: any;
    @Input() style: string;
    @Input() styleClass: string;

    @Output() onLazyLoad: EventEmitter<any> = new EventEmitter();

    onLazyLoadEvent(event) {
        this.onLazyLoad.emit(event);
    }

    public reset() {
        this.ds.reset();
    }
}