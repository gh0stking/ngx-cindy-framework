import { Component, Input, Output, EventEmitter, ViewChild, Optional, Inject } from '@angular/core';
import { ElementBase } from '../../common/form';

import {
    NgModel,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    NG_ASYNC_VALIDATORS,
} from '@angular/forms';

@Component({
    selector: 'c-dropdown',
    template: `
        <p-dropdown 
            [(ngModel)]="val" 
            [options]="options" 
            [scrollHeight]="scrollHeight" 
            [style]="style" 
            [panelStyle]="panelStyle" 
            [styleClass]="styleClass" 
            [panelStyleClass]="panelStyleClass" 
            [filter]="filter" 
            [filterBy]="filterBy" 
            [filterPlaceholder]="filterPlaceholder" 
            [autoWidth]="autoWidth" 
            [required]="required" 
            [disabled]="disabled" 
            [editable]="editable" 
            [appendTo]="appendTo" 
            [tabindex]="tabindex" 
            [placeholder]="placeholder" 
            [inputId]="inputId" 
            [dataKey]='dataKey'
            [lazy]='lazy'
            [autofocus]='autofocus'
            [resetFilterOnHide]='resetFilterOnHide'
            (onChange)="onChangeEvent($event)"
            (onFocus)="onFocusEvent($event)"
            (onBlur)="onBlurEvent($event)">
            <ng-content></ng-content>
        </p-dropdown>
    `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: CindyDropdown,
        multi: true
    }]
})
export class CindyDropdown extends ElementBase<string>{
    @ViewChild(NgModel) model: NgModel;
    @Input() options: Array<any>;
    @Input() scrollHeight: string = "200px";
    @Input() style: string;
    @Input() panelStyle: string;
    @Input() styleClass: string;
    @Input() panelStyleClass: string;
    @Input() filter: boolean;
    @Input() filterBy: string;
    @Input() filterPlaceholder: string;
    @Input() autoWidth: boolean = true;
    @Input() required: boolean;
    @Input() disabled: string;
    @Input() editable: string;
    @Input() appendTo: any;
    @Input() tabindex: number;
    @Input() placeholder: string;
    @Input() inputId: string;
    @Input() dataKey: string;
    @Input() lazy: boolean = true;
    @Input() autofocus: boolean;
    @Input() resetFilterOnHide: boolean;

    @Output() onChange: EventEmitter<any> = new EventEmitter();
    @Output() onFocus: EventEmitter<any> = new EventEmitter();
    @Output() onBlur: EventEmitter<any> = new EventEmitter();

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
    }

    onChangeEvent() {
        this.onChange.emit();
    }

    onFocusEvent() {
        this.onFocus.emit();
    }

    onBlurEvent() {
        this.onBlur.emit();
    }
}