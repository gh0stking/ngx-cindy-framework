import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
    selector: 'c-contextMenu',
    template: `
        <p-contextMenu 
            [model]="model"
            [global]="true" 
            [target]="target"
            [style]="style"
            [styleClass]="styleClass"
            [appendTo]="appendTo">
        </p-contextMenu>
    `
})
export class CindyContextMenu {
    @Input() model: Array<MenuItem>;
    @Input() global: boolean = false;
    @Input() target: string;
    @Input() style: string;
    @Input() styleClass: string;
    @Input() appendTo: string;
}