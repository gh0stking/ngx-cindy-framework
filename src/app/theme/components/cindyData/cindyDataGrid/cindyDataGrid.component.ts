import { Component, Input, Output, EventEmitter, ContentChild } from '@angular/core';
import { CindyTemplate } from '../../../directives/common/cindyTemplate.directive';

@Component({
    selector: 'c-dataGrid',
    template: `
        <p-dataGrid 
            [value]="value"
            [rows]="rows"
            [paginator]="paginator"
            [totalRecords]="totalRecords"
            [pageLinks]="pageLinks"
            [rowsPerPageOptions]="rowsPerPageOptions"
            [alwaysShowPaginator]="alwaysShowPaginator"
            [lazy]="lazy"
            [style]="style"
            [styleClass]="styleClass"
            [paginatorPosition]="paginatorPosition"
            [emptyMessage]="emptyMessage"
            [trackBy]="trackBy"
            [immutable]="immutable"
            (onLazyLoad)="onLazyLoadEvent($event)"
            (onPage)="onPageEvent($event)">
            <ng-content select="c-header"></ng-content>
            <ng-content select="c-footer"></ng-content>
            <ng-content [ngTemplateOutlet]='template'></ng-content>
        </p-dataGrid>
    `
})
export class CindyDataGrid {
    @ContentChild(CindyTemplate) template: CindyTemplate;

    @Input() value: any[];
    @Input() rows: number;
    @Input() paginator: boolean;
    @Input() totalRecords: number;
    @Input() pageLinks: number = 5;
    @Input() rowsPerPageOptions: any[];
    @Input() alwaysShowPaginator: boolean = true;
    @Input() lazy: boolean;
    @Input() style: string;
    @Input() styleClass: string;
    @Input() paginatorPosition: string = "bottom";
    @Input() emptyMessage: string = "No records found.";
    @Input() trackBy: Function;
    @Input() immutable: boolean = true;

    @Output() onLazyLoad: EventEmitter<any> = new EventEmitter();
    @Output() onPage: EventEmitter<any> = new EventEmitter();

    onLazyLoadEvent(event) {
        this.onLazyLoad.emit(event);
    }

    onPageEvent(event) {
        this.onPage.emit(event);
    }
}