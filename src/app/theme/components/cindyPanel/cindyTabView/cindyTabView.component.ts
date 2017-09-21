import { Component, Input, Output, EventEmitter, ContentChild, ContentChildren, QueryList, AfterContentInit, ViewChildren, TemplateRef } from '@angular/core';
import { CindyTabPanel } from '../cindyTabPanel';
import { CindyTemplate } from '../../../directives/common/cindyTemplate.directive';

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
            <p-tabPanel *ngFor='let t of tabs'
                [header]="t.header"
                [selected]="t.selected"
                [disabled]="t.disabled"
                [closable]="t.closable"
                [headerStyle]="t.headerStyle"
                [headerStyleClass]="t.headerStyleClass"
                [cache]="t.cache">
                <ng-content></ng-content>
            </p-tabPanel>
        </p-tabView>
    `
})
export class CindyTabView implements AfterContentInit {
    @ContentChildren(CindyTabPanel) panels: QueryList<CindyTabPanel>;
    tabs: CindyTabPanel[];

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

    ngAfterContentInit() {
        this.tabs = this.panels.toArray();
    }
}