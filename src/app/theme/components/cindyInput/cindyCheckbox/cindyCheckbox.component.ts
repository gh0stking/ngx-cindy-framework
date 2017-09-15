import { Component, Input, Output, EventEmitter, ViewChild, Optional, Inject } from '@angular/core';
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
            [label]='label'>
        </p-checkbox>
    `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: CindyCheckbox,
        multi: true
    }]
})
export class CindyCheckbox extends ElementBase<boolean>{
    @ViewChild(NgModel) model: NgModel;
    @Input() label: string;
    @Input() name: string;
    @Input() value: string;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
    }
}