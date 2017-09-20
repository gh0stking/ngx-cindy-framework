import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'c-tabPanel',
    template: `
        <p-tabPanel 
            [header]="header"
            [selected]="selected"
            [disabled]="disabled"
            [closable]="closable"
            [headerStyle]="headerStyle"
            [headerStyleClass]="headerStyleClass"
            [cache]="cache">
            <ng-content></ng-content>
        </p-tabPanel>
    `
})
export class CindyTabPanel {
    @Input() header: string;
    @Input() selected: boolean = false;
    @Input() disabled: boolean = false;
    @Input() closable: boolean = false;
    @Input() headerStyle: string;
    @Input() headerStyleClass: string;
    @Input() controlClose: boolean = false;
    @Input() cache: boolean = true;
}