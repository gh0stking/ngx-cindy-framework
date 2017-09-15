import { Component, Input, Output } from '@angular/core';

@Component({
    selector: 'c-button',
    template: `
        <button pButton 
            type="button" 
            icon="{{icon}}" 
            iconPos="{{iconPos}}" 
            label="{{label}}" 
            class="{{class}}" 
            [disabled]='disabled'>
        </button>
    `
})
export class CindyButton {
    @Input() label: string;
    @Input() icon: string;
    @Input() iconPos: string = 'left';
    @Input() class: string;
    @Input() disabled: boolean;
}