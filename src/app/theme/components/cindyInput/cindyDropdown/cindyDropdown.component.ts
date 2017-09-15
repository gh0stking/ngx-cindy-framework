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
            [options]="options" 
            [(ngModel)]="val" 
            [filter]="filter" 
            (onChange)="onChangeEvent()" 
            filterBy='{{filterBy}}'>
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
    @Input() options: Array<any> = null;
    @Input() filter: boolean = false;
    @Input() filterBy: string;
    @Output() onChange: EventEmitter<any> = new EventEmitter();

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
    }

    onChangeEvent() {
        this.onChange.emit();
    }
}