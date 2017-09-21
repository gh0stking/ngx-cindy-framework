import { Component, Input, Output, EventEmitter, ContentChildren, ElementRef } from '@angular/core';

@Component({
    selector: 'c-tabPanel',
    template: `<ng-content></ng-content>`
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