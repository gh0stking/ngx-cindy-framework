import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export const CINDY_INPUT_MASK_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CindyMask),
    multi: true
};

@Component({
    selector: 'c-inputMask',
    template: `<p-inputMask [(ngModel)]="value" mask="{{mask}}" slotChar="{{slotChar}}" type="{{type}}"></p-inputMask>`,
    providers: [CINDY_INPUT_MASK_VALUE_ACCESSOR]
})
export class CindyMask {
    value: string;
    @Input() mask: string;
    @Input() slotChar: string = '-';
    @Input() type: string = 'text';
}