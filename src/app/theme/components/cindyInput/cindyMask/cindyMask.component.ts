import { Component, ViewChild, Optional, Inject, Input } from '@angular/core';
import { ElementBase } from '../../common/form';

import {
    NgModel,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    NG_ASYNC_VALIDATORS,
} from '@angular/forms';

@Component({
    selector: 'c-inputMask',
    template: `
        <p-inputMask 
            [(ngModel)]="val" 
            mask="{{mask}}" 
            slotChar="{{slotChar}}" 
            type="{{type}}">
        </p-inputMask>
    `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: CindyMask,
        multi: true
    }]
})
export class CindyMask extends ElementBase<string>{
    @ViewChild(NgModel) model: NgModel;
    @Input() mask: string;
    @Input() slotChar: string = '-';
    @Input() type: string = 'text';

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
    }
}