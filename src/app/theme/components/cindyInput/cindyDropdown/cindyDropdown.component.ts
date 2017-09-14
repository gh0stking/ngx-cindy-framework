import { Component, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_DROPDOWN_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CindyDropdown),
    multi: true
};

@Component({
    selector: 'c-dropdown',
    template: `
        <p-dropdown [options]="options" [(ngModel)]="selectedValue" [filter]="filter" (onChange)="onChangeEvent()" filterBy='{{filterBy}}'>
            <ng-content></ng-content>
        </p-dropdown>`,
    providers: [CUSTOM_DROPDOWN_VALUE_ACCESSOR]
})
export class CindyDropdown {
    @Input() options: Array<any> = null;
    @Input() filter: boolean = false;
    @Input() filterBy: string;
    @Output() onChange: EventEmitter<any> = new EventEmitter();
    selectedValue: string;

    onChangeEvent() {
        this.onChange.emit();
    }
}