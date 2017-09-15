import { Component, ViewChild, Optional, Inject, Input } from '@angular/core';
import { ElementBase } from '../../common/form';

import {
    NgModel,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    NG_ASYNC_VALIDATORS,
} from '@angular/forms';

@Component({
    selector: 'c-radioButton',
    template: `
        <p-radioButton 
            name="{{name}}" 
            value="{{value}}" 
            label='{{label}}' 
            [(ngModel)]="val">
        </p-radioButton>
    `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: CindyRadioButton,
        multi: true
    }]
})
export class CindyRadioButton extends ElementBase<boolean>{
    @ViewChild(NgModel) model: NgModel;
    @Input() name: string;
    @Input() value: any;
    @Input() label: string;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
    }
}