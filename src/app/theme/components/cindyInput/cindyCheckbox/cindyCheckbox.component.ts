import { Component, Input, Output, forwardRef, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => { };

export const CUSTOM_INPUT_CHECKBOX_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CindyCheckbox),
    multi: true
};

@Component({
    selector: 'c-checkbox',
    template: `<p-checkbox name="{{name}}" value="{{value}}" label="{{label}}" [(ngModel)]='checked' (change)="onChangeEvent($event)"></p-checkbox>`,
    providers: [CUSTOM_INPUT_CHECKBOX_VALUE_ACCESSOR]
})
export class CindyCheckbox {
    @Input() name: string;
    @Input() value: string;
    @Input() label: string;
    @Output() onChange: EventEmitter<any> = new EventEmitter();
    checked: boolean = false;

    onChangeEvent() {
        this.onChange.emit(this.checked);
    }
}