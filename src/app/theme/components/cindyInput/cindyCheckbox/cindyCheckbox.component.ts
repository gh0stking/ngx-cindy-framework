import { Component, Input, Output, EventEmitter, ViewChild, forwardRef, Optional, Inject } from '@angular/core';
import { ElementBase } from '../../common/form';

import {
    NgModel,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    NG_ASYNC_VALIDATORS,
} from '@angular/forms';

@Component({
    selector: 'c-checkbox',
    template: `
        <p-checkbox 
            [(ngModel)]='val' 
            [name]='name'
            [value]='value'
            [label]='label'
            [disabled]='disabled'
            [binary]='binary'
            [tabindex]='tabindex'
            [inputId]='inputId'
            [style]='style'
            [styleClass]='styleClass'
            (onChange)="onChangeEvent($event)">
        </p-checkbox>
    `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CindyCheckbox),
        multi: true
    }]
})
export class CindyCheckbox extends ElementBase<boolean>{
    @ViewChild(NgModel) model: NgModel;
    @Input() label: string;
    @Input() name: string;
    @Input() value: any;
    @Input() disabled: boolean;
    @Input() binary: boolean;
    @Input() tabindex: number;
    @Input() inputId: string;
    @Input() style: any;
    @Input() styleClass: string;

    @Output() onChange: EventEmitter<any> = new EventEmitter();

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
    }

    onChangeEvent(event) {
        this.onChange.emit(event);
    }
}