import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => { };

export const CINDY_INPUT_RADIO_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CindyRadioButton),
    multi: true
};

@Component({
    selector: 'c-radioButton',
    template: `<p-radioButton name="{{name}}" value="{{value}}" label='{{label}}' [(ngModel)]="value"></p-radioButton>`,
    providers: [CINDY_INPUT_RADIO_VALUE_ACCESSOR]
})
export class CindyRadioButton {
    innerValue: any = '';
    public _label: string;
    public _name: string;
    onChangeCallback: (_: any) => void = noop;

    @Input() get name(): string {
        return this._name;
    }

    set name(val: string) {
        this._name = val;
    }

    @Input() get label(): string {
        return this._label;
    }

    set label(val: string) {
        this._label = val;
    }

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
}