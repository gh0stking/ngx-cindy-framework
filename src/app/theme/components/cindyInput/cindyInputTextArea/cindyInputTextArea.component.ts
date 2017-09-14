import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CINDY_INPUT_TEXTAREA_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CindyInputTextArea),
    multi: true
};

@Component({
    selector: 'c-inputTextArea',
    template: `<textarea [rows]="rows" [cols]="cols" pInputTextarea autoResize="{{autoResize}}" [(ngModel)]='value'></textarea>`,
    providers: [CINDY_INPUT_TEXTAREA_VALUE_ACCESSOR]
})
export class CindyInputTextArea {
    @Input() rows: number = 5;
    @Input() cols: number = 30;
    @Input() autoResize: boolean = false;
    @Output() onResize: EventEmitter<any> = new EventEmitter();
    value: string;

    onResizeEvent() {
        this.onResize.emit();
    }
}