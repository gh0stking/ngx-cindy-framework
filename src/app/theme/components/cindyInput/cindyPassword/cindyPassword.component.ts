import { Component, ViewChild, Optional, Inject, Input } from '@angular/core';
import { ElementBase } from '../../common/form';

import {
    NgModel,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    NG_ASYNC_VALIDATORS,
} from '@angular/forms';

@Component({
    selector: 'c-password',
    template: `
        <input 
            pPassword 
            type="password" 
            [(ngModel)]='val' 
        />
    `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: CindyPassword,
        multi: true
    }]
})
export class CindyPassword extends ElementBase<string>{
    @ViewChild(NgModel) model: NgModel;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
    }
}