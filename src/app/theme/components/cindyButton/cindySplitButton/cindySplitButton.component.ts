import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../../common/menuitem';

@Component({
    selector: 'c-splitButton',
    template: `
        <p-splitButton 
            label="{{label}}" 
            icon="{{icon}}" 
            [model]="model" 
            styleClass="{{styleClass}}" 
            (onClick)='onClickEvent($event)'
            (onDropdownClick)='onDropdownClickEvent($event)'>
        </p-splitButton>
    `
})
export class CindySplitButton {
    @Input() label: string;
    @Input() icon: string;
    @Input() model: MenuItem[];
    @Input() styleClass: string;
    @Output() onClick: EventEmitter<any> = new EventEmitter();
    @Output() onDropdownClick: EventEmitter<any> = new EventEmitter();

    onClickEvent(event) {
        this.onClick.emit(event);
    }

    onDropdownClickEvent(event) {
        this.onDropdownClick.emit(event);
    }

}