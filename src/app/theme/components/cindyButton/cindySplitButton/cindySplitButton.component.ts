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
            (onClick)='onClickEvent()'>
        </p-splitButton>
    `
})
export class CindySplitButton {
    @Input() label: string;
    @Input() icon: string;
    @Input() model: MenuItem[];
    @Input() styleClass: string;
    @Output() onClick: EventEmitter<any> = new EventEmitter();

    onClickEvent() {
        this.onClick.emit();
    }

}