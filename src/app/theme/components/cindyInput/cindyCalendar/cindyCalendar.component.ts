import { Component, Input, Output, EventEmitter, ViewChild, Optional, Inject, ContentChild } from '@angular/core';
import { ElementBase } from '../../common/form';
import { CindyHeader, CindyFooter } from '../../common/shared';

import {
    NgModel,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    NG_ASYNC_VALIDATORS,
} from '@angular/forms';

@Component({
    selector: 'c-calendar',
    template: `
        <p-calendar 
            [defaultDate]="defaultDate"
            [selectionMode]="selectionMode"
            [style]="style"
            [styleClass]="styleClass"
            [inputStyle]="inputStyle"
            [inputStyleClass]="inputStyleClass"
            [inputId]="inputId"
            [name]="name"
            [placeholder]="placeholder"
            [disabled]="disabled"
            [dateFormat]="dateFormat"
            [inline]="inline"
            [showOtherMonths]="showOtherMonths"
            [selectOtherMonths]="selectOtherMonths"
            [showIcon]="showIcon"
            [showOnFocus]="showOnFocus"
            [appendTo]="appendTo"
            [readonlyInput]="readonlyInput"
            [shortYearCutoff]="shortYearCutoff"
            [minDate]="minDate"
            [maxDate]="maxDate"
            [disabledDates]="disabledDates"
            [disabledDays]="disabledDays"
            [monthNavigator]="monthNavigator"
            [yearNavigator]="yearNavigator"
            [yearRange]="yearRange"
            [showTime]="showTime"
            [hourFormat]="hourFormat"
            [timeOnly]="timeOnly"
            [dataType]="dataType"
            [required]="required"
            [tabindex]="tabindex"
            [showSeconds]="showSeconds"
            [stepHour]="stepHour"
            [stepMinute]="stepMinute"
            [stepSecond]="stepSecond"
            [utc]="utc"
            [maxDateCount]="maxDateCount"
            [showButtonBar]="showButtonBar"
            [todayButtonStyleClass]="todayButtonStyleClass"
            [clearButtonStyleClass]="clearButtonStyleClass"
            (onSelect)="onSelectEvent($event)"
            (onBlur)="onBlurEvent($event)"
            (onFocus)="onFocusEvent($event)"
            (onClose)="onCloseEvent($event)"
            (onInput)="onInputEvent($event)"
            (onTodayClick)="onTodayClickEvent($event)"
            (onClearClick)="onClearClickEvent($event)"
            [(ngModel)]="val">
            <p-header *ngIf='header'>
                <ng-content select="p-header"></ng-content>
            </p-header>
            <ng-content></ng-content>
            <p-footer *ngIf='footer'>
                <ng-content select="p-footer"></ng-content>
            </p-footer>
        </p-calendar>
    `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: CindyCalendar,
        multi: true
    }]
})
export class CindyCalendar extends ElementBase<string>{
    @ContentChild(CindyHeader) header: CindyHeader;
    @ContentChild(CindyFooter) footer: CindyFooter;
    
    @Input() defaultDate: Date;
    @Input() selectionMode: string = "single";
    @Input() style: string;
    @Input() styleClass: string;
    @Input() inputStyle: string;
    @Input() inputStyleClass: string;
    @Input() inputId: string;
    @Input() name: string;
    @Input() placeholder: string;
    @Input() disabled: boolean;
    @Input() dateFormat: string = "mm/dd/yy";
    @Input() inline: boolean;
    @Input() showOtherMonths: boolean = true;
    @Input() selectOtherMonths: boolean;
    @Input() showIcon: boolean;
    @Input() showOnFocus: boolean = true;
    @Input() icon: string = "fa-calendar";
    @Input() appendTo: any;
    @Input() readonlyInput: boolean;
    @Input() shortYearCutoff: string = "+10";
    @Input() minDate: Date;
    @Input() maxDate: Date;
    @Input() disabledDates: Array<Date>;
    @Input() disabledDays: Array<number>;
    @Input() monthNavigator: boolean;
    @Input() yearNavigator: boolean;
    @Input() yearRange: string;
    @Input() showTime: boolean;
    @Input() hourFormat: string = "24";
    @Input() locale: any;
    @Input() timeOnly: boolean;
    @Input() dataType: string = "date";
    @Input() required: boolean;
    @Input() tabindex: number;
    @Input() showSeconds: boolean;
    @Input() stepHour: number = 1;
    @Input() stepMinute: number = 1;
    @Input() stepSecond: number = 1;
    @Input() utc: boolean;
    @Input() maxDateCount: number;
    @Input() showButtonBar: boolean;
    @Input() todayButtonStyleClass: string = "ui-secondary-button";
    @Input() clearButtonStyleClass: string = "ui-secondary-button";

    @Output() onSelect: EventEmitter<any> = new EventEmitter();
    @Output() onBlur: EventEmitter<any> = new EventEmitter();
    @Output() onFocus: EventEmitter<any> = new EventEmitter();
    @Output() onClose: EventEmitter<any> = new EventEmitter();
    @Output() onInput: EventEmitter<any> = new EventEmitter();
    @Output() onTodayClick: EventEmitter<any> = new EventEmitter();
    @Output() onClearClick: EventEmitter<any> = new EventEmitter();

    onSelectEvent(event) {
        this.onSelect.emit(event);
    }

    onBlurEvent(event) {
        this.onBlur.emit(event);
    }

    onFocusEvent(event) {
        this.onFocus.emit(event);
    }

    onCloseEvent(event) {
        this.onClose.emit(event);
    }

    onInputEvent(event) {
        this.onInput.emit(event);
    }

    onTodayClickEvent(event) {
        this.onTodayClick.emit(event);
    }

    onClearClickEvent(event) {
        this.onClearClick.emit(event);
    }

    @ViewChild(NgModel) model: NgModel;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
    }
}