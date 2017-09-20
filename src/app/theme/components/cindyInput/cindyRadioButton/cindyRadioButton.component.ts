import { Component, ViewChild, Optional, Inject, Input, Output, EventEmitter } from '@angular/core';
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
            [(ngModel)]='val' 
            [name]='name'
            [value]='value'
            [label]='label'
            [disabled]='disabled'
            [tabindex]='tabindex'
            [inputId]='inputId'
            [style]='style'
            [styleClass]='styleClass'
            (onClick)="onClickEvent($event)">
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
    @Input() label: string;
    @Input() name: string;
    @Input() value: any;
    @Input() disabled: boolean;
    @Input() tabindex: number;
    @Input() inputId: string;
    @Input() style: any;
    @Input() styleClass: string;

    @Output() onClick: EventEmitter<any> = new EventEmitter();

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
    }

    onClickEvent(event) {
        this.onClick.emit(event);
    }
}