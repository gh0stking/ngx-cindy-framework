import { Component, ViewChild, Optional, Inject, Input } from '@angular/core';
import { ElementBase } from '../../common/form';

import {
    NgModel,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    NG_ASYNC_VALIDATORS,
} from '@angular/forms';

@Component({
    selector: 'c-inputTextArea',
    template: `
        <textarea pInputTextarea
            [rows]="rows" 
            [cols]="cols" 
            autoResize="{{autoResize}}" 
            [(ngModel)]='val'>
        </textarea>
    `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: CindyInputTextArea,
        multi: true
    }]
})
export class CindyInputTextArea extends ElementBase<string>{
    @ViewChild(NgModel) model: NgModel;
    @Input() rows: number = 5;
    @Input() cols: number = 30;
    @Input() autoResize: boolean = false;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
    }
}