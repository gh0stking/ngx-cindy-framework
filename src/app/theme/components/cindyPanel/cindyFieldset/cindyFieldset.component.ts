import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'c-fieldset',
    template: `
        <p-fieldset 
            [legend]="legend" 
            [toggleable]="toggleable"
            [collapsed]="collapsed"
            [style]="style"
            [styleClass]="styleClass"
            (onBeforeToggle)="onBeforeToggleEvent()"
            (onAfterToggle)="onAfterToggleEvent()">
            <ng-content></ng-content>
        </p-fieldset>
    `
})
export class CindyFieldset {
    @Input() legend: string;
    @Input() toggleable: boolean = false;
    @Input() collapsed: boolean = false;
    @Input() style: string;
    @Input() styleClass: string;

    @Output() onBeforeToggle: EventEmitter<any> = new EventEmitter();
    @Output() onAfterToggle: EventEmitter<any> = new EventEmitter();

    onBeforeToggleEvent() {
        this.onBeforeToggle.emit();
    }

    onAfterToggleEvent() {
        this.onAfterToggle.emit();
    }
}