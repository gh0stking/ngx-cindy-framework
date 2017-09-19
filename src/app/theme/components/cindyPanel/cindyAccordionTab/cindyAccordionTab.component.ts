import { Component, Input } from '@angular/core';

@Component({
    selector: 'c-accordionTab',
    template: `
        <p-accordionTab 
            [header]="header"
            [selected]="selected"
            [disabled]="disabled">
            <ng-content></ng-content>
        </p-accordionTab>
    `
})
export class CindyAccordionTab {
    @Input() header: string;
    @Input() selected: boolean = false;
    @Input() disabled: boolean = false;
}