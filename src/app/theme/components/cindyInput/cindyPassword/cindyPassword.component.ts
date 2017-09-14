import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => { };

export const CUSTOM_INPUT_PASSWORD_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CindyPassword),
    multi: true
};

@Component({
    selector: 'c-password',
    template: `<input type="password" pPassword [(ngModel)]='value' (blur)="onBlur()" />`,
    providers: [CUSTOM_INPUT_PASSWORD_VALUE_ACCESSOR]
})
export class CindyPassword {
    //The internal data model
    innerValue: any = '';

    //Placeholders for the callbacks which are later providesd
    //by the Control Value Accessor
    onTouchedCallback: () => void = noop;
    onChangeCallback: (_: any) => void = noop;

    //get accessor
    get value(): any {
        return this.innerValue;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    //Set touched on blur
    onBlur() {
        this.onTouchedCallback();
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}